import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles | The Good Night Companion",
  description: "Science-backed insights and strategies for fixing insomnia.",
};

const articles = [
  {
    title: "Why Going to Bed Early is Making Your Insomnia Worse",
    description: "If you are battling chronic insomnia, going to bed early is actually a physiological trap. Here is the science behind why, and the counterintuitive steps to fix it.",
    slug: "why-going-to-bed-early-is-making-your-insomnia-worse",
  },
  {
    title: "The 20-Minute Rule: Why Getting Out of Bed is the Key to Fixing Insomnia",
    description: "Staying in bed when you are wide awake is one of the worst things you can do. Learn how to use the 20-Minute Contingency Plan to break the cycle.",
    slug: "the-20-minute-rule",
  }
];

export default function ArticlesPage() {
  return (
    <main className="min-h-screen flex flex-col items-center p-6 md:p-24 relative overflow-hidden bg-[var(--background)]">
      
      {/* Navigation */}
      <div className="w-full max-w-4xl z-10 mb-12">
        <Link 
          href="/" 
          className="inline-flex items-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm font-bold uppercase tracking-widest"
        >
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
            className="mr-2"
          >
            <path d="m15 18-6-6 6-6"/>
          </svg>
          Back to Home
        </Link>
      </div>

      <div className="w-full max-w-4xl z-10 text-center mb-16 space-y-4">
        <h1 className="text-4xl md:text-5xl font-serif text-[var(--text-primary)]">
          Articles
        </h1>
        <p className="text-[var(--text-secondary)] text-base md:text-lg max-w-2xl mx-auto font-sans">
          Insights, science, and practical strategies to help you rebuild your sleep architecture and trust your bed again.
        </p>
      </div>

      <div className="w-full max-w-4xl z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <Link href={`/articles/${article.slug}`} key={article.slug} className="block group h-full">
            <div className="card-container flex flex-col h-full items-start text-left p-8 hover:-translate-y-2 hover:shadow-md transition-all duration-500 cursor-pointer">
              <h2 className="font-serif text-2xl text-[var(--text-primary)] mb-4 group-hover:text-[var(--primary-dark)] transition-colors">
                {article.title}
              </h2>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 flex-grow">
                {article.description}
              </p>
              <div className="text-[var(--primary)] text-xs font-bold uppercase tracking-widest flex items-center">
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
        ))}
      </div>
      
    </main>
  );
}
