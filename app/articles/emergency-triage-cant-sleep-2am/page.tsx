import React from "react";
import Link from "next/link";
import FaqAccordion from "../../components/FaqAccordion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Can't Sleep at 2am? Emergency Triage — What to Do Right Now",
  description: "Stop trying to force it. Here is the exact step-by-step protocol for a 2am waking — from turning the clock away to when it's safe to return to bed, including what to do when it doesn't work the first time.",
};

const faqs = [
  { question: "Should I just lie in bed if I can't sleep?", answer: "No. Lying awake in bed, frustrated and anxious, directly worsens insomnia by reinforcing Conditioned Hyperarousal — the brain's learned association between the sleep environment and threat. Every minute you spend fighting for sleep in bed strengthens that association. The clinical instruction is clear: if you are awake and distressed after roughly 20 minutes, leave." },
  { question: "What if getting out of bed makes me feel more anxious?", answer: "This is extremely common, particularly in the first few nights of applying stimulus control. Getting up can feel like admitting defeat — like you are making the insomnia worse by giving in. The reframe is this: leaving the bed is not surrender. It is a deliberate clinical intervention. The anxiety you feel when you stand up is the conditioned response being challenged, not confirmed. It will settle once you are in a different environment with something low-stakes to engage with." },
  { question: "Is looking at my phone in the middle of the night bad?", answer: "Yes, for two distinct reasons. First, the blue-spectrum light emitted by screens suppresses melatonin secretion, pushing your circadian signal for sleep later. Second, and more importantly, the content of phones — social media, news, messages — creates emotional and cognitive engagement that maintains the arousal state you are trying to exit. A physical book, an audiobook, or a podcast works specifically because it is low-novelty, low-stakes, and does not require reactive thinking." }
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
            <span>CBT-I Stimulus Control Protocol · ACT-I Informed · NHS-Endorsed Method</span>
          </div>

          <p className="text-[10px] md:text-xs font-bold tracking-[0.16em] uppercase text-sage mb-4">
            Sleep Science
          </p>
          <h1 className="text-3xl md:text-5xl font-cormorant font-light text-ink leading-tight mb-8">
            Can't Sleep at 2am? Emergency Triage — What to Do Right Now
          </h1>

          <div className="h-[1px] w-full bg-[#8da399]/20" />
        </header>

        <div className="text-ink-2 font-sans leading-relaxed space-y-6 text-lg">

          {/* Quick Answer */}
          <div className="bg-[#f9f8f6] p-6 rounded-[1rem] border border-rule my-6">
            <p className="text-[10px] font-bold tracking-[0.16em] uppercase text-sage mb-2">Quick Answer</p>
            <h3 className="font-serif font-medium text-ink text-xl mb-4">
              What should you do when you are wide awake at 2 AM?
            </h3>
            <p className="font-sans text-ink-2 text-lg mb-4">
              Stop trying to force sleep. If you have been lying awake for roughly 20 minutes, get out of bed immediately. Move to a dimly lit room, do not look at your phone, and do something boring and low-stakes until your eyelids become genuinely heavy. Only return to bed when you feel biologically sleepy — not when you have been up for a set amount of time.
            </p>
          </div>

          
          <p className="text-xl md:text-2xl font-serif font-medium text-ink leading-snug">
            It is 2:14 AM. You know exactly what time it is because you have checked the clock four times in the last hour.
          </p>
          <p>
            You are hot, you are furious, and you are doing the mental mathematics of exactly how ruined tomorrow is going to be if you do not fall asleep in the next 15 minutes.
          </p>
          <blockquote className="border-l-4 border-[var(--primary)] pl-6 italic text-xl text-ink my-8">
            "Lying in the dark at 2 AM is the loneliest feeling in the world. I just lie there paralysed, begging my brain to shut off, feeling the panic rising into my throat with every minute that passes."
          </blockquote>
          <p>
            If you are reading this right now, in the middle of the night, stop scrolling for a moment and take one slow breath.
          </p>
          <p>
            This is not a list of tips about chamomile tea. You are past that. You are in an active state of nocturnal hyperarousal — your nervous system is flooded with adrenaline and your brain has registered the bedroom as a threat environment. What you need right now is a triage protocol, not a wellness guide.
          </p>

          <h2 className="text-3xl font-cormorant font-light text-ink mt-16 mb-8">Step 1: Stop the Clock Maths</h2>
          <p>
            The moment you look at the clock and calculate how much sleep you are losing, your brain processes it as a threat. It responds by releasing adrenaline. You cannot sleep while your brain believes it is under attack — the biological drive for vigilance overrides the drive for sleep.
          </p>
          <p>
            Turn your phone face down on the other side of the room. Turn the alarm clock toward the wall. If the clock is built into a device you cannot move, cover it. You are officially off the clock for the rest of tonight. The alarm will wake you when it is time. Until then, you do not need to know what time it is.
          </p>

          <h2 className="text-3xl font-cormorant font-light text-ink mt-16 mb-8">Step 2: Evacuate the Bed</h2>
          <p>
            Every minute you spend lying awake in bed, tossing, frustrated, chest tight — your brain is being trained. It is learning, with each repetition, that this mattress is a place associated with stress and wakefulness. This is how Conditioned Hyperarousal deepens over time: not from one bad night, but from accumulation.
          </p>
          <p>
            If it feels like roughly 20 minutes have passed — do not check the time, just estimate — <strong>get up.</strong> Stand up, leave the bedroom, and close the door behind you. This is not a failure. This is a clinical decision. You are removing the stimulus that is triggering the threat response.
          </p>

          <h2 className="text-3xl font-cormorant font-light text-ink mt-16 mb-8">Step 3: The Rest Spot — Wait Out the Adrenaline</h2>
          <p>
            Move to a designated spot in another room. A sofa, a specific chair, anywhere that is not the bedroom. Keep the lighting extremely dim — a small lamp is fine, overhead lights are not.
          </p>
          <p>
            Your task here is simple: give your nervous system something low-stakes to process while the adrenaline clears. You are not trying to make yourself sleepy. You are not meditating or doing breathing exercises. You are simply occupying your mind with something boring and gentle while your biology resets.
          </p>
          <p>
            Read a physical book you have read before. Listen to a calm audiobook at low volume. Do a crossword. Avoid your phone entirely — the blue light suppresses melatonin, and the content of social media, news, or messaging is the opposite of boring. Anything that creates emotional engagement will extend the adrenaline response.
          </p>

          <h2 className="text-3xl font-cormorant font-light text-ink mt-16 mb-8">Step 4: The Return — And What to Do When It Fails</h2>
          <p>
            You return to bed when — and only when — you notice the physical signs of genuine sleepiness. Eyelids becoming heavy. Attention drifting away from what you are reading. A loosening of the tension in your chest and jaw.
          </p>
          <p>
            This is not a timed exercise. Some nights the signal comes in 20 minutes. Some nights it takes 90. That is not a measure of how broken your sleep is — it is a measure of how much adenosine your body has had time to accumulate since you last slept.
          </p>
          <ul className="list-disc pl-6 space-y-4 my-6">
            <li><strong>If the panic returns the moment you get back into bed:</strong> Get up again. Go back to your rest spot. This is not defeat — it is the protocol working as designed. You are removing the reinforcement of bed as a threat environment. You may repeat this cycle two, three, or four times in a single night.</li>
            <li><strong>If you never feel the sleepy signal and the sun starts coming up:</strong> That is also okay. Let it happen. Stay at your rest spot, keep the activity calm, and let the morning arrive. Your goal tonight is not to engineer a good night's sleep. Your goal is singular and behavioural: <strong>protect the bed from becoming an anxiety trigger.</strong> A night spent largely on the sofa, handled with acceptance rather than panic, is a night that hasn't deepened the conditioning.</li>
          </ul>

          <h2 className="text-3xl font-cormorant font-light text-ink mt-16 mb-8">The Goal Tonight is Safety, Not Sleep</h2>
          <p>
            This is the most important reframe you can make right now. Drop the demand for sleep. Drop the calculation. Drop the performance.
          </p>
          <p>
            Your nervous system cannot sleep while it is under the instruction to perform sleep. The moment you remove the demand — genuinely, not as a trick — the biological conditions for sleep can begin to restore themselves.
          </p>
          <p>
            Leave the bedroom. Find your rest spot. Do something boring. And let tonight be what it is.
          </p>

          <h2 className="text-xl font-serif font-medium text-ink mt-12 mb-4">Scientific References & Further Reading</h2>
          <ul className="list-disc pl-6 space-y-4 mb-12 text-[0.85rem] text-ink-2">
            <li><strong>Stimulus Control Therapy:</strong> Bootzin, R. R. (1972). Stimulus control treatment for insomnia. <em>Proceedings of the American Psychological Association</em>. The foundational clinical protocol establishing that leaving the bed breaks the hyperarousal conditioning loop.</li>
            <li><strong>Clock Monitoring and Cognitive Arousal:</strong> Harvey, A. G. (2002). A cognitive model of insomnia. <em>Behaviour Research and Therapy</em>. Demonstrates how time-monitoring during nocturnal wakefulness directly fuels cognitive arousal.</li>
            <li><strong>Behavioural Treatments Meta-Analysis:</strong> Morin, C. M., et al. (1994). Nonpharmacological interventions for insomnia: A meta-analysis of treatment efficacy. <em>American Journal of Psychiatry</em>. Establishes stimulus control as highly effective.</li>
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
