"use client";

import React from "react";
import Link from "next/link";

export default function WorryDumpPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 relative bg-[var(--background)]">
      <div className="card-container w-full max-w-2xl relative min-h-[50vh] flex flex-col justify-center items-center text-center p-12">
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

        {/* Icon */}
        <div className="text-[#8da399] mb-8 bg-[#8da399]/10 p-6 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>

        {/* Header */}
        <div className="space-y-4 mb-8">
          <p className="overline-text opacity-60">The Good Night Companion</p>
          <h1 className="text-3xl md:text-4xl font-serif text-[var(--text-primary)]">
            Coming Soon
          </h1>
          <p className="text-[var(--text-secondary)] max-w-md mx-auto leading-relaxed">
            The <strong>Worry Dump</strong> tool is currently under development.{" "}
            <br />
            We are building a secure, private space for you to park your racing
            thoughts before bed.
          </p>
        </div>

        {/* Back Button */}
        <Link href="/">
          <button className="btn-primary px-8 py-3">Return Home</button>
        </Link>
      </div>
    </main>
  );
}
