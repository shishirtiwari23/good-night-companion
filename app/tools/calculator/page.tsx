"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function CalculatorPage() {
  const [bedTime, setBedTime] = useState("23:00");
  const [wakeTime, setWakeTime] = useState("07:00");
  const [sleepHours, setSleepHours] = useState(6.5);
  const [result, setResult] = useState<{
    score: number;
    feedback: string;
  } | null>(null);

  // --- Helper: Pure function to calculate duration between two times ---
  const calculateDuration = (start: string, end: string) => {
    const [startH, startM] = start.split(":").map(Number);
    const [endH, endM] = end.split(":").map(Number);

    const startDate = new Date();
    startDate.setHours(startH, startM, 0);

    const endDate = new Date();
    endDate.setHours(endH, endM, 0);

    // If end time is earlier than start time, assume it's the next day
    if (endDate < startDate) {
      endDate.setDate(endDate.getDate() + 1);
    }

    const diffMs = endDate.getTime() - startDate.getTime();
    return diffMs / (1000 * 60 * 60); // Return hours
  };

  // Calculate current max window for display/slider limit
  const timeInBed = calculateDuration(bedTime, wakeTime);

  // --- Handlers: Update State & Clamp immediately ---

  const handleBedTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newBedTime = e.target.value;
    setBedTime(newBedTime);

    // Check if we need to clamp sleepHours immediately
    const newMax = calculateDuration(newBedTime, wakeTime);
    if (sleepHours > newMax) {
      setSleepHours(newMax);
    }
  };

  const handleWakeTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newWakeTime = e.target.value;
    setWakeTime(newWakeTime);

    // Check if we need to clamp sleepHours immediately
    const newMax = calculateDuration(bedTime, newWakeTime);
    if (sleepHours > newMax) {
      setSleepHours(newMax);
    }
  };

  const calculateEfficiency = () => {
    // Prevent division by zero
    const efficiency =
      timeInBed > 0 ? Math.round((sleepHours / timeInBed) * 100) : 0;

    let feedback = "";
    if (efficiency >= 90) {
      feedback =
        "Excellent. You are spending your time in bed actually sleeping. You may consider expanding your sleep window by 15 minutes.";
    } else if (efficiency >= 85) {
      feedback =
        "Good work. Your sleep is consolidated. Maintain this window until you consistently hit 90%.";
    } else {
      feedback =
        "Your sleep is fragmented. In CBT-I, we recommend restricting your time in bed to match your actual sleep time to build 'sleep pressure'.";
    }

    setResult({ score: efficiency, feedback });
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-6 relative">
      <div className="card-container w-full max-w-lg relative">
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
        <div className="text-center space-y-2 mb-10 mt-4">
          <p className="overline-text opacity-60">The Good Night Companion</p>
          <h1 className="text-3xl md:text-4xl font-serif text-[var(--text-primary)]">
            Sleep Efficiency
          </h1>
          <p className="text-[10px] font-bold tracking-widest uppercase text-[var(--text-secondary)] mt-2">
            Weekly Tracker
          </p>
        </div>

        {/* The Form */}
        <div className="space-y-6">
          {/* Input: Bed Time */}
          <div className="space-y-2">
            <label
              htmlFor="bedTime"
              className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]"
            >
              What time did you get into bed?
            </label>
            <input
              id="bedTime"
              type="time"
              aria-label="Bed time"
              value={bedTime}
              onChange={handleBedTimeChange}
              className="w-full p-4 bg-[#F8F6F2] rounded-xl border border-transparent focus:border-[var(--primary)] focus:outline-none text-lg text-[var(--text-primary)] font-serif"
            />
          </div>

          {/* Input: Wake Time */}
          <div className="space-y-2">
            <label
              htmlFor="wakeTime"
              className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]"
            >
              What time did you get out of bed?
            </label>
            <input
              id="wakeTime"
              type="time"
              aria-label="Wake time"
              value={wakeTime}
              onChange={handleWakeTimeChange}
              className="w-full p-4 bg-[#F8F6F2] rounded-xl border border-transparent focus:border-[var(--primary)] focus:outline-none text-lg text-[var(--text-primary)] font-serif"
            />
          </div>

          {/* Input: Hours Asleep (Dynamic Max Limit) */}
          <div className="space-y-2">
            <div className="flex justify-between items-baseline">
              <label
                htmlFor="sleepHours"
                className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]"
              >
                Approximate hours actually asleep?
              </label>
              <span className="text-[10px] text-[var(--text-secondary)] opacity-60">
                Max: {timeInBed.toFixed(1)}h
              </span>
            </div>

            <div className="flex items-center gap-4">
              <input
                id="sleepHours"
                type="range"
                min="0"
                max={timeInBed}
                step="0.25"
                value={sleepHours}
                aria-label="Sleep hours slider"
                title="Sleep hours"
                onChange={(e) => setSleepHours(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--primary)]"
              />
              <span className="text-xl font-serif text-[var(--text-primary)] w-16 text-right">
                {sleepHours}h
              </span>
            </div>
          </div>

          {/* Calculate Button */}
          <button
            type="button"
            onClick={calculateEfficiency}
            className="btn-primary mt-4"
          >
            Calculate Score
          </button>
        </div>

        {/* Results Card (Animated) */}
        {result && (
          <div className="mt-10 p-6 bg-[#F8F6F2] rounded-2xl border border-[var(--primary)]/20 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex justify-between items-end mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                Your Efficiency Score
              </span>
              <span className="text-5xl font-serif text-[var(--primary)]">
                {result.score}%
              </span>
            </div>
            <div className="h-px w-full bg-gray-200 mb-4"></div>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {result.feedback}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
