import os

articles_dir = os.path.join(os.path.dirname(__file__), '../app/articles')

def update_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Update main container padding
    original_main = 'p-6 md:p-24'
    replacement_main = 'p-4 md:p-12'
    
    if original_main in content:
        content = content.replace(original_main, replacement_main)
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated Main Padding: {file_path}")

for root, _, files in os.walk(articles_dir):
    for file in files:
        if file.endswith('page.tsx'):
            update_file(os.path.join(root, file))

print("Done!")
