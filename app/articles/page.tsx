import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import ArticlesList from "./ArticlesList";

export const metadata: Metadata = {
  title: "Articles | The Good Night Companion",
  description: "Science-backed insights and strategies for fixing insomnia.",
  alternates: {
    canonical: '/articles',
  },
};

const articles = [
  {
    title: "Why Going to Bed Early is Making Your Insomnia Worse",
    description: "Going to bed early feels logical — but for chronic insomnia, it dilutes your sleep pressure and wires your brain for wakefulness. Here is the science and the fix.",
    slug: "why-going-to-bed-early-is-making-your-insomnia-worse",
  },
  {
    title: "The 20-Minute Rule: Why Getting Out of Bed is the Key to Fixing Insomnia",
    description: "Staying in bed when you can't sleep trains your brain to associate your mattress with stress. Here is the clinical protocol that actually breaks the cycle.",
    slug: "the-20-minute-rule",
  },
  {
    title: "How to Stop Overthinking at Night",
    description: "The harder you try to quiet your mind, the louder it gets. Learn the ACT-I tool that neutralizes racing thoughts without fighting them.",
    slug: "how-to-stop-overthinking-at-night",
  },
  {
    title: "The \"Catch-Up Sleep\" Trap",
    description: "Sleeping in on weekends feels restorative but creates social jetlag that destroys Sunday night. Here is the biology and the one fix that stabilises your clock.",
    slug: "the-catch-up-sleep-trap",
  },
  {
    title: "How to Optimize Your Bedroom for Sleep",
    description: "Blackout curtains won't fix chronic insomnia. Here are the non-negotiable biological levers — temperature, light, caffeine timing — that actually control your nervous system.",
    slug: "how-to-optimize-your-bedroom-for-sleep",
  },

  {
    title: "Why Your Sleep Tracker is Making Your Insomnia Worse",
    description: "Waking up to a bad sleep score makes your insomnia worse. Learn what Orthosomnia is, why wearables are clinically inaccurate, and why you need a 30-day data detox.",
    slug: "the-orthosomnia-trap",
  },
  {
    title: "Do I Have Chronic Insomnia? (The Clinical \"Rule of 3s\" Explained)",
    description: "A bad week of sleep is not chronic insomnia. Here is the exact medical criteria doctors use — and why chronic does not mean permanent or incurable.",
    slug: "do-i-have-chronic-insomnia",
  },
  {
    title: "\"I Didn't Sleep a Wink\": The Clinical Science of Sleep State Misperception",
    description: "Your partner says you were snoring. You swear you were awake all night. Both of you are right. Here is the clinical science behind paradoxical insomnia.",
    slug: "i-didnt-sleep-a-wink",
  },
  {
    title: "Is It OK to Nap in the Afternoon? (The Clinical Rules of Daytime Sleep)",
    description: "For chronic insomnia, a two-hour nap destroys your sleep pressure. Here is exactly when napping helps, when it hurts, and what to do instead.",
    slug: "is-it-ok-to-nap-in-the-afternoon",
  },
  {
    title: "Paradoxical Intention: Why Trying to Stay Awake Can Cure Your Insomnia",
    description: "Forcing yourself to sleep triggers adrenaline and keeps you wired. The counterintuitive clinical technique that actually works — and exactly how to use it.",
    slug: "paradoxical-intention",
  },
  {
    title: "The Math of Insomnia: How to Calculate Your Sleep Efficiency",
    description: "Stop trusting your smartwatch. Sleep Efficiency is the only clinical metric that matters for insomnia recovery — here is the exact formula and the 85% target.",
    slug: "the-math-of-insomnia",
  },
  {
    title: "What is NSDR (Non-Sleep Deep Rest)? And Why is it Better Than Napping?",
    description: "Learn why Non-Sleep Deep Rest (NSDR) is better than a daytime nap for repairing neurochemistry and restoring daytime energy.",
    slug: "what-is-nsdr-and-why-is-it-better-than-napping",
  },
  {
    title: "Why I Wake Up at Exactly 3 AM Every Night and Lie There Until Morning",
    description: "By 3 AM your deep sleep is gone and cortisol is rising. If your nervous system is hyperaroused, this biological crossroads jolts you awake every night. Here is why — and how to fix it.",
    slug: "why-i-wake-up-at-3-am-every-night",
  },
  {
    title: "Why Melatonin Does Absolutely Nothing for My Chronic Insomnia",
    description: "Melatonin is a clock-setter, not a sedative. If your nervous system is flooded with adrenaline, a 10mg gummy cannot compete. Here is the science — and what actually works.",
    slug: "why-melatonin-does-nothing-for-chronic-insomnia",
  }
];

export default function ArticlesPage() {
  return (
    <main className="min-h-screen flex flex-col items-center p-6 md:p-24 relative overflow-hidden bg-[var(--background)]">
      
      {/* Navigation */}
      <div className="w-full max-w-4xl z-10 mb-12">
        <Link 
          href="/" 
          className="inline-flex items-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm font-bold uppercase tracking-widest"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="mr-2"
          >
            <path d="m15 18-6-6 6-6"/>
          </svg>
          Back to Home
        </Link>
      </div>

      <div className="w-full max-w-4xl z-10 text-center mb-16 space-y-4">
        <h1 className="text-4xl md:text-5xl font-serif text-[var(--text-primary)]">
          Articles
        </h1>
        <p className="text-[var(--text-secondary)] text-base md:text-lg max-w-2xl mx-auto font-sans">
          Insights, science, and practical strategies to help you rebuild your sleep architecture and trust your bed again.
        </p>
      </div>

      <ArticlesList articles={articles} />
      
    </main>
  );
}
