import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import ArticlesList from "./ArticlesList";

export const metadata: Metadata = {
  title: "Sleep Science Articles — CBT-I Guides for Chronic Insomnia | Goodnight Companion",
  description: "Clinically-grounded articles on sleep pressure, stimulus control, sleep restriction, and the neuroscience of insomnia recovery. Written for exhausted people, not researchers.",
  alternates: {
    canonical: '/articles',
  },
};

const articles = [
  {
    title: "Why Can't I Sleep Even Though I'm Exhausted? Tired vs Sleepy Explained",
    description: "Being exhausted and being sleepy are not the same thing biologically. Here's the clinical distinction — and the exact sleep drive protocol to fix the mismatch tonight.",
    slug: "tired-vs-sleepy",
  },
  {
    title: "Can't Sleep at 2am? Emergency Triage — What to Do Right Now",
    description: "Stop trying to force it. Here is the exact step-by-step protocol for a 2am waking — from turning the clock away to when it's safe to return to bed, including what to do when it doesn't work the first time.",
    slug: "emergency-triage-cant-sleep-2am",
  },
  {
    title: "Does Magnesium Help With Sleep? What the Research Actually Says",
    description: "Magnesium glycinate and threonate support GABA pathways and reduce baseline anxiety — but they can't fix conditioned hyperarousal. Here's the honest, mechanism-first truth about what magnesium can and can't do.",
    slug: "magnesium-and-insomnia",
  },
  {
    title: "The 3P Model of Insomnia Explained: Predisposing, Precipitating & Perpetuating Factors",
    description: "Spielman's 3P Model shows exactly how a bad week of sleep becomes chronic insomnia — and why \"chronic\" doesn't mean permanent. Here's the clinical framework and what it means for your recovery.",
    slug: "the-3p-model-of-insomnia",
  },
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
  },
  {
    title: "Why My Body Feels Stuck in Fight-or-Flight Every Time I Try to Sleep",
    description: "After months of insomnia, your brain learns that your bed is dangerous. Here is the biology of conditioned hyperarousal and the behavioral tool that retrains your threat response.",
    slug: "why-my-body-feels-stuck-in-fight-or-flight",
  },
  {
    title: "Why I Followed Every Sleep Hygiene Rule Perfectly for a Year and It Did Nothing",
    description: "Sleep hygiene fixes bad habits in normal sleepers. It cannot fix a nervous system locked in fight-or-flight. Here is what you actually need instead — and why the ritual is making it worse.",
    slug: "why-i-followed-every-sleep-hygiene-rule-perfectly",
  },
  {
    title: "Why It Takes Me Three to Five Hours to Fall Asleep Every Single Night",
    description: "Sleep onset insomnia happens when sleep effort overpowers sleep pressure. The harder you try to force sleep, the more adrenaline floods your system. Here is the clinical fix.",
    slug: "why-it-takes-me-hours-to-fall-asleep",
  },
  {
    title: "Why CBT-I Didn't Work for Me the First Time (And What Was Actually Missing)",
    description: "Rigid, unguided CBT-I often fails because it spikes anxiety without psychological support. Here is why ACT-I is the missing piece — and why a bad night is data, not a verdict.",
    slug: "why-cbt-i-didnt-work-for-me",
  },
  {
    title: "Everything Starts Hurting When I Don't Sleep — The Physical Symptoms of Chronic Insomnia Nobody Warned Me About",
    description: "Discover why chronic sleep deprivation causes intense physical pain, from burning skin to nausea, and how hyperalgesia and inflammation explain your symptoms.",
    slug: "everything-starts-hurting-when-i-dont-sleep",
  },
  {
    title: "The Night Every Sleep Medication I Had Stopped Working at Once — What Happens When Your Brain Becomes Tolerant to Every Sedative",
    description: "When sleeping pills stop working, it is terrifying. Learn the biology of sedative tolerance, receptor downregulation, and how to treat underlying hyperarousal.",
    slug: "the-night-every-sleep-medication-stopped-working",
  },
  {
    title: "After 82 Hours Without Sleep I Started Seeing Shadow Figures by My Bed — What Severe Sleep Deprivation Hallucinations Feel Like From Inside",
    description: "Seeing shadow figures from lack of sleep? Learn the neuroscience behind sleep deprivation hallucinations, REM microsleeps, and when to seek emergency medical help.",
    slug: "after-82-hours-without-sleep-i-started-seeing-shadow-figures",
  },
  {
    title: "My Brain Turns Into a To-Do List the Second I Close My Eyes — Why Nighttime Overthinking Gets Louder the Harder You Fight It",
    description: "Why does your brain list tasks when you try to sleep? Discover the Zeigarnik Effect, how it triggers adrenaline, and use Constructive Worry to stop nighttime overthinking.",
    slug: "my-brain-turns-into-a-to-do-list",
  },
  {
    title: "I'm Not Afraid of Not Sleeping Anymore — I'm Afraid of Bedtime Itself. How My Bedroom Became a Place of Pure Dread",
    description: "Why do you feel intense dread before going to bed? Learn how Pavlovian conditioning triggers anticipatory anxiety and how an Environmental Reset can cure bedtime dread.",
    slug: "im-afraid-of-bedtime-itself",
  },
];

export default function ArticlesPage() {
  return (
    <main className="min-h-screen flex flex-col items-center p-4 md:p-12 relative overflow-hidden bg-cream text-ink">
      
      {/* Navigation */}
      <div className="w-full max-w-4xl z-10 mb-12">
        <Link 
          href="/" 
          className="inline-flex items-center text-ink-2 hover:text-ink transition-colors text-sm font-bold uppercase tracking-[0.16em]"
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
        <h1 className="text-4xl md:text-5xl font-cormorant font-light text-ink">
          Articles
        </h1>
        <p className="text-ink-2 text-base md:text-lg max-w-2xl mx-auto font-sans">
          Insights, science, and practical strategies to help you rebuild your sleep architecture and trust your bed again.
        </p>
      </div>

      <ArticlesList articles={articles} />
      
    </main>
  );
}
