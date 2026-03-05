import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Math of Insomnia: How to Calculate Your Sleep Efficiency (And Why 85% is the Goal)",
  description: "What is a good Sleep Efficiency? Learn the clinical math behind insomnia recovery, the 15-minute titration rule, and why 85% is the gold standard.",
};

export default function Article12Page() {
  return (
    <main className="min-h-screen flex flex-col items-center p-6 md:p-24 relative bg-[var(--background)]">
      <div className="w-full max-w-3xl z-10 mb-12">
        <Link 
          href="/articles" 
          className="inline-flex items-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm font-bold uppercase tracking-widest"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="m15 18-6-6 6-6"/></svg>
          Back to Articles
        </Link>
      </div>

      <article className="w-full max-w-3xl z-10 bg-white p-8 md:p-16 rounded-[2rem] shadow-sm mb-20 shadow-[rgba(0,0,0,0.03)_0px_10px_30px]">
        <header className="mb-12">
          <p className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-[#8da399] mb-4">
            Sleep Science
          </p>
          <h1 className="text-3xl md:text-5xl font-serif text-[var(--text-primary)] leading-tight mb-8">
            The Math of Insomnia: How to Calculate Your Sleep Efficiency (And Why 85% is the Goal)
          </h1>
          <div className="h-[1px] w-full bg-[#8da399]/20" />
        </header>

        <div className="text-[var(--text-secondary)] font-sans leading-relaxed space-y-6 text-lg">
          <p className="text-xl md:text-2xl font-serif text-[var(--text-primary)] leading-snug">
            If you have an analytical mind, dealing with insomnia is uniquely frustrating because sleep feels so unmeasurable. You know you feel terrible, but when you look at the &quot;Sleep Score&quot; on your smartwatch, the data often feels completely disconnected from reality.
          </p>
          <p>
            If you lean more toward the emotional side—if you are exhausted, anxious, and deeply sensitive to how you feel each morning—those smartwatch scores can feel like a daily failing grade that instantly ruins your mood.
          </p>
          <p>
            Instead of relying on a highly flawed wearable device, clinical sleep medicine uses a very specific, manual mathematical formula to track insomnia recovery. It is called Sleep Efficiency (SE).
          </p>
          <p className="font-medium text-[var(--primary)]">
            Sleep Efficiency is the only metric that actually matters when rebuilding your sleep architecture. Here is the exact clinical formula to calculate it, the slow-titration chart you must follow, and the non-negotiable safety rules for using this data to fix your nights.
          </p>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">The Problem: Spending 10 Hours in Bed for 6 Hours of Sleep</h2>
          <p>
            When people start struggling with sleep, their logical instinct is to spend more time in bed to increase their chances of resting. If you want 8 hours of sleep, but it takes you two hours to fall asleep, you might start getting into bed at 9:00 PM and staying there until 7:00 AM (a 10-hour window).
          </p>
          <p>
            Biologically, this is the worst thing you can do.
          </p>
          <p>
            By stretching your time in bed, you dilute your homeostatic sleep pressure (your biological hunger for sleep). Your 6 hours of actual sleep becomes spread out and heavily fragmented across a 10-hour window. This is where Sleep Efficiency comes in. It measures the density and quality of your sleep, rather than just the total duration.
          </p>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">The Formula: How to Calculate Sleep Efficiency</h2>
          <p>
            Sleep Efficiency is a simple ratio: it is the percentage of time you spend in bed actually sleeping, compared to the time you spend in bed awake, tossing, and turning.
          </p>
          <p>
            Here is the clinical formula used in Cognitive Behavioral Therapy for Insomnia (CBT-I):
          </p>
          <div className="bg-[#f9f8f6] p-6 rounded-[1rem] border border-[#8da399]/20 my-6 text-center font-serif text-xl md:text-2xl text-[var(--text-primary)] shadow-inner">
            Sleep Efficiency = (Total Sleep Time ÷ Time in Bed) × 100
          </div>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">The Safety Net: The Rule of Averages</h2>
          <p>
            If you calculate your Sleep Efficiency after one horrific night where you only slept 3 hours, your percentage will be terrifyingly low. For an analytical mind, this bad data will trigger an urge to drastically &quot;fix&quot; the problem. For an anxious mind, this number will induce a full-blown panic attack.
          </p>
          <p>
            In clinical sleep medicine, a sample size of one night is useless data. Human sleep naturally fluctuates. You cannot calculate this based on a single night.
          </p>
          
          <div className="space-y-4 my-6">
            <h3 className="font-serif text-[var(--text-primary)] text-xl mb-2">How to calculate your baseline correctly:</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Track for 7 Days:</strong> Use a simple sleep diary to track your raw data for a week. Do not change your habits yet; just observe.</li>
              <li><strong>Find your Averages:</strong> Add up your Total Sleep Time for the week and divide by 7 to get your Average Total Sleep Time. Do the same for your Time in Bed to get your Average Time in Bed.</li>
              <li><strong>Do the Math (Or Let Us Do It):</strong> You can manually divide your Average Total Sleep Time by your Average Time in Bed, and multiply by 100. (Or, to make it completely stress-free, just plug your weekly numbers directly into our free clinical <Link href="/tools/calculator" className="text-[var(--primary)] font-bold hover:underline">Sleep Efficiency Calculator</Link>).</li>
            </ul>
          </div>
          <p>
            By using a weekly average, you smooth out the emotional spikes of a single bad night. It provides a grounded, realistic picture of your baseline.
          </p>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">The 3-Step Weekly Protocol (How to Adjust)</h2>
          <p>
            Once you have your weekly average, you are going to use it to gently adjust your sleep window.
          </p>
          <p>
            The biggest mistake people make here is trying to restrict their sleep too fast. If you suddenly cut two hours out of your sleep window, you will shock your nervous system. In The Goodnight Companion protocol, we only ever make adjustments in 15-minute increments.
          </p>
          
          <div className="bg-[#f9f8f6] p-6 rounded-[1rem] border border-[#8da399]/20 my-6">
            <h3 className="font-serif text-[var(--text-primary)] text-xl mb-4">Compare your weekly SE to this clinical chart to determine your next move:</h3>
            <ul className="space-y-4 text-sm">
              <li><span className="font-bold text-green-700">Above 90%: EXPAND.</span> Your sleep is highly efficient and consolidated. Move your bedtime 15 minutes earlier to give your body a slightly larger opportunity to rest.</li>
              <li><span className="font-bold text-blue-700">85% – 90%: HOLD STEADY.</span> This is our target sweet spot! Keep your sleep window exactly the same. This isn&apos;t a sign of being &quot;stuck&quot;; it is the goal.</li>
              <li><span className="font-bold text-yellow-600">Below 85% (For the first time): HOLD & OBSERVE.</span> A single &quot;off&quot; week is not a trend. Do not panic, and do not shrink your window yet. Simply hold steady and observe for 7 more days.</li>
              <li><span className="font-bold text-red-600">Below 85% (For 2 weeks in a row): CONSOLIDATE.</span> Your sleep is fragmented. Shrink your sleep window by moving your bedtime 15 minutes later. This ensures the time you spend in bed is spent in deep sleep, not fighting the clock.</li>
            </ul>
          </div>
          <p className="text-sm bg-[#f2f0e9] p-4 rounded-xl mt-6 italic">
            <strong>Important Note:</strong> Your morning &quot;Anchor Time&quot; alarm must stay exactly the same every single day. All 15-minute adjustments are made by shifting your bedtime.
          </p>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">The &quot;Safety Floor&quot; (Crucial Medical Parameter)</h2>
          <p>
            To increase your Sleep Efficiency, consolidating your window is highly effective. However, you cannot take this math to a dangerous extreme.
          </p>
          <p>
            <strong>The Clinical Safety Floor:</strong> In sleep medicine, you must never restrict your Time in Bed to less than 5.5 Hours, regardless of what the math says.
          </p>
          <p>
            If you reach the 5.5-hour floor and your SE is still below 85%, do not panic. This is simply a signal. It means the challenge is no longer your schedule, but the hyperarousal you feel during the night.
          </p>
          <p>
            <strong>Your Action:</strong> HOLD STEADY at 5.5 hours. Stop shrinking the window. Instead, focus entirely on your daytime resilience tools to manage fatigue, and use your contingency plans to manage midnight wakefulness.
          </p>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">Use the Math as a Compass, Not a Weapon</h2>
          <p>
            Your Sleep Efficiency is a compass. It tells you when your sleep is fragmented enough to warrant staying up 15 minutes later, and when your sleep is solid enough to reward yourself with an earlier bedtime.
          </p>
          <p>
            Stop judging your nights by the emotional weight of a single bad morning. Collect your data, find your average, and let the math guide your recovery at a safe, gentle pace.
          </p>

          <hr className="my-12 border-[#8da399]/20" />
          
          <div className="bg-[#f9f8f6] p-8 rounded-[1.5rem] mt-12 text-center shadow-sm">
            <h3 className="text-2xl font-serif text-[var(--text-primary)] mb-4">Stop Fighting. Start Healing.</h3>
            <p className="mb-6 mx-auto max-w-lg">
              Ready to start tracking your data correctly? Calculating your Sleep Efficiency is the very first step.<br/><br/>The Goodnight Companion system gives you the exact daily logs to track your data, and the step-by-step instructions to navigate your recovery safely.
            </p>
            <Link 
              href="https://www.amazon.com/dp/B0GQTGFSG7" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block w-auto !px-8 hover:!bg-[var(--primary-dark)]"
            >
              Get The Goodnight Companion
            </Link>
          </div>

          <h2 className="text-xl font-serif text-[var(--text-primary)] mt-12 mb-4">Scientific References & Further Reading</h2>
          <ul className="list-disc pl-6 space-y-3 mb-12 text-sm">
            <li><strong>Sleep Efficiency as a Clinical Marker:</strong> Reed, D. L., & Sacco, W. P. (2016). Measuring Sleep Efficiency: What Should the Denominator Be? <em>Journal of Clinical Sleep Medicine</em>, 12(2), 263-266.</li>
            <li><strong>The 85% Threshold & CBT-I:</strong> Spielman, A. J., Saskin, P., & Thorpy, M. J. (1987). Treatment of chronic insomnia by restriction of time in bed. <em>Sleep</em>, 10(1), 45-56.</li>
            <li><strong>The Clinical Safety Floor:</strong> Kyle, S. D., et al. (2015). Sleep restriction therapy for insomnia is associated with reduced objective total sleep time, increased daytime somnolence, and objectively impaired vigilance. <em>Sleep</em>, 38(11), 1845-1853.</li>
          </ul>
          
          <p className="text-xs opacity-60 mt-12 leading-relaxed">
            <strong>Disclaimer:</strong> This article is an educational resource and does not constitute medical advice. This program utilizes Sleep Restriction Therapy (SRT). This technique is NOT recommended for individuals with Bipolar Disorder, Seizure Disorders/Epilepsy, untreated Sleep Apnea, or those in safety-sensitive occupations. SRT causes temporary daytime sleepiness; use extreme caution when driving. If you are navigating severe mental health challenges or suspect an underlying sleep disorder, please consult a qualified healthcare provider before altering your sleep schedule.
          </p>

        </div>
      </article>
      
    </main>
  );
}
