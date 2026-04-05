import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import FaqAccordion from "../../components/FaqAccordion";

export const metadata: Metadata = {
  title: "Why My Body Feels Stuck in Fight-or-Flight Every Time I Try to Sleep",
  description: "After months of insomnia, your brain learns that your bed is dangerous. Here is the biology of conditioned hyperarousal and the behavioral tool that retrains your threat response.",
  alternates: {
    canonical: '/articles/why-my-body-feels-stuck-in-fight-or-flight',
  },
};

export default function Article15Page() {

  const pageFaqs = [
  {
    "question": "Why does my heart race as soon as I try to sleep?",
    "answer": "When you struggle with insomnia for weeks, your brain starts associating your bed with the stress of not sleeping. This triggers a conditioned fight-or-flight response, causing your brain to dump adrenaline and elevate your heart rate the moment you lie down, mistakenly believing you are in danger."
  },
  {
    "question": "What is conditioned hyperarousal?",
    "answer": "Conditioned hyperarousal is a physiological state where the brain becomes highly alert and anxious in response to cues that should trigger relaxation, such as putting on pajamas, turning off the lights, or getting into bed. It is the primary driving force behind chronic insomnia."
  },
  {
    "question": "Should I do deep breathing if I have sleep anxiety?",
    "answer": "If you are already in a state of high panic or hyperarousal in bed, deep breathing can sometimes backfire. Focusing intensely on your breath can cause you to monitor your heart rate, creating \"performance anxiety\" that pushes sleep further away. Behavioral changes like getting out of bed are often more effective."
  },
  {
    "question": "How do I stop an adrenaline surge at night?",
    "answer": "You cannot force an adrenaline surge to stop with willpower. Instead, you must remove yourself from the triggering environment. Get out of bed, move to a dimly lit room, and engage in a neutral, non-stimulating activity (like reading) until your nervous system naturally metabolizes the adrenaline and calms down."
  },
  {
    "question": "Why am I exhausted all day but wide awake at night?",
    "answer": "During the day, you are away from your bed, so your brain does not perceive a threat, allowing you to feel your natural physical exhaustion. At night, the environment of your bedroom triggers your learned sleep anxiety, overpowering your exhaustion with a massive wave of wakeful stress hormones."
  }
];

  return (
    <main className="min-h-screen flex flex-col items-center p-6 md:p-24 relative bg-[var(--background)]">
      <div className="w-full max-w-3xl z-10 mb-12 flex justify-between items-center">
        <Link 
          href="/articles" 
          className="inline-flex items-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm font-bold uppercase tracking-widest"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="m15 18-6-6 6-6"/></svg>
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
          <p className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-[#8da399] mb-4">
            Sleep Science
          </p>
          <h1 className="text-3xl md:text-5xl font-serif text-[var(--text-primary)] leading-tight mb-8">
            Why my body feels stuck in fight-or-flight every single time I try to sleep — three years of hyperarousal and what finally helped me reset.
          </h1>
          <div className="h-[1px] w-full bg-[#8da399]/20" />
        </header>

        <div className="text-[var(--text-secondary)] font-sans leading-relaxed space-y-6 text-lg">

          <p className="text-xl md:text-2xl font-serif text-[var(--text-primary)] leading-snug">
            <strong>The Short Answer:</strong> Why does your heart race as soon as you get into bed? After weeks of struggling with insomnia, your brain begins to associate your bed with the trauma of not sleeping. This is called Conditioned Hyperarousal. Your brain mistakenly identifies your mattress as a threat, dumping adrenaline and cortisol into your bloodstream to initiate a "fight-or-flight" survival response the moment your head hits the pillow.
          </p>
          <p>
            I can be exhausted all day. I can be yawning on the couch at 9 PM, my eyes burning, my body so heavy I can barely lift myself up to brush my teeth. I feel completely, desperately ready for sleep.
          </p>
          <p>
            But the exact second I walk into my bedroom and my head hits the pillow, it happens.
          </p>
          <p>
            My heart starts pounding. My chest gets tight. My brain suddenly boots up like a high-powered supercomputer, running through every mistake I’ve ever made. The physical exhaustion is still there, but the sleepiness is violently ripped away. My body isn't preparing for rest; it feels like it is preparing for an attack.
          </p>
          <p>
            If you are experiencing this, you are not losing your mind, and you don't have a mysterious heart condition. You are experiencing the most cruel and exhausting symptom of chronic insomnia: Conditioned Hyperarousal.
          </p>
          <p>
            Here is the biological reality of why your nervous system is punishing you at bedtime, and the counterintuitive clinical steps to turn off the alarm.
          </p>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">The Biology: The Bed as a Predator</h2>
          <p>
            To understand why your heart races when you try to sleep, you have to look at how your primal brain operates.
          </p>
          <p>
            Your amygdala (the fear center of your brain) is designed to keep you alive. It learns through repetition and association. If you have spent the last few months lying in your bed tossing, turning, crying, and feeling absolute despair over your lack of sleep, your amygdala has been taking notes.
          </p>
          <p>
            It has observed you suffering in this specific location, night after night. So, it makes a logical, primal conclusion: The bed is a dangerous place. Now, every time you approach your mattress, your brain tries to protect you. It dumps adrenaline and cortisol into your bloodstream to initiate the "fight-or-flight" response so you can survive the perceived danger. Your brain is literally keeping you awake to save your life.
          </p>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">The Psychology: The Trap of "Deep Breathing"</h2>
          <p>
            When you tell a doctor that your heart races in bed, they will almost always give you generic, frustrating advice: "Try deep breathing," "meditate," or "do a body scan."
          </p>
          <p>
            If you have severe insomnia, you already know that trying to forcefully relax in bed is a disaster.
          </p>
          <p className="pl-6 border-l-4 border-[#8da399]/40 italic">
            I tried doing the 4-7-8 breathing method they told me about, but I just ended up hyper-focusing on how fast my heart was still beating. It made me panic even more.
          </p>
          <p>
            When you are having a micro-panic attack in bed, trying to forcefully meditate triggers what sleep doctors call Sleep Effort. You are treating relaxation like a high-stakes task you must successfully complete. When you fail to instantly relax, you trigger performance anxiety, which just dumps more adrenaline into your system.
          </p>
          <p className="text-sm bg-[#f2f0e9] p-4 rounded-xl mt-6 italic">
            (If you frequently go to bed early to try and "catch up" on sleep and end up lying there anxious, you are feeding this cycle. Read our guide: <Link href="/articles/why-going-to-bed-early-is-making-your-insomnia-worse" className="text-[var(--primary)] font-bold hover:underline">Why Going to Bed Early is Making Your Insomnia Worse</Link>).
          </p>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">The Fix: Starving the Association</h2>
          <p>
            You cannot rationalize with an amygdala that is flooded with adrenaline. You cannot deep-breathe your way out of a physiological threat response. To fix conditioned hyperarousal, you have to use a behavioral tool called Stimulus Control.
          </p>
          <p>
            If you get into bed and your heart starts racing, do not lie there and fight it.<br/>
            <strong>Get up. Leave the room.</strong>
          </p>
          <p>
            Go sit in a dim, quiet space and read a boring book. You are not getting up to "make yourself sleepy"—you are getting up to prove to your brain that the bed is only for sleeping, not for suffering. You only return to the bed when the adrenaline has burned off and the heavy, physical sleepiness returns.
          </p>
          <p className="text-sm bg-[#f2f0e9] p-4 rounded-xl mt-6 italic">
            (For the exact step-by-step method, including what to do if you can't leave your bedroom, read: <Link href="/articles/the-20-minute-rule" className="text-[var(--primary)] font-bold hover:underline">The 20-Minute Rule: Why Getting Out of Bed is the Key to Fixing Insomnia</Link>).
          </p>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">Call a Truce With Your Nervous System</h2>
          <p>
            You cannot fight adrenaline with willpower. The harder you try to wrestle your nervous system into submission, the stronger the fight-or-flight response becomes.
          </p>
          <p>
            If you are tired of the nightly battle and want to learn how to gently dismantle your brain's threat response, you need a system that understands the psychology of hyperarousal.
          </p>

          <hr className="my-12 border-[#8da399]/20" />
          
          <div className="bg-[#f9f8f6] p-8 rounded-[1.5rem] mt-12 text-center shadow-sm">
            <h3 className="text-2xl font-serif text-[var(--text-primary)] mb-4">Tired of fighting through sleepless nights?</h3>
            <p className="mb-6 mx-auto max-w-lg">
              The Good Night Companion is a 90-day guided journal that walks you through the exact, step-by-step process of breaking the fight-or-flight cycle. By utilizing the proven techniques of CBT-I and the compassionate reframing of ACT-I, it teaches you how to stop fighting your brain and start trusting your bed again.
            </p>
            <Link 
              href="/journey" className="btn-primary inline-block w-auto !px-8 hover:!bg-[var(--primary-dark)]"
            >
              Get The Good Night Companion
            </Link>
          </div>

          <h2 className="text-xl font-serif text-[var(--text-primary)] mt-12 mb-4">Scientific References & Further Reading</h2>
          <ul className="list-disc pl-6 space-y-3 mb-12 text-sm">
            <li><strong>Conditioned Hyperarousal:</strong> Bonnet, M. H., & Arand, D. L. (2010). Hyperarousal and insomnia: State of the science. <em>Sleep Medicine Reviews</em>, 14(1), 9-15. (Explains the biological fight-or-flight response when the brain associates the bed with stress).</li>
            <li><strong>Stimulus Control Therapy:</strong> Bootzin, R. R. (1972). Stimulus control treatment for insomnia. <em>Proceedings of the American Psychological Association</em>. (The foundational clinical paper establishing the "get out of bed" rule to rebuild the bed-sleep association).</li>
            <li><strong>Sleep Effort and Hyperarousal:</strong> Espie, C. A., et al. (2006). The attention-intention-effort pathway in the development of psychophysiologic insomnia: a theoretical review. <em>Sleep Medicine Reviews</em>, 10(4), 215-245. (Explains why "trying" to sleep actively prevents the transition into unconsciousness).</li>
          </ul>

        
          <FaqAccordion faqs={pageFaqs} title="FAQs: People Also Ask About Sleep Hyperarousal" />
        </div>
      </article>
    </main>
  );
}
