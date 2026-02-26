import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The 20-Minute Rule: Why Getting Out of Bed is the Key to Fixing Insomnia | The Good Night Companion",
  description: "Staying in bed when you are wide awake is one of the worst things you can do. Learn how to use the 20-Minute Contingency Plan to break the cycle.",
};

export default function Article2Page() {
  return (
    <main className="min-h-screen flex flex-col items-center p-6 md:p-24 relative bg-[var(--background)]">
      
      {/* Navigation */}
      <div className="w-full max-w-3xl z-10 mb-12">
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
      </div>

      <article className="w-full max-w-3xl z-10 bg-white p-8 md:p-16 rounded-[2rem] shadow-sm mb-20 shadow-[rgba(0,0,0,0.03)_0px_10px_30px]">
        <header className="mb-12">
          <p className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-[#8da399] mb-4">
            Sleep Science
          </p>
          <h1 className="text-3xl md:text-5xl font-serif text-[var(--text-primary)] leading-tight mb-8">
            The 20-Minute Rule: Why Getting Out of Bed is the Key to Fixing Insomnia
          </h1>
          <div className="h-[1px] w-full bg-[#8da399]/20" />
        </header>

        <div className="text-[var(--text-secondary)] font-sans leading-relaxed space-y-6 text-lg">
          <p className="text-xl md:text-2xl font-serif text-[var(--text-primary)] leading-snug">
            It is 2:00 AM. You are wide awake, staring at the ceiling, and your mind is racing.
          </p>
          
          <p>You calculate the hours left until your alarm goes off: "If I can just fall asleep right now, I'll still get four hours." You squeeze your eyes shut and try with all your might to force yourself to sleep. But the harder you fight, the more awake, anxious, and frustrated you feel.</p>
          
          <p>The most common advice you will hear for this exact moment is to "just stay in bed and relax." But if you are battling chronic insomnia, staying in bed when you are wide awake is actually one of the worst things you can do.</p>
          
          <p>Here is the science behind why your bed currently feels like a trap, and exactly how to use the 20-Minute Contingency Plan to fix it.</p>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">The Psychology: Retraining Your Brain-Bed Connection</h2>
          
          <p>When you walk into your bedroom right now, what do you feel? Do you feel safe, relaxed, and sleepy? Or do you feel a knot of anxiety form in your stomach?</p>
          
          <p>For many exhausted people, after months of sleepless nights, the bedroom starts to feel like a battlefield.</p>
          
          <p>This happens because of a psychological concept called <strong>Conditioned Hyperarousal</strong>. The human brain learns by association. If you consistently get into bed and fall asleep peacefully, your brain learns: <span className="font-semibold">Bed = Sleep</span>. But if you spend hours tossing, turning, and crying in frustration, your brain slowly rewires that connection. It learns: <span className="font-semibold">Bed = Stress, Wakefulness, and Anxiety</span>.</p>
          
          <p>Your brain is literally trying to protect you. It has mistakenly identified your mattress as a place of danger. Our goal is to break that association. The bed is for sleeping, not for fighting.</p>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">The Solution: The 20-Minute Contingency Plan</h2>
          
          <p>To break this painful cycle, we use a core tool from Cognitive Behavioral Therapy for Insomnia (CBT-I). This is your compassionate action plan for difficult nights.</p>
          
          <blockquote className="border-l-4 border-[var(--primary)] pl-6 italic text-xl text-[var(--text-primary)] my-8">
            <strong>The Rule:</strong> When you find yourself in bed, awake, tossing, turning, and feeling frustrated for what feels like 20 minutes, you must reset the scene.
          </blockquote>
          
          <p className="text-sm bg-[#f2f0e9] p-4 rounded-xl mt-6">
            <strong>Note:</strong> Do not stare at the clock to track the 20 minutes. Clock-watching triggers adrenaline. Just estimate. Once you feel that heavy wave of frustration hit, it is time to move.
          </p>
          
          <p className="mt-6">If you stay in bed fighting, the brain learns to fight. If you leave, the brain learns that the bed is only for sleep.</p>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">How to Break the Association (Choose Your Path)</h2>
          
          <p>Because everyone's living situation is unique, here are the three most effective ways to execute this plan. Choose the option that is most accessible to your reality:</p>
          
          <div className="space-y-6 my-8">
            <div className="bg-[#f9f8f6] p-6 rounded-[1rem] border border-[#8da399]/20">
              <h3 className="font-serif text-[var(--text-primary)] text-xl mb-2 flex items-center">
                <span className="bg-[var(--primary)] text-white w-6 h-6 rounded-full inline-flex items-center justify-center text-sm mr-3">A</span>
                Leave the Room (Best for Most Cases)
              </h3>
              <p className="text-sm m-0">Get up and walk to a designated "Rest Spot" in another room, like a comfortable couch or a specific chair. The simple physical act of leaving the bedroom breaks the battlefield association instantly.</p>
            </div>
            
            <div className="bg-[#f9f8f6] p-6 rounded-[1rem] border border-[#8da399]/20">
              <h3 className="font-serif text-[var(--text-primary)] text-xl mb-2 flex items-center">
                <span className="bg-[var(--primary)] text-white w-6 h-6 rounded-full inline-flex items-center justify-center text-sm mr-3">B</span>
                Switch Spots (Best for Caregivers/Parents)
              </h3>
              <p className="text-sm m-0">If you cannot leave the room because you need to stay near a child or someone you are caring for, move to a specific chair or cushion inside the bedroom. Keep it dim and boring. The goal is simply to physically remove yourself from the mattress.</p>
            </div>

            <div className="bg-[#f9f8f6] p-6 rounded-[1rem] border border-[#8da399]/20">
              <h3 className="font-serif text-[var(--text-primary)] text-xl mb-2 flex items-center">
                <span className="bg-[var(--primary)] text-white w-6 h-6 rounded-full inline-flex items-center justify-center text-sm mr-3">C</span>
                Change Your Posture (Best for Limited Space)
              </h3>
              <p className="text-sm m-0">If you cannot leave the bed due to physical limitations or severe space constraints, remain in bed but sit completely upright. Prop yourself up with pillows and turn on a small reading light. You are changing your biological posture to signal to your brain that the "trying to sleep" phase has been paused.</p>
            </div>
          </div>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">What to Do While You Are Awake</h2>
          
          <p>Your activity in your Rest Spot (or seated up position) should be incredibly calm and boring.</p>
          
          <p>We know the immediate urge is to reach for your phone—not just to scroll, but to feel a little less alone with your anxious thoughts in the middle of the night. <strong>Do not look at screens.</strong> The blue light from a phone or tablet is a powerful biological signal for "daytime," which spikes your alertness and pushes sleep even further away.</p>
          
          <p>What to do instead:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Listen to a pre-selected calm audiobook.</li>
            <li>Play a gentle, low-stakes podcast.</li>
            <li>Listen to quiet, ambient music.</li>
          </ul>
          
          <p className="text-sm bg-[#f2f0e9] p-4 rounded-xl mt-6">
            <strong>Important Note:</strong> While we highly recommend somatic tools like NSDR or PMR to manage daytime fatigue, <em>do not</em> use them in the middle of the night to try and force sleep. Trying to force sleep creates performance anxiety, which will only wake you up more.
          </p>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">The Return: Wait for Sleepiness, Not Just Tiredness</h2>
          
          <p>You should only return to your bed (or your sleeping posture) when your eyelids are heavy and you begin to feel physically <em>sleepy</em>, not just <em>tired</em>.</p>
          
          <p className="text-sm italic my-4">
            (Not sure of the difference? Read our guide: <Link href="/articles/why-going-to-bed-early-is-making-your-insomnia-worse" className="text-[var(--primary)] font-bold hover:underline">Why Going to Bed Early is Making Your Insomnia Worse</Link> to understand how biological sleep pressure works).
          </p>
          
          <p>Returning to bed only when you are biologically ready to fall asleep is the key to retraining your brain. It teaches your nervous system that the bed is a safe harbor, not a battlefield.</p>
          
          <p className="bg-[#8da399]/10 p-5 rounded-xl border-l-4 border-[var(--primary)] mt-8">
            <strong>Safety Note:</strong> Even if you are utilizing the 20-Minute Contingency Plan, you must protect your core biological needs. Never restrict your total Time in Bed to less than 5.5 hours.
          </p>

          <hr className="my-12 border-[#8da399]/20" />
          
          <div className="bg-[#f9f8f6] p-8 rounded-[1.5rem] mt-12 text-center shadow-sm">
            <h3 className="text-2xl font-serif text-[var(--text-primary)] mb-4">Stop Fighting. Start Healing.</h3>
            <p className="mb-6 mx-auto max-w-lg">
              Piecing together blog articles is a great start, but true recovery requires a system.
              The Goodnight Companion is a 90-day guided journal that walks you through the exact, step-by-step science of fixing your broken sleep architecture.
            </p>
            <Link 
              href="/journey" 
              className="btn-primary inline-block w-auto !px-8 hover:!bg-[var(--primary-dark)]"
            >
              Get The Goodnight Companion
            </Link>
          </div>
          
          <p className="text-xs opacity-60 mt-12 leading-relaxed">
            <strong>Disclaimer:</strong> The content provided in this article is for educational and informational purposes only and does not constitute medical advice, diagnosis, or clinical therapy. If you have a history of bipolar disorder, seizure disorders, untreated sleep apnea, or operate heavy machinery, please consult a qualified healthcare provider before making changes to your sleep schedule or restricting your time in bed.
          </p>

        </div>
      </article>
      
    </main>
  );
}
