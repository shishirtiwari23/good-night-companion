import os
import re

articles_dir = os.path.join(os.path.dirname(__file__), '../app/articles')

def audit_articles():
    if not os.path.exists(articles_dir):
        print(f"Directory {articles_dir} not found.")
        return

    articles = [d for d in os.listdir(articles_dir) if os.path.isdir(os.path.join(articles_dir, d))]
    
    issues = {}

    for article in articles:
        page_path = os.path.join(articles_dir, article, 'page.tsx')
        if not os.path.exists(page_path):
            continue
            
        with open(page_path, 'r', encoding='utf-8') as f:
            content = f.read()

        article_issues = []

        # Check article container class
        article_match = re.search(r'<article\s+className="([^"]+)"', content)
        if article_match:
            classes = article_match.group(1)
            if 'bg-cream-2' in classes:
                article_issues.append("Uses bg-cream-2 instead of bg-cream for main container.")
            if 'border-rule' in classes and 'border' in classes.split():
                article_issues.append("Uses harsh border (border-rule) on main container.")
            if 'shadow-[rgba(0,0,0,0.03)_0px_10px_30px]' not in classes and 'shadow-sm' not in classes:
                article_issues.append("Missing standard shadow on main container.")
            if 'p-6 md:p-12' not in classes:
                 article_issues.append("Padding differs from standard 'p-6 md:p-12'.")
        else:
            article_issues.append("Could not find main <article> tag.")

        # Check H1 typography
        h1_match = re.search(r'<h1\s+className="([^"]+)"', content)
        if h1_match:
            h1_classes = h1_match.group(1)
            if 'font-cormorant' not in h1_classes:
                article_issues.append("H1 does not use font-cormorant.")
        
        # Check Back to Articles Link typography
        back_link_match = re.search(r'Back to Articles', content)
        if not back_link_match:
            article_issues.append("Missing 'Back to Articles' link.")
            
        # Check Quick Answer Box
        qa_match = re.search(r'>\s*Quick Answer\s*<', content, re.IGNORECASE)
        if qa_match:
            qa_div_match = re.search(r'<div\s+className="([^"]*(?:bg-\[#f9f8f6\]|bg-cream)[^"]*)"[^>]*>[\s\S]*?>\s*Quick Answer\s*<', content, re.IGNORECASE)
            if qa_div_match:
                qa_classes = qa_div_match.group(1)
                # Just log the classes so we can compare
                article_issues.append(f"Quick Answer uses classes: {qa_classes}")
            else:
                article_issues.append("Has Quick Answer but couldn't parse wrapper.")
        
        if article_issues:
            issues[article] = article_issues

    print("Audit Results:")
    for article, problem_list in issues.items():
        print(f"\n[{article}]")
        for problem in problem_list:
            print(f"  - {problem}")

if __name__ == "__main__":
    audit_articles()
