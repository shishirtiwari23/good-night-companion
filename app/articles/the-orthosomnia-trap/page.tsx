import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Your Sleep Tracker is Making Your Insomnia Worse (The Orthosomnia Trap)",
  description: "Is your Apple Watch or Oura ring making your insomnia worse? Discover the science of Orthosomnia and why obsessing over your sleep score ruins your rest.",
};

export default function Article7Page() {
  return (
    <main className="min-h-screen flex flex-col items-center p-6 md:p-24 relative bg-[var(--background)]">
      {/* Navigation */}
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
            Why Your Sleep Tracker is Making Your Insomnia Worse (The Orthosomnia Trap)
          </h1>
          <div className="h-[1px] w-full bg-[#8da399]/20" />
        </header>

        <div className="text-[var(--text-secondary)] font-sans leading-relaxed space-y-6 text-lg">
          <p className="text-xl md:text-2xl font-serif text-[var(--text-primary)] leading-snug">
            You wake up on a Tuesday morning and actually feel... okay. You stretch, sit up, and reach for your phone to check your Oura Ring, Whoop strap, or Apple Watch.
          </p>
          <p>
            The screen loads. &quot;Sleep Score: 42%. Poor Recovery. Minimal REM.&quot;
          </p>
          <p>
            Instantly, your heart sinks. The slight energy you felt a moment ago evaporates, replaced by a heavy wave of dread about the day ahead. You start analyzing what went wrong and dreading the upcoming night because you have to get your score up.
          </p>
          <p>
            If you are an analytical person, using data to solve a problem makes perfect sense. You track your budget to save money; you track your calories to lose weight. But sleep is a fundamentally different biological process. Here is the clinical science behind why your smartwatch is fueling your insomnia, and why you need to take it off to heal.
          </p>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">The Condition: What is Orthosomnia?</h2>
          <p>
            In 2017, sleep researchers noticed a troubling new trend in sleep clinics. Patients were coming in exhausted, presenting with severe insomnia symptoms, but their obsession wasn&apos;t just with sleep—it was with the data on their wearable devices.
          </p>
          <p>
            Researchers coined the term <strong>Orthosomnia</strong> (from &quot;ortho&quot; meaning correct, and &quot;somnia&quot; meaning sleep). It is the perfectionistic quest to achieve perfect sleep data, driven by fitness trackers.
          </p>
          <blockquote className="border-l-4 border-[var(--primary)] pl-6 italic text-xl text-[var(--text-primary)] my-8">
            For someone battling chronic insomnia, a sleep tracker isn&apos;t a helpful tool; it is a daily performance review that you are constantly failing.
          </blockquote>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">The Biology of Performance Anxiety</h2>
          <p>
            Why does tracking your sleep make it worse? It comes down to how your nervous system operates.
          </p>
          <p>
            Sleep is an autonomic process. It happens when you surrender control, not when you exert it. When you get into bed thinking, &quot;I really need to boost my Deep Sleep score tonight,&quot; you are treating sleep like a conscious task.
          </p>
          <p>
            This creates intense performance anxiety. The pressure to &quot;score well&quot; triggers your sympathetic nervous system. Your brain interprets the tracking as a threat, which dumps adrenaline and cortisol into your bloodstream. You are trying to force an autonomic process, which results in the exact biological state—<span className="font-semibold">Conditioned Hyperarousal</span>—that prevents sleep.
          </p>
          <p className="text-sm bg-[#f2f0e9] p-4 rounded-xl mt-6 italic">
            Struggling with a racing mind when your head hits the pillow? Read our guide: <Link href="/articles/how-to-stop-overthinking-at-night" className="text-[var(--primary)] font-bold hover:underline">How to Stop Overthinking at Night (Without Trying to &quot;Empty Your Mind&quot;)</Link>
          </p>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">The Flaw in the Tech: Trackers Cannot Read Your Brain</h2>
          <p>
            Beyond the psychological damage, there is a mechanical flaw: consumer sleep trackers are notoriously inaccurate at staging sleep.
          </p>
          <p>
            To accurately measure whether you are in Light, Deep, or REM sleep, a clinical sleep lab uses an EEG to measure your brainwaves. Your smartwatch cannot read your brainwaves. It relies primarily on your heart rate and your movement (actigraphy) to guess what stage of sleep you are in.
          </p>
          
          <ul className="list-disc pl-6 space-y-4 my-6">
            <li><strong>The Stillness Trap:</strong> If you wake up at 3:00 AM and lie perfectly still, frustrated but motionless, your watch will often record that as &quot;Light Sleep,&quot; giving you false data.</li>
            <li><strong>The Normal Awakening Trap:</strong> As we covered in our guide on <Link href="/articles/waking-up-at-3-am" className="text-[var(--primary)] font-bold hover:underline">Waking Up at 3 AM</Link>, brief awakenings between sleep cycles are biologically normal. But when your app flags them with alarming red bars, it pathologizes a perfectly healthy human function.</li>
          </ul>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">The Solution: The 30-Day Data Detox</h2>
          <p>
            To fix your broken sleep architecture, you must transition your focus from objective data to subjective feeling. Your watch does not know how you feel. Only you do. If you want to break the cycle of Orthosomnia, you need to implement a 30-Day Data Detox.
          </p>

          <div className="space-y-4 my-6">
            <div className="bg-[#f9f8f6] p-6 rounded-[1rem] border border-[#8da399]/20">
              <h3 className="font-serif text-[var(--text-primary)] text-xl mb-2 flex items-center">
                <span className="bg-[var(--primary)] text-white w-6 h-6 rounded-full inline-flex items-center justify-center text-sm mr-3">1</span>
                Take off the wearable at night
              </h3>
              <p className="text-sm m-0">Charge your watch in another room.</p>
            </div>
            
            <div className="bg-[#f9f8f6] p-6 rounded-[1rem] border border-[#8da399]/20">
              <h3 className="font-serif text-[var(--text-primary)] text-xl mb-2 flex items-center">
                <span className="bg-[var(--primary)] text-white w-6 h-6 rounded-full inline-flex items-center justify-center text-sm mr-3">2</span>
                Rely on your internal gauge
              </h3>
              <p className="text-sm m-0">In the morning, instead of looking at a screen, ask yourself: <em>&quot;Do I have enough energy to start my day?&quot;</em></p>
            </div>

            <div className="bg-[#f9f8f6] p-6 rounded-[1rem] border border-[#8da399]/20">
              <h3 className="font-serif text-[var(--text-primary)] text-xl mb-2 flex items-center">
                <span className="bg-[var(--primary)] text-white w-6 h-6 rounded-full inline-flex items-center justify-center text-sm mr-3">3</span>
                Accept the &quot;Nocebo&quot; Effect
              </h3>
              <p className="text-sm m-0">Recognize that seeing a bad sleep score actively makes you feel more tired than you actually are. By removing the score, you remove the artificial fatigue.</p>
            </div>
          </div>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">Stop Grading Your Sleep</h2>
          <p>
            Your bed is a sanctuary, not an exam room. Stop bringing a grading rubric under the covers with you. Take off the watch, drop the struggle, and allow your body to do what it has evolved to do.
          </p>

          <hr className="my-12 border-[#8da399]/20" />
          
          <div className="bg-[#f9f8f6] p-8 rounded-[1.5rem] mt-12 text-center shadow-sm">
            <h3 className="text-2xl font-serif text-[var(--text-primary)] mb-4">Stop Fighting. Start Healing.</h3>
            <p className="mb-6 mx-auto max-w-lg">
              Ready to stop tracking and start sleeping? Throwing away the data is hard for an analytical mind, which is why you need a structured replacement. The Goodnight Companion replaces obsessive tech-tracking with proven clinical mechanics, giving you the formulas to rebuild your sleep without triggering performance anxiety.
            </p>
            <Link 
              href="/journey" 
              className="btn-primary inline-block w-auto !px-8 hover:!bg-[var(--primary-dark)]"
            >
              Get The Goodnight Companion
            </Link>
          </div>

          <h2 className="text-xl font-serif text-[var(--text-primary)] mt-12 mb-4">Scientific References & Further Reading</h2>
          <ul className="list-disc pl-6 space-y-3 mb-12 text-sm">
            <li><strong>The Coining of Orthosomnia:</strong> Baron, K. G., Abbott, S., Jao, N., Manalo, N., & Kelly, R. (2017). Orthosomnia: Are Some Patients Taking the Quantified Self Too Far? <em>Journal of Clinical Sleep Medicine</em>, 13(2), 351–354. (The foundational case study detailing how sleep trackers induce anxiety and worsen perceived insomnia).</li>
            <li><strong>Accuracy of Wearable Trackers:</strong> Zambotti, M., Cellini, N., Goldstone, A., Colrain, I. M., & Baker, F. C. (2019). Wearable Sleep Technology in Clinical and Research Settings. <em>Medicine & Science in Sports & Exercise</em>, 51(7), 1538-1557. (This review highlights the severe limitations of consumer wrist-actigraphy in accurately distinguishing between wakefulness and light sleep stages).</li>
            <li><strong>The Nocebo Effect and Sleep:</strong> Harvey, A. G. (2002). A cognitive model of insomnia. <em>Behaviour Research and Therapy</em>, 40(8), 869-893. (This paper supports how negative expectations—such as waking up to a &quot;poor&quot; sleep score—directly increase daytime fatigue and nighttime hyperarousal).</li>
          </ul>
          
          <p className="text-xs opacity-60 mt-12 leading-relaxed">
            <strong>Disclaimer:</strong> This article is an educational resource and does not constitute medical advice. Please consult a healthcare professional if you are navigating severe mental health challenges or underlying sleep disorders.
          </p>

        </div>
      </article>
      
    </main>
  );
}
