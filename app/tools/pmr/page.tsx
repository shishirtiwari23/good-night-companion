"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

// The sequence of muscle groups for a 5-minute session
const STEPS = [
  { id: 1, label: "Hands & Wrists", instruction: "Clench your fists tight." },
  {
    id: 2,
    label: "Arms & Shoulders",
    instruction: "Pull shoulders up to ears.",
  },
  { id: 3, label: "Face & Jaw", instruction: "Scrunch face, clench jaw." },
  { id: 4, label: "Stomach & Chest", instruction: "Squeeze abs, hold breath." },
  { id: 5, label: "Legs & Feet", instruction: "Curl toes, flex thighs." },
  { id: 6, label: "Full Body", instruction: "Tense everything at once." },
];

export default function PMRPage() {
  const [isActive, setIsActive] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [phase, setPhase] = useState<"prepare" | "tense" | "release">(
    "prepare",
  );
  const [timer, setTimer] = useState(0);

  // Configuration (in seconds)
  const TENSE_DURATION = 5;
  const RELEASE_DURATION = 10;
  const PREPARE_DURATION = 3;

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev > 1) return prev - 1;

          // Timer hit 0, switch phases
          handlePhaseSwitch();
          return 0; // Reset will happen in handlePhaseSwitch
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, phase, timer]);

  const handlePhaseSwitch = () => {
    if (phase === "prepare") {
      setPhase("tense");
      setTimer(TENSE_DURATION);
    } else if (phase === "tense") {
      setPhase("release");
      setTimer(RELEASE_DURATION);
    } else if (phase === "release") {
      // Move to next step or finish
      if (currentStepIndex < STEPS.length - 1) {
        setCurrentStepIndex((prev) => prev + 1);
        setPhase("prepare");
        setTimer(PREPARE_DURATION);
      } else {
        setIsActive(false); // Done
        setPhase("prepare"); // Reset for next time
        setCurrentStepIndex(0);
      }
    }
  };

  const startSession = () => {
    setIsActive(true);
    setCurrentStepIndex(0);
    setPhase("prepare");
    setTimer(PREPARE_DURATION);
  };

  const stopSession = () => {
    setIsActive(false);
    setPhase("prepare");
    setTimer(0);
  };

  const currentStep = STEPS[currentStepIndex];

  return (
    <main className="min-h-screen flex items-center justify-center p-6 relative">
      <div className="card-container w-full max-w-lg text-center relative min-h-[500px] flex flex-col justify-center">
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

        {!isActive ? (
          // --- IDLE STATE ---
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="space-y-2">
              <p className="overline-text opacity-60">
                The Good Night Companion
              </p>
              <h1 className="text-3xl md:text-4xl font-serif text-[var(--text-primary)]">
                Unwind Your Body
              </h1>
              <p className="text-[10px] font-bold tracking-widest uppercase text-[var(--text-secondary)] mt-2">
                Progressive Muscle Relaxation
              </p>
            </div>

            <p className="text-[var(--text-secondary)] mb-8 font-sans text-sm md:text-base max-w-sm mx-auto">
              We will tense specific muscle groups for 5 seconds, then release
              for 10. This signals your nervous system to drop into &quot;rest
              and digest&quot; mode.
            </p>

            <button
              onClick={startSession}
              className="btn-primary max-w-xs mx-auto"
            >
              Start Session
            </button>
          </div>
        ) : (
          // --- ACTIVE SESSION STATE ---
          <div className="space-y-10 animate-in zoom-in-95 duration-500">
            {/* Phase Indicator */}
            <div className="uppercase tracking-[0.2em] text-xs font-bold text-[var(--primary)]">
              {phase === "prepare" && "Get Ready"}
              {phase === "tense" && "TENSE"}
              {phase === "release" && "RELEASE & RELAX"}
            </div>

            {/* Main Instruction */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif text-[var(--text-primary)] transition-all duration-300">
                {phase === "release" ? "Let it go." : currentStep.label}
              </h2>
              <p
                className={`text-lg text-[var(--text-secondary)] transition-opacity duration-300 ${phase === "release" ? "opacity-0" : "opacity-100"}`}
              >
                {currentStep.instruction}
              </p>
            </div>

            {/* Timer Visual */}
            <div className="relative w-32 h-32 mx-auto flex items-center justify-center">
              {/* Outer Ring */}
              <div className="absolute inset-0 border-4 border-[#F2F0E9] rounded-full"></div>
              {/* Timer Text */}
              <span className="text-4xl font-serif text-[var(--text-primary)] relative z-10">
                {timer}
              </span>
              {/* Animated Ring (Optional simple CSS scale for heartbeat effect during TENSE) */}
              {phase === "tense" && (
                <div className="absolute inset-0 bg-[#8da399]/10 rounded-full animate-ping"></div>
              )}
            </div>

            <button
              onClick={stopSession}
              className="text-xs uppercase tracking-widest text-[var(--text-secondary)] hover:text-red-400 transition-colors mt-8"
            >
              End Session
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
