"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import VennDiagram from "../components/VennDiagram";

const AMAZON_LINKS: Record<string, string> = {
  US: "https://www.amazon.com/dp/B0GQTGFSG7",
  UK: "https://www.amazon.co.uk/dp/B0GQTGFSG7",
  DE: "https://www.amazon.de/dp/B0GQTGFSG7",
  FR: "https://www.amazon.fr/dp/B0GQTGFSG7",
  ES: "https://www.amazon.es/dp/B0GQTGFSG7",
  IT: "https://www.amazon.it/dp/B0GQTGFSG7",
  NL: "https://www.amazon.nl/dp/B0GQTGFSG7",
  PL: "https://www.amazon.pl/dp/B0GQTGFSG7",
  SE: "https://www.amazon.se/dp/B0GQTGFSG7",
  BE: "https://www.amazon.com.be/dp/B0GQTGFSG7",
  IE: "https://www.amazon.ie/dp/B0GQTGFSG7",
};

export default function JourneyPage() {
  const [selectedCountry, setSelectedCountry] = useState("US");

  const scrollToCTA = () => {
    document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen relative bg-[var(--background)]">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/80 backdrop-blur-md border-b border-[#8da399]/10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-widest"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            Home
          </Link>
          <Link
            href="/articles"
            className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors text-xs font-bold uppercase tracking-widest"
          >
            Articles
          </Link>
        </div>
      </div>

      {/* ============================================================ */}
      {/* SECTION 1: THE HERO (The Empathy Hook)                      */}
      {/* ============================================================ */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16 md:pt-0 md:pb-0">
        <div className="max-w-5xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Copy */}
          <div className="space-y-8 order-2 md:order-1">
            <p className="overline-text opacity-60 tracking-[0.25em]">
              The 90-Day CBT-I Protocol
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--text-primary)] leading-[1.15]">
              You are not broken. <br className="hidden md:block" />
              <span className="opacity-75">You just haven&apos;t been given the right map.</span>
            </h1>
            <p className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed font-sans max-w-lg">
              If you are here, you have likely tried the tea, the melatonin, and the endless lists of &quot;sleep hygiene&quot; tips. You are frustrated because you are working hard to sleep, but it isn&apos;t working. It is time to stop fighting.
            </p>
            <button
              onClick={scrollToCTA}
              className="btn-primary max-w-xs text-sm px-10 py-5 inline-flex items-center justify-center gap-3 group shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
            >
              <span>Call A Truce With Your Sleep</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
            </button>
          </div>

          {/* Right: Book Mockup */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 bg-[var(--primary)]/5 rounded-[2rem] blur-2xl"></div>
              <Image
                src="/book-mockup-coffee.jpg"
                alt="The Good Night Companion — A 90-Day CBT-I Based Program, displayed on a wooden table next to a cup of coffee"
                width={800}
                height={533}
                className="relative rounded-2xl shadow-[rgba(0,0,0,0.08)_0px_20px_60px] w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2: THE AGITATION & REFRAME (The Quote)               */}
      {/* ============================================================ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Deep sage background */}
        <div className="absolute inset-0 bg-[#354640]"></div>
        {/* Subtle grain overlay */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")` }}></div>

        <div className="relative max-w-3xl mx-auto px-6 text-center space-y-12">
          <h2 className="text-3xl md:text-4xl font-serif text-[#f2f0e9]/90 leading-tight">
            &quot;I laid in the dark for three hours. <br className="hidden md:block" />Why isn&apos;t it working?&quot;
          </h2>

          <p className="text-[#f2f0e9]/50 text-base md:text-lg leading-relaxed font-sans max-w-2xl mx-auto">
            We know the absolute rage of doing everything the internet tells you to do, only to lay awake staring at the ceiling. It feels like your body is rebelling against you. But it isn&apos;t.
          </p>

          {/* The centerpiece quote */}
          <div className="relative py-10 px-8 md:px-12">
            {/* Decorative border */}
            <div className="absolute inset-0 border border-[#8da399]/25 rounded-2xl"></div>
            {/* Glow */}
            <div className="absolute -inset-px bg-gradient-to-b from-[#8da399]/8 to-transparent rounded-2xl"></div>

            <div className="relative space-y-6">
              <svg className="w-8 h-8 text-[#8da399]/50 mx-auto" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
              <p className="text-xl md:text-2xl font-serif text-[#f2f0e9]/85 leading-relaxed italic">
                Insomnia is not rebellion; it is loyalty misplaced. Somewhere, your system decided that vigilance was safe. Our work together is to retrain it slowly, gently—until rest feels safe again.
              </p>
              <div className="h-px w-16 bg-[#8da399]/40 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3: THE ALCHEMY OF RECOVERY (Venn Diagram)            */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-6 max-w-2xl mx-auto">
            <p className="overline-text opacity-60 tracking-[0.25em]">
              The Therapeutic System
            </p>
            <h2 className="text-3xl md:text-5xl font-serif text-[var(--text-primary)] leading-tight">
              A System Built for Real Life
            </h2>
            <p className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed font-sans">
              Generic advice assumes you just need to relax. But chronic insomnia isn&apos;t a relaxation problem; it&apos;s a systemic loop. We treat it with a therapeutic system that marries the gold-standard biology of CBT-I with the gentle psychology of ACT-I.
            </p>
          </div>

          {/* Interactive Venn Diagram */}
          <div className="flex justify-center overflow-hidden">
            <VennDiagram />
          </div>

          {/* Deep Dive Link */}
          <div className="text-center">
            <Link
              href="/understand"
              className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors border-b border-[var(--text-secondary)]/20 hover:border-[var(--primary)] pb-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              Are you a skeptic? Read our Deep Dive on the exact CBT-I and ACT-I mechanics.
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 4: THE "ANTI-FRAGILE" PROMISE                       */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 px-6 bg-white/40">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-6 max-w-2xl mx-auto">
            <p className="overline-text opacity-60 tracking-[0.25em]">
              Built for Imperfect Lives
            </p>
            <h2 className="text-3xl md:text-5xl font-serif text-[var(--text-primary)] leading-tight">
              The Program Bends <br className="hidden md:block" /> So You Don&apos;t Break.
            </h2>
            <p className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed font-sans">
              Most programs demand a perfect schedule with zero interruptions. We built control valves into this system for real life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="card-container flex flex-col items-start text-left space-y-4 h-full border border-[#8da399]/15 hover:-translate-y-1 transition-all duration-500">
              <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              </div>
              <h3 className="font-serif text-lg text-[var(--text-primary)]">
                Anchor First, Flex Second
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Enjoy late nights and social events without destroying your progress. Your schedule is a framework, not a cage.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="card-container flex flex-col items-start text-left space-y-4 h-full border border-[#8da399]/15 hover:-translate-y-1 transition-all duration-500">
              <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
              </div>
              <h3 className="font-serif text-lg text-[var(--text-primary)]">
                The Protocol of Disengagement
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Learn how to stop forcing sleep and drop the rope. When you stop wrestling, the water goes still.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="card-container flex flex-col items-start text-left space-y-4 h-full border border-[#8da399]/15 hover:-translate-y-1 transition-all duration-500">
              <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </div>
              <h3 className="font-serif text-lg text-[var(--text-primary)]">
                The Plateau Protocol
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                A built-in guide for what to do when progress stalls. You will never feel stuck or abandoned by this system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 5: THE 90-DAY ARC & CLOSING                         */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-6 max-w-2xl mx-auto">
            <p className="overline-text opacity-60 tracking-[0.25em]">
              The 90-Day Arc
            </p>
            <h2 className="text-3xl md:text-5xl font-serif text-[var(--text-primary)] leading-tight">
              Healing is a path you walk, <br className="hidden md:block" />
              not a switch you flip.
            </h2>
            <p className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed font-sans">
              We do not dump every rule on you at once. We guide you gently through three phases. We treat you not as a patient to be fixed, but as a human to be supported.
            </p>
          </div>

          {/* The 3 Phases */}
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8da399]/30 to-transparent -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              {/* Phase 1 */}
              <div className="bg-white p-8 rounded-[1.5rem] shadow-sm border border-[#8da399]/15 text-center space-y-4 hover:-translate-y-1 transition-all duration-500">
                <div className="w-14 h-14 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mx-auto font-serif text-xl font-bold shadow-md">
                  1
                </div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-[#8da399]">Days 1–30</p>
                <h3 className="font-serif text-xl text-[var(--text-primary)]">Foundations</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  The stabilization phase. Learn to observe your data, establish your Anchor Time, and stop the panic cycle.
                </p>
              </div>

              {/* Phase 2 */}
              <div className="bg-white p-8 rounded-[1.5rem] shadow-sm border border-[#8da399]/15 text-center space-y-4 hover:-translate-y-1 transition-all duration-500">
                <div className="w-14 h-14 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mx-auto font-serif text-xl font-bold shadow-md">
                  2
                </div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-[#8da399]">Days 31–60</p>
                <h3 className="font-serif text-xl text-[var(--text-primary)]">Deepening</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  The optimization phase. You become the pilot, using the Titration Protocol to consolidate your sleep window.
                </p>
              </div>

              {/* Phase 3 */}
              <div className="bg-white p-8 rounded-[1.5rem] shadow-sm border border-[#8da399]/15 text-center space-y-4 hover:-translate-y-1 transition-all duration-500">
                <div className="w-14 h-14 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mx-auto font-serif text-xl font-bold shadow-md">
                  3
                </div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-[#8da399]">Days 61–90</p>
                <h3 className="font-serif text-xl text-[var(--text-primary)]">Sustaining</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  The graduation phase. We remove the scaffolding and return you to natural, unassisted sleep.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FINAL CTA                                                    */}
      {/* ============================================================ */}
      <section id="final-cta" className="relative py-24 md:py-32 overflow-hidden scroll-mt-16">
        <div className="absolute inset-0 bg-[#354640]"></div>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")` }}></div>

        <div className="relative max-w-2xl mx-auto px-6 text-center space-y-10">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-serif text-[#f2f0e9]/90 leading-tight">
              The bedroom is no longer a battlefield.
            </h2>
            <p className="text-[#f2f0e9]/50 text-lg font-serif italic">
              Call a truce today.
            </p>
          </div>

          {/* Amazon Purchase Block */}
          <div className="bg-[#f2f0e9]/5 border border-[#f2f0e9]/10 rounded-2xl p-8 md:p-10 space-y-6 backdrop-blur-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-[#8da399] text-center">
              Select Your Amazon Region
            </p>
            <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4 max-w-md mx-auto">
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="px-6 py-4 rounded-[1rem] border border-[#f2f0e9]/15 bg-[#f2f0e9]/5 text-[#f2f0e9] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-shadow w-full sm:w-[220px] text-left font-bold appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%238da399' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 1rem center",
                  backgroundSize: "1em",
                }}
              >
                <option value="US">🇺🇸 United States</option>
                <option value="UK">🇬🇧 United Kingdom</option>
                <option value="DE">🇩🇪 Germany</option>
                <option value="FR">🇫🇷 France</option>
                <option value="ES">🇪🇸 Spain</option>
                <option value="IT">🇮🇹 Italy</option>
                <option value="NL">🇳🇱 Netherlands</option>
                <option value="PL">🇵🇱 Poland</option>
                <option value="SE">🇸🇪 Sweden</option>
                <option value="BE">🇧🇪 Belgium</option>
                <option value="IE">🇮🇪 Ireland</option>
              </select>

              <a
                href={AMAZON_LINKS[selectedCountry]}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-4 bg-[var(--primary)] text-white rounded-full font-bold uppercase tracking-widest text-xs shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3 group hover:bg-[var(--primary-dark)]"
              >
                <span>Get the Book</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FOOTER: MEDICAL DISCLAIMER                                   */}
      {/* ============================================================ */}
      <section className="py-16 px-6 bg-[var(--background)]">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#EBE9E1]/50 border border-[#8da399]/20 rounded-2xl p-6 md:p-8 text-xs text-[var(--text-secondary)] space-y-4 text-left">
            <p className="font-bold text-[var(--text-primary)] uppercase tracking-widest text-[11px] mb-4 pb-3 border-b border-[#8da399]/20">
              Medical Disclaimer &amp; Safety Warning
            </p>

            <div>
              The Good Night Companion is an educational resource grounded in the evidence-based principles of Cognitive Behavioral Therapy for Insomnia (CBT-I). It is designed for educational purposes only and is not a substitute for professional medical advice, diagnosis, or clinical therapy.
            </div>

            <div>
              <span className="font-bold text-[var(--text-primary)] block mb-1">Important Safety Note:</span>
              This program utilizes Sleep Restriction Therapy (SRT) to rebuild natural sleep drive. This technique is not recommended for individuals with{" "}
              <strong>bipolar disorder</strong>, <strong>seizure disorders/epilepsy</strong>, <strong>untreated sleep apnea</strong>, or <strong>recent major physical illness</strong>. Because SRT can cause temporary daytime sleepiness during the first few weeks, use caution when driving and consult your physician before beginning if you work in a highly safety-sensitive occupation.
            </div>

            <div className="pt-3 border-t border-[#8da399]/20 font-medium italic">
              If you are navigating severe mental health challenges or suspect an underlying sleep disorder, consult a qualified healthcare provider before beginning.
            </div>
          </div>

          <footer className="text-center text-[var(--text-secondary)] opacity-60 text-xs mt-8 py-4 font-sans">
            <p>© 2025 The Good Night Companion. Reclaiming rest, one night at a time.</p>
          </footer>
        </div>
      </section>
    </main>
  );
}
