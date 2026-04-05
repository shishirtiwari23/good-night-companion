import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import FaqAccordion from "../../components/FaqAccordion";

export const metadata: Metadata = {
  title: "Why It Takes Me Three to Five Hours to Fall Asleep Every Single Night",
  description: "Sleep onset insomnia happens when sleep effort overpowers sleep pressure. The harder you try to force sleep, the more adrenaline floods your system. Here is the clinical fix.",
  alternates: {
    canonical: '/articles/why-it-takes-me-hours-to-fall-asleep',
  },
};

export default function Article17Page() {

  const pageFaqs = [
  {
    "question": "Why does it take me 3 hours to fall asleep?",
    "answer": "Taking hours to fall asleep is caused by a mismatch between weak biological sleep pressure and high psychological \"sleep effort.\" When you get into bed and forcefully try to make yourself sleep, you trigger performance anxiety. This dumps adrenaline into your system, keeping your brain wired and awake."
  },
  {
    "question": "Is it normal to take 2 hours to fall asleep?",
    "answer": "No. A healthy sleep onset latency (the time it takes to fall asleep) is between 10 and 20 minutes. Taking two hours or more frequently indicates Sleep Onset Insomnia, usually driven by conditioned hyperarousal or going to bed before your body is biologically ready."
  },
  {
    "question": "What is the 20-minute rule for falling asleep?",
    "answer": "The 20-minute rule is a clinical CBT-I protocol. If you cannot fall asleep after roughly 20 minutes of being in bed, you must get up and move to another room. Engaging in a quiet activity until you feel sleepy breaks the brain's association between your bed and anxiety."
  },
  {
    "question": "Why am I tired all day but wired at night?",
    "answer": "During the day, you are away from your bed, allowing you to feel your natural physical exhaustion. At night, approaching your bedroom triggers a learned psychological threat response. Your brain anticipates the trauma of not sleeping and floods your body with wakeful stress hormones, overriding your fatigue."
  },
  {
    "question": "How do I force myself to go to sleep?",
    "answer": "You cannot force sleep. Sleep is controlled by the autonomic nervous system. Actively trying to \"force\" sleep causes performance anxiety and adrenaline spikes. Instead, use Paradoxical Intention: get into bed, keep your eyes open, and give yourself the goal of resting quietly while trying to stay awake."
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
            Why it takes me three to five hours to fall asleep every single night — what's actually happening in my brain during those hours.
          </h1>
          <div className="h-[1px] w-full bg-[#8da399]/20" />
        </header>

        <div className="text-[var(--text-secondary)] font-sans leading-relaxed space-y-6 text-lg">

          <div className="bg-[#f9f8f6] p-6 rounded-[1rem] border border-[#8da399]/20 my-6">
            <h3 className="font-serif text-[var(--text-primary)] text-xl mb-4">The Short Answer:</h3>
            <p className="font-sans text-[var(--text-secondary)] text-lg">Why does it take hours to fall asleep? This is called Sleep Onset Insomnia. It happens when your biological "sleep pressure" (the body's physical hunger for sleep) is too weak to overpower your psychological "sleep effort" (the anxiety of trying to force yourself to sleep). To fall asleep quickly, you have to use a clinical tool called Sleep Scheduling: strictly calculating a delayed bedtime based on your actual sleep capability, forcing an undeniable wave of biological sleep pressure.</p>
          </div>
          <p>
            You get into bed at 10:30 PM. Your partner is lying next to you, and within three minutes, they are breathing heavily, fast asleep.
          </p>
          <p>
            Meanwhile, you are staring at the ceiling. An hour goes by. Then two. Your brain suddenly turns into a high-powered to-do list, replaying conversations from five years ago and projecting disasters for tomorrow. You toss, you turn, you flip the pillow, and you try with all your might to force your brain to shut down.
          </p>
          <p>
            By 2:00 AM, the rage and the crushing isolation set in. You are the only person awake in the world, and your body is refusing to do the one natural thing it needs to survive.
          </p>
          <p>
            If taking three to five hours to fall asleep is your nightly reality, you are suffering from Sleep Onset Insomnia. Here is the biological reason your brain refuses to shut down when your head hits the pillow, and the exact mathematical formula to fix it.
          </p>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">The Biology: Sleep Pressure vs. Sleep Effort</h2>
          <p>
            To understand why you are lying awake for hours, you have to look at the mechanics of your nervous system.
          </p>
          <p>
            Your ability to fall asleep quickly relies on something called Homeostatic Sleep Pressure. This is a biological "hunger" for sleep that builds up in your brain every hour you are awake.
          </p>
          <p>
            When a normal sleeper gets into bed, their sleep pressure is massive. It effortlessly pulls them into unconsciousness. But if you have insomnia, you likely get into bed <em>hoping</em> to sleep, rather than being biologically forced to sleep.
          </p>
          <p>
            When your sleep pressure is weak, your mind has room to wander. And when your mind wanders, the panic sets in: <em>Why am I not asleep yet? I need to sleep right now.</em>
          </p>
          <p className="pl-6 border-l-4 border-[#8da399]/40 italic">
            I close my eyes and practically command my brain to shut off, but the harder I try, the more wired I feel.
          </p>
          <p>
            This is called Sleep Effort. Sleep is an autonomic process—you cannot consciously command it to happen. The harder you "try" to sleep, the more your brain treats sleep like a high-stakes test. It triggers performance anxiety, dumps adrenaline into your bloodstream, and completely overrides whatever small amount of sleep pressure you had.
          </p>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">The Fix: The Math of Sleep Scheduling</h2>
          <p>
            You cannot wrestle your brain into unconsciousness. To fall asleep quickly, you have to starve the anxiety by building a biological wave of sleep pressure so massive that your body has no choice but to shut down. To do this, you must use a clinical tool called Sleep Scheduling.
          </p>
          <p>
            Most people with sleep onset insomnia try to go to bed earlier to give themselves more time to fall asleep. This is the ultimate trap. If your body is currently only capable of generating 5.5 hours of actual sleep, and you spend 9 hours in bed, you are mathematically guaranteeing yourself 3.5 hours of tossing, turning, and panicking.
          </p>
          <p>You have to fix the math.</p>
          <ul className="list-disc pl-6 space-y-4 my-6">
            <li><strong>Set an Anchor Wake Time:</strong> Pick a time to wake up (e.g., 6:30 AM) and do not change it, ever. Not on weekends. Not after a terrible night. This locks your circadian rhythm in place.</li>
            <li><strong>Calculate Your Window:</strong> If you are only actually sleeping for 6 hours a night, your new "Time in Bed" window is exactly 6 hours.</li>
            <li><strong>Delay the Bedtime:</strong> Count backward from your wake time. If you wake up at 6:30 AM, you are absolutely forbidden from getting into bed before 12:30 AM.</li>
          </ul>
          <p>
            By staying up late, you compress your sleep window. The first few days will be exhausting, but by 12:30 AM, your biological sleep pressure will be so aggressively high that the performance anxiety won't stand a chance. Your head will hit the pillow, and you will drop.
          </p>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">Deactivate the Effort</h2>
          <p>
            Once you fix the math, you have to fix the mind. When you finally do get into bed at your delayed time, drop the rope. Use a clinical tool called Paradoxical Intention: keep your eyes open in the dark and gently tell yourself, "I am not going to sleep right now. I am just going to rest my body and try to stay awake." By voluntarily removing the demand to sleep, the adrenaline evaporates.
          </p>
          <p className="text-sm bg-[#f2f0e9] p-4 rounded-xl mt-6 italic">
            (Read the exact protocol here: <Link href="/articles/paradoxical-intention" className="text-[var(--primary)] font-bold hover:underline">Paradoxical Intention: Why Trying to Stay Awake Can Cure Your Insomnia</Link>).
          </p>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">Stop Fighting in the Dark</h2>
          <p>
            You don't need to try harder to sleep; you need to change the math.
          </p>

          <hr className="my-12 border-[#8da399]/20" />
          
          <div className="bg-[#f9f8f6] p-8 rounded-[1.5rem] mt-12 text-center shadow-sm">
            <h3 className="text-2xl font-serif text-[var(--text-primary)] mb-4">Tired of fighting through sleepless nights?</h3>
            <p className="mb-6 mx-auto max-w-lg">
              The Good Night Companion is a 90-day guided journal that gives you the exact blueprint to calculate your compressed sleep window safely, build your sleep pressure, and use cognitive tools to stop the nightly 3-hour ceiling stare.
            </p>
            <Link 
              href="/journey" className="btn-primary inline-block w-auto !px-8 hover:!bg-[var(--primary-dark)]"
            >
              Get The Good Night Companion
            </Link>
          </div>

           <h2 className="text-xl font-serif text-[var(--text-primary)] mt-12 mb-4">Scientific References & Further Reading</h2>
          <ul className="list-disc pl-6 space-y-3 mb-12 text-sm">
            <li><strong>Sleep Restriction Therapy:</strong> Spielman, A. J., Saskin, P., & Thorpy, M. J. (1987). Treatment of chronic insomnia by restriction of time in bed. <em>Sleep</em>, 10(1), 45-56.</li>
            <li><strong>Sleep Effort and Hyperarousal:</strong> Espie, C. A., et al. (2006). The attention-intention-effort pathway in the development of psychophysiologic insomnia: a theoretical review. <em>Sleep Medicine Reviews</em>, 10(4), 215-245.</li>
            <li><strong>Paradoxical Intention:</strong> Ascher, L. M., & Edinger, J. D. (1990). Paradoxical intention and insomnia. <em>Cognitive Therapy and Research</em>, 14(3), 295-310.</li>
          </ul>
        
          <FaqAccordion faqs={pageFaqs} title="FAQs: People Also Ask About Taking Hours to Fall Asleep" />
        </div>
      </article>
    </main>
  );
}
