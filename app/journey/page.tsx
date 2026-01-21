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
          title="Return to Home"
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

      <div className="max-w-3xl w-full space-y-16 animate-in fade-in duration-700">
        {/* Header */}
        <header className="text-center space-y-6 mt-12">
          <p className="overline-text opacity-60">Your 90-Day Path</p>
          <h1 className="text-4xl md:text-5xl font-serif text-[var(--text-primary)] leading-tight">
            The Road to Rest
          </h1>
          <p className="text-[var(--text-secondary)] max-w-lg mx-auto leading-relaxed">
            We don&apos;t fix everything tonight. We just take the next step.{" "}
            <br />
            You are currently on <strong>Day 1</strong>.
          </p>
        </header>

        {/* --- ROADMAP --- */}
        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-8 md:before:ml-[2.25rem] before:-translate-x-px md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[var(--primary)] before:via-[var(--primary)]/30 before:to-transparent before:z-0">
          {/* Module 1: ACTIVE */}
          <div className="relative z-10 pl-20 md:pl-24 py-2 group">
            {/* Timeline Dot (Active) */}
            <div className="absolute left-2 md:left-4 top-8 w-12 h-12 bg-[#F2F0E9] border-2 border-[var(--primary)] rounded-full flex items-center justify-center text-[var(--primary)] shadow-[0_0_0_8px_#F2F0E9]">
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
              >
                <path d="M3 21h18" />
                <path d="M5 21V7l8-4 8 4v14" />
                <path d="M9 10a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2" />
              </svg>
            </div>

            {/* Content Card */}
            <div className="card-container border-[var(--primary)]/30 hover:border-[var(--primary)] transition-colors cursor-pointer relative overflow-hidden">
              {/* "Current" Badge */}
              <div className="absolute top-0 right-0 bg-[var(--primary)] text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-bl-xl">
                Current Phase
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-[#8da399]">
                    MODULE 1 (DAYS 1-30)
                  </p>
                  <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-1">
                    Foundations
                  </h2>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-lg">
                  The stabilization phase. We will set your Anchor Time, start
                  your Sleep Log, and begin to understand your unique data.
                </p>

                <div className="pt-4">
                  <button className="btn-primary max-w-[200px] text-xs">
                    Start Day 1
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Module 2: LOCKED */}
          <div className="relative z-10 pl-20 md:pl-24 py-2 opacity-60 grayscale-[0.5]">
            {/* Timeline Dot (Locked) */}
            <div className="absolute left-2 md:left-4 top-8 w-12 h-12 bg-[#F2F0E9] border-2 border-gray-200 rounded-full flex items-center justify-center text-gray-300 shadow-[0_0_0_8px_#F2F0E9]">
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
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>

            <div className="card-container bg-gray-50/50 border-transparent">
              <div className="space-y-4">
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400">
                    MODULE 2 (DAYS 31-60)
                  </p>
                  <h2 className="text-2xl font-serif text-gray-500 mt-1">
                    Deepening
                  </h2>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed max-w-lg">
                  The optimization phase. Unlocked after 30 days of logs. We
                  will use the Titration Protocol to condense your sleep window.
                </p>
              </div>
            </div>
          </div>

          {/* Module 3: LOCKED */}
          <div className="relative z-10 pl-20 md:pl-24 py-2 opacity-60 grayscale-[0.5]">
            {/* Timeline Dot (Locked) */}
            <div className="absolute left-2 md:left-4 top-8 w-12 h-12 bg-[#F2F0E9] border-2 border-gray-200 rounded-full flex items-center justify-center text-gray-300 shadow-[0_0_0_8px_#F2F0E9]">
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
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>

            <div className="card-container bg-gray-50/50 border-transparent">
              <div className="space-y-4">
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400">
                    MODULE 3 (DAYS 61-90)
                  </p>
                  <h2 className="text-2xl font-serif text-gray-500 mt-1">
                    Sustaining
                  </h2>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed max-w-lg">
                  The graduation phase. Unlocked after Day 60. We will begin
                  removing the scaffolding and returning you to natural,
                  intuitive sleep.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-8">
          <p className="text-xs text-[var(--text-secondary)] opacity-50">
            Locked modules will open automatically as you progress.
          </p>
        </div>
      </div>
    </main>
  );
}
