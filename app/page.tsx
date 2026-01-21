import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center p-8 md:p-24 relative overflow-hidden">
      {/* --- HEADER SECTION --- */}
      <div className="text-center max-w-2xl mx-auto mb-20 space-y-6 z-10">
        <p className="overline-text opacity-70 tracking-[0.25em]">
          The Good Night Companion
        </p>

        <div className="space-y-4">
          <p className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-[#8da399]">
            A 90-Day CBT-I Program
          </p>
          <h1 className="text-5xl md:text-7xl font-serif text-[var(--text-primary)] leading-[1.1]">
            Call a Truce <br />
            <span className="opacity-85">With Your Sleep.</span>
          </h1>
        </div>

        <p className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed max-w-xl mx-auto font-sans pt-4">
          &quot;A therapeutic tool — a structured, yet flexible system designed
          to provide compassionate support that adapts to your real life. It is
          based on the most effective, science-backed principles of CBT-I for
          long-term insomnia recovery.&quot;
        </p>
      </div>

      {/* --- MAIN PATHWAYS (3 Cards) --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mb-32 z-10">
        {/* Card 1 */}
        <div className="card-container flex flex-col items-center text-center space-y-4 justify-center min-h-[200px] hover:-translate-y-2 hover:shadow-md transition-all duration-500 cursor-pointer">
          <div className="text-[#8da399]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
          </div>
          <h3 className="font-serif text-lg font-medium text-[var(--text-primary)]">
            Understand the Science
          </h3>
          <p className="text-xs text-[var(--text-secondary)]">
            Why this works when others failed.
          </p>
        </div>

        {/* Card 2 */}
        <div className="card-container flex flex-col items-center text-center space-y-4 justify-center min-h-[200px] hover:-translate-y-2 hover:shadow-md transition-all duration-500 cursor-pointer">
          <div className="text-[#8da399]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
          </div>
          <h3 className="font-serif text-lg font-medium text-[var(--text-primary)]">
            Join the Journey
          </h3>
          <p className="text-xs text-[var(--text-secondary)]">
            Get the full 90-day journal.
          </p>
        </div>

        {/* Card 3 (Linked) */}
        <Link href="/tools/recharge" className="block h-full group">
          <div className="card-container flex flex-col items-center text-center space-y-4 justify-center min-h-[200px] h-full hover:-translate-y-2 hover:shadow-md transition-all duration-500 cursor-pointer">
            <div className="text-[#8da399]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </div>
            <h3 className="font-serif text-lg font-medium text-[var(--text-primary)]">
              Practice Tools
            </h3>
            <p className="text-xs text-[var(--text-secondary)]">
              Access your digital toolkit.
            </p>
          </div>
        </Link>
      </div>

      {/* --- TOOLKIT SECTION --- */}
      <div className="w-full max-w-5xl z-10 mb-20">
        <div className="text-center mb-12 space-y-2">
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)]">
            Your Toolkit
          </h2>
          <p className="text-[var(--text-secondary)] text-sm">
            What do you need right now?
          </p>
        </div>

        {/* Grid matching Screenshot: 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 1. Wired & Tense */}
          <div className="card-container flex flex-col items-start text-left space-y-3 cursor-pointer h-full min-h-[220px] hover:-translate-y-2 hover:shadow-md transition-all duration-500">
            <div className="text-[#8da399] mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="5" r="1" />
                <path d="M9 20l-1-6 2-4h4l2 4-1 6" />
                <path d="M9 10h6" />
              </svg>
            </div>
            <h3 className="font-serif text-xl text-[var(--text-primary)]">
              I feel wired & tense
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Use <span className="font-bold">PMR (Clench & Release)</span>. A
              5-minute tool to manually release physical tension.
            </p>
          </div>

          {/* 2. Foggy & Depleted -> Linked to Recharge */}
          <Link href="/tools/recharge" className="block h-full">
            <div className="card-container flex flex-col items-start text-left space-y-3 cursor-pointer h-full min-h-[220px] hover:-translate-y-2 hover:shadow-md transition-all duration-500">
              <div className="text-[#8da399] mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17.5 19c0-1.7-1.3-3-3-3h-5c-1.7 0-3 1.3-3 3" />
                  <path d="M19 16c0-1.7-1.3-3-3-3h-5c-1.7 0-3 1.3-3 3" />
                  <path d="M17.5 19h-11" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-[var(--text-primary)]">
                I feel foggy & depleted
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Use <span className="font-bold">NSDR (Strategic Pause)</span>. A
                10-minute deep rest protocol to recharge energy.
              </p>
            </div>
          </Link>

          {/* 3. Track Progress */}
          <div className="card-container flex flex-col items-start text-left space-y-3 cursor-pointer h-full min-h-[220px] hover:-translate-y-2 hover:shadow-md transition-all duration-500">
            <div className="text-[#8da399] mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="4" y="2" width="16" height="20" rx="2" />
                <line x1="8" y1="6" x2="16" y2="6" />
                <line x1="16" y1="14" x2="16" y2="18" />
                <path d="M16 10h.01" />
                <path d="M12 10h.01" />
                <path d="M8 10h.01" />
                <path d="M12 14h.01" />
                <path d="M8 14h.01" />
                <path d="M12 18h.01" />
                <path d="M8 18h.01" />
              </svg>
            </div>
            <h3 className="font-serif text-xl text-[var(--text-primary)]">
              I need to track progress
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Use the{" "}
              <span className="font-bold">Sleep Efficiency Calculator</span>.
              Check your weekly data and adjust your window.
            </p>
          </div>

          {/* 4. Can't Stop Thinking (Starts on new row in grid) */}
          <div className="card-container flex flex-col items-start text-left space-y-3 cursor-pointer h-full min-h-[220px] hover:-translate-y-2 hover:shadow-md transition-all duration-500">
            <div className="text-[#8da399] mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                <path d="M12 11h.01" />
                <path d="M12 8v.01" />
              </svg>
            </div>
            <h3 className="font-serif text-xl text-[var(--text-primary)]">
              I can't stop thinking
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Use the <span className="font-bold">Worry Dump</span>. Park your
              racing thoughts so you can let them go for the night.
            </p>
          </div>
        </div>
      </div>

      {/* --- FOOTER --- */}
      <footer className="text-center text-[var(--text-secondary)] opacity-60 text-xs mt-auto py-8 font-sans">
        <p>
          © 2025 The Good Night Companion. Reclaiming rest, one night at a time.
        </p>
      </footer>
    </main>
  );
}
