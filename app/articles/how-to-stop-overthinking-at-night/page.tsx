import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Stop Overthinking at Night (Without Trying to \"Empty Your Mind\")",
  description: "Can't turn your brain off? Learn why trying to empty your mind backfires, and how to use Cognitive Defusion to stop overthinking and finally sleep.",
};

export default function Article3Page() {
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
            How to Stop Overthinking at Night (Without Trying to &quot;Empty Your Mind&quot;)
          </h1>
          <div className="h-[1px] w-full bg-[#8da399]/20" />
        </header>

        <div className="text-[var(--text-secondary)] font-sans leading-relaxed space-y-6 text-lg">
          <p className="text-xl md:text-2xl font-serif text-[var(--text-primary)] leading-snug">
            Most people believe that sleep is a task—something you can &quot;complete&quot; if you just try hard enough. But if you have ever spent a night staring at the ceiling while your brain boots up like a high-powered supercomputer, you know the frustrating truth: Sleep is a biological result, not a conscious effort.
          </p>
          <p>
            In fact, the more effort you put into &quot;quieting your mind&quot; or trying to stop overthinking, the louder your internal noise becomes. If your midnight thoughts feel like sticky, high-pressure commands, you aren&apos;t failing at relaxation; you are simply caught in the Thought Suppression Trap.
          </p>
          <p>
            Here is the science of why trying to force yourself to stop overthinking actually backfires, and the exact clinical tool from The Goodnight Companion to help you drop the struggle.
          </p>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">The Irony of Mental Control</h2>
          <p>
            When a thought like &quot;I&apos;ll be a total wreck tomorrow if I don&apos;t sleep&quot; hits your brain, your biological instinct is to fight it. You try to push it away or mentally scream at yourself to just stop overthinking.
          </p>
          <p>
            This triggers what psychologists call the &quot;Pink Elephant&quot; paradox. If I tell you not to think about a pink elephant, it becomes the only thing you can see. By fighting a thought, you signal to your nervous system that the thought is a dangerous threat. This spikes your adrenaline and cortisol, pushing sleep further away.
          </p>
          <blockquote className="border-l-4 border-[var(--primary)] pl-6 italic text-xl text-[var(--text-primary)] my-8">
            You don&apos;t need a silent mind to fall asleep; you simply need a neutral reaction to a busy one.
          </blockquote>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">The Solution: Cognitive Defusion</h2>
          <p>
            In the ACT-I (Acceptance and Commitment Therapy for Insomnia) framework, we move away from &quot;fighting&quot; thoughts and toward Cognitive Defusion.
          </p>
          <p>
            &quot;Defusion&quot; is the art of learning to look <em>at</em> your thoughts, rather than <em>from</em> them. It is a way of seeing thoughts for what they truly are: bits of language and images passing through your mind. They are not facts, and they are not commands you are forced to obey.
          </p>
          <p>
            When you use defusion, you stop wrestling. You step back and take away the thought&apos;s power by creating a small, vital amount of psychological distance.
          </p>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">The 3-Step Process: From &quot;Command&quot; to &quot;Notification&quot;</h2>
          <p>Tonight, if you notice a familiar, &quot;sticky&quot; thought—like a worry about tomorrow&apos;s schedule or a frustration about being awake—experiment with this three-step reframe:</p>
          
          <div className="space-y-6 my-8">
            <div className="bg-[#f9f8f6] p-6 rounded-[1rem] border border-[#8da399]/20">
              <h3 className="font-serif text-[var(--text-primary)] text-xl mb-2 flex items-center">
                <span className="bg-[var(--primary)] text-white w-6 h-6 rounded-full inline-flex items-center justify-center text-sm mr-3">1</span>
                Acknowledge it
              </h3>
              <p className="text-sm m-0">Notice the thought exactly as it arrived: <br/><em>&quot;I’ll be a wreck tomorrow.&quot;</em></p>
            </div>
            
            <div className="bg-[#f9f8f6] p-6 rounded-[1rem] border border-[#8da399]/20">
              <h3 className="font-serif text-[var(--text-primary)] text-xl mb-2 flex items-center">
                <span className="bg-[var(--primary)] text-white w-6 h-6 rounded-full inline-flex items-center justify-center text-sm mr-3">2</span>
                Add the Preface
              </h3>
              <p className="text-sm m-0">Create the first layer of distance: <br/><em>&quot;I’m having the thought that I’ll be a wreck tomorrow.&quot;</em></p>
            </div>

            <div className="bg-[#f9f8f6] p-6 rounded-[1rem] border border-[#8da399]/20">
              <h3 className="font-serif text-[var(--text-primary)] text-xl mb-2 flex items-center">
                <span className="bg-[var(--primary)] text-white w-6 h-6 rounded-full inline-flex items-center justify-center text-sm mr-3">3</span>
                Add the Observation
              </h3>
              <p className="text-sm m-0">Step back into the role of the objective observer: <br/><em>&quot;I’m noticing that I’m having the thought that I’ll be a wreck tomorrow.&quot;</em></p>
            </div>
          </div>

          <p>
            By the third step, you have successfully downgraded the anxiety. It is no longer a &quot;command&quot; that requires your immediate panic; it has become a &quot;notification&quot; on your mental dashboard. You don&apos;t have to agree with the notification, and you don&apos;t have to &quot;delete&quot; it. You simply let it sit there while you allow your body to remain heavy and rested.
          </p>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">When the Mind Won&apos;t Settle: Reframing the Sanctuary</h2>
          <p>
            If you have practiced defusion for what feels like 20 minutes and the frustration is still mounting, your brain is likely still identifying the mattress as a place of struggle.
          </p>
          <p>
            At this point, we move from a mental tool to a physical one. We need to reframe the brain-bed association by physically resetting the scene. Staying in bed and &quot;trying&quot; to defuse while your heart is racing can accidentally reinforce the link between your bed and your anxiety. By getting up, you signal that the &quot;struggle&quot; is over, protecting your bed as a place solely for rest.
          </p>
          <p className="text-sm bg-[#f2f0e9] p-4 rounded-xl mt-6 italic">
            If the struggle is too high, read our guide: <Link href="/articles/the-20-minute-rule" className="text-[var(--primary)] font-bold hover:underline">The 20-Minute Rule: Why Getting Out of Bed is the Key to Fixing Insomnia</Link>
          </p>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">Call a Truce</h2>
          <p>
            Insomnia is often a state of &quot;loyalty misplaced&quot;—your brain is trying to solve a problem by thinking, but it&apos;s using the wrong tool for the job. Stop treating your thoughts as enemies. Notice the noise, downgrade the notifications to &quot;low priority,&quot; and remind yourself that your only job tonight is to be present, not perfect.
          </p>

          <hr className="my-12 border-[#8da399]/20" />
          
          <div className="bg-[#f9f8f6] p-8 rounded-[1.5rem] mt-12 text-center shadow-sm">
            <h3 className="text-2xl font-serif text-[var(--text-primary)] mb-4">Stop Fighting. Start Healing.</h3>
            <p className="mb-6 mx-auto max-w-lg">
              Tired of feeling held hostage by your midnight thoughts? Cognitive Defusion is just the foundation. The Goodnight Companion provides a structured, clinical roadmap to recovery.
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
            <li><strong>The &quot;Pink Elephant&quot; Paradox & Mental Control:</strong> Wegner, D. M. (1994). Ironic processes of mental control. <em>Psychological Review</em>, 101(1), 34–52. (This foundational paper outlines why attempting to suppress or force away anxious thoughts actively makes them more persistent).</li>
            <li><strong>ACT for Insomnia (Cognitive Defusion):</strong> Dalrymple, K. Q., Fiorentino, L., Politi, M. C., & Posner, D. (2010). Incorporating principles from acceptance and commitment therapy into cognitive-behavioral therapy for insomnia. <em>Journal of Contemporary Psychotherapy</em>. (This research highlights how &quot;dropping the struggle&quot; and defusion techniques neutralize nighttime anxiety better than thought suppression).</li>
            <li><strong>Conditioned Hyperarousal:</strong> Bonnet, M. H., & Arand, D. L. (2010). Hyperarousal and insomnia: State of the science. <em>Sleep Medicine Reviews</em>, 14(1), 9-15. (This review details the biological &quot;fight or flight&quot; response that occurs when the brain associates the bed with stress and wakefulness).</li>
          </ul>
          
          <p className="text-xs opacity-60 mt-12 leading-relaxed">
            <strong>Disclaimer:</strong> This article is an educational resource and does not constitute medical advice. Please consult a healthcare professional if you are navigating severe mental health challenges or underlying sleep disorders.
          </p>

        </div>
      </article>
      
    </main>
  );
}
