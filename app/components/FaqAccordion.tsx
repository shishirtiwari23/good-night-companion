'use client';
import React, { useState, useRef, useEffect } from 'react';

type FAQ = {
  question: string;
  answer: string | React.ReactNode;
};

type FaqAccordionProps = {
  faqs: FAQ[];
  title?: string;
};

const AccordionItem = ({ faq }: { faq: FAQ }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(
    isOpen ? undefined : 0
  );

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current?.getBoundingClientRect().height);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="border-b border-[var(--text-secondary)]/20 last:border-0 group">
      <button
        type="button"
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-lg text-ink pr-8 group-hover:text-[var(--primary)] transition-colors">
          {faq.question}
        </span>
        <div 
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
            isOpen 
              ? 'bg-sage-dark text-white border-[var(--primary)] text-white rotate-180' 
              : 'border-[var(--text-secondary)]/30 text-ink-2 group-hover:border-[var(--primary)] group-hover:text-[var(--primary)]'
          }`}
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
          >
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </div>
      </button>
      <div 
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ height }}
      >
        <div ref={contentRef} className="pb-6 text-ink-2 leading-relaxed font-sans text-base">
          {faq.answer}
        </div>
      </div>
    </div>
  );
};

export default function FaqAccordion({ faqs, title = "FAQs: People Also Ask" }: FaqAccordionProps) {
  if (!faqs || faqs.length === 0) return null;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": typeof faq.answer === "string" ? faq.answer : "Please review the article for more details.",
      },
    })),
  };

  return (
    <div className="mt-16 w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <hr className="mb-12 border-rule" />
      <h2 className="text-2xl font-serif font-medium text-ink mb-8">
        {title}
      </h2>
      <div className="bg-cream rounded-[1.5rem] shadow-[rgba(0,0,0,0.02)_0px_8px_24px] border border-rule px-8 py-2">
        {faqs.map((faq, idx) => (
          <AccordionItem key={idx} faq={faq} />
        ))}
      </div>
    </div>
  );
}
