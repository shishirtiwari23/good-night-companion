"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function RechargePage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const duration = 600; // 10 minutes in seconds

  // Simple timer effect for demonstration
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && progress < duration) {
      interval = setInterval(() => {
        setProgress((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, progress]);

  // Format seconds into MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="card-container w-full max-w-lg text-center relative">
        {/* Top Navigation / Home Icon */}
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

        {/* Header Content */}
        <div className="space-y-2 mb-10 mt-4">
          <p className="overline-text opacity-60">The Good Night Companion</p>
          <h1 className="text-3xl md:text-4xl font-serif text-[var(--text-primary)]">
            A 10-Minute Recharge
          </h1>
          <p className="text-[10px] font-bold tracking-widest uppercase text-[var(--text-secondary)] mt-2">
            Non Sleep Deep Rest
          </p>
        </div>

        {/* Description */}
        <p className="text-[var(--text-secondary)] mb-12 font-sans text-sm md:text-base">
          Rest your body. Clear your mind. <br />
          Save your sleep.
        </p>

        {/* Progress Bar */}
        <div className="mb-4 group cursor-pointer">
          <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-[var(--primary)] transition-all duration-1000 ease-linear"
              style={{ width: `${(progress / duration) * 100}%` }}
            />
          </div>
        </div>

        {/* Time Labels */}
        <div className="flex justify-between text-xs font-bold text-[var(--text-secondary)] mb-10 tracking-wider">
          <span>{formatTime(progress)}</span>
          <span>10:00</span>
        </div>

        {/* Player Controls */}
        <div className="flex items-center justify-center gap-8 mb-8">
          {/* Rewind 30s */}
          <button
            type="button"
            onClick={() => setProgress((p) => Math.max(0, p - 30))}
            aria-label="Rewind 30 seconds"
            title="Rewind 30 seconds"
            className="p-3 rounded-full hover:bg-gray-50 text-[var(--text-secondary)] transition-colors"
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
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
              <path d="M3 3v5h5" />
              <path d="M9 12h6" />
              <path d="M12 9v6" />
            </svg>
          </button>

          {/* Play/Pause Button - Big & Green */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-20 h-20 bg-[#8da399] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#7a8f86] hover:scale-105 active:scale-95 transition-all"
          >
            {isPlaying ? (
              // Pause Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="none"
              >
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              // Play Icon (Triangle)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="none"
              >
                <path d="M5 3l14 9-14 9V3z" />
              </svg>
            )}
          </button>

          {/* Forward 15s (Restart in screenshot, but skip is standard. We can swap icon easily) */}
          <button
            type="button"
            onClick={() => setProgress(0)}
            aria-label="Reset session"
            title="Reset session" // Reset for now to match screenshot "Replay" icon often used there
            className="p-3 rounded-full hover:bg-gray-50 text-[var(--text-secondary)] transition-colors"
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
              <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.85.99 6.74 2.74L21 8" />
              <path d="M21 3v5h-5" />
            </svg>
          </button>
        </div>

        {/* Footer Status */}
        <p className="text-xs text-[var(--text-secondary)]">
          {isPlaying ? "Session in progress..." : "10:00 remaining"}
        </p>
      </div>
    </main>
  );
}
