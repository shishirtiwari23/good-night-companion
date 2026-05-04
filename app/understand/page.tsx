"use client";

import React from "react";
import Link from "next/link";

const PrincipleHeader = ({ num, title, type = "CBT" }: { num: number; title: string; type?: "CBT" | "ACT" }) => (
  <div className="flex items-start mb-6 mt-12">
    <div
      className={`flex-shrink-0 flex items-center justify-center w-10 h-10 mt-1 rounded-xl border ${
        type === "CBT"
          ? "bg-[#4a544e]/10 text-[#4a544e] border-[#4a544e]/30"
          : "bg-[#7a8f86]/10 text-[#7a8f86] border-[#7a8f86]/30"
      } font-serif font-medium text-lg font-bold mr-4 shadow-sm`}
    >
      {num}
    </div>
    <h3 className="text-2xl md:text-3xl font-cormorant font-light text-ink pt-1">{title}</h3>
  </div>
);

const InsomniaLoopSVG = () => (
  <div className="w-full max-w-xl mx-auto my-16 bg-cream/40 p-8 rounded-3xl border border-rule shadow-sm relative overflow-hidden group">
    {/* Decorative background glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#8da399]/10 blur-[60px] rounded-full pointer-events-none"></div>
    <svg viewBox="0 0 400 400" className="w-full h-auto relative z-10">
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" fill="#8da399" />
        </marker>
        <marker id="arrow-cbti" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" fill="#4a544e" />
        </marker>
        <marker id="arrow-acti" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" fill="#7a8f86" />
        </marker>
      </defs>

      {/* The Loop Paths (Connecting the 4 blocks) */}
      <path d="M 230 70 Q 330 70 330 180" fill="none" stroke="#8da399" strokeWidth="2" strokeDasharray="6 6" markerEnd="url(#arrow)" />
      <path d="M 330 220 Q 330 330 230 330" fill="none" stroke="#8da399" strokeWidth="2" strokeDasharray="6 6" markerEnd="url(#arrow)" />
      <path d="M 170 330 Q 70 330 70 220" fill="none" stroke="#8da399" strokeWidth="2" strokeDasharray="6 6" markerEnd="url(#arrow)" />
      <path d="M 70 180 Q 70 70 170 70" fill="none" stroke="#8da399" strokeWidth="2" strokeDasharray="6 6" markerEnd="url(#arrow)" />

      {/* Boxes for states */}
      <g transform="translate(140, 50)">
        <rect width="120" height="40" rx="20" fill="#fff" stroke="#8da399" strokeWidth="1.5" className="shadow-sm" />
        <text x="60" y="24" textAnchor="middle" fontSize="12" fontWeight="600" fill="#27302a">Sleep Deprivation</text>
      </g>
      
      <g transform="translate(270, 180)">
        <rect width="120" height="40" rx="20" fill="#fff" stroke="#8da399" strokeWidth="1.5" className="shadow-sm" />
        <text x="60" y="24" textAnchor="middle" fontSize="12" fontWeight="600" fill="#27302a">Hyperarousal</text>
      </g>
      
      <g transform="translate(140, 310)">
        <rect width="120" height="40" rx="20" fill="#fff" stroke="#8da399" strokeWidth="1.5" className="shadow-sm" />
        <text x="60" y="24" textAnchor="middle" fontSize="12" fontWeight="600" fill="#27302a">Anxiety About Sleep</text>
      </g>
      
      <g transform="translate(10, 180)">
        <rect width="120" height="40" rx="20" fill="#fff" stroke="#8da399" strokeWidth="1.5" className="shadow-sm" />
        <text x="60" y="24" textAnchor="middle" fontSize="12" fontWeight="600" fill="#27302a">Sleep Effort</text>
      </g>

      {/* Act-I intervention Arrow */}
      <g className="transition-transform duration-500 hover:scale-105" transform="origin-center" style={{transformOrigin: "center"}}>
        <path d="M 380 340 Q 370 280 320 280" fill="none" stroke="#7a8f86" strokeWidth="3" markerEnd="url(#arrow-acti)" />
        <rect x="300" y="330" width="90" height="26" rx="8" fill="#fff" stroke="#7a8f86" strokeWidth="1.5" />
        <text x="345" y="347" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#7a8f86">ACT-I Tools</text>
      </g>

      {/* CBT-I Intervention Arrow */}
      <g className="transition-transform duration-500 hover:scale-105" transform="origin-center" style={{transformOrigin: "center"}}>
        <path d="M 20 60 Q 30 120 80 120" fill="none" stroke="#4a544e" strokeWidth="3" markerEnd="url(#arrow-cbti)" />
        <rect x="10" y="44" width="90" height="26" rx="8" fill="#fff" stroke="#4a544e" strokeWidth="1.5" />
        <text x="55" y="61" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#4a544e">CBT-I Rules</text>
      </g>
      
      <text x="200" y="195" textAnchor="middle" fontSize="16" fontWeight="600" fill="#8da399" opacity="0.6">The Insomnia</text>
      <text x="200" y="215" textAnchor="middle" fontSize="16" fontWeight="600" fill="#8da399" opacity="0.6">Loop</text>
    </svg>
  </div>
);

const ProcessChartSVG = () => (
  <div className="w-full my-16 p-8 md:p-12 bg-cream/40 rounded-3xl border border-rule shadow-sm relative overflow-hidden">
    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-white/60 to-transparent pointer-events-none"></div>
    <div className="flex flex-col md:flex-row gap-12 items-center justify-center relative z-10">
      <div className="w-full md:w-1/2 flex flex-col items-center">
        <h4 className="font-serif font-medium text-xl mb-4 text-ink">Process S (Sleep Pressure)</h4>
        <div className="relative w-full max-w-[300px]">
          <svg viewBox="0 0 300 160" className="w-full h-auto">
            {/* axes */}
            <line x1="30" y1="130" x2="280" y2="130" stroke="#8da399" strokeWidth="2" strokeOpacity="0.5" />
            <line x1="30" y1="20" x2="30" y2="130" stroke="#8da399" strokeWidth="2" strokeOpacity="0.5" />
            
            {/* Background area under line */}
            <path d="M 30 130 L 30 110 Q 150 10 220 20 L 220 130 Z" fill="#4a544e" fillOpacity="0.05" />

            {/* Process S Line */}
            <path d="M 30 110 Q 150 10 220 20 L 220 130" fill="none" stroke="#4a544e" strokeWidth="3" />
            <path d="M 220 20 Q 250 80 280 110" fill="none" stroke="#4a544e" strokeWidth="3" strokeDasharray="4 4" />
            
            <circle cx="220" cy="20" r="4" fill="#4a544e" />
            <circle cx="280" cy="110" r="4" fill="#4a544e" fillOpacity="0.5"/>
            <circle cx="30" cy="110" r="4" fill="#4a544e" />

            <text x="125" y="150" fontSize="11" fontWeight="500" fill="#27302a" textAnchor="middle">Waking Hours</text>
            <text x="250" y="150" fontSize="11" fontWeight="500" fill="#27302a" textAnchor="middle">Sleep</text>
            <text x="15" y="75" fontSize="11" fontWeight="600" fill="#27302a" transform="rotate(-90 15 75)" textAnchor="middle" fillOpacity="0.8">Sleep Drive</text>
          </svg>
        </div>
        <p className="text-sm text-ink-2 mt-6 text-center leading-relaxed">
          Sleep drive is governed by adenosine, building biological pressure until you sleep.
        </p>
      </div>

      <div className="hidden md:block w-px h-48 bg-[#8da399]/30"></div>

      <div className="w-full md:w-1/2 flex flex-col items-center">
         <h4 className="font-serif font-medium text-xl mb-4 text-ink">Process C (Circadian Rhythm)</h4>
         <div className="relative w-full max-w-[300px]">
           <svg viewBox="0 0 300 160" className="w-full h-auto">
            {/* axes */}
            <line x1="30" y1="130" x2="280" y2="130" stroke="#8da399" strokeWidth="2" strokeOpacity="0.5" />
            <line x1="30" y1="20" x2="30" y2="130" stroke="#8da399" strokeWidth="2" strokeOpacity="0.5" />
            
            <path d="M 30 75 Q 80 10 155 75 T 280 75" fill="none" stroke="#7a8f86" strokeWidth="3" />
            <path d="M 30 130 L 30 75 Q 80 10 155 75 T 280 75 L 280 130 Z" fill="#7a8f86" fillOpacity="0.05" />

            <circle cx="92" cy="42" r="4" fill="#7a8f86" />
            <circle cx="218" cy="108" r="4" fill="#7a8f86" />

            <text x="155" y="150" fontSize="11" fontWeight="500" fill="#27302a" textAnchor="middle">24-Hour Cycle</text>
            <text x="15" y="75" fontSize="11" fontWeight="600" fill="#27302a" transform="rotate(-90 15 75)" textAnchor="middle" fillOpacity="0.8">Alertness</text>
           </svg>
         </div>
         <p className="text-sm text-ink-2 mt-6 text-center leading-relaxed">
           Your internal biological clock oscillates, governing daily alertness and melatonin.
         </p>
      </div>
    </div>
  </div>
);

const SpamFilterQuote = () => (
  <div className="my-14 p-10 border-l-[6px] border-[#7a8f86] bg-gradient-to-r from-[#7a8f86]/10 to-transparent rounded-r-3xl relative">
    <div className="absolute -left-[32px] -top-8 text-8xl text-[#7a8f86] opacity-30 font-serif font-medium leading-none">"</div>
    <p className="italic text-ink text-xl md:text-2xl font-serif font-medium leading-relaxed relative z-10">
      Your brain at 3 AM is like a malfunctioning email server sending urgent, fake messages. Cognitive Defusion is your mental spam filter—it allows you to observe the neurological noise without opening the emails and spiraling into panic.
    </p>
  </div>
);

const SleepEfficiencyFormula = () => (
  <div className="my-16 relative overflow-hidden rounded-3xl bg-cream border border-rule shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
    <div className="absolute top-0 right-0 p-6 opacity-[0.03] pointer-events-none">
      <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
         <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 9h-2V7h-2v5H6v2h2v5h2v-5h2v-2z" />
      </svg>
    </div>
    <div className="bg-[#4a544e] text-white py-5 px-8">
      <h4 className="text-xl font-serif font-medium text-white tracking-wide">The Math Behind the Magic: Sleep Efficiency (SE)</h4>
    </div>
    
    <div className="p-8 md:p-12 relative z-10">
      <div className="bg-[#f5f8f6] rounded-2xl border border-rule p-8 flex flex-col md:flex-row items-center justify-around gap-8 mb-10 shadow-inner">
        <div className="text-center group">
          <span className="block text-sm font-bold text-sage uppercase tracking-[0.16em] mb-3">Clinical Target</span>
          <span className="text-5xl md:text-6xl font-cormorant font-light text-[#4a544e] transition-transform duration-300 group-hover:scale-105 inline-block">85%+</span>
        </div>
        <div className="w-full md:w-px h-px md:h-24 bg-[#8da399]/30"></div>
        <div className="text-center font-sans tracking-wide text-lg md:text-xl text-[#27302a] font-medium leading-relaxed max-w-sm">
           <span className="text-[#4a544e] font-cormorant font-light text-3xl">SE</span> = <br className="md:hidden" />(Total Sleep Time &divide; Time in Bed) &times; 100
        </div>
      </div>
      
      <div className="space-y-4 max-w-2xl text-ink-2 bg-cream mx-auto text-center md:text-left">
        <p className="font-bold text-ink text-lg border-b border-rule pb-2">Example Calculation</p>
        <div className="flex flex-col gap-4 text-[1.05rem] pt-4">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="w-2.5 h-2.5 rounded-full bg-[#8da399]"></div>
            <span>You spend <strong>8 hours</strong> in bed.</span>
          </div>
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="w-2.5 h-2.5 rounded-full bg-[#8da399]"></div>
            <span>You sleep for <strong>6 hours</strong>.</span>
          </div>
          <div className="flex items-center gap-3 justify-center md:justify-start pt-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#4a544e]"></div>
            <span>Your Sleep Efficiency = (6 &divide; 8) &times; 100 = <strong className="text-[#4a544e] text-2xl ml-1">75%</strong></span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const AlchemyQuote = () => (
  <div className="my-24 py-20 px-6 md:px-16 text-center max-w-5xl mx-auto border-t-2 border-b-2 border-rule relative bg-gradient-to-b from-transparent via-[#8da399]/5 to-transparent">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cream text-ink p-4 rounded-full border border-rule shadow-sm text-[#7a8f86]">
      <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5">
         <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L15 8L21 9L16.5 14L18 20L12 17L6 20L7.5 14L3 9L9 8L12 2Z" />
      </svg>
    </div>
    <h2 className="text-sm font-bold tracking-[0.16em] text-sage uppercase mb-8">The Alchemy of Recovery</h2>
    <p className="text-3xl md:text-4xl lg:text-5xl leading-tight md:leading-[1.4] font-cormorant font-light text-ink px-4 italic">
      "Insomnia is not rebellion; it is loyalty misplaced. Somewhere, your system decided that vigilance was safe. Our work together is to retrain it—slowly, gently—until rest feels safe again."
    </p>
  </div>
);

export default function UnderstandPage() {
  return (
    <main className="min-h-screen flex justify-center p-6 md:p-12 pb-24 relative bg-cream text-ink">
      <article className="max-w-4xl w-full space-y-16 animate-in fade-in duration-700 mt-12 mb-16">
        
        {/* Header */}
        <header className="space-y-8">
          <div className="flex justify-between items-center">
            <p className="overline-text opacity-60 m-0">The Clinical Deep Dive</p>
            <Link
              href="/"
              aria-label="Return to Home"
              title="Return to Home"
              className="text-ink-2 hover:text-sage transition-colors p-2"
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
          <h1 className="text-4xl md:text-5xl font-cormorant font-light text-ink leading-tight">
            The Science of Sleep Recovery
          </h1>
          <div className="bg-[#f5f8f6] p-6 md:p-8 rounded-2xl border border-rule shadow-sm space-y-4 text-ink-2 text-lg leading-relaxed">
            <p>
              <strong className="text-ink">Who This Page Is For:</strong> If you&apos;ve tried sleep hygiene, apps, and generic CBT-I worksheets and still can&apos;t sleep, this page explains the clinical science behind why those approaches failed—and what actually works. You'll walk away understanding exactly how The Goodnight Companion rebuilds your sleep architecture, step by step.
            </p>
          </div>
          
          <div className="space-y-6 text-lg text-ink-2 leading-relaxed font-sans mt-8">
            <p>
              If you&apos;ve suffered from chronic insomnia, you already know that "sleep hygiene"—chamomile tea, screen curfews, warm baths—doesn&apos;t cure chronic sleeplessness. Here&apos;s what does: a clinically validated, dual-therapeutic approach that treats insomnia as both a biological and a psychological loop.
            </p>
            <p>
              The Goodnight Companion integrates two gold-standard therapies into one system. <strong>Cognitive Behavioral Therapy for Insomnia (CBT-I)</strong> is the hardware upgrade—it rebuilds your physical sleep architecture, your circadian rhythm, and your endocrine system. <strong>Acceptance and Commitment Therapy for Insomnia (ACT-I)</strong> is the software upgrade—it down-regulates the amygdala, neutralizes sleep anxiety, and teaches psychological flexibility so the strict rules of CBT-I don&apos;t spike your performance anxiety and backfire.
            </p>
            <p>
              The American College of Physicians recommends CBT-I as the first-line treatment for chronic insomnia. We&apos;ve enhanced it with ACT-I to address the exact reason most people quit CBT-I: the emotional and psychological difficulty of following rigid rules while exhausted. Here&apos;s the exact science behind how we rebuild your sleep.
            </p>
          </div>
        </header>

        <InsomniaLoopSVG />

        {/* Part I: CBT-I */}
        <section>
          <div className="border-b-2 border-rule pb-4 mb-8">
            <h2 className="text-3xl md:text-4xl font-cormorant font-light text-ink">
              Part I: The Biological Hardware <br className="md:hidden" />
              <span className="text-xl md:text-2xl text-sage tracking-wider uppercase font-sans mt-2 block">(CBT-I Mechanics)</span>
            </h2>
          </div>
          <p className="text-lg text-ink-2 leading-relaxed mb-10">
            Chronic insomnia is not a relaxation problem. It&apos;s a complex physiological loop rooted in central nervous system hyperarousal. CBT-I dismantles this loop by systematically repairing the biological and neurological systems that govern sleep architecture.
          </p>

          <div className="space-y-16">
            <div>
              <PrincipleHeader num={1} title="Process S: Homeostatic Sleep Drive & Sleep Restriction Therapy" type="CBT" />
              <div className="space-y-6 text-ink-2 leading-relaxed">
                <p>
                  <strong className="text-ink block mb-1">The Science:</strong>
                  Sleep drive is governed by adenosine, an inhibitory neurotransmitter that accumulates in your brain every hour you&apos;re awake. As adenosine builds, it binds to receptors in the basal forebrain, creating biological pressure to sleep. In chronic insomniacs, spending excessive time in bed—trying desperately to sleep—fragments this pressure, resulting in shallow, unrestorative "junk sleep."
                </p>
                <p>
                  <strong className="text-ink block mb-1">The Fix:</strong>
                  We use a clinical protocol called Sleep Restriction Therapy to mathematically compress your sleep window. By strictly limiting the time you spend in bed to match your actual sleep capability, you force a massive, uninterrupted buildup of adenosine—like stretching a rubber band to its absolute limit. When you finally lie down at your prescribed bedtime, your brain has no choice but to snap into deep, consolidated rest.
                </p>
                <p>
                  <strong className="text-ink block mb-1">The Analogy:</strong>
                  Think of sleep pressure as hunger. If you snack all day, you&apos;re never hungry enough to eat a full meal. Sleep restriction is intermittent fasting for your sleep drive—you build undeniable biological hunger.
                </p>
                <p className="text-sm text-ink-3 italic mt-4">Reference: Spielman, A. J., Saskin, P., & Thorpy, M. J. (1987). Treatment of chronic insomnia by restriction of time in bed. Sleep, 10(1), 45-56.</p>
              </div>
            </div>

            <div>
              <PrincipleHeader num={2} title="Process C: The Circadian Rhythm & Anchor Times" type="CBT" />
              <div className="space-y-6 text-ink-2 leading-relaxed">
                <p>
                  <strong className="text-ink block mb-1">The Science:</strong>
                  Your 24-hour biological clock is controlled by the suprachiasmatic nucleus (SCN)—a cluster of neurons in your hypothalamus. The SCN relies on light absorbed by specialized photoreceptors in your eyes (melanopsin-containing retinal ganglion cells) to regulate your Cortisol Awakening Response and your evening melatonin secretion. An erratic wake time—sleeping in on weekends, waking at different times each day—causes severe circadian misalignment, a phenomenon called social jetlag.
                </p>
                <p>
                  <strong className="text-ink block mb-1">The Fix:</strong>
                  We stabilize your circadian rhythm using strict <strong>Anchor Times</strong>—a non-negotiable wake-up time, seven days a week, paired with immediate morning daylight exposure. This locks your internal clock in place.
                </p>
                <p>
                  <strong className="text-ink block mb-1">The Analogy:</strong>
                  Your circadian rhythm is the conductor of a biological orchestra. Every hormone, every organ system, takes its cue from the conductor's baton. By forcing the conductor to start the music at the exact same time every morning, your entire endocrine system synchronizes into harmony.
                </p>
                <p className="text-sm text-ink-3 italic mt-4">Reference: Czeisler, C. A., et al. (1989). Bright light resets the human circadian pacemaker independent of the timing of the sleep-wake cycle. Science, 244(4910), 1328-1333.</p>
              </div>

              <ProcessChartSVG />
            </div>

            <div>
              <PrincipleHeader num={3} title="Conditioned Arousal & Stimulus Control Therapy" type="CBT" />
              <div className="space-y-6 text-ink-2 leading-relaxed">
                <p>
                  <strong className="text-ink block mb-1">The Science:</strong>
                  Through Pavlovian conditioning, spending hours awake in bed in a state of distress teaches your brain to associate your physical mattress with the sympathetic nervous system—your fight-or-flight response. This triggers the Hypothalamic-Pituitary-Adrenal (HPA) axis, flooding your body with cortisol and adrenaline the moment your head hits the pillow.
                </p>
                <p>
                  <strong className="text-ink block mb-1">The Fix:</strong>
                  We sever this neural pathway using the <strong>20-Minute Contingency Plan</strong>—if you&apos;re awake and frustrated in bed for roughly 20 minutes, you must physically leave the room. This breaks the localized hyperarousal response.
                </p>
                <p>
                  <strong className="text-ink block mb-1">The Analogy:</strong>
                  Because the human brain is an association machine, your bed has become a battlefield. Stimulus Control is the clinical protocol that re-teaches your brain that the bed is solely a cue for sleep, not for war.
                </p>
                <p className="text-sm text-ink-3 italic mt-4">Reference: Bootzin, R. R. (1972). Stimulus control treatment for insomnia. Proceedings of the American Psychological Association.</p>
              </div>
            </div>

            <div>
              <PrincipleHeader num={4} title="Cognitive Restructuring & The 3-C Reframe" type="CBT" />
              <div className="space-y-6 text-ink-2 leading-relaxed">
                <p>
                  <strong className="text-ink block mb-1">The Science:</strong>
                  Catastrophic beliefs about sleep—"If I don&apos;t sleep tonight, I'll lose my job"—hijack the amygdala (your brain's fear center), shutting down the prefrontal cortex (your logic center) and triggering the release of adrenaline and cortisol. This keeps you wired and awake.
                </p>
                <p>
                  <strong className="text-ink block mb-1">The Fix:</strong>
                  We use a cognitive tool we call the <strong>3-C Reframe</strong>: Catch the thought, Challenge it for evidence, and Change it to a more accurate statement. This protocol teaches you to act like a clinical detective, actively interrogating your nighttime thoughts for objective, historical evidence before accepting them as physiological threats. This moves neural activity back to the prefrontal cortex and directly down-regulates the autonomic nervous system's stress response.
                </p>
                <p className="text-sm text-ink-3 italic mt-4">Reference: Harvey, A. G. (2002). A cognitive model of insomnia. Behaviour Research and Therapy, 40(8), 869-893.</p>
              </div>
            </div>

            <div>
              <PrincipleHeader num={5} title="Somatic Regulation & The Manual Override" type="CBT" />
              <div className="space-y-6 text-ink-2 leading-relaxed">
                <p>
                  <strong className="text-ink block mb-1">The Science:</strong>
                  When your central nervous system is locked in sympathetic dominance (fight-or-flight), cognitive logic often fails. You can&apos;t think your way out of a panic attack. We utilize body-based somatic tools like Progressive Muscle Relaxation (PMR) and Non-Sleep Deep Rest (NSDR) to force a parasympathetic rebound—a shift into the rest-and-digest state.
                </p>
                <p>
                  <strong className="text-ink block mb-1">The Fix:</strong>
                  PMR systematically tenses and releases muscle groups, which fatigues the muscles and triggers a natural relaxation response, lowering your core body temperature (a biological prerequisite for sleep). NSDR uses guided body scans and breathwork to shift your brainwave state without diminishing your homeostatic sleep drive.
                </p>
                <p>
                  <strong className="text-ink block mb-1">The Analogy:</strong>
                  When a computer system is completely frozen, typing commands doesn&apos;t work—you have to pull the plug and manually perform a hardware reboot. PMR and NSDR are your manual overrides to dump physical tension and reset your nervous system.
                </p>
                <div className="text-sm text-ink-3 italic mt-4">
                  <p>References:</p>
                  <ul className="list-disc list-inside">
                    <li>Jacobson, E. (1938). Progressive Relaxation. University of Chicago Press.</li>
                    <li>Manzoni, G. M., Pagnini, F., Castelnuovo, G., & Molinari, E. (2008). Relaxation training for anxiety: a ten-years systematic review with meta-analysis. BMC Psychiatry, 8, 41.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transition Paragraph */}
        <section className="my-16 p-8 bg-sage-dark text-white text-white rounded-3xl shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
               <path d="M12 2L15 8L21 9L16.5 14L18 20L12 17L6 20L7.5 14L3 9L9 8L12 2Z" />
            </svg>
          </div>
          <div className="relative z-10 text-lg md:text-xl leading-relaxed font-serif font-medium text-white/90">
            CBT-I is extraordinarily effective at rebuilding your biological sleep architecture. Clinical studies show 70-80% efficacy. But here&apos;s the problem: <strong>CBT-I is rigid.</strong> It asks you to follow strict rules—get out of bed when you can&apos;t sleep, stay up later than you want, resist napping—while you&apos;re exhausted and emotionally fragile. For many people, the rules themselves trigger intense performance anxiety, which spikes hyperarousal and sabotages the entire protocol.
            <br />
            <br />
            This is where <strong>ACT-I</strong> becomes essential. It&apos;s the psychological flexibility layer that allows you to follow the hard rules of CBT-I without turning them into a high-stakes test you&apos;re terrified of failing.
          </div>
        </section>

        {/* Part II: ACT-I */}
        <section>
          <div className="border-b-2 border-rule pb-4 mb-8 mt-16">
            <h2 className="text-3xl md:text-4xl font-cormorant font-light text-ink">
              Part II: The Neurological Software <br className="md:hidden" />
              <span className="text-xl md:text-2xl text-[#7a8f86] tracking-wider uppercase font-sans mt-2 block">(ACT-I Principles)</span>
            </h2>
          </div>
          <p className="text-lg text-ink-2 leading-relaxed mb-10">
            Acceptance and Commitment Therapy for Insomnia (ACT-I) provides the critical psychological tools to neutralize sleep effort, down-regulate the amygdala, and foster deep psychological flexibility. While CBT-I rebuilds the hardware, ACT-I upgrades the software so the system can actually run.
          </p>

          <div className="space-y-16">
            <div>
              <PrincipleHeader num={1} title="Non-Striving & The Paradox of Intent" type="ACT" />
              <div className="space-y-6 text-ink-2 leading-relaxed">
                <p>
                  <strong className="text-ink block mb-1">The Science:</strong>
                  Sleep is an autonomic physiological process—like digestion or your heartbeat. You cannot consciously force it to happen. The explicit, conscious effort to try to sleep—known clinically as "sleep effort"—paradoxically signals to your brain that sleep is a difficult or dangerous task. This elevates your heart rate, spikes cortisol, and blocks the transition from wakefulness to Stage 1 sleep.
                </p>
                <p>
                  <strong className="text-ink block mb-1">The Fix:</strong>
                  We teach you a principle we call <strong>The Protocol of Disengagement</strong>, rooted in the ACT-I concept of non-striving. Instead of trying to force sleep, you officially go "off duty." Your job is not to sleep tonight—your job is to rest quietly in the dark and let your autonomic nervous system take over when it's ready.
                </p>
                <p>
                  <strong className="text-ink block mb-1">The Analogy:</strong>
                  Trying to force sleep is like being caught in quicksand. The harder you fight to escape, the faster you sink into hyperarousal. The only survival strategy is to stop fighting, lie flat, and allow your body to naturally float.
                </p>
                <p className="text-sm text-ink-3 italic mt-4">Reference: Ascher, L. M., & Efran, J. S. (1978). Use of paradoxical intention in a behavioral program for sleep onset insomnia. Journal of Consulting and Clinical Psychology, 46(3), 547-550.</p>
              </div>
            </div>

            <div>
              <PrincipleHeader num={2} title="Cognitive Defusion & Metacognitive Awareness" type="ACT" />
              <div className="space-y-6 text-ink-2 leading-relaxed">
                <p>
                  <strong className="text-ink block mb-1">The Science:</strong>
                  At 3:00 AM, your exhausted brain generates catastrophic thoughts that feel urgent and true. Neurologically, your prefrontal cortex (logic) is offline, and your amygdala (fear) is running the show. These thoughts trigger the same physiological response as a genuine external threat—adrenaline, elevated heart rate, hypervigilance.
                </p>
                <p>
                  <strong className="text-ink block mb-1">The Fix:</strong>
                  Rather than wrestling with nocturnal anxiety, we teach Cognitive Defusion—the skill of observing your thoughts without identifying with them or reacting to them. We use a tool we call the <strong>Constructive Worry Dump</strong> to build metacognitive awareness. You classify thoughts into "Signal" (solvable problems you can address tomorrow) and "Noise" (biological misfiring you can safely ignore).
                </p>
                
                <SpamFilterQuote />
                
                <p className="text-sm text-ink-3 italic mt-4">Reference: Ong, J. C., Ulmer, C. S., & Manber, R. (2012). Improving sleep with mindfulness and acceptance: a metacognitive model of insomnia. Behaviour Research and Therapy, 50(11), 651-660.</p>
              </div>
            </div>

            <div>
              <PrincipleHeader num={3} title="Psychological Flexibility & Values-Based Action" type="ACT" />
              <div className="space-y-6 text-ink-2 leading-relaxed">
                <p>
                  <strong className="text-ink block mb-1">The Science:</strong>
                  Chronic insomnia creates neurological tunnel vision. Your brain becomes hyper-focused on fixing sleep, which amplifies the perceived threat of every bad night. This creates a vicious feedback loop—the more important sleep becomes, the harder it is to achieve. ACT-I disrupts this by shifting your focus from outcomes you can&apos;t control (sleep) to actions you can control (living according to your values regardless of how you slept).
                </p>
                <p>
                  <strong className="text-ink block mb-1">The Fix:</strong>
                  We teach you to identify your core values and commit to meaningful actions even on exhausted days. This proves to your nervous system that fatigue is uncomfortable, but not a lethal threat—which dramatically lowers anticipatory anxiety.
                </p>
                <p>
                  <strong className="text-ink block mb-1">The Analogy:</strong>
                  Insomnia puts your life on hold. You're sitting in a waiting room, waiting for perfect sleep before you can live again. Values-based action is walking out of that waiting room and living your life now, even if you&apos;re tired.
                </p>
                <p>
                  <strong className="text-ink block mb-1">The Application:</strong>
                  When your brain encounters the friction of a new protocol—like getting out of a warm bed at 3 AM—your limbic system begs you to quit. We use a tool we call The Why Pause—a 10-second visualization of your core values—to bypass the limbic system's immediate discomfort and engage your prefrontal cortex's long-term goal orientation. It&apos;s the psychological anchor that keeps your ship steady when the storm of midnight frustration tries to blow you off course.
                </p>
                <p className="text-sm text-ink-3 italic mt-4">Reference: McCracken, L. M., & Vowles, K. E. (2014). Acceptance and commitment therapy and mindfulness for chronic pain: Model, process, and progress. American Psychologist, 69(2), 178-187.</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Math Behind the Magic Section */}
        <section className="pt-10">
          <SleepEfficiencyFormula />
          <p className="text-sm text-ink-3 italic mt-4 text-center md:text-left max-w-2xl mx-auto md:ml-12 pl-4">
            Reference: Spielman, A. J., Saskin, P., & Thorpy, M. J. (1987). Treatment of chronic insomnia by restriction of time in bed. Sleep, 10(1), 45-56.
          </p>
        </section>

        {/* The Alchemy of Recovery Section */}
        <section>
          <AlchemyQuote />
          
          <div className="space-y-6 text-lg text-ink-2 leading-relaxed text-center max-w-3xl mx-auto">
            <p>
              The science is complex, but the application is simple. You don&apos;t need a PhD in sleep medicine to recover your rest. We&apos;ve packaged all of this clinical science into a simple, 90-day guided system that tells you exactly what to do and gently supports you when it gets hard.
            </p>
          </div>
          
          <div className="pt-12 text-center pb-8">
            <Link href="/join-the-program" className="btn-primary" style={{ display: 'inline-flex', padding: '16px 40px', fontSize: '1.2rem', fontWeight: 600, letterSpacing: '0.05em' }}>
              Call a Truce With Your Sleep Today
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
