import React from "react";
import Link from "next/link";
import FaqAccordion from "../../components/FaqAccordion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The 20-Minute Rule for Insomnia | CBT-I Stimulus Control Guide",
  description: "Discover why the NHS and sleep clinics recommend the 20-Minute Rule. Learn how to use CBT-I Stimulus Control to stop fighting sleep and fix your insomnia.",
  alternates: {
    canonical: '/articles/the-20-minute-rule',
  },
};

const faqs = [
  { question: "What is the NHS recommendation if you can't sleep after 20 minutes?", answer: "The NHS recommends that if you cannot sleep after around 20 minutes, you should get out of bed and go to another room. Do a quiet, non-stimulating activity — such as reading under a dim lamp — and only return to bed when you feel genuinely sleepy.\n\nThis recommendation is part of Stimulus Control Therapy, a technique embedded in CBT-I (Cognitive Behavioural Therapy for Insomnia), which the NHS recognises as the most effective long-term treatment for chronic insomnia." },
  { question: "What does CBT-I say about the 20-minute rule for getting out of bed?", answer: "CBT-I includes the 20-minute rule as a component of Stimulus Control Therapy — one of its most robustly evidenced techniques. The instruction is: if you are awake and frustrated in bed for approximately 20 minutes, leave the bedroom, engage in a calm low-stimulation activity, and only return when you are physically sleepy.\n\nThe purpose is to eliminate the conditioned association between the bed and wakefulness/anxiety, and to rebuild a reliable association between the bed and sleep." },
  { question: "Is the get-out-of-bed-after-20-minutes rule backed by official sleep guidelines?", answer: "Yes. The rule is endorsed by the NHS, the American Academy of Sleep Medicine (AASM), and the National Sleep Foundation. It is derived from Stimulus Control Therapy, first formalised by Dr. Richard Bootzin in 1972 and now considered a first-line, evidence-based treatment for chronic insomnia in clinical sleep medicine." },
  { question: "Should I stay in bed if I can't sleep?", answer: "No. Staying in bed while awake and frustrated teaches your brain to associate the mattress with stress — a process clinically termed Conditioned Hyperarousal. The more you lie awake in bed, the more your brain treats that environment as a place of danger and vigilance rather than rest.\n\nYou should leave the bed after roughly 20 minutes of wakefulness and only return when physically sleepy." },
  { question: "What should I do when I get out of bed in the middle of the night?", answer: "Move to a dimly lit room and do something calm and boring — reading a physical book, listening to a quiet audiobook, or playing a gentle podcast. The key word is boring: low novelty, low stimulation, low stakes.\n\nAvoid screens entirely. Blue light from phones and tablets suppresses melatonin and sends a biological \"daytime\" signal to your brain, actively extending wakefulness. Only return to bed when your eyelids are heavy and sleep feels genuinely imminent." },
  { question: "How do I know if 20 minutes have passed without checking the clock?", answer: "Do not watch the clock. Checking the time at night triggers an adrenaline response and worsens sleep anxiety — the exact opposite of what you need.\n\nSimply estimate. Once you feel a clear, heavy wave of frustration, restlessness, and tossing, assume roughly 20 minutes have passed and use that as your cue to get up." },
  { question: "What if I don't have another room to go to when I can't sleep?", answer: "There are two alternatives. If you cannot leave the room due to caregiving duties or space constraints, physically move off the mattress to a chair or cushion in the room — the change of location is enough to shift the conditioned association.\n\nIf you cannot leave the bed due to physical limitations, remain in bed but sit completely upright, propped by pillows. This postural change signals to your nervous system that the \"trying to sleep\" mode has been paused." },
  { question: "What is Stimulus Control Therapy for insomnia?", answer: "Stimulus Control Therapy is a behavioural technique for insomnia developed by Dr. Richard Bootzin in 1972. Its goal is to restore a strong, reliable association between the bed and sleep by restricting the behaviours that occur in the bedroom to sleep (and sex) only.\n\nThe core instructions include: only get into bed when sleepy, use the bed only for sleep, leave the bed if you cannot sleep after roughly 20 minutes, keep a consistent wake time regardless of how much you slept, and avoid napping. It is considered one of the most effective individual components of CBT-I." }
];

export default function Article2Page() {
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
          <div className="inline-flex flex-wrap items-center gap-2 bg-[#e8f0f8] border border-[#c0d8ee] text-[#2c5f8a] text-xs font-medium px-3 py-1.5 rounded-full mb-6 tracking-wide">
            <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 1L1 3.5V7C1 10.0376 3.41 12.8776 6.5 13.5C9.59 12.8776 12 10.0376 12 7V3.5L6.5 1Z" stroke="#2c5f8a" strokeWidth="1.3" fill="none"/></svg>
            NHS-endorsed · CBT-I evidence-based · AASM clinical guideline
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[var(--text-primary)] leading-tight mb-6">
            The 20-Minute Rule for Insomnia: The NHS &amp; CBT-I Guideline Explained
          </h1>

          <div className="flex flex-wrap gap-4 text-xs text-[var(--text-secondary)] mb-8">
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              8 min read
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
              Evidence-based · CBT-I
            </span>
          </div>

          {/* QUICK ANSWER */}
          <div className="bg-[#1a1814] text-white p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/5 rounded-full"></div>
            <p className="text-[10px] md:text-xs font-bold tracking-[0.1em] uppercase text-white/50 mb-3">Quick Answer</p>
            <h2 className="text-xl font-serif font-semibold text-white mb-3">
              If you can&apos;t sleep after 20 minutes, get out of bed — it&apos;s the official NHS recommendation.
            </h2>
            <p className="text-sm md:text-base text-white/80 leading-relaxed mb-4">
              Lying awake and frustrated trains your brain to associate your mattress with stress through a mechanism called Conditioned Hyperarousal. The longer you stay in bed fighting wakefulness, the stronger that association becomes.
            </p>
            <p className="text-sm text-white/65 italic border-t border-white/15 pt-4">
              But knowing why to leave is only the start. Below: the neuroscience, three options for every living situation, and exactly what to do until you feel sleepy again.
            </p>
          </div>
        </header>

        <div className="text-[var(--text-secondary)] font-sans leading-relaxed space-y-6 text-lg">

          <p>
            It is 2:00 AM. You are wide awake, staring at the ceiling, and your mind is racing.
            You calculate the hours left until your alarm: <em>&quot;If I fall asleep right now, I can still get four hours.&quot;</em>
            You squeeze your eyes shut and try with everything you have to force sleep. But the harder you fight, the more awake, anxious, and wired you feel.
          </p>

          <p>
            The most common advice for this moment is to &quot;just stay in bed and relax.&quot; But for anyone with chronic insomnia, staying in bed while wide awake is one of the worst things you can do — and the official clinical guidelines agree.
          </p>

          {/* AUTHORITY PANEL */}
          <div className="bg-[#e8f0f8] border border-[#c0d8ee] p-6 rounded-[1rem] my-8">
            <h3 className="font-serif text-[#2c5f8a] text-xl font-semibold mb-3">What the official guidelines say</h3>
            <p className="text-sm md:text-base text-[#4a4540] leading-relaxed mb-3">
              The <strong>NHS</strong> explicitly recommends that if you cannot sleep, you should get up and go to another room — doing something quiet and non-stimulating until you feel sleepy again.
              This is also a foundational component of <strong>CBT-I (Cognitive Behavioural Therapy for Insomnia)</strong>, the treatment endorsed as the first-line intervention for chronic insomnia by the <strong>American Academy of Sleep Medicine (AASM)</strong> and the <strong>National Sleep Foundation</strong>.
            </p>
            <p className="text-sm md:text-base text-[#4a4540] leading-relaxed">
              The specific instruction — leave the bed after roughly 20 minutes of wakefulness — comes from <strong>Stimulus Control Therapy</strong>, first formalised by sleep researcher Dr. Richard Bootzin in 1972.
              It remains one of the most clinically validated techniques in sleep medicine.
            </p>
          </div>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4 pt-4 border-t border-[#8da399]/20">
            The Psychology: Why Your Bed Can Start Feeling Like a Trap
          </h2>

          <p>
            When you walk into your bedroom right now, what do you feel? For many people with chronic insomnia, the answer is a knot of anxiety — not calm or sleepiness. This has a specific clinical name: <strong>Conditioned Hyperarousal</strong>.
          </p>

          <p>
            The human brain learns by association. Every time you get into bed and fall asleep peacefully, your brain encodes a simple equation: <em>Bed = Sleep</em>. But every time you spend hours tossing, turning, watching the clock, and crying in frustration, your brain slowly rewires that equation. It learns: <em>Bed = Stress, Wakefulness, and Anxiety</em>.
          </p>

          <blockquote className="border-l-4 border-[var(--primary)] pl-6 italic text-xl text-[var(--text-primary)] my-8">
            Your brain is not broken — it is protecting you. It has mistakenly identified your mattress as a source of danger and is keeping you alert accordingly.
          </blockquote>

          <p>
            This is why the Spielman 3P Model of Insomnia — one of the most cited frameworks in sleep medicine — identifies maladaptive habits like staying in bed while awake as a key <em>perpetuating</em> factor. The original stressful night may have been the trigger. But staying in bed during wakefulness is the habit that keeps insomnia alive months and years later.
          </p>

          <p>
            Our goal is to break that association. <strong>The bed is for sleeping — not for fighting.</strong>
          </p>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4 pt-4 border-t border-[#8da399]/20">
            The 20-Minute Contingency Plan
          </h2>

          <p>
            This technique is a core tool from CBT-I and forms part of Stimulus Control Therapy. Here is how to apply it.
          </p>

          <p>
            <strong>The rule:</strong> When you find yourself in bed, awake, tossing, turning, and feeling frustrated for what feels like around 20 minutes — reset the scene.
          </p>

          <div className="bg-[#fdf3e8] border-l-4 border-[#b8621a] p-5 rounded-r-lg my-6 text-sm text-[#4a4540]">
            <strong className="text-[#b8621a]">Important:</strong> Do not stare at the clock to track the 20 minutes. Clock-watching triggers an adrenaline spike that makes sleep harder. Simply estimate. Once you feel that clear wave of frustration and restlessness arrive, it is time to move.
          </div>

          <p>
            The logic is direct: <strong>if you stay in bed fighting, your brain learns to fight. If you leave, your brain learns the bed is only for sleep.</strong>
          </p>

          <h3 className="text-xl font-serif text-[var(--text-primary)] mt-10 mb-6">Choose Your Path — Three Options for Every Living Situation</h3>

          <div className="space-y-4 my-8">
            <div className="bg-white border border-[#8da399]/20 p-6 rounded-xl flex gap-5 items-start">
              <div className="flex-shrink-0 w-9 h-9 bg-[#1a1814] text-white rounded-full flex items-center justify-center font-serif font-bold text-base">A</div>
              <div>
                <span className="inline-block text-[10px] font-medium tracking-wide bg-[#f0ece4] text-[#7a736b] px-2 py-1 rounded-full mb-2 uppercase">Best for most people</span>
                <h4 className="font-serif text-[var(--text-primary)] text-lg mb-2">Leave the Room</h4>
                <p className="text-sm m-0">Get up and walk to a designated &quot;Rest Spot&quot; in another room — a comfortable sofa or a specific chair. The simple physical act of leaving the bedroom breaks the battlefield association immediately. Keep the lighting dim and the activity dull.</p>
              </div>
            </div>
            
            <div className="bg-white border border-[#8da399]/20 p-6 rounded-xl flex gap-5 items-start">
              <div className="flex-shrink-0 w-9 h-9 bg-[#1a1814] text-white rounded-full flex items-center justify-center font-serif font-bold text-base">B</div>
              <div>
                <span className="inline-block text-[10px] font-medium tracking-wide bg-[#f0ece4] text-[#7a736b] px-2 py-1 rounded-full mb-2 uppercase">Best for parents &amp; caregivers</span>
                <h4 className="font-serif text-[var(--text-primary)] text-lg mb-2">Switch Spots Within the Room</h4>
                <p className="text-sm m-0">If you cannot leave the room because you need to remain near a child or someone in your care, move to a specific chair or cushion inside the bedroom. The goal is simply to physically remove yourself from the mattress and break the conditioned association.</p>
              </div>
            </div>

            <div className="bg-white border border-[#8da399]/20 p-6 rounded-xl flex gap-5 items-start">
              <div className="flex-shrink-0 w-9 h-9 bg-[#1a1814] text-white rounded-full flex items-center justify-center font-serif font-bold text-base">C</div>
              <div>
                <span className="inline-block text-[10px] font-medium tracking-wide bg-[#f0ece4] text-[#7a736b] px-2 py-1 rounded-full mb-2 uppercase">Best for limited space or mobility</span>
                <h4 className="font-serif text-[var(--text-primary)] text-lg mb-2">Change Your Posture in Bed</h4>
                <p className="text-sm m-0">If you cannot leave the bed due to physical limitations or severe space constraints, remain but sit completely upright. Prop yourself with pillows and turn on a small reading light. You are changing your biological posture to signal to your brain that the &quot;trying to sleep&quot; phase has been paused.</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4 pt-4 border-t border-[#8da399]/20">
            What to Do While You Are Awake
          </h2>

          <p>
            Your activity in your Rest Spot should be <strong>calm, quiet, and genuinely boring</strong>. The goal is not stimulation — it is to allow your sleep pressure to rebuild naturally without fighting it.
          </p>

          <p>
            The instinctive urge is to reach for your phone — not just to scroll, but to feel less alone in the dark. Resist this. The blue light emitted by phones and tablets is a powerful biological signal for &quot;daytime.&quot; A 2015 Harvard study published in the <em>Proceedings of the National Academy of Sciences</em> demonstrated that evening exposure to light-emitting screens suppresses melatonin, delays your circadian clock, and significantly reduces next-morning alertness. Reaching for a screen at 2 AM is the single most effective way to make your insomnia worse.
          </p>

          <p className="mt-6 mb-3">Good alternatives:</p>
          <ul className="space-y-2 mb-8">
            <li className="flex gap-3 text-sm md:text-base"><span className="text-[var(--primary)] font-bold">—</span> Listen to a pre-selected calm audiobook (something you have heard before works well — it reduces novelty-driven alertness)</li>
            <li className="flex gap-3 text-sm md:text-base"><span className="text-[var(--primary)] font-bold">—</span> Play a gentle, low-stakes podcast at low volume</li>
            <li className="flex gap-3 text-sm md:text-base"><span className="text-[var(--primary)] font-bold">—</span> Listen to quiet, ambient music or nature sounds</li>
            <li className="flex gap-3 text-sm md:text-base"><span className="text-[var(--primary)] font-bold">—</span> Read a physical book under a dim, warm lamp</li>
          </ul>

          <div className="bg-[#fdf3e8] border-l-4 border-[#b8621a] p-5 rounded-r-lg my-6 text-sm text-[#4a4540]">
            <strong className="text-[#b8621a]">A note on NSDR &amp; PMR:</strong> Somatic techniques like Non-Sleep Deep Rest (NSDR) and Progressive Muscle Relaxation (PMR) are excellent for managing <em>daytime</em> fatigue from poor sleep. Do not use them in the middle of the night as a way to force sleep. Trying to force sleep creates performance anxiety — which makes you more awake, not less.
          </div>

          {/* MID-PAGE CTA */}
          <div className="bg-[#e8f5ef] border border-[#b0d9c2] p-8 rounded-[1rem] text-center my-10">
            <h3 className="font-serif text-[#2a6b4a] text-xl font-bold mb-3">If tonight is one of many bad nights…</h3>
            <p className="text-sm md:text-base text-[#4a4540] max-w-lg mx-auto mb-6">
              The 20-minute rule is one piece of a larger system. The Goodnight Companion is a 90-day guided journal that walks you through the complete CBT-I protocol — the same framework sleep clinicians use — without needing a therapist.
            </p>
            <Link href="/join-the-program" className="inline-block bg-[#2a6b4a] text-white font-sans font-medium px-6 py-3 rounded-md hover:opacity-90 transition-opacity">
              See how it works →
            </Link>
          </div>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4 pt-4 border-t border-[#8da399]/20">
            The Return: Wait for Sleepiness, Not Just Tiredness
          </h2>

          <p>
            You should only return to bed (or your sleeping posture) when you feel <strong>physically sleepy</strong> — eyelids becoming heavy, a slight drag in your body — not merely tired or bored.
          </p>

          <p>
            Tiredness is a mental state. Sleepiness is a biological one. Returning to bed when you are biologically ready is the entire mechanism by which this technique works. It teaches your nervous system that the bed is a safe harbour — a place where sleep reliably arrives — rather than a battlefield.
          </p>

          <p className="text-sm my-4 italic">
            (For a deeper understanding of how biological sleep pressure works, see our guide: <Link href="/articles/why-going-to-bed-early-is-making-your-insomnia-worse" className="text-[var(--primary)] underline underline-offset-2">Why Going to Bed Early Is Making Your Insomnia Worse</Link>.)
          </p>

          <div className="bg-[#fdf3e8] border-l-4 border-[#b8621a] p-5 rounded-r-lg my-6 text-sm text-[#4a4540]">
            <strong className="text-[#b8621a]">Safety note:</strong> Even while using the 20-Minute Contingency Plan, you must protect your core biological needs. Never restrict your total Time in Bed to less than 5.5 hours.
          </div>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4 pt-4 border-t border-[#8da399]/20">
            Why This Works: A Summary of the Mechanism
          </h2>

          <p>
            Stimulus Control Therapy succeeds because it treats chronic insomnia at its root — not the symptoms (sleeplessness tonight) but the underlying cause (a conditioned fear response to the sleeping environment). By consistently pairing the bed with sleep — and only with sleep — you gradually extinguish the conditioned arousal response.
          </p>

          <p>
            Most people who apply this technique consistently for two to four weeks begin noticing that getting into bed starts to feel genuinely calming again. The anxiety knot dissolves. The battle mentality fades. The bed becomes, once more, a place the brain associates with safety and rest.
          </p>

          {/* FINAL CTA */}
          <div className="bg-[#1a1814] p-10 rounded-2xl text-center text-white my-12 shadow-lg">
            <h2 className="font-serif text-2xl font-bold mb-4 tracking-tight">Stop piecing it together. Start healing.</h2>
            <p className="text-white/75 text-sm md:text-base max-w-lg mx-auto mb-8 leading-relaxed">
              The 20-minute rule is one tool in a complete system. The Goodnight Companion is a 90-day guided journal built on the full CBT-I protocol — designed to walk you through fixing your sleep architecture, step by step.
            </p>
            <Link href="/join-the-program" className="inline-block bg-white text-[#1a1814] font-medium px-8 py-3 rounded-md hover:bg-white/90 transition-colors">
              Get The Goodnight Companion
            </Link>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-serif text-[var(--text-primary)] mb-6 pt-4 border-t border-[#8da399]/20">People Also Ask</h2>
            <FaqAccordion faqs={faqs} />
          </div>

          <div className="mt-16 pt-8 border-t-2 border-[#8da399]/20">
            <h2 className="text-xl font-serif text-[var(--text-primary)] mb-6">Scientific References &amp; Further Reading</h2>
            <ul className="space-y-4 text-sm text-[var(--text-secondary)]">
              <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-px before:bg-[var(--text-secondary)]">
                <strong>Stimulus Control Therapy:</strong> Bootzin, R. R. (1972). Stimulus control treatment for insomnia. <em>Proceedings of the American Psychological Association.</em> The foundational clinical paper establishing the get-out-of-bed rule to rebuild the bed–sleep association.
              </li>
              <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-px before:bg-[var(--text-secondary)]">
                <strong>The 3P Model of Insomnia:</strong> Spielman, A. J., Caruso, L. S., &amp; Glovinsky, P. B. (1987). A clinical perspective on the nature and management of insomnia. <em>Psychiatric Clinics of North America, 10</em>(4), 541–553. Explains how acute stress becomes chronic insomnia through perpetuating habits such as staying in bed while awake.
              </li>
              <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-px before:bg-[var(--text-secondary)]">
                <strong>Screen Light &amp; Sleep Disruption:</strong> Chang, A.-M., Aeschbach, D., Duffy, J. F., &amp; Czeisler, C. A. (2015). Evening use of light-emitting eReaders negatively affects sleep, circadian timing, and next-morning alertness. <em>Proceedings of the National Academy of Sciences.</em> Demonstrates that screen light suppresses melatonin and extends wakefulness — the Harvard study behind the no-screens guidance.
              </li>
              <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-px before:bg-[var(--text-secondary)]">
                <strong>NHS Sleep Guidance:</strong> <a href="https://www.nhs.uk/every-mind-matters/mental-health-issues/sleep/" target="_blank" rel="noreferrer" className="text-[var(--primary)] underline underline-offset-2">nhs.uk — Sleep and insomnia</a>. Official NHS guidance on sleep hygiene and recommended behaviours for insomnia.
              </li>
              <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-px before:bg-[var(--text-secondary)]">
                <strong>CBT-I Overview:</strong> Qaseem, A., et al. (2016). Management of Chronic Insomnia Disorder in Adults. <em>Annals of Internal Medicine.</em> American College of Physicians clinical guideline recommending CBT-I as the first-line treatment for chronic insomnia disorder.
              </li>
            </ul>
          </div>

          <div className="mt-10 p-5 bg-[#f0ece4] rounded-lg text-xs text-[var(--text-secondary)] leading-relaxed">
            <strong>Disclaimer:</strong> The content in this article is for educational and informational purposes only and does not constitute medical advice, diagnosis, or clinical therapy. If you have a history of bipolar disorder, seizure disorders, untreated sleep apnoea, or operate heavy machinery, please consult a qualified healthcare provider before making changes to your sleep schedule or restricting your time in bed.
          </div>

        </div>
      </article>
      
    </main>
  );
}
