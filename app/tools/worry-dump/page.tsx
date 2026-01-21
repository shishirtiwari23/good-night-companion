"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function WorryDumpPage() {
  const [worryText, setWorryText] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleParkThoughts = () => {
    if (!worryText.trim()) return;
    setIsSubmitted(true);
    // In a real app, you might save this to local storage or a DB here.
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-6 relative">
      <div className="card-container w-full max-w-2xl relative min-h-[60vh] flex flex-col">
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

        {/* Header */}
        <div
          className={`text-center space-y-2 mb-8 mt-4 transition-all duration-700 ${isSubmitted ? "opacity-0 translate-y-[-20px]" : "opacity-100"}`}
        >
          <p className="overline-text opacity-60">The Good Night Companion</p>
          <h1 className="text-3xl md:text-4xl font-serif text-[var(--text-primary)]">
            The Worry Dump
          </h1>
          <p className="text-[10px] font-bold tracking-widest uppercase text-[var(--text-secondary)] mt-2">
            Constructive Worry Tool
          </p>
        </div>

        {/* Content Area */}
        <div className="flex-grow flex flex-col justify-center relative">
          {!isSubmitted ? (
            <div className="space-y-6 animate-in fade-in duration-500">
              <div className="relative">
                <textarea
                  className="w-full h-64 p-6 bg-[#F8F6F2] rounded-xl border border-transparent focus:border-[var(--primary)] focus:outline-none text-lg text-[var(--text-primary)] font-serif resize-none leading-relaxed placeholder:text-[var(--text-secondary)] placeholder:opacity-40"
                  placeholder="What is on your mind? List your tasks, worries, or racing thoughts here. Get them out of your head and onto the screen."
                  value={worryText}
                  onChange={(e) => setWorryText(e.target.value)}
                  spellCheck={false}
                />
              </div>

              <div className="text-center">
                <button
                  type="button"
                  onClick={handleParkThoughts}
                  disabled={!worryText.trim()}
                  className={`btn-primary max-w-xs mx-auto ${!worryText.trim() ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  Park Thoughts & Let Go
                </button>
                <p className="text-xs text-[var(--text-secondary)] mt-4 opacity-60">
                  Your thoughts will be safely stored until tomorrow.
                </p>
              </div>
            </div>
          ) : (
            // Success State: Calm Message
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-6 animate-in zoom-in-95 duration-1000">
              <div className="text-[#8da399] mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect
                    x="3"
                    y="11"
                    width="18"
                    height="11"
                    rx="2"
                    ry="2"
                  ></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <h2 className="text-3xl font-serif text-[var(--text-primary)]">
                Thoughts Parked.
              </h2>
              <p className="text-[var(--text-secondary)] max-w-md mx-auto leading-relaxed">
                Your worries are safe here. You don&apos;t need to carry them
                anymore tonight. <br />
                Trust that you can handle them tomorrow.
              </p>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setWorryText("");
                }}
                className="text-xs uppercase tracking-widest font-bold text-[var(--primary)] hover:text-[var(--primary-dark)] mt-8 underline underline-offset-4 decoration-1"
              >
                Write New Entry
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
