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
    description: "If you are battling chronic insomnia, going to bed early is actually a physiological trap. Here is the science behind why, and the counterintuitive steps to fix it.",
    slug: "why-going-to-bed-early-is-making-your-insomnia-worse",
  },
  {
    title: "The 20-Minute Rule: Why Getting Out of Bed is the Key to Fixing Insomnia",
    description: "Staying in bed when you are wide awake is one of the worst things you can do. Learn how to use the 20-Minute Contingency Plan to break the cycle.",
    slug: "the-20-minute-rule",
  },
  {
    title: "How to Stop Overthinking at Night",
    description: "Can't turn your brain off? Learn why trying to empty your mind backfires, and how to use Cognitive Defusion to stop overthinking and finally sleep.",
    slug: "how-to-stop-overthinking-at-night",
  },
  {
    title: "The \"Catch-Up Sleep\" Trap",
    description: "Sunday night insomnia? Discover why sleeping in on weekends causes \"social jetlag,\" ruins your internal clock, and how an Anchor Time can fix it.",
    slug: "the-catch-up-sleep-trap",
  },
  {
    title: "How to Optimize Your Bedroom for Sleep",
    description: "Still awake at 3 AM? Discover why expensive mattresses won't fix insomnia, and how to biologically optimize your bedroom using temperature and light.",
    slug: "how-to-optimize-your-bedroom-for-sleep",
  },

  {
    title: "Why Your Sleep Tracker is Making Your Insomnia Worse",
    description: "Is your Apple Watch or Oura ring making your insomnia worse? Discover the science of Orthosomnia and why obsessing over your sleep score ruins your rest.",
    slug: "the-orthosomnia-trap",
  },
  {
    title: "Do I Have Chronic Insomnia? (The Clinical \"Rule of 3s\" Explained)",
    description: "Worried your sleep is permanently broken? Discover the clinical \"Rule of 3s\" for chronic insomnia, and how the 3P model proves you can unlearn the pattern.",
    slug: "do-i-have-chronic-insomnia",
  },
  {
    title: "\"I Didn't Sleep a Wink\": The Clinical Science of Sleep State Misperception",
    description: "Think you didn't sleep a wink, but your partner heard you snore? Discover the clinical science of Sleep State Misperception and the \"First-Night Effect.\"",
    slug: "i-didnt-sleep-a-wink",
  },
  {
    title: "Is It OK to Nap in the Afternoon? (The Clinical Rules of Daytime Sleep)",
    description: "Is it OK to nap in the afternoon? Learn the clinical science of daytime napping, the 20-minute cap, and why insomniacs should use NSDR instead.",
    slug: "is-it-ok-to-nap-in-the-afternoon",
  },
  {
    title: "Paradoxical Intention: Why Trying to Stay Awake Can Cure Your Insomnia",
    description: "Sleep anxiety keeping you awake? Discover Paradoxical Intention, the clinical CBT-I technique that uses reverse psychology to cure insomnia and performance anxiety.",
    slug: "paradoxical-intention",
  },
  {
    title: "The Math of Insomnia: How to Calculate Your Sleep Efficiency",
    description: "What is a good Sleep Efficiency? Learn the clinical math behind insomnia recovery, the 15-minute titration rule, and why 85% is the gold standard.",
    slug: "the-math-of-insomnia",
  },
  {
    title: "What is NSDR (Non-Sleep Deep Rest)? And Why is it Better Than Napping?",
    description: "Learn why Non-Sleep Deep Rest (NSDR) is better than a daytime nap for repairing neurochemistry and restoring daytime energy.",
    slug: "what-is-nsdr-and-why-is-it-better-than-napping",
  },
  {
    title: "Why I Wake Up at Exactly 3 AM Every Night and Lie There Until Morning",
    description: "Learn what sleep maintenance insomnia actually feels like from the inside, and why your nervous system is specifically vulnerable at 3 AM.",
    slug: "why-i-wake-up-at-3-am-every-night",
  },
  {
    title: "Why Melatonin Does Absolutely Nothing for My Chronic Insomnia",
    description: "Learn why high doses of over-the-counter melatonin might be making your sleep worse and how to actually address hyperarousal.",
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
