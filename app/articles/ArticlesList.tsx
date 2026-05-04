'use client';
import React, { useState } from 'react';
import Link from 'next/link';

type Article = {
  title: string;
  description: string;
  slug: string;
};

type ArticlesListProps = {
  articles: Article[];
};

export default function ArticlesList({ articles }: ArticlesListProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = articles.filter(article => {
    const query = searchQuery.toLowerCase();
    return (
      article.title.toLowerCase().includes(query) ||
      article.description.toLowerCase().includes(query)
    );
  });

  return (
    <div className="w-full max-w-4xl z-10 flex flex-col gap-6">
      <div className="w-full relative mb-8">
        <input 
          type="text" 
          placeholder="Search articles by title or keyword..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-4 pl-12 rounded-[1rem] border border-[var(--text-secondary)]/20 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent text-ink transition-shadow"
        />
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-2/60"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <Link href={`/articles/${article.slug}`} key={article.slug} className="block group h-full">
              <div className="card-container flex flex-col h-full bg-cream items-start text-left p-8 rounded-[2rem] shadow-[rgba(0,0,0,0.03)_0px_10px_30px] hover:-translate-y-2 hover:shadow-md transition-all duration-500 cursor-pointer">
                <h2 className="font-serif font-medium text-2xl text-ink mb-4 group-hover:text-[var(--primary-dark)] transition-colors">
                  {article.title}
                </h2>
                <p className="text-sm text-ink-2 leading-relaxed mb-6 flex-grow">
                  {article.description}
                </p>
                <div className="text-[var(--primary)] text-xs font-bold uppercase tracking-[0.16em] flex items-center">
                  Read Article
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-1 md:col-span-2 text-center py-12 text-ink-2">
            <p>No articles found for &quot;{searchQuery}&quot;</p>
            <button 
              onClick={() => setSearchQuery('')}
              className="mt-4 text-[var(--primary)] hover:underline font-bold"
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
