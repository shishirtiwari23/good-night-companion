"use client";

import React from "react";
import Link from "next/link";

export default function JourneyPage() {
  return (
    <main className="min-h-screen flex justify-center p-6 md:p-12 pb-24 relative bg-[var(--background)]">
      {/* Navigation */}
      <div className="absolute top-8 right-8 z-50">
        <Link
          href="/"
          aria-label="Return to Home"
          className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors block p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </Link>
      </div>

      <div className="max-w-3xl w-full space-y-12 animate-in fade-in duration-700 flex flex-col justify-center min-h-[60vh]">
        {/* --- HERO SECTION: BOOK FOCUS --- */}
        <header className="text-center space-y-8 mt-8 md:mt-0">
          <p className="overline-text opacity-60 tracking-[0.2em]">
            The 90-Day Protocol
          </p>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-serif text-[var(--text-primary)] leading-tight">
              The Field Guide <br /> to Recovery
            </h1>
            <p className="text-lg md:text-xl text-[var(--text-primary)] font-serif italic opacity-80">
              &quot;You do not need to fix it all tonight.{" "}
              <br className="hidden md:block" /> You just need to turn the
              page.&quot;
            </p>
          </div>

          <div className="max-w-xl mx-auto space-y-8 pt-4">
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed text-sm md:text-base">
              <p>
                This digital dashboard is your toolkit—it tracks your data and
                calculates your efficiency. But{" "}
                <strong>The Good Night Companion</strong> book is your coach.
              </p>
              <p>
                It contains the complete 90-day CBT-I curriculum, the daily
                lessons, the &quot;why&quot; behind every protocol, and the
                compassionate voice you need when the nights get hard.
              </p>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col items-center justify-center gap-6 pt-6">
              {/* Primary: Amazon Affiliate Link */}
              <a
                href="https://www.amazon.com/dp/YOUR_BOOK_ID?tag=YOUR_TAG"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full md:w-auto px-10 py-5 flex items-center justify-center gap-3 group text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
              >
                <span>Get the Book</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </a>

              {/* Secondary: Understand the Science */}
              <Link
                href="/understand"
                className="text-xs uppercase font-bold tracking-widest text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors border-b border-transparent hover:border-[var(--primary)] pb-1"
              >
                Read the Science First
              </Link>
            </div>
          </div>
        </header>

        {/* --- MEDICAL DISCLAIMER SECTION --- */}
        <div className="w-full max-w-2xl mx-auto z-10 pt-12 pb-8 px-4 md:px-0">
          <div className="bg-[#EBE9E1]/50 border border-[#8da399]/20 rounded-2xl p-6 md:p-8 text-xs text-[var(--text-secondary)] space-y-4 text-left">
            <p className="font-bold text-[var(--text-primary)] uppercase tracking-widest text-[11px] mb-4 pb-3 border-b border-[#8da399]/20">
              Medical Disclaimer & Safety Warning
            </p>

            <div>
              <span className="font-bold text-[var(--text-primary)]">Educational Purposes Only:</span> This program is grounded in the evidence-based principles of Cognitive Behavioral Therapy for Insomnia (CBT-I). This book is intended as a supportive educational resource and does not constitute medical advice, diagnosis, or clinical therapy. It is not a substitute for the personalized care of a healthcare professional.
            </div>

            <div>
              <span className="font-bold text-[var(--text-primary)] block mb-1">Sleep Restriction Therapy Safety Warning:</span>
              This program utilizes Sleep Restriction Therapy (SRT). This technique is NOT recommended for individuals with:
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Bipolar Disorder (may trigger manic/hypomanic episodes).</li>
                <li>Seizure Disorders / Epilepsy (sleep deprivation lowers the seizure threshold).</li>
                <li>Untreated Sleep Apnea or other respiratory conditions.</li>
                <li>Recent surgery or major physical illness.</li>
              </ul>
            </div>

            <div>
              <span className="font-bold text-[var(--text-primary)]">Occupational & Physical Safety:</span> SRT causes temporary daytime sleepiness. Use extreme caution when driving or operating heavy machinery during the first three weeks of this program. This program may not be appropriate for individuals in safety-sensitive occupations, such as transportation, construction, or healthcare.
            </div>

            <div className="pt-3 border-t border-[#8da399]/20 font-medium italic">
              If you are navigating severe mental health challenges or suspect an underlying sleep disorder, consult a qualified healthcare provider before beginning. By using this journal, you assume all risks associated with the behavioral changes described herein.
            </div>
          </div>
        </div>

        {/* --- ROADMAP (COMMENTED OUT FOR NOW) ---
          
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--primary)]/20 to-transparent"></div>

        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-8 md:before:ml-[2.25rem] before:-translate-x-px md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[var(--primary)] before:via-[var(--primary)]/30 before:to-transparent before:z-0">
          
          <div className="relative z-10 pl-20 md:pl-24 py-2 group">
            <div className="absolute left-2 md:left-4 top-8 w-12 h-12 bg-[#F2F0E9] border-2 border-[var(--primary)] rounded-full flex items-center justify-center text-[var(--primary)] shadow-[0_0_0_8px_#F2F0E9]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M5 21V7l8-4 8 4v14"/><path d="M9 10a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2"/></svg>
            </div>
            <div className="card-container border-[var(--primary)]/30 hover:border-[var(--primary)] transition-colors cursor-pointer relative overflow-hidden">
               <div className="absolute top-0 right-0 bg-[var(--primary)] text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-bl-xl">Phase 1</div>
               <div className="space-y-4">
                 <div>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-[#8da399]">MODULE 1 (DAYS 1-30)</p>
                    <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-1">Foundations</h2>
                 </div>
                 <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-lg">The stabilization phase. Learn to observe your data, establish your Anchor Time, and stop the panic cycle.</p>
               </div>
            </div>
          </div>

          <div className="relative z-10 pl-20 md:pl-24 py-2 opacity-60 grayscale-[0.5]">
            <div className="absolute left-2 md:left-4 top-8 w-12 h-12 bg-[#F2F0E9] border-2 border-gray-200 rounded-full flex items-center justify-center text-gray-300 shadow-[0_0_0_8px_#F2F0E9]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            </div>
            <div className="card-container bg-gray-50/50 border-transparent">
               <div className="space-y-4">
                 <div>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400">MODULE 2 (DAYS 31-60)</p>
                    <h2 className="text-2xl font-serif text-gray-500 mt-1">Deepening</h2>
                 </div>
                 <p className="text-sm text-gray-400 leading-relaxed max-w-lg">The optimization phase. Unlocked after 30 days. We use the Titration Protocol to condense your sleep window.</p>
               </div>
            </div>
          </div>

          <div className="relative z-10 pl-20 md:pl-24 py-2 opacity-60 grayscale-[0.5]">
            <div className="absolute left-2 md:left-4 top-8 w-12 h-12 bg-[#F2F0E9] border-2 border-gray-200 rounded-full flex items-center justify-center text-gray-300 shadow-[0_0_0_8px_#F2F0E9]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            </div>
            <div className="card-container bg-gray-50/50 border-transparent">
               <div className="space-y-4">
                 <div>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400">MODULE 3 (DAYS 61-90)</p>
                    <h2 className="text-2xl font-serif text-gray-500 mt-1">Sustaining</h2>
                 </div>
                 <p className="text-sm text-gray-400 leading-relaxed max-w-lg">The graduation phase. Unlocked after Day 60. We remove the scaffolding and return you to natural sleep.</p>
               </div>
            </div>
          </div>
        </div>
        */}
      </div>
    </main>
  );
}
