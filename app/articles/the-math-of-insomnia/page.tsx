import React from "react";
import Link from "next/link";
import FaqAccordion from "../../components/FaqAccordion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sleep Efficiency Formula: The CBT-I Method for Calculating and Fixing Your Score",
  description: "Sleep Efficiency is the one clinical metric that actually measures insomnia recovery. Learn the exact CBT-I formula, why 85% is the clinical target, and the safe week-by-week protocol to get there.",
  alternates: {
    canonical: '/articles/the-math-of-insomnia',
  },
  openGraph: {
    title: "Sleep Efficiency Formula: The CBT-I Method for Calculating and Fixing Your Score",
    description: "Sleep Efficiency is the one clinical metric that actually measures insomnia recovery. Learn the exact CBT-I formula, why 85% is the clinical target, and the safe week-by-week protocol to get there.",
    url: "https://www.thegoodnightcompanion.com/articles/the-math-of-insomnia",
    siteName: "The Good Night Companion",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sleep Efficiency Formula: The CBT-I Method for Calculating and Fixing Your Score",
    description: "Sleep Efficiency is the one clinical metric that actually measures insomnia recovery. Learn the exact CBT-I formula, why 85% is the clinical target, and the safe week-by-week protocol to get there.",
    images: ["/twitter-image.jpg"],
  },
};

const faqs = [
  { question: "What is a good Sleep Efficiency score?", answer: "In CBT-I clinical guidelines, the target Sleep Efficiency score is 85% or above. A score of 85%–90% is considered the optimal therapeutic range — efficient enough to indicate consolidated sleep, with enough room to gradually expand the sleep window. Scores above 90% are a signal to expand your window (move bedtime 15 minutes earlier). Scores consistently below 85% indicate fragmented sleep and typically warrant a modest compression of the sleep window in the following week." },
  { question: "How do I calculate my Sleep Efficiency?", answer: "Divide your Total Sleep Time (the time you were actually asleep) by your Time in Bed (the full window from getting into bed to getting up), then multiply by 100. For example: if you spent 7.5 hours in bed but were genuinely asleep for 6 hours, your Sleep Efficiency is 6 ÷ 7.5 × 100 = 80%. Crucially, always base this on a 7-day average rather than a single night — one night's data fluctuates too much to be clinically meaningful." },
  { question: "Why is spending 10 hours in bed bad for insomnia?", answer: "When you extend your time in bed far beyond your actual sleep capacity, you dilute your Homeostatic Sleep Drive — the biological pressure that makes deep, consolidated sleep possible. Instead of sleeping more, your fixed amount of sleep becomes spread thin and fragmented across a longer window, with more time spent lying awake and anxious. This actively reinforces the brain's conditioned association between the bed and wakefulness. The clinical goal is the opposite: a tightly compressed, highly efficient sleep window that trains the brain to sleep quickly and deeply when given the opportunity." },
  { question: "What is the absolute minimum time I should spend in bed?", answer: "The clinical safety floor established in sleep medicine is 5.5 hours. No matter how low your Sleep Efficiency score is, you must never restrict your Time in Bed below this threshold. Sleep deprivation at this level begins to carry genuine physiological and cognitive risks, and is specifically contraindicated for anyone driving, operating machinery, or managing underlying health conditions. If you reach the 5.5-hour floor and your Sleep Efficiency is still below 85%, the protocol shifts — you hold steady at 5.5 hours and focus on reducing nighttime hyperarousal rather than further compressing the window." },
  { question: "What is the difference between Sleep Efficiency and total sleep time?", answer: "Total Sleep Time (TST) is simply the number of hours you are actually asleep. Sleep Efficiency is the ratio of that sleep to the total time you spend in bed — it measures the density and consolidation of your sleep, not just its duration. This distinction is critical in insomnia recovery: someone sleeping 6 hours across a 7-hour window (86% efficiency) has far healthier sleep architecture than someone sleeping 6 hours across a 10-hour window (60% efficiency), even though the total sleep time is identical. CBT-I focuses on improving efficiency first, then gradually expanding total sleep time." }
];

export default function Article4Page() {
  return (
    <main className="min-h-screen flex flex-col items-center p-6 md:p-24 relative bg-[var(--background)]">
      
      {/* Navigation */}
      <div className="w-full max-w-3xl z-10 mb-12 flex justify-between items-center">
        <Link 
          href="/articles" 
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
          Back to Articles
        </Link>
        <Link 
          href="/" 
          className="inline-flex items-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm font-bold uppercase tracking-widest"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          Home
        </Link>
      </div>

      <article className="w-full max-w-3xl z-10 bg-white p-8 md:p-16 rounded-[2rem] shadow-sm mb-20 shadow-[rgba(0,0,0,0.03)_0px_10px_30px]">
        
        <header className="mb-12">
          {/* Authority Badge */}
          <div className="inline-flex flex-wrap items-center gap-2 bg-[#8da399]/10 border border-[#8da399]/20 text-[#8da399] text-[10px] md:text-xs font-bold px-4 py-2 rounded-full mb-6 tracking-widest uppercase">
            <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 1L1 3.5V7C1 10.0376 3.41 12.8776 6.5 13.5C9.59 12.8776 12 10.0376 12 7V3.5L6.5 1Z" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>
            CBT-I evidence-based · NHS-endorsed method · Clinically validated by the AASM
          </div>
          
          <h1 className="text-3xl md:text-5xl font-serif text-[var(--text-primary)] leading-tight mb-8">
            Sleep Efficiency: The Clinical Formula, the 85% Target, and the CBT-I Protocol to Fix It
          </h1>

          <div className="h-[1px] w-full bg-[#8da399]/20" />
        </header>

        <div className="text-[var(--text-secondary)] font-sans leading-relaxed space-y-6 text-lg">

          {/* QUICK ANSWER */}
          <div className="bg-[#f9f8f6] p-6 rounded-[1rem] border border-[#8da399]/20 my-6">
            <p className="text-[10px] font-bold tracking-widest uppercase text-[#8da399] mb-2">Quick Answer</p>
            <h3 className="font-serif text-[var(--text-primary)] text-xl mb-4">
              Sleep Efficiency (SE) is calculated by dividing your Total Sleep Time by your Time in Bed, then multiplying by 100. The clinical target in CBT-I is 85%.
            </h3>
            <p className="font-sans text-[var(--text-secondary)] text-lg mb-4">
              But the formula is only useful if you know how to act on the number safely — and most people don&apos;t.
            </p>
            <p className="text-sm text-[var(--text-secondary)] italic border-t border-[#8da399]/20 pt-4">
              Below is the exact week-by-week titration protocol, the 5.5-hour safety floor you must never cross, and the reason a single night&apos;s data will lead you badly astray.
            </p>
          </div>

          <p className="text-xl md:text-2xl font-serif text-[var(--text-primary)] leading-snug">
            If you have an analytical mind, insomnia is uniquely maddening because it feels unmeasurable.
          </p>
          
          <p>
            You know you feel terrible, but your smartwatch gives you a &quot;Sleep Score&quot; that seems disconnected from reality — sometimes cheerfully high on your worst nights, sometimes crushing on mornings you felt relatively rested.
          </p>

          <p>
            If you lean more emotional than analytical, those scores can function as a daily verdict — a failing grade delivered before you have even had your first coffee.
          </p>

          <p>
            Clinical sleep medicine ignores wearable scores entirely. Instead, it uses a single manual metric, calculated from your own data, that actually tracks recovery. It is called <strong>Sleep Efficiency (SE)</strong>, and it is the only number that matters when rebuilding your sleep architecture.
          </p>

          {/* AUTHORITY PANEL */}
          <div className="bg-[#8da399]/10 border-l-4 border-[var(--primary)] p-6 rounded-r-lg my-8">
            <h3 className="font-serif text-[var(--text-primary)] text-xl font-semibold mb-3">What the Clinical Guidelines Say About Sleep Efficiency</h3>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-3">
              Sleep Efficiency is not a wellness concept — it is a formal clinical metric used in <strong>CBT-I (Cognitive Behavioural Therapy for Insomnia)</strong>, the treatment endorsed as the first-line intervention for chronic insomnia by the <strong>NHS</strong>, the <strong>American Academy of Sleep Medicine (AASM)</strong>, and the <strong>National Sleep Foundation</strong>.
            </p>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed">
              The 85% threshold was established through the foundational clinical work of Spielman, Saskin, and Thorpy (1987) — the same researchers behind Sleep Restriction Therapy — and has been the standard benchmark in sleep medicine for nearly four decades. When a sleep clinician or CBT-I therapist says your sleep is &quot;improving,&quot; they are measuring it against this number.
            </p>
          </div>

          <p>
            Understanding your Sleep Efficiency gives you the same lens your clinician would use — and the same protocol for acting on it safely.
          </p>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">
            The Problem: Why Spending 10 Hours in Bed for 6 Hours of Sleep Destroys Recovery
          </h2>

          <p>
            When insomnia begins, the intuitive response is to spend more time in bed. If you want 8 hours but anxiety is keeping you awake, you start getting into bed at 9:00 PM and lying there until 7:00 AM — a 10-hour window — in hopes of catching more sleep.
          </p>

          <p>
            Biologically, this is one of the most damaging things you can do to your sleep architecture.
          </p>

          <blockquote className="border-l-4 border-[var(--primary)] pl-6 italic text-xl text-[var(--text-primary)] my-8">
            By stretching your time in bed, you dilute your Homeostatic Sleep Drive — the biological pressure that makes deep, consolidated sleep possible. Your 6 hours of actual sleep doesn&apos;t become 8. It becomes 6 hours spread thin across a 10-hour window, fragmented, shallow, and peppered with long periods of frustrated wakefulness.
          </blockquote>

          <p>
            Sleep Efficiency measures this density problem directly. It is not about how long you sleep — it is about what proportion of your time in bed is actually spent sleeping.
          </p>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">
            The Sleep Efficiency Formula
          </h2>

          <p>
            The calculation used in CBT-I clinical practice is:
          </p>

          <div className="bg-[#f9f8f6] p-6 rounded-xl border border-[#8da399]/20 my-6 text-center">
            <h3 className="font-serif text-[var(--primary)] text-2xl">
              Sleep Efficiency (%) = (Total Sleep Time ÷ Time in Bed) × 100
            </h3>
          </div>

          <ul className="space-y-4 my-6 list-disc pl-6">
            <li>
              <strong>Total Sleep Time (TST)</strong> is your estimated actual sleep — the time you were genuinely asleep, not just lying in bed.
            </li>
            <li>
              <strong>Time in Bed (TIB)</strong> is the full window from when you get into bed to when you finally get up.
            </li>
          </ul>

          <p>
            A quick example: You get into bed at 11:00 PM and get up at 7:00 AM — 8 hours in bed. But you estimate you were actually asleep for about 5 hours. That gives you: <strong>5 ÷ 8 × 100 = 62.5%</strong>.
          </p>

          <p>
            A Sleep Efficiency of 62.5% is the hallmark of moderate-to-severe insomnia. It means 37.5% of your time in bed — nearly three hours — was spent lying awake.
          </p>

          <p>
            The clinical target is to bring this number to <strong>85% or above</strong>.
          </p>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">
            The Safety Net: Always Use a Weekly Average
          </h2>

          <p>
            If you calculate your Sleep Efficiency after one terrible night where you slept only 3 hours across 8 hours in bed, you will get a score of 37.5%. For an analytical mind, this triggers the urge to make drastic corrections. For an anxious mind, it induces panic.
          </p>

          <p>
            In clinical sleep medicine, <strong>a single night&apos;s data is meaningless</strong>. Human sleep naturally fluctuates night to night due to stress, hormones, environment, and dozens of other factors entirely unrelated to your recovery progress.
          </p>

          <p className="mt-6 mb-3 font-serif text-xl text-[var(--text-primary)]">How to calculate your baseline correctly:</p>
          <div className="space-y-6 my-8">
            <div className="bg-[#f9f8f6] border border-[#8da399]/20 p-6 rounded-[1rem] flex gap-5 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-[var(--primary)] text-white rounded-full flex items-center justify-center font-sans font-bold text-sm">1</div>
              <div>
                <h4 className="font-serif text-[var(--text-primary)] text-xl mb-2">Track for 7 days first</h4>
                <p className="text-sm m-0">Using a simple sleep diary, record your Time in Bed and estimated Total Sleep Time each morning. Do not change your habits yet. Just observe.</p>
              </div>
            </div>
            
            <div className="bg-[#f9f8f6] border border-[#8da399]/20 p-6 rounded-[1rem] flex gap-5 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-[var(--primary)] text-white rounded-full flex items-center justify-center font-sans font-bold text-sm">2</div>
              <div>
                <h4 className="font-serif text-[var(--text-primary)] text-xl mb-2">Find your weekly averages</h4>
                <p className="text-sm m-0">Add up your seven Total Sleep Times and divide by 7. Do the same for your seven Time in Bed figures.</p>
              </div>
            </div>

            <div className="bg-[#f9f8f6] border border-[#8da399]/20 p-6 rounded-[1rem] flex gap-5 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-[var(--primary)] text-white rounded-full flex items-center justify-center font-sans font-bold text-sm">3</div>
              <div>
                <h4 className="font-serif text-[var(--text-primary)] text-xl mb-2">Do the calculation</h4>
                <p className="text-sm m-0">Divide your Average Total Sleep Time by your Average Time in Bed and multiply by 100.</p>
              </div>
            </div>
          </div>

          <p>
            Using a weekly average smooths out the emotional spike of a single bad night and gives you a grounded, realistic picture of where your sleep actually is. This is the number you act on — never a single night&apos;s data.
          </p>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">
            The Week-by-Week Titration Protocol
          </h2>

          <p>
            Once you have your weekly average Sleep Efficiency, use it to make one small, calibrated adjustment to your sleep window. The critical rule is that all adjustments are made in 15-minute increments only — and always by shifting your bedtime, never your morning Anchor Time.
          </p>

          <p>
            Trying to restrict your sleep window by 60 or 90 minutes in a single move will shock your nervous system and create more anxiety, not less. Gradual titration is both safer and more effective.
          </p>

          <ul className="space-y-6 my-8 list-none p-0">
            <li className="bg-[#f2f0e9] p-5 rounded-xl text-[var(--text-secondary)]">
              <strong className="text-[var(--text-primary)] text-lg block mb-1">Above 90% — Expand your window.</strong>
              Your sleep is highly efficient and well-consolidated. Move your bedtime 15 minutes earlier. You have earned a slightly larger opportunity to rest.
            </li>
            <li className="bg-[#8da399]/10 border-l-4 border-[var(--primary)] p-5 rounded-r-xl text-[var(--text-secondary)]">
              <strong className="text-[var(--text-primary)] text-lg block mb-1">85%–90% — Hold steady.</strong>
              This is the clinical sweet spot and the goal. Keep your sleep window exactly as it is. This is not stagnation — it is the target state. Maintain it.
            </li>
            <li className="bg-[#f2f0e9] p-5 rounded-xl text-[var(--text-secondary)]">
              <strong className="text-[var(--text-primary)] text-lg block mb-1">Below 85% for the first time — Hold and observe.</strong>
              A single below-threshold week is not a trend. Do not panic, and do not shrink your window yet. Hold your current window and collect another 7 days of data before making any decision.
            </li>
            <li className="bg-[#f9f8f6] border border-[#8da399]/20 p-5 rounded-xl text-[var(--text-secondary)]">
              <strong className="text-[var(--text-primary)] text-lg block mb-1">Below 85% for two consecutive weeks — Consolidate.</strong>
              Your sleep is genuinely fragmented. Move your bedtime 15 minutes later, shrinking your window slightly. This consolidates the sleep you are getting into a denser, higher-quality block.
            </li>
          </ul>

          <p>
            This is the complete clinical titration loop. Run it weekly. One adjustment at a time. Always protect your Anchor Time.
          </p>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">
            The 5.5-Hour Safety Floor
          </h2>

          <p>
            Sleep Restriction works by building sleep pressure — but there is an absolute limit to how far you can safely compress your window.
          </p>

          <p>
            The clinical rule: <strong>never restrict your Time in Bed below 5.5 hours</strong>, regardless of what your Sleep Efficiency score says. This floor is established in the clinical literature and exists to protect core biological and cognitive function. Sleep deprivation below this threshold carries real risks — particularly for anyone driving, operating machinery, or managing significant health conditions.
          </p>

          <p>
            If your titration brings you to the 5.5-hour floor and your Sleep Efficiency is still below 85%, this is important information. It means the remaining challenge is not your schedule — it is the Conditioned Hyperarousal you experience during the night. The prescription changes at this point: hold steady at 5.5 hours, stop shrinking the window, and shift your focus entirely to the contingency tools for managing midnight wakefulness and daytime fatigue.
          </p>

          <p className="text-sm my-4 italic">
            (For the full contingency plan for midnight wakefulness, see: <Link href="/articles/the-20-minute-rule" className="text-[var(--primary)] font-bold hover:underline">The 20-Minute Rule — The NHS &amp; CBT-I Guideline Explained</Link>.)
          </p>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">
            Use the Maths as a Compass, Not a Verdict
          </h2>

          <p>
            The most important reframe in this entire process is this: Sleep Efficiency is directional information, not a daily judgment.
          </p>

          <p>
            A score of 72% does not mean last night was a failure. It means your current window is slightly too wide for your current sleep capacity, and you should consider moving bedtime 15 minutes later this week. That is all. It is a compass bearing, not a grade.
          </p>

          <p>
            Stop measuring your nights by the emotional weight of how you feel at 6:00 AM. Collect your data across the week, calculate your average, consult the titration chart, and make one small, calm adjustment. Then repeat.
          </p>

          <p>
            This is how sleep clinicians help people recover from years of chronic insomnia — not through willpower or perfect nights, but through patient, data-guided navigation of the body&apos;s own biology.
          </p>

          {/* FINAL CTA */}
          <div className="bg-[#f9f8f6] p-8 md:p-12 rounded-[1.5rem] mt-16 text-center shadow-sm border border-[#8da399]/20">
            <h3 className="text-3xl font-serif text-[var(--text-primary)] mb-4">If You Are Ready to Start Tracking</h3>
            <p className="mb-8 mx-auto max-w-lg text-[var(--text-secondary)]">
              Understanding Sleep Efficiency is the foundation of the entire CBT-I recovery protocol — but calculating it manually every week, knowing when to adjust, and navigating the protocol correctly over 90 days requires a system, not just a formula.
            </p>
            <p className="mb-8 mx-auto max-w-lg text-[var(--text-secondary)]">
              The Goodnight Companion is a 90-day guided journal that walks you through the complete CBT-I arc — including daily sleep logs formatted for this exact calculation, the titration protocol built into the weekly review structure, and the safety guidelines at every step.
            </p>
            <Link 
              href="/join-the-program" className="btn-primary inline-block w-auto !px-10 hover:!bg-[var(--primary-dark)]"
            >
              Get The Goodnight Companion →
            </Link>
          </div>

          <FaqAccordion faqs={faqs} title="People Also Ask" />

          <div className="mt-16 pt-8 border-t border-[#8da399]/20">
            <h2 className="text-xl font-serif text-[var(--text-primary)] mb-6">Scientific References &amp; Further Reading</h2>
            <ul className="list-disc pl-6 space-y-3 mb-12 text-sm text-[var(--text-secondary)]">
              <li>
                <strong>Sleep Efficiency as a Clinical Marker:</strong> Reed, D. L., &amp; Sacco, W. P. (2016). Measuring Sleep Efficiency: What Should the Denominator Be? <em>Journal of Clinical Sleep Medicine, 12(2)</em>, 263–266. Examines the precise clinical definition of Sleep Efficiency and its role as a recovery metric.
              </li>
              <li>
                <strong>The 85% Threshold and Sleep Restriction Therapy:</strong> Spielman, A. J., Saskin, P., &amp; Thorpy, M. J. (1987). Treatment of chronic insomnia by restriction of time in bed. <em>Sleep, 10(1)</em>, 45–56. The landmark clinical study establishing Sleep Restriction Therapy and the 85% efficiency threshold as a titration benchmark.
              </li>
              <li>
                <strong>The Clinical Safety Floor:</strong> Kyle, S. D., et al. (2015). Sleep restriction therapy for insomnia is associated with reduced objective total sleep time, increased daytime somnolence, and objectively impaired vigilance. <em>Sleep, 38(11)</em>, 1845–1853. Documents the physiological effects of sleep restriction and the clinical basis for the 5.5-hour safety floor.
              </li>
              <li>
                <strong>CBT-I as First-Line Treatment:</strong> Qaseem, A., et al. (2016). Management of Chronic Insomnia Disorder in Adults: A Clinical Practice Guideline. <em>Annals of Internal Medicine</em>. American College of Physicians guideline formally recommending CBT-I — including Sleep Restriction Therapy and Sleep Efficiency tracking — as the first-line treatment for chronic insomnia.
              </li>
            </ul>
          </div>

          <div className="mt-10 p-5 bg-[#f2f0e9] rounded-lg text-xs text-[var(--text-secondary)] leading-relaxed">
            <strong>Disclaimer:</strong> This article is an educational resource and does not constitute medical advice, diagnosis, or clinical therapy. This content describes Sleep Restriction Therapy (SRT), which is NOT recommended for individuals with Bipolar Disorder, Seizure Disorders or Epilepsy, untreated Sleep Apnoea, or those in safety-sensitive occupations. SRT causes temporary daytime sleepiness — use extreme caution when driving or operating machinery. If you are navigating severe mental health challenges or suspect an underlying sleep disorder, please consult a qualified healthcare provider before altering your sleep schedule.
          </div>

        </div>
      </article>
      
    </main>
  );
}
