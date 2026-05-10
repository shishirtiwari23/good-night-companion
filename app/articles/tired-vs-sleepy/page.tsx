import React from "react";
import Link from "next/link";
import FaqAccordion from "../../components/FaqAccordion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Can't I Sleep Even Though I'm Exhausted? Tired vs Sleepy Explained",
  description: "Being exhausted and being sleepy are not the same thing biologically. Here's the clinical distinction — and the exact sleep drive protocol to fix the mismatch tonight.",
};

const faqs = [
  { question: "Why am I so tired but can't fall asleep?", answer: "You are experiencing a mismatch between physical fatigue and biological sleep drive. While your body is exhausted from cumulative sleep loss and daily stress, your brain hasn't accumulated enough adenosine — the sleep pressure molecule — to initiate and sustain sleep. Getting into bed before that pressure builds sufficiently leads to frustration, which releases adrenaline and pushes sleep further away." },
  { question: "What is the difference between being tired and being sleepy?", answer: "Tiredness is a state of depleted physical or mental energy — caused by exertion, illness, or stress. Sleepiness is a distinct biological drive characterised by heavy eyelids, drifting attention, and the involuntary urge to close your eyes, driven by the accumulation of adenosine in the brain. In sleep medicine, only sleepiness — not tiredness — is the appropriate signal to get into bed." },
  { question: "Why does my brain wake up as soon as I get into bed?", answer: "This is Conditioned Hyperarousal — a Pavlovian response your nervous system has developed after weeks or months of lying awake frustrated in bed. Your brain has learned to associate the physical sleep environment with the threat of not sleeping, and responds by releasing adrenaline the moment you lie down. The fix is Stimulus Control Therapy: rebuilding the association between bed and sleep through consistent behavioural rules." }
];

export default function ArticlePage() {
  return (
    <main className="min-h-screen flex flex-col items-center p-6 md:p-12 relative bg-cream text-ink">
      {/* Navigation */}
      <div className="w-full max-w-3xl z-10 mb-12 flex justify-between items-center">
        <Link 
          href="/articles" 
          className="inline-flex items-center text-ink-2 hover:text-ink transition-colors text-[0.68rem] font-medium uppercase tracking-[0.16em]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="m15 18-6-6 6-6"/></svg>
          Back to Articles
        </Link>
        <Link 
          href="/" 
          className="inline-flex items-center text-ink-2 hover:text-ink transition-colors text-[0.68rem] font-medium uppercase tracking-[0.16em]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          Home
        </Link>
      </div>

      <article className="w-full max-w-3xl z-10 bg-cream p-6 md:p-12 rounded-[2rem] shadow-sm mb-20 shadow-[rgba(0,0,0,0.03)_0px_10px_30px]">
        <header className="mb-12">
          {/* Authority Badge */}
          <div className="inline-flex items-start md:items-center gap-2 bg-[#8da399]/10 border border-rule text-sage text-[10px] md:text-xs font-bold px-4 py-2 rounded-xl md:rounded-full mb-6 tracking-[0.16em] uppercase text-left">
            <svg className="flex-shrink-0 mt-[1px] md:mt-0" width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 1L1 3.5V7C1 10.0376 3.41 12.8776 6.5 13.5C9.59 12.8776 12 10.0376 12 7V3.5L6.5 1Z" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>
            <span>CBT-I Evidence-Based · Sleep Restriction Therapy · NHS-Endorsed Method · AASM First-Line Treatment</span>
          </div>

          <p className="text-[10px] md:text-xs font-bold tracking-[0.16em] uppercase text-sage mb-4">
            Sleep Science
          </p>
          <h1 className="text-3xl md:text-5xl font-cormorant font-light text-ink leading-tight mb-8">
            Why Can't I Sleep Even Though I'm Exhausted? Tired vs Sleepy Explained
          </h1>

          <div className="h-[1px] w-full bg-[#8da399]/20" />
        </header>

        <div className="text-ink-2 font-sans leading-relaxed space-y-6 text-lg">

          {/* Quick Answer */}
          <div className="bg-[#f9f8f6] p-6 rounded-[1rem] border border-rule my-6">
            <p className="text-[10px] font-bold tracking-[0.16em] uppercase text-sage mb-2">Quick Answer</p>
            <h3 className="font-serif font-medium text-ink text-xl mb-4">
              Why can't you fall asleep when you are exhausted?
            </h3>
            <p className="font-sans text-ink-2 text-lg mb-4">
              Because being "tired" is a state of low physical energy, while being "sleepy" is a specific biological drive governed by a chemical called adenosine. If you go to bed feeling physically exhausted but not biologically sleepy, your brain has the capacity to wander — triggering performance anxiety, dumping adrenaline into your blood, and creating a state of hyperarousal that actively prevents sleep.
            </p>
          </div>

          
          <p className="text-xl md:text-2xl font-serif font-medium text-ink leading-snug">
            You can barely keep your eyes open at 7:00 PM. Your limbs feel like lead, your brain is foggy, and you feel a bone-deep exhaustion from fighting through another day on zero sleep.
          </p>
          <p>
            You think to yourself: <em>"I am so exhausted, there is no way I don't sleep tonight."</em> So you get into bed early to catch up. But the exact second your head hits the pillow, a cruel biological joke plays out.
          </p>
          <blockquote className="border-l-4 border-[var(--primary)] pl-6 italic text-xl text-ink my-8">
            "I feel like a zombie all day. I can barely function at work. But the moment I turn off the lights, it feels like someone just injected an espresso directly into my veins. My body is exhausted, but my brain is completely wired."
          </blockquote>
          <p>
            If you are trapped in this nightly paradox, you are not broken. You are simply misunderstanding a fundamental rule of human biology: <strong>exhaustion does not equal sleepiness.</strong> Here is the clinical distinction between the two, and the exact protocol to fix the mismatch — tonight and long-term.
          </p>

          <h2 className="text-3xl font-cormorant font-light text-ink mt-16 mb-8">The Biology: Tired vs. Sleepy</h2>
          <p>
            In sleep medicine, tiredness and sleepiness are two completely different biological states, and confusing them is one of the most common reasons chronic insomnia persists for years.
          </p>
          <p>
            <strong>Tiredness</strong> is a state of low physical or mental energy. You feel tired after running a marathon, recovering from illness, or grinding through a highly stressful day. It is a feeling of depletion — real, uncomfortable, and genuinely debilitating. But tiredness is not a biological sleep signal.
          </p>
          <p>
            <strong>Sleepiness</strong> is something different entirely. It is a specific, compulsory biological drive governed by a chemical called <strong>adenosine</strong> — your brain's sleep pressure molecule. Every hour you spend awake, adenosine accumulates in your brain. When it reaches a sufficient concentration, you experience the unmistakable physical sensation of sleepiness: eyelids that feel weighted, attention that keeps slipping, the involuntary head-nod. That is your biology issuing a command, not a preference.
          </p>
          <p>
            Here is the trap people with chronic insomnia fall into: you are always exhausted. Because you feel so terrible, you get into bed early. But if you haven't accumulated enough adenosine across your waking hours, you are not biologically sleepy yet — regardless of how drained your body feels.
          </p>
          <p>
            This distinction between tiredness and sleepiness is the foundational principle behind <strong>Sleep Restriction Therapy</strong>, the most clinically validated technique within CBT-I — endorsed as the first-line treatment for chronic insomnia by the NHS, the American Academy of Sleep Medicine (AASM), and the National Sleep Foundation. The entire protocol is built on one insight: you cannot manufacture sleepiness through effort or exhaustion. You can only build it through time.
          </p>

          <h2 className="text-3xl font-cormorant font-light text-ink mt-16 mb-8">The Psychology: The Adrenaline Hijack</h2>
          <p>
            When you get into bed exhausted but biologically unready for sleep, you have to lie there and wait. In the dark and the quiet, your mind begins to move.
          </p>
          <p className="italic text-ink-2">
            Why aren't I asleep yet? If I don't sleep tonight, tomorrow is ruined. I have the presentation. I can't do this again.
          </p>
          <p>
            This is the moment <strong>Conditioned Hyperarousal</strong> takes over. Your brain registers your wakefulness — in a context where it has learned to expect sleep — as a threat. It responds the only way a threat-detection system knows how: by dumping adrenaline into your bloodstream. Adrenaline is not subtle. It raises your heart rate, sharpens your attention, and prepares your body for danger. It completely overrides physical exhaustion.
          </p>
          <p>
            You can be the most tired person on the planet. But if your nervous system is in a fight-or-flight state, your brain will physically refuse to allow sleep — because from its perspective, sleeping in the presence of a threat would be biologically reckless.
          </p>
          <p>
            The cruel irony is that your exhaustion — the thing that made you get into bed early in the first place — is now fuel for the anxiety that keeps you awake.
          </p>

          <h2 className="text-3xl font-cormorant font-light text-ink mt-16 mb-8">The Fix: The Sleep Drive Protocol</h2>
          <p>
            Understanding the biology is only half the work. Here is the actionable protocol to bring your exhaustion and your sleepiness back into alignment.
          </p>
          
          <h3 className="font-serif font-medium text-ink text-xl mt-8 mb-4">1. Wait for the Drift — Not the Collapse</h3>
          <p>
            Never get into bed simply because your body aches or your energy is depleted. You are waiting for a different signal entirely. You will know you are biologically sleepy when your eyelids begin to feel heavy of their own accord, when your attention keeps slipping off the page or the sentence you are reading, when your thoughts begin to lose their sharp edges.
          </p>
          <p>
            For someone with chronic insomnia, waiting until you "physically cannot keep your eyes open" might mean staying up indefinitely — that level of obvious drowsiness may not come easily. Instead, look for the subtler shift from feeling <em>drained</em> to feeling <em>heavy</em>. That drift is your entry point.
          </p>

          <h3 className="font-serif font-medium text-ink text-xl mt-8 mb-4">2. Calculate Your Floor — Safe Sleep Restriction</h3>
          <p>
            If you are consistently tossing and turning, your sleep pressure is too diluted for your current sleep window. You need to delay your bedtime deliberately — but not blindly. Here is how to find your floor safely.
          </p>
          <p>
            Calculate your actual average sleep time across the past week (be honest — not the time in bed, the time actually asleep). Take that number — say, six hours. Choose a non-negotiable anchor wake time — say, 6:30am. Count backwards six hours. Your earliest allowed bedtime is 12:30am. Treat that time as a boundary. Not a punishment — a protocol. You are not allowed into bed before that point, regardless of how exhausted you feel.
          </p>
          <p>
            Never compress your window below 5.5 hours. That is the clinical safety floor.
          </p>

          <h3 className="font-serif font-medium text-ink text-xl mt-8 mb-4">3. Actively Decompress During the Wait</h3>
          <p>
            If your calculated bedtime is midnight and it is currently 9pm, you have three hours to fill. This window will feel long, especially in the first week. Sit with that discomfort and understand what it means: the discomfort of waiting is the adenosine building. The mounting pressure you feel in your body during this window is the very thing that will make tonight's sleep more consolidated than last night's.
          </p>
          <p>
            Use this time deliberately. Dim the lights. Read something undemanding. Listen to an audiobook or a gentle podcast. Do a puzzle. Do not use it to catch up on chores, answer emails, or scroll your phone. You are not filling time — you are in an active recovery state while your biological sleep drive does its work.
          </p>
          <p>
            The discomfort is the point. Stay with it.
          </p>

          <h2 className="text-3xl font-cormorant font-light text-ink mt-16 mb-8">Stop Relying on Exhaustion</h2>
          <p>
            Exhaustion is a consequence of insomnia, not a cure for it. The nights you feel most desperate — bone-tired, certain you will crash the moment you lie down — are often the nights that go worst, because the desperation itself becomes the trigger.
          </p>
          <p>
            The path out is counterintuitive: stay up later, build the pressure deliberately, and wait for the biology to align before you attempt sleep. It feels wrong. It works.
          </p>

          <h2 className="text-xl font-serif font-medium text-ink mt-12 mb-4">Scientific References & Further Reading</h2>
          <ul className="list-disc pl-6 space-y-4 mb-12 text-[0.85rem] text-ink-2">
            <li><strong>The Two-Process Model of Sleep:</strong> Borbély, A. A. (1982). A two process model of sleep regulation. <em>Human Neurobiology</em>. The foundational paper establishing how adenosine accumulates during wakefulness and drives the homeostatic sleep drive.</li>
            <li><strong>Hyperarousal and Insomnia:</strong> Bonnet, M. H., & Arand, D. L. (2010). Hyperarousal and insomnia: State of the science. <em>Sleep Medicine Reviews</em>. Demonstrates how sympathetic nervous system arousal overrides physical fatigue and sustains wakefulness.</li>
            <li><strong>Sleep Effort and Performance Anxiety:</strong> Espie, C. A., et al. (2006). The attention-intention-effort pathway in the development of psychophysiologic insomnia. <em>Sleep Medicine Reviews</em>. Explains why conscious effort to sleep actively perpetuates insomnia.</li>
          </ul>


          {/* Call to Action block */}
          <div className="bg-[#f9f8f6] p-8 rounded-[1.5rem] mt-12 mb-12 text-center shadow-sm">
            <h3 className="text-2xl font-serif font-medium text-ink mb-4">Stop Fighting. Start Healing.</h3>
            <p className="mb-6 mx-auto max-w-lg">
              Generic advice assumes you just need to relax. But chronic insomnia isn't a relaxation problem; it's a systemic loop. We treat it with a therapeutic system that marries the gold-standard biology of CBT-I with the gentle psychology of ACT-I.
            </p>
            <Link 
              href="/join-the-program" className="btn-primary inline-block w-auto !px-8 hover:!bg-[var(--primary-dark)]"
            >
              Get The Goodnight Companion
            </Link>
          </div>

          <FaqAccordion faqs={faqs} />
          
          <p className="text-xs opacity-60 mt-12 leading-relaxed border-t border-rule pt-6">
            <strong>Disclaimer:</strong> This article is for educational purposes only and does not constitute medical advice. Please consult a qualified healthcare provider before making changes to your sleep schedule, particularly if you have a history of bipolar disorder, seizure disorders, untreated sleep apnoea, or operate heavy machinery.
          </p>

        </div>
      </article>
      
    </main>
  );
}
