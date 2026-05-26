import React from "react";
import Link from "next/link";
import FaqAccordion from "../../components/FaqAccordion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Fix Your Sleep Schedule in 24 Hours (And Why It Might Not Fix Your Insomnia)",
  description: "Can you reset your sleep schedule quickly? Yes — if your only problem is circadian misalignment. But if you lie awake for hours despite being exhausted, your problem is hyperarousal.",
};

const faqs = [
  {
    question: "Can I reset my sleep schedule in one day?",
    answer: "Yes, if your only issue is circadian misalignment (not hyperarousal or chronic insomnia). Using an all-nighter to build massive sleep pressure, combined with bright morning light exposure and a fixed wake time, can forcibly reset your internal clock within 24-48 hours."
  },
  {
    question: "Why can't I sleep even after fixing my sleep schedule?",
    answer: "If you fixed your schedule but still lie awake anxious for hours, your problem was never your circadian rhythm. You likely have conditioned hyperarousal — a nervous system response where your brain interprets your bed as a threat. This requires behavioural therapy (CBT-I), not schedule adjustments."
  },
  {
    question: "How long does it take to fix a messed up sleep schedule?",
    answer: "For pure circadian misalignment, 3-7 days with strict light exposure and a fixed wake time. For chronic insomnia with hyperarousal, 4-8 weeks using sleep restriction therapy and stimulus control to rebuild your sleep architecture."
  },
  {
    question: "Is it better to stay up all night or sleep a few hours?",
    answer: "If you're attempting a circadian reset, staying up is more effective because it builds maximum sleep pressure. But if you have chronic insomnia, an all-nighter can spike anxiety and make hyperarousal worse. The answer depends entirely on whether your problem is your schedule or your nervous system."
  },
  {
    question: "What's the fastest way to reset my circadian rhythm?",
    answer: "Bright light exposure (10,000 lux) for 30-60 minutes within 30 minutes of your target wake time, combined with total light avoidance 2-3 hours before your target bedtime. Light is the master signal your suprachiasmatic nucleus uses to set your internal clock."
  }
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
            <span>Circadian Science · CBT-I Evidence-Based · Process C & S Regulation</span>
          </div>

          <p className="text-[10px] md:text-xs font-bold tracking-[0.16em] uppercase text-sage mb-4">
            Sleep Science
          </p>
          <h1 className="text-3xl md:text-5xl font-cormorant font-light text-ink leading-tight mb-8">
            How to Fix Your Sleep Schedule in 24 Hours (And Why It Might Not Fix Your Insomnia)
          </h1>

          <div className="h-[1px] w-full bg-[#8da399]/20" />
        </header>

        <div className="text-ink-2 font-sans leading-relaxed space-y-6 text-lg">

          {/* Quick Answer */}
          <div className="bg-[#f9f8f6] p-6 rounded-[1rem] border border-rule my-6">
            <p className="text-[10px] font-bold tracking-[0.16em] uppercase text-sage mb-2">Quick Answer</p>
            <h3 className="font-serif font-medium text-ink text-xl mb-4">
              Can you reset your sleep schedule quickly?
            </h3>
            <p className="font-sans text-ink-2 text-lg mb-4">
              Yes — if your only problem is circadian misalignment (going to bed at 3 AM when you need to wake at 7 AM), a 24-hour protocol using light exposure, fasting, and an anchor wake time can forcibly reset your internal clock. But if you lie awake for hours despite being exhausted, or wake up at 3 AM unable to fall back asleep, your problem isn't your schedule. It's hyperarousal — and no amount of sleep scheduling will fix a nervous system stuck in fight-or-flight.
            </p>
          </div>

          <p className="text-xl md:text-2xl font-serif font-medium text-ink leading-snug">
            You stayed up late for weeks — maybe finishing a project, binge-watching a series, or just doomscrolling until 4 AM. Now you need to wake up at 7 AM for work, but your body is convinced it's the middle of the night.
          </p>
          <p>
            Or maybe it's the opposite. You've been going to bed at 9 PM like clockwork, doing everything "right," but you still lie there staring at the ceiling for three hours.
          </p>
          <p>
            One of these is a scheduling problem. The other is a nervous system problem. And if you treat the wrong one, you'll waste weeks of effort on a fix that was never going to work.
          </p>
          <p>
            Here is the 24-hour protocol to reset your circadian rhythm — and the clinical litmus test to know whether your problem is actually your schedule, or something far deeper.
          </p>

          <h2 className="text-3xl font-cormorant font-light text-ink mt-16 mb-8">The Biology: Schedule vs. System</h2>
          <p>
            Your body operates on a 24-hour internal clock called the <strong>Circadian Rhythm</strong>, controlled by a cluster of neurons in your brain called the suprachiasmatic nucleus (SCN). This clock governs when you feel alert and when you feel sleepy by regulating two primary systems:
          </p>
          <p>
            <strong>Process C (Circadian Rhythm):</strong> The biological clock that sets your sleep-wake cycle based on light exposure. It controls when your body releases cortisol (to wake you up) and melatonin (to make you sleepy).
          </p>
          <p>
            <strong>Process S (Sleep Pressure):</strong> The biological "hunger" for sleep that builds the longer you're awake, driven by the accumulation of adenosine in your brain.
          </p>
          <p>
            If your <strong>circadian rhythm is misaligned</strong> — meaning your internal clock thinks it's daytime when it's actually 11 PM — you have a <em>scheduling</em> problem. This is common in shift workers, people with delayed sleep phase syndrome, or anyone who's been staying up late consistently for weeks.
          </p>
          <p>
            But if your <strong>sleep pressure is weak</strong> or your <strong>nervous system is hyperaroused</strong> — meaning your brain is flooded with adrenaline the moment you try to sleep — you have a <em>system</em> problem. No amount of light exposure or wake-time anchoring will fix a brain that interprets your bed as a threat.
          </p>
          <p>
            <span className="text-sm bg-[#f2f0e9] p-3 rounded-lg inline-block">
              (Not sure if you have chronic insomnia or just a bad schedule? Read: <Link href="/articles/do-i-have-chronic-insomnia" className="text-[var(--primary)] font-bold hover:underline">Do I Have Chronic Insomnia? The Clinical Rule of 3s Explained</Link>.)
            </span>
          </p>

          <h2 className="text-3xl font-cormorant font-light text-ink mt-16 mb-8">The Litmus Test: Is This a Schedule Problem?</h2>
          <p>
            Before you attempt to reset your sleep schedule, answer these questions honestly:
          </p>
          
          <p><strong>You have a SCHEDULE problem if:</strong></p>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>You feel wide awake at your desired bedtime, not anxious — just genuinely not sleepy yet</li>
            <li>Once you do fall asleep, you sleep through the night without waking</li>
            <li>On weekends or days off, when you let yourself sleep on your natural rhythm, you sleep deeply and wake up refreshed</li>
            <li>The issue started recently after a clear behavioral shift (new job, travel, late-night habits)</li>
          </ul>

          <p><strong>You have a SYSTEM problem (hyperarousal) if:</strong></p>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>You feel exhausted all day, but the moment you get into bed your heart starts racing</li>
            <li>You lie in bed for 2-3 hours trying to fall asleep, feeling progressively more anxious</li>
            <li>You wake up at 3 AM and can't fall back asleep, despite being exhausted</li>
            <li>You've had this issue for months or years, regardless of what time you go to bed</li>
            <li>You dread bedtime</li>
          </ul>

          <p>
            If you checked even one box in the second list, <strong>skip to the bottom of this article.</strong> The 24-hour reset won't work for you, and attempting it will likely make your anxiety worse.
          </p>
          <p>
            If you're purely in the first category, here's how to forcibly reset your circadian clock.
          </p>

          <h2 className="text-3xl font-cormorant font-light text-ink mt-16 mb-8">The 24-Hour Circadian Reset Protocol</h2>
          <p>
            This is not a gentle suggestion. This is a forced biological override using light, food timing, and sleep pressure manipulation. It will be uncomfortable. But if executed correctly, it works.
          </p>

          <h3 className="text-xl font-serif font-medium text-ink mt-8 mb-4">Step 1: The Nuclear Option — The All-Nighter (Optional but Effective)</h3>
          <p>
            If your sleep schedule is severely delayed (currently falling asleep at 4 AM, need to sleep at 11 PM), the fastest reset is staying awake for a full 24-36 hours to build massive sleep pressure.
          </p>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li><strong>Day 1, Morning:</strong> Wake up at your <em>current</em> wake time (even if that's noon).</li>
            <li><strong>Stay awake all day and all night.</strong> Do not nap. Not even for 10 minutes.</li>
            <li><strong>Day 2, Morning:</strong> Get 30-60 minutes of bright outdoor light exposure between 6-8 AM. This is non-negotiable. Light is the primary signal that resets your SCN.</li>
            <li><strong>Day 2, Night:</strong> Go to bed at your <em>target</em> bedtime (e.g., 11 PM). By this point, you'll have 30+ hours of sleep pressure built up, and the morning light exposure will have begun shifting your internal clock.</li>
          </ul>
          <p>
            <strong>Safety note:</strong> If you have a history of bipolar disorder, seizures, or operate heavy machinery, do not attempt an all-nighter. Use the gradual method below instead.
          </p>

          <h3 className="text-xl font-serif font-medium text-ink mt-8 mb-4">Step 2: The Gradual Shift (Safer, Slower)</h3>
          <p>
            If an all-nighter isn't safe or feasible, shift your bedtime in 30-minute increments.
          </p>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li><strong>Current bedtime: 2 AM.</strong> Tonight, go to bed at 1:30 AM.</li>
            <li><strong>Tomorrow night:</strong> 1 AM.</li>
            <li><strong>Continue shifting 30 minutes earlier every 2-3 days</strong> until you reach your target bedtime.</li>
            <li><strong>Non-negotiable rule:</strong> Your wake time must stay fixed from Day 1. If your target wake time is 7 AM, you wake up at 7 AM <em>every single day</em>, even if you only got 4 hours of sleep. This is the anchor that pulls your entire circadian rhythm forward.</li>
          </ul>

          <h3 className="text-xl font-serif font-medium text-ink mt-8 mb-4">Step 3: Light Exposure (The Master Reset Button)</h3>
          <p>
            Your SCN uses light as its primary synchronization signal. To reset your clock, you must manipulate light exposure aggressively.
          </p>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li><strong>Morning (within 30 minutes of waking):</strong> Get 30-60 minutes of bright outdoor light. If it's winter or cloudy, use a 10,000 lux light therapy box for 30 minutes. This signals "daytime" to your SCN and stops melatonin production.</li>
            <li><strong>Evening (2-3 hours before target bedtime):</strong> Dim all lights. Use amber-tinted blue-light blocking glasses if you must use screens. Avoid overhead lights. This allows your pineal gland to begin melatonin production.</li>
            <li><strong>Night:</strong> Total darkness. Blackout curtains, cover LEDs, use a sleep mask.</li>
          </ul>

          <h3 className="text-xl font-serif font-medium text-ink mt-8 mb-4">Step 4: Meal Timing (The Secondary Clock)</h3>
          <p>
            Your liver, gut, and metabolic system operate on their own circadian rhythm, synchronized by food intake. You can use this to reinforce your reset.
          </p>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li><strong>Fast for 12-16 hours</strong> before your target wake time. If you want to wake at 7 AM, stop eating by 7 PM the night before (or 3 PM if doing a 16-hour fast).</li>
            <li><strong>Eat breakfast within 30 minutes of waking</strong> at your new wake time. This signals to your peripheral clocks that the day has begun.</li>
          </ul>

          <h3 className="text-xl font-serif font-medium text-ink mt-8 mb-4">Step 5: Protect the Anchor (No Sleeping In)</h3>
          <p>
            The most common mistake: successfully resetting during the week, then sleeping in on Saturday, which immediately re-delays your rhythm by 2-3 hours (this is called Social Jetlag).
          </p>
          <p>
            <strong>Your wake time must not shift by more than 30 minutes, ever.</strong> Not on weekends. Not after a bad night. Not after a late night out. The anchor is everything.
          </p>
          <p>
            <span className="text-sm bg-[#f2f0e9] p-3 rounded-lg inline-block">
              (For a deeper dive into why sleeping in ruins your progress: <Link href="/articles/the-catch-up-sleep-trap" className="text-[var(--primary)] font-bold hover:underline">The Catch-Up Sleep Trap: Why Sleeping In on Weekends Ruins Your Internal Clock</Link>.)
            </span>
          </p>

          <h2 className="text-3xl font-cormorant font-light text-ink mt-16 mb-8">When the Reset Doesn't Work: The Real Problem Wasn't the Schedule</h2>
          <p>
            You followed the protocol. You did the all-nighter, you got the morning light, you anchored your wake time. And you're still lying in bed for three hours, heart pounding, brain racing.
          </p>
          <p>
            This is the moment of truth: <strong>your circadian rhythm was never the problem.</strong> You have Conditioned Hyperarousal.
          </p>
          <p>
            Your brain has learned to associate your bed with the trauma of not sleeping. The moment you approach your mattress, your amygdala (the fear center of your brain) dumps adrenaline into your bloodstream as a protective mechanism. You cannot light-therapy your way out of a fight-or-flight response.
          </p>
          <p>
            <span className="text-sm bg-[#f2f0e9] p-3 rounded-lg inline-block">
              (To understand what's actually happening when your heart races at bedtime: <Link href="/articles/why-my-body-feels-stuck-in-fight-or-flight" className="text-[var(--primary)] font-bold hover:underline">Why My Body Feels Stuck in Fight-or-Flight Every Single Time I Try to Sleep</Link>.)
            </span>
          </p>
          <p>
            If this is you, here's what you need instead:
          </p>

          <p>
            <strong>Sleep Restriction Therapy:</strong> Not earlier bedtimes — later ones. You need to compress your sleep window to build massive biological sleep pressure that can overpower your anxiety.<br />
            <span className="text-sm bg-[#f2f0e9] p-3 rounded-lg inline-block mt-2">
              (Full protocol: <Link href="/articles/why-going-to-bed-early-is-making-your-insomnia-worse" className="text-[var(--primary)] font-bold hover:underline">Why Going to Bed Early is Making Your Insomnia Worse</Link>).
            </span>
          </p>
          <p>
            <strong>Stimulus Control:</strong> Breaking the bed-threat association by physically leaving the room when you can't sleep.<br />
            <span className="text-sm bg-[#f2f0e9] p-3 rounded-lg inline-block mt-2">
              (Full protocol: <Link href="/articles/the-20-minute-rule" className="text-[var(--primary)] font-bold hover:underline">The 20-Minute Rule: Why Getting Out of Bed is the Key to Fixing Insomnia</Link>).
            </span>
          </p>
          <p>
            <strong>Cognitive Defusion:</strong> Learning to step back from the racing thoughts instead of fighting them.<br />
            <span className="text-sm bg-[#f2f0e9] p-3 rounded-lg inline-block mt-2">
              (Full protocol: <Link href="/articles/how-to-stop-overthinking-at-night" className="text-[var(--primary)] font-bold hover:underline">How to Stop Overthinking at Night</Link>).
            </span>
          </p>

          <p>
            These aren't tips. They're clinical behavioral interventions — and they're what actually fixes chronic insomnia.
          </p>

          <h2 className="text-3xl font-cormorant font-light text-ink mt-16 mb-8">Know the Difference, Fix the Right Problem</h2>
          <p>
            Trying to fix hyperarousal with a sleep schedule is like trying to put out a fire by rearranging the furniture. The tools matter, but only if you're solving the right problem.
          </p>
          <p>
            If your circadian rhythm is genuinely misaligned and you're otherwise a healthy sleeper, the 24-hour reset works. If you've been lying awake anxious for months, the reset is a distraction from the real work.
          </p>
          <p>
            <strong>Tired of guessing which problem you actually have?</strong>
          </p>
          <p>
            <em>The Goodnight Companion</em> is a 90-day guided journal that doesn't assume you know what's broken. It walks you through the diagnostic process, then builds a personalized recovery plan using the clinical mechanics of CBT-I and ACT-I — whether your problem is your schedule, your system, or both.
          </p>
          <p>
            ➡️ If you're ready to stop experimenting and start recovering, <Link href="/join-the-program" className="text-[var(--primary)] font-bold hover:underline">explore The Goodnight Companion</Link>.
          </p>

          <h2 className="text-xl font-serif font-medium text-ink mt-12 mb-4">Scientific References & Further Reading</h2>
          <ul className="list-disc pl-6 space-y-4 mb-12 text-[0.85rem] text-ink-2">
            <li><strong>Circadian Rhythm and Light Exposure:</strong> Czeisler, C. A., et al. (1989). Bright light resets the human circadian pacemaker independent of the timing of the sleep-wake cycle. <em>Science</em>, 233(4764), 667-671. (Foundational study on how light exposure resets the suprachiasmatic nucleus.)</li>
            <li><strong>Sleep Pressure and Adenosine:</strong> Borbély, A. A. (1982). A two process model of sleep regulation. <em>Human Neurobiology</em>, 1(3), 195-204. (Explains the homeostatic sleep drive and how sleep pressure builds.)</li>
            <li><strong>Social Jetlag:</strong> Roenneberg, T., et al. (2012). Social jetlag and obesity. <em>Current Biology</em>, 22(10), 939-943. (Details how weekend sleep-in patterns desynchronize the circadian clock.)</li>
            <li><strong>Meal Timing and Circadian Clocks:</strong> Schibler, U., et al. (2015). The mammalian circadian timing system: organization and coordination of central and peripheral clocks. <em>Annual Review of Physiology</em>, 77, 307-339. (Covers how food intake synchronizes peripheral circadian clocks.)</li>
            <li><strong>Conditioned Hyperarousal:</strong> Bonnet, M. H., & Arand, D. L. (2010). Hyperarousal and insomnia: State of the science. <em>Sleep Medicine Reviews</em>, 14(1), 9-15. (Explains why anxiety-driven insomnia cannot be solved with circadian interventions alone.)</li>
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
