import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import FaqAccordion from "../../components/FaqAccordion";

export const metadata: Metadata = {
  title: "Why CBT-I Didn't Work for Me the First Time (And What Was Actually Missing)",
  description: "Rigid, unguided CBT-I often fails because it spikes anxiety without psychological support. Here is why ACT-I is the missing piece — and why a bad night is data, not a verdict.",
  alternates: {
    canonical: '/articles/why-cbt-i-didnt-work-for-me',
  },
};

export default function Article18Page() {
  const pageFaqs = [
    {
      "question": "Why does CBT-I make me feel worse at first?",
      "answer": "CBT-I relies on Sleep Restriction Therapy, which temporarily compresses your sleep window to build biological sleep pressure. In the first 1 to 2 weeks, this causes mild sleep deprivation, which temporarily spikes daytime fatigue, cortisol, and anxiety before your sleep architecture successfully consolidates."
    },
    {
      "question": "What is the success rate of CBT-I?",
      "answer": "Clinical studies show CBT-I is highly effective, with roughly 70% to 80% of patients experiencing significant improvements in sleep quality. However, drop-out rates can be high if patients attempt unguided CBT-I without psychological support to manage the initial increase in fatigue."
    },
    {
      "question": "What is the difference between CBT-I and ACT-I?",
      "answer": "CBT-I focuses on altering behaviors (restricting sleep, getting out of bed) and restructuring anxious thoughts. ACT-I (Acceptance and Commitment Therapy) focuses on mindfulness—teaching you to stop fighting your wakefulness, drop the struggle, and neutrally observe anxious thoughts without reacting to them."
    },
    {
      "question": "Can I do CBT-I on my own?",
      "answer": "While you can learn the mechanics of CBT-I independently, unguided CBT-I often leads to increased anxiety and perfectionism around sleep rules. Utilizing a structured framework, like a guided journal or a certified sleep therapist, drastically improves compliance and success rates."
    },
    {
      "question": "What do I do if Sleep Restriction Therapy causes a panic attack?",
      "answer": "If compressing your sleep window causes severe panic, you must raise your \"clinical safety floor.\" Never restrict your sleep below 5.5 hours. If panic persists, pause the restriction and focus entirely on ACT-I cognitive tools (like Cognitive Defusion) to lower your hyperarousal first."
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
            I completed CBT-I, tried every sleep app, and ran white noise for months — here's why none of it worked for my insomnia.
          </h1>
          <div className="h-[1px] w-full bg-[#8da399]/20" />
        </header>

        <div className="text-[var(--text-secondary)] font-sans leading-relaxed space-y-6 text-lg">

          <div className="bg-[#f9f8f6] p-6 rounded-[1rem] border border-[#8da399]/20 my-6">
            <h3 className="font-serif text-[var(--text-primary)] text-xl mb-4">The Short Answer:</h3>
            <p className="font-sans text-[var(--text-secondary)] text-lg">Why does CBT-I sometimes fail? Standard CBT-I is biologically highly effective, but it often fails because it is too rigid. When you aggressively restrict your sleep to build sleep pressure, it temporarily spikes daytime fatigue and anxiety. If you treat the CBT-I rules like a strict test you can fail, your performance anxiety skyrockets. To succeed, CBT-I must be paired with ACT-I (Acceptance and Commitment Therapy) to manage the panic and introduce psychological flexibility.</p>
          </div>
          <p>
            You hit your breaking point, so you did what you were supposed to do. You researched the gold-standard medical treatment for insomnia. You found CBT-I (Cognitive Behavioral Therapy for Insomnia).
          </p>
          <p>
            You restricted your sleep window. You got out of bed every time you couldn't sleep. You tracked your sleep efficiency like a scientist. And what happened?
          </p>
          <p>
            You felt worse. The sleep restriction made you feel like a zombie during the day, and the strict rules made you even more anxious at night. Eventually, you gave up. The crushing realization that the "proven cure" didn't work for you left you feeling more broken and hopeless than before you started.
          </p>
          <p>
            If this is your story, I need you to hear this loud and clear: <strong>You did not fail CBT-I. Unguided, rigid CBT-I failed you.</strong>
          </p>
          <p>
            Here is the unfiltered clinical truth about why standard CBT-I often backfires, and the crucial missing piece you need to actually recover.
          </p>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">The Biology: The Cortisol Spike of Sleep Restriction</h2>
          <p>
            The core engine of CBT-I is Sleep Restriction Therapy (SRT). By mathematically compressing your time in bed, you build massive biological sleep pressure, forcing your body to sleep efficiently.
          </p>
          <p>
            Biologically, this works. But mechanically, it is brutal.
          </p>
          <p>
            When you first restrict your sleep, your body experiences acute sleep deprivation. This is a shock to the system. To keep you upright during the day, your brain pumps out excess cortisol and adrenaline. You feel shaky, emotional, and intensely anxious.
          </p>
          <p>
            Standard CBT-I often hands you a spreadsheet, tells you to sleep 6 hours, and offers zero guidance on how to survive the resulting cortisol spike. Without psychological tools to manage the physical panic of sleep restriction, your anxiety skyrockets, and the therapy collapses under its own weight.
          </p>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">The Psychology: The Rigidity Trap</h2>
          <p>
            Insomnia is fundamentally a disease of performance anxiety. You are obsessed with sleeping "correctly."
          </p>
          <p>
            When you start standard CBT-I, you are handed a strict list of rules. Get out of bed after exactly 20 minutes. Log your hours. Hit 85% sleep efficiency.
          </p>
          <div className="my-8 border-l-4 border-[var(--primary)] pl-6 py-4 bg-[#f9f8f6] rounded-r-xl shadow-sm">
            <p className="text-xs font-bold tracking-widest uppercase text-[#8da399] mb-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="mr-2 text-[var(--primary)]"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.758.79 1.758 1.759 0 .312-.08.6-.22.846.015.152.023.308.023.465 0 3.255-3.535 5.892-7.896 5.892-4.362 0-7.897-2.637-7.897-5.892 0-.157.009-.313.024-.465a1.765 1.765 0 0 1-.22-.846c0-.969.79-1.759 1.759-1.759.458 0 .866.168 1.168.448 1.18-1.01 2.92-1.662 4.88-1.724l.875-4.111c.046-.222.261-.368.484-.325l3.153.665a1.252 1.252 0 0 1 1.124-.908zm-9.351 9.943c-.888 0-1.608.72-1.608 1.608 0 .889.72 1.609 1.608 1.609.889 0 1.609-.72 1.609-1.609 0-.888-.72-1.608-1.609-1.608zm7.555 0c-.889 0-1.609.72-1.609 1.608 0 .889.72 1.609 1.609 1.609.888 0 1.608-.72 1.608-1.609 0-.888-.72-1.608-1.608-1.608zm-3.778 3.902c-1.644 0-3.056-.583-3.094-.601a.342.342 0 1 1 .282-.622c.043.02 1.266.54 2.812.54 1.545 0 2.766-.52 2.81-.54a.342.342 0 1 1 .284.622c-.039.018-1.45.601-3.094.601z"/></svg>
              A Reddit User Shared:
            </p>
            <p className="italic text-lg text-[var(--text-primary)] m-0">
              "I became terrified of my sleep log. Every time I had a bad night, I felt like I was failing the therapy, which made my heart pound even faster the next night."
            </p>
          </div>
          <p>
            If you apply your perfectionism to CBT-I, you turn the cure into the poison. You start trying to perfectly execute the therapy, which creates massive "Sleep Effort." You aren't relaxing into sleep; you are rigidly trying to beat a high score.
          </p>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">The Missing Piece: ACT-I (A Bad Night is Data, Not a Verdict)</h2>
          <p>
            If you want the biological power of CBT-I to work, you have to soften it with the psychological flexibility of ACT-I (Acceptance and Commitment Therapy for Insomnia). ACT-I is the shock absorber for CBT-I.
          </p>
          <p>
            The most vital reframe ACT-I provides is how you view failure.
          </p>
          <p>
            When you do unguided CBT-I, a bad night feels like a catastrophic failure. You think, "The therapy isn't working, I'm relapsing, I'm never going to get better." That panic ruins the next three nights.
          </p>
          <p>
            <strong>ACT-I teaches you that a bad night is data, not a verdict.</strong> It is a normal, biological blip. If you sleep terribly on a Tuesday, ACT-I teaches you to drop the struggle and accept it, because mathematically, a terrible Tuesday guarantees massive sleep pressure for a great Wednesday. It removes the sting of a sleepless night.
          </p>
          <p>
            When your brain is racing because of sleep restriction, ACT-I also teaches you Cognitive Defusion—how to step back from your thoughts rather than fighting them. It frames getting out of bed not as a punishment for failing to sleep, but as an act of self-compassion to protect your peace.
          </p>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">Guided Recovery, Not Just Rules</h2>
          <p>
            You don't need another spreadsheet or a strict doctor telling you to try harder. You need a compassionate framework that anticipates the hard nights and gives you the exact cognitive tools to survive them.
          </p>

          <hr className="my-12 border-[#8da399]/20" />
          
          <div className="bg-[#f9f8f6] p-8 rounded-[1.5rem] mt-12 text-center shadow-sm">
            <h3 className="text-2xl font-serif text-[var(--text-primary)] mb-4">Tired of fighting through sleepless nights?</h3>
            <p className="mb-6 mx-auto max-w-lg">
              The Good Night Companion is a 90-day guided journal that fixes the CBT-I failure rate. It seamlessly blends the mechanical, biological power of CBT-I with the deep psychological relief of ACT-I, walking you through the process day by day, so you never feel like you are failing again.
            </p>
            <Link 
              href="/join-the-program" className="btn-primary inline-block w-auto !px-8 hover:!bg-[var(--primary-dark)]"
            >
              Get The Good Night Companion
            </Link>
          </div>

          <h2 className="text-xl font-serif text-[var(--text-primary)] mt-12 mb-4">Scientific References & Further Reading</h2>
          <ul className="list-disc pl-6 space-y-3 mb-12 text-sm">
            <li><strong>ACT-I Integration:</strong> Ong, J. C., et al. (2012). A randomized controlled trial of mindfulness meditation for chronic insomnia. <em>Sleep</em>, 35(12), 1693-1701. (Highlights how acceptance-based therapies reduce the hyperarousal and anxiety that traditional CBT-I can sometimes exacerbate).</li>
            <li><strong>CBT-I Efficacy & Outcomes:</strong> Morin, C. M., et al. (1994). Nonpharmacological interventions for insomnia: a meta-analysis of treatment efficacy. <em>American Journal of Psychiatry</em>, 151(8), 1172-1180.</li>
            <li><strong>Sleep Restriction Therapy:</strong> Spielman, A. J., Saskin, P., & Thorpy, M. J. (1987). Treatment of chronic insomnia by restriction of time in bed. <em>Sleep</em>, 10(1), 45-56.</li>
          </ul>

          <FaqAccordion faqs={pageFaqs} title="FAQs: People Also Ask About CBT-I" />

        </div>
      </article>
    </main>
  );
}
