"use client";

import React from "react";
import Link from "next/link";

export default function UnderstandPage() {
  return (
    <main className="min-h-screen flex justify-center p-6 md:p-12 pb-24 relative bg-[var(--background)]">
      {/* Navigation (Back Button) */}
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

      <article className="max-w-4xl w-full space-y-20 animate-in fade-in duration-700">
        {/* --- HEADER --- */}
        <header className="space-y-8 mt-12 mb-16">
          <p className="overline-text opacity-60">NOT JUST ANOTHER SLEEP TIP</p>
          <h1 className="text-4xl md:text-5xl font-serif text-[var(--text-primary)] leading-tight">
            A System Built for Real Life
          </h1>
          <div className="space-y-6 text-lg text-[var(--text-secondary)] leading-relaxed font-sans max-w-3xl">
            <p>
              If you are here, you have likely tried the tea, the melatonin, the
              blue-light blockers, and the endless lists of &quot;sleep
              hygiene&quot; tips. You are likely frustrated because you are
              working hard to sleep, but it isn&apos;t working.
            </p>
            <p>
              You are not broken. You just haven&apos;t been given the right
              map.
            </p>
            <p>
              The Good Night Companion is not a collection of tips. It is a
              therapeutic system. It is a 90-day, CBT-I backed journey designed
              to retrain your brain, reset your biology, and—most
              importantly—fit into your actual, messy, real life.
            </p>
            <p className="text-[var(--primary-dark)] font-bold">
              Here is why this program works when others haven&apos;t.
            </p>
          </div>
        </header>

        {/* --- SECTION 1: SCIENCE --- */}
        <section className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-serif text-[var(--text-primary)]">
            1. It is Built on Gold-Standard Science (CBT-I)
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed max-w-3xl">
            We do not rely on folklore. This program is a structured application
            of Cognitive Behavioral Therapy for Insomnia (CBT-I), the first-line
            treatment recommended by sleep specialists worldwide. We address the
            four root causes of chronic insomnia:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Card 1: Physiology */}
            <div className="card-container flex flex-col items-start text-left space-y-3 h-full">
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
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-[var(--text-primary)]">
                Your Physiology
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                We use{" "}
                <span className="font-bold text-[var(--text-primary)]">
                  Anchor Times
                </span>{" "}
                to reset your Circadian Rhythm.
              </p>
            </div>

            {/* Card 2: Drive */}
            <div className="card-container flex flex-col items-start text-left space-y-3 h-full">
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
                  <rect x="6" y="2" width="12" height="20" rx="2" ry="2" />
                  <line x1="12" y1="6" x2="12" y2="6" />
                  <line x1="11" y1="2" x2="13" y2="2" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-[var(--text-primary)]">
                Your Drive
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                We use Sleep Restriction (Titration) to build massive, healthy{" "}
                <span className="font-bold text-[var(--text-primary)]">
                  Sleep Pressure
                </span>
                .
              </p>
            </div>

            {/* Card 3: Environment */}
            <div className="card-container flex flex-col items-start text-left space-y-3 h-full">
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
                  <path d="M2 20h20" />
                  <path d="M4 20v-5a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v5" />
                  <path d="M4 11h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-[var(--text-primary)]">
                Your Environment
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                We use Stimulus Control to break the &quot;Bed =
                Battlefield&quot; association.
              </p>
            </div>

            {/* Card 4: Mind */}
            <div className="card-container flex flex-col items-start text-left space-y-3 h-full">
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
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <circle cx="12" cy="10" r="3" />
                  <path d="M12 10a2 2 0 0 0 0 4h.01" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-[var(--text-primary)]">
                Your Mind
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                We use Cognitive Reframing (The 3-C Method) to stop the nightly
                anxiety loop.
              </p>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: CONTROL --- */}
        <section className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-serif text-[var(--text-primary)]">
            2. You Are In Control
          </h2>
          <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed max-w-3xl">
            <p>
              Most sleep programs fail because they are rigid. They assume a
              perfect life with zero interruptions. When life happens—a late
              dinner, a sick child, a stressful week—the program breaks, and you
              feel like you failed.
            </p>
            <p>
              We built The Good Night Companion with a different philosophy:{" "}
              <span className="font-bold text-[var(--text-primary)]">
                The program bends so you don&apos;t break.
              </span>
            </p>
            <p>
              You are always in the driver&apos;s seat. We have built specific
              &quot;control valves&quot; into the system to ensure you can live
              your life while recovering your rest. These protocols are
              introduced gradually along your journey, exactly when you need
              them:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {/* Control Card 1 */}
            <div className="card-container flex flex-col items-start text-left space-y-3 h-full">
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
                  <path d="M22 18h-4l-3-7h-5l-3 7H3" />
                  <path d="M2 22h20" />
                  <path d="M10 2a2 2 0 0 1 4 0h-4z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg text-[var(--text-primary)]">
                The &quot;Flexibility Protocol&quot;
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Explicit permission to &quot;Hold Steady&quot; on any protocol
                if life feels too heavy. You never have to force a change your
                body isn&apos;t ready for.
              </p>
            </div>

            {/* Control Card 2 */}
            <div className="card-container flex flex-col items-start text-left space-y-3 h-full">
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
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <h3 className="font-serif text-lg text-[var(--text-primary)]">
                &quot;Anchor First, Flex Second&quot;
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                A protocol that lets you enjoy social events, late nights, and
                weekends without destroying your progress.
              </p>
            </div>

            {/* Control Card 3 */}
            <div className="card-container flex flex-col items-start text-left space-y-3 h-full">
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
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
              <h3 className="font-serif text-lg text-[var(--text-primary)]">
                The &quot;Plateau Protocol&quot;
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                A specific guide for what to do when progress stalls, so you
                never feel stuck or abandoned.
              </p>
            </div>
          </div>
        </section>

        {/* --- SECTION 3: ADAPTIVE --- */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-serif text-[var(--text-primary)]">
            3. A Program That Bends to You
          </h2>
          <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed max-w-3xl">
            <p>
              This book is designed for real life, not a sleep lab. We know that
              not everyone has a predictable 9-to-5 schedule or a private
              bedroom.
            </p>
            <p>
              If you are a caregiver, shift worker, student, or living in a
              shared space, rigid rules can feel impossible. You will not be
              left behind. This program supports you with compassionate,
              adaptive protocols designed to fit your reality.
            </p>
          </div>
        </section>

        {/* --- SECTION 4: THE ARC --- */}
        <section className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-serif text-[var(--text-primary)]">
            4. A 90-Day Graduated Arc
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed max-w-3xl">
            Healing is not a switch you flip; it is a path you walk. We do not
            dump every rule on you at once. We guide you through three distinct
            phases:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {/* Phase 1 */}
            <div className="card-container flex flex-col items-start text-left space-y-3 h-full">
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
                  <path d="M3 21h18" />
                  <path d="M5 21V7l8-4 8 4v14" />
                  <path d="M9 10a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2" />
                </svg>
              </div>
              <p className="text-[10px] font-bold tracking-widest uppercase text-[#8da399]">
                MODULE 1 (DAYS 1-30)
              </p>
              <h3 className="font-serif text-xl text-[var(--text-primary)]">
                Foundations
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                We focus on stabilization. You learn to observe your data and
                establish your Anchor.
              </p>
            </div>

            {/* Phase 2 */}
            <div className="card-container flex flex-col items-start text-left space-y-3 h-full">
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
                  <path d="M2 12h20" />
                  <path d="M13 5l7 7-7 7" />
                </svg>
              </div>
              <p className="text-[10px] font-bold tracking-widest uppercase text-[#8da399]">
                MODULE 2 (DAYS 31-60)
              </p>
              <h3 className="font-serif text-xl text-[var(--text-primary)]">
                Deepening
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                We focus on optimization. You become the pilot, using the
                Titration Protocol to consolidate your sleep efficiency.
              </p>
            </div>

            {/* Phase 3 */}
            <div className="card-container flex flex-col items-start text-left space-y-3 h-full">
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
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <p className="text-[10px] font-bold tracking-widest uppercase text-[#8da399]">
                MODULE 3 (DAYS 61-90)
              </p>
              <h3 className="font-serif text-xl text-[var(--text-primary)]">
                Sustaining
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                We focus on graduation. You learn to let go of the logs, trust
                your body, and move from &quot;controlling sleep&quot; to living
                your life.
              </p>
            </div>
          </div>
        </section>

        {/* --- SECTION 5: COMPASSION --- */}
        <section className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-serif text-[var(--text-primary)]">
            5. Compassionate Rigor
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed max-w-3xl">
            This is the heart of our method. We know that recovery requires Data
            (to know what to do) and Grace (to keep going when it&apos;s hard).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="card-container flex flex-col items-start text-left space-y-3 h-full">
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
                For the Logical Mind
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                We provide formulas, Sleep Efficiency calculations, and clear
                &quot;If-Then&quot; protocols.
              </p>
            </div>

            <div className="card-container flex flex-col items-start text-left space-y-3 h-full">
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
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-[var(--text-primary)]">
                For the Exhausted Heart
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                We normalize &quot;The Dip&quot;—the period where it gets harder
                before it gets better—and provide the tools to get through it.
                We treat you not as a patient to be fixed, but as a human to be
                supported.
              </p>
            </div>
          </div>
        </section>

        {/* --- FOOTER CTA --- */}
        <div className="pt-16 pb-12 text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif text-[var(--text-primary)]">
              The Fight is Over.
            </h2>
            <p className="italic text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
              &quot;For too long, you have treated sleep as a battle to be won.
              You have treated your bedroom as a battlefield and your brain as
              an enemy.&quot;
            </p>
            <p className="font-bold text-[var(--primary-dark)] text-lg">
              It is time to call a truce.
            </p>
            <p className="italic text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
              &quot;You do not need to do this perfectly. You do not need to fix
              it all tonight. You just need to turn the page to Day 1. We have
              built the map. We have packed the tools. We are ready to walk this
              path with you.&quot;
            </p>
          </div>

          <div className="pt-4">
            {/* Note: This button likely points to a signup or journal page in a real app */}
            <button className="btn-primary max-w-xs mx-auto text-sm px-10 py-5">
              Join Your Journey
            </button>
          </div>
        </div>
      </article>
    </main>
  );
}
