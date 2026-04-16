import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import FaqAccordion from '@/app/components/FaqAccordion';

export const metadata: Metadata = {
  title: "My Brain Turns Into a To-Do List the Second I Close My Eyes — Why Nighttime Overthinking Gets Louder the Harder You Fight It",
  description: "Why does your brain list tasks when you try to sleep? Discover the Zeigarnik Effect, how it triggers adrenaline, and use Constructive Worry to stop nighttime overthinking.",
  alternates: {
    canonical: '/articles/my-brain-turns-into-a-to-do-list',
  },
};

export default function ToDoListBrainArticle() {
  const faqs = [
    {
      question: "Why do I only overthink at night?",
      answer: "During the day, external stimuli (work, screens, conversations) distract your brain. At night, the absence of visual and auditory input allows your brain's Default Mode Network (DMN) to dominate. Without distractions, your brain seizes the quiet time to process unresolved tasks, leading to intense rumination."
    },
    {
      question: "What is the Zeigarnik Effect in sleep?",
      answer: "The Zeigarnik Effect is a psychological principle stating that people remember uncompleted tasks better than completed ones. In sleep medicine, this explains why your brain aggressively brings up unfinished chores, unresolved arguments, or tomorrow's to-do list the moment you try to fall asleep."
    },
    {
      question: "Does writing a to-do list help you sleep?",
      answer: "Yes. Clinical studies show that spending 5 minutes writing a highly specific to-do list before bed significantly reduces the time it takes to fall asleep. By physically externalizing your uncompleted tasks onto paper, you relieve your brain of the burden of remembering them, which drastically lowers adrenaline."
    },
    {
      question: "How do I clear my mind to sleep?",
      answer: "You cannot forcefully \"clear\" or \"empty\" your mind, as trying to suppress thoughts creates performance anxiety. Instead, use \"Constructive Worry.\" Write down your tasks and solutions hours before bed. When the thoughts arise in the dark, gently acknowledge that the tasks are documented and handled for tomorrow."
    }
  ];

  return (
    <main className="min-h-screen flex flex-col items-center p-6 md:p-24 relative bg-[var(--background)]">
      {/* Navigation */}
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
            My Brain Turns Into a To-Do List the Second I Close My Eyes — Why Nighttime Overthinking Gets Louder the Harder You Fight It
          </h1>
          <div className="h-[1px] w-full bg-[#8da399]/20" />
        </header>

        <div className="text-[var(--text-secondary)] font-sans leading-relaxed space-y-6 text-lg">
          <div className="bg-[#f9f8f6] p-6 rounded-[1rem] border border-[#8da399]/20 my-6">
            <h3 className="font-serif text-[var(--text-primary)] text-xl mb-4">The Short Answer:</h3>
            <p>
              Why does your brain list tasks when you try to sleep? This is caused by the Zeigarnik Effect—a psychological phenomenon where the brain refuses to forget uncompleted tasks. When you lie in the dark without daytime distractions, your brain uses the silence to process these &quot;open loops.&quot; You can stop this by using a clinical tool called Constructive Worry to physically write out solutions hours before bed.
            </p>
          </div>

          <p className="text-xl md:text-2xl font-serif text-[var(--text-primary)] leading-snug">
            You are exhausted all day. You have zero energy to answer emails, do the laundry, or plan for the week.
          </p>
          <p>
            But the exact second your head hits the pillow and you turn off the lamp, your brain suddenly transforms into a hyper-caffeinated executive assistant.
          </p>
          <p>
            Suddenly, you remember an email you forgot to send. You start mentally organizing your grocery list. You replay a conversation you had with your boss and script out exactly what you should have said. You try to force your mind to go blank, but the harder you try to silence the noise, the louder and more urgent the to-do list becomes.
          </p>
          <p>
            If your brain feels like a chaotic filing cabinet that only opens at midnight, you do not have an anxiety disorder. You have an administrative problem.
          </p>
          <p>
            Here is the exact psychological mechanism forcing your brain to work the night shift, and the clinical tool to officially clock out.
          </p>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">The Psychology: The Zeigarnik Effect</h2>
          <p>
            To understand why your brain does this, you have to understand how human memory prioritizes information.
          </p>
          <p>
            In the 1920s, a psychologist named Bluma Zeigarnik noticed that waiters in cafes could remember complex, unpaid orders perfectly, but forgot them the exact second the bill was paid. She discovered what is now called the Zeigarnik Effect: the human brain is hardwired to continuously remember uncompleted or interrupted tasks, but easily discards completed ones.
          </p>
          <p>
            During the day, you are bombarded with distractions—your phone, your job, your kids. Your brain doesn&apos;t have the quiet space to process its uncompleted tasks.
          </p>
           <p>
            When you lie down in a dark, silent room, the distractions vanish. Your brain&apos;s Default Mode Network (DMN) boots up, realizes it finally has a quiet moment, and begins aggressively dumping every unresolved &quot;open loop&quot; into your conscious awareness so you don&apos;t forget them.
          </p>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">The Biology: The Adrenaline Response</h2>
          <p>
            The problem is that your bed is not a boardroom.
          </p>

          <div className="my-8 border-l-4 border-[var(--primary)] pl-6 py-4 bg-[#f9f8f6] rounded-r-xl shadow-sm">
            <p className="text-xs font-bold tracking-widest uppercase text-[#8da399] mb-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="mr-2 text-[var(--primary)]"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.758.79 1.758 1.759 0 .312-.08.6-.22.846.015.152.023.308.023.465 0 3.255-3.535 5.892-7.896 5.892-4.362 0-7.897-2.637-7.897-5.892 0-.157.009-.313.024-.465a1.765 1.765 0 0 1-.22-.846c0-.969.79-1.759 1.759-1.759.458 0 .866.168 1.168.448 1.18-1.01 2.92-1.662 4.88-1.724l.875-4.111c.046-.222.261-.368.484-.325l3.153.665a1.252 1.252 0 0 1 1.124-.908zm-9.351 9.943c-.888 0-1.608.72-1.608 1.608 0 .889.72 1.609 1.608 1.609.889 0 1.609-.72 1.609-1.609 0-.888-.72-1.608-1.609-1.608zm7.555 0c-.889 0-1.609.72-1.609 1.608 0 .889.72 1.609 1.609 1.609.888 0 1.608-.72 1.608-1.609 0-.888-.72-1.608-1.608-1.608zm-3.778 3.902c-1.644 0-3.056-.583-3.094-.601a.342.342 0 1 1 .282-.622c.043.02 1.266.54 2.812.54 1.545 0 2.766-.52 2.81-.54a.342.342 0 1 1 .284.622c-.039.018-1.45.601-3.094.601z"/></svg>
              A Reddit User Shared:
            </p>
            <p className="italic text-lg text-[var(--text-primary)] m-0">
               &quot;I spend the entire day barely able to keep my eyes open, but the exact second I turn off my bedside lamp, my brain suddenly screams: &apos;Did you reply to that email? What are we doing for dinner on Thursday?&apos; It is maddening.&quot;
            </p>
          </div>

          <p>
            When your brain dumps a to-do list on you at 1 AM, you realize you can&apos;t actually complete the tasks. This triggers panic. Your brain registers the unresolved tasks as a threat to your survival, spiking your cortisol and adrenaline. You are now biologically in &quot;fight-or-flight&quot; mode over an unanswered email.
          </p>
          <p>
            You cannot aggressively force your mind to go blank. Trying to suppress a thought guarantees you will obsess over it.
          </p>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">The Fix: Closing the Loops (Constructive Worry)</h2>
          <p>
            If you want your brain to shut up at night, you have to prove to it that the filing cabinet is locked. You do this using a CBT-I tool called Constructive Worry (or &quot;Scheduled Worry Time&quot;).
          </p>
          <p>
            You must externalize the Zeigarnik Effect so your brain doesn&apos;t have to carry the load.
          </p>
          
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>The Brain Dump:</strong> At least two hours before bed (never in the bedroom), get the thoughts out of your head. You can use a physical pen and paper, or use our <Link href="/tools/worry-dump" className="text-[var(--primary)] font-bold hover:underline">AI-Powered Worry Dump Tool</Link> to systematically organize the chaos. Get every single task, worry, and unresolved issue out of your head and into the system.
            </li>
            <li>
              <strong>The Action Plan:</strong> Next to each item, write down the exact next step you will take tomorrow. (e.g., &quot;Email Sarah at 9 AM&quot;).
            </li>
            <li>
              <strong>The Closure:</strong> Fold the paper in half, leave it in another room, and say out loud, &quot;The loops are closed. The shop is shut.&quot;
            </li>
          </ul>

          <p className="mt-8">
            When you get into bed and your brain tries to bring up the email, you don&apos;t fight the thought. You simply remind your brain, &quot;We already wrote the solution down. It is handled.&quot;
          </p>

          <div className="bg-[var(--primary)]/10 p-8 rounded-2xl my-12 border border-[var(--primary)]/20">
            <h3 className="font-serif text-2xl text-[var(--text-primary)] mb-4">Get Your Night Back</h3>
            <p className="mb-6">
              Your brain is trying to protect you by making sure you don&apos;t drop the ball. You just need a system to relieve it of that duty.
            </p>
            <p className="mb-6">
              The Goodnight Companion is a 90-day guided journal that includes specific, structured spaces for Constructive Worry and brain dumps, ensuring you systematically close your mental loops before your head ever hits the pillow.
            </p>
            <Link 
              href="/" 
              className="inline-flex items-center justify-center bg-[var(--primary)] text-white px-8 py-4 rounded-full font-bold tracking-wider uppercase text-sm hover:transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore The Goodnight Companion →
            </Link>
          </div>

          <h2 className="text-xl font-serif text-[var(--text-primary)] mt-12 mb-4">Scientific References & Further Reading</h2>
          <ul className="list-disc pl-6 space-y-3 mb-12 text-sm text-[var(--text-secondary)]">
            <li>
              <strong>Writing To-Do Lists and Sleep Onset:</strong> Scullin, M. K., et al. (2018). The effects of bedtime writing on difficulty falling asleep: A polysomnographic study comparing to-do lists and completed activity lists. <em>Journal of Experimental Psychology: General</em>, 147(1), 139-146.
            </li>
            <li>
              <strong>The Zeigarnik Effect:</strong> Sywulak, A. E. (2010). The effect of the Zeigarnik phenomenon on state anxiety. <em>Journal of Clinical Psychology</em>.
            </li>
            <li>
              <strong>Cognitive Arousal in Insomnia:</strong> Harvey, A. G. (2002). A cognitive model of insomnia. <em>Behaviour Research and Therapy</em>, 40(8), 869-893.
            </li>
          </ul>

          <FaqAccordion faqs={faqs} title="FAQs: People Also Ask About Nighttime Overthinking" />

          <p className="text-xs opacity-60 mt-12 leading-relaxed">
            <strong>Disclaimer:</strong> This article is an educational resource and does not constitute medical advice. Please consult a healthcare professional if you are navigating severe mental health challenges.
          </p>
        </div>
      </article>
    </main>
  );
}
