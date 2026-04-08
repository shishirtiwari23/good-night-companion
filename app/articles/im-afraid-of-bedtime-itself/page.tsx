import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import FaqAccordion from '@/app/components/FaqAccordion';

export const metadata: Metadata = {
  title: "I'm Not Afraid of Not Sleeping Anymore — I'm Afraid of Bedtime Itself. How My Bedroom Became a Place of Pure Dread",
  description: "Why do you feel intense dread before going to bed? Learn how Pavlovian conditioning triggers anticipatory anxiety and how an Environmental Reset can cure bedtime dread.",
  alternates: {
    canonical: '/articles/im-afraid-of-bedtime-itself',
  },
};

export default function BedtimeDreadArticle() {
  const faqs = [
    {
      question: "Why do I get a surge of anxiety right before bed?",
      answer: "This is known as Anticipatory Anxiety. Because you have spent countless nights struggling to sleep, your brain has learned to view your bed as a place of stress and failure. As bedtime approaches, your brain anticipates this trauma and triggers a fight-or-flight response, flooding your body with adrenaline."
    },
    {
      question: "What is sleep dread or somniphobia?",
      answer: "Sleep dread is the intense, anticipatory fear of trying to fall asleep. While true somniphobia is the fear of sleep itself (often due to nightmares), bedtime dread in chronic insomnia is usually the fear of the failure to sleep, and the psychological torture of lying awake in the dark."
    },
    {
      question: "Why do I fall asleep on the couch but wake up in bed?",
      answer: "You fall asleep easily on the couch because your brain does not associate the living room with the pressure to sleep. It is a neutral environment. The moment you move to your bed, the physical environment triggers your conditioned hyperarousal, immediately spiking your heart rate and waking you up."
    },
    {
      question: "Should I sleep in another room if I have insomnia?",
      answer: "Yes. If your anxiety is severely tied to your bedroom, executing an \"Environmental Reset\" by temporarily sleeping on a couch or in a guest room can break the Pavlovian trigger. Once your sleep drive stabilizes in a neutral space, you can gradually transition back to your main bedroom."
    }
  ];

  return (
    <article className="min-h-screen bg-[var(--background)] py-12 md:py-24 px-6 relative selection:bg-[var(--primary)] selection:text-white">
      <div className="max-w-3xl mx-auto">
        <Link 
          href="/articles" 
          className="inline-flex items-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm font-bold uppercase tracking-widest mb-12"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          Back to Library
        </Link>

        <header className="mb-12 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--text-primary)] leading-tight">
            I&apos;m Not Afraid of Not Sleeping Anymore — I&apos;m Afraid of Bedtime Itself. How My Bedroom Became a Place of Pure Dread
          </h1>
          <div className="h-[1px] w-full bg-[#8da399]/20" />
        </header>

        <div className="text-[var(--text-secondary)] font-sans leading-relaxed space-y-6 text-lg">
          <div className="bg-[#f9f8f6] p-6 rounded-[1rem] border border-[#8da399]/20 my-6">
            <h3 className="font-serif text-[var(--text-primary)] text-xl mb-4">The Short Answer:</h3>
            <p>
              Why do you feel intense dread before going to bed? Through months of tossing and turning, your brain has undergone Pavlovian conditioning. It no longer views your bed as a place of rest; it views the physical room as a threat. The simple act of walking toward your bedroom triggers anticipatory anxiety, dumping adrenaline into your bloodstream before you even touch the mattress.
            </p>
          </div>

          <p className="text-xl md:text-2xl font-serif text-[var(--text-primary)] leading-snug">
            It happens around 8:00 PM.
          </p>
          <p>
            You are sitting on the couch watching TV, and you actually feel a wave of genuine, heavy sleepiness wash over you. Your eyelids are drooping. You think, &quot;Finally. Tonight is the night I actually sleep.&quot;
          </p>
          <p>
            But then you look down the hallway toward your bedroom. Instantly, your stomach drops. Your chest tightens. Your heart rate begins to climb. By the time you brush your teeth, turn off the lights, and cross the threshold into your bedroom, the heavy sleepiness is completely gone, replaced by a vibrating, wired, terrified energy.
          </p>
          <p>
            You aren&apos;t just afraid of the consequences of a bad night anymore. You are physically terrified of the room itself.
          </p>
          <p>
            If walking into your bedroom feels like walking into an interrogation room, you are experiencing the most insidious phase of chronic insomnia: Bedtime Dread. Here is the exact biological reason your brain is treating your mattress like a predator, and the counterintuitive clinical move you must make to break the curse.
          </p>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">The Biology: The Pavlovian Mattress</h2>
          <p>
            To fix bedtime dread, you have to understand classical conditioning.
          </p>
          <p>
            Think of Pavlov&apos;s dogs: ring a bell, give the dog food. Eventually, just ringing the bell causes the dog to salivate.
          </p>
          <p>
            Your brain has done the exact same thing with your bedroom. For the last several months, you have spent hundreds of hours in your bed experiencing extreme distress—crying, panicking, calculating the hours, and feeling trapped. Your amygdala (the brain&apos;s threat center) took notes. It learned to associate the physical environment (the bed, the pillows, the smell of the room) with psychological trauma.
          </p>
          <p>
            Now, your bed is the bell. The panic is the saliva.
          </p>
           <p>
            The moment you begin your bedtime routine, your brain anticipates the trauma. It triggers Anticipatory Anxiety, dumping cortisol and adrenaline into your bloodstream to protect you from the &quot;danger&quot; of the bedroom.
          </p>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">The Psychology: The Trauma of Trying</h2>
          <p>
            The dread is compounded by the pressure to perform.
          </p>

          <div className="my-8 border-l-4 border-[var(--primary)] pl-6 py-4 bg-[#f9f8f6] rounded-r-xl shadow-sm">
            <p className="text-xs font-bold tracking-widest uppercase text-[#8da399] mb-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="mr-2 text-[var(--primary)]"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.758.79 1.758 1.759 0 .312-.08.6-.22.846.015.152.023.308.023.465 0 3.255-3.535 5.892-7.896 5.892-4.362 0-7.897-2.637-7.897-5.892 0-.157.009-.313.024-.465a1.765 1.765 0 0 1-.22-.846c0-.969.79-1.759 1.759-1.759.458 0 .866.168 1.168.448 1.18-1.01 2.92-1.662 4.88-1.724l.875-4.111c.046-.222.261-.368.484-.325l3.153.665a1.252 1.252 0 0 1 1.124-.908zm-9.351 9.943c-.888 0-1.608.72-1.608 1.608 0 .889.72 1.609 1.608 1.609.889 0 1.609-.72 1.609-1.609 0-.888-.72-1.608-1.609-1.608zm7.555 0c-.889 0-1.609.72-1.609 1.608 0 .889.72 1.609 1.609 1.609.888 0 1.608-.72 1.608-1.609 0-.888-.72-1.608-1.608-1.608zm-3.778 3.902c-1.644 0-3.056-.583-3.094-.601a.342.342 0 1 1 .282-.622c.043.02 1.266.54 2.812.54 1.545 0 2.766-.52 2.81-.54a.342.342 0 1 1 .284.622c-.039.018-1.45.601-3.094.601z"/></svg>
              A Reddit User Shared:
            </p>
            <p className="italic text-lg text-[var(--text-primary)] m-0">
               &quot;I can literally be falling asleep on the living room couch, but the moment I stand up and walk down the hallway toward my bedroom, my stomach drops and my heart starts racing. I am terrified of my own bed.&quot;
            </p>
          </div>

          <p>
            When you walk into the bedroom, you feel the crushing weight of expectation. You know you have to sleep so you can function tomorrow. The bedroom becomes a high-stakes performance stage. The harder you try to relax in that specific environment, the more dangerous the environment feels.
          </p>
          <p className="text-sm bg-[#f2f0e9] p-4 rounded-xl mt-6 italic">
            (If you stay in bed for hours trying to force it, you are feeding this loop. Read: <Link href="/articles/why-it-takes-me-hours-to-fall-asleep" className="text-[var(--primary)] font-bold hover:underline">Why It Takes Me Three to Five Hours to Fall Asleep</Link>).
          </p>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">The Fix: The Environmental Reset (The Tactical Retreat)</h2>
          <p>
            If your bedtime dread is at a 10 out of 10, standard advice like &quot;read a book before bed&quot; will not save you. You cannot heal in the exact environment that is actively poisoning you. You have to break the spatial trigger.
          </p>
          <p>
            You need to execute an Environmental Reset.
          </p>
          <p>
            For a period of 3 to 7 days, abandon the bedroom entirely. Set up a comfortable sleeping space on your living room couch or in a spare guest room.
          </p>
          <p>
            This is not a failure; it is a tactical clinical retreat. By removing the primary trigger (your master bedroom), you bypass the Pavlovian adrenaline dump. Your brain does not have months of traumatic data associated with the living room couch. You will likely find that you fall asleep significantly faster in the new environment simply because the anticipatory anxiety is absent.
          </p>
          <p>
            Once your nervous system has calmed down and you remember what it feels like to fall asleep naturally, you use Stimulus Control to slowly, gently reintroduce the bedroom—getting into the bed only when you are physically exhausted, and leaving immediately if the dread returns.
          </p>


          <div className="bg-[var(--primary)]/10 p-8 rounded-2xl my-12 border border-[var(--primary)]/20">
            <h3 className="font-serif text-2xl text-[var(--text-primary)] mb-4">Reclaim Your Space</h3>
            <p className="mb-6">
              You do not have to be afraid of your own house. The association can be broken.
            </p>
            <p className="mb-6">
              The Goodnight Companion is a 90-day guided journal that provides the exact, step-by-step framework for executing an Environmental Reset, utilizing CBT-I to gradually dismantle your bedtime dread and turn your bedroom back into a sanctuary.
            </p>
            <Link 
              href="/" 
              className="inline-flex items-center justify-center bg-[var(--primary)] text-white px-8 py-4 rounded-full font-bold tracking-wider uppercase text-sm hover:transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore The Goodnight Companion →
            </Link>
          </div>

          <div className="border-t border-[#8da399]/20 pt-8 mt-12 pb-8">
            <h4 className="text-sm font-bold tracking-widest text-[#8da399] uppercase mb-4">Scientific References & Further Reading</h4>
            <ul className="text-sm space-y-3 text-[var(--text-secondary)]">
              <li>
                <strong>Pavlovian Conditioning in Insomnia:</strong> Bootzin, R. R. (1972). Stimulus control treatment for insomnia. <em>Proceedings of the American Psychological Association</em>. (The foundational text proving that the bed becomes a conditioned cue for arousal, and the necessity of breaking that spatial association).
              </li>
              <li>
                <strong>Anticipatory Anxiety:</strong> Espie, C. A. (2002). Insomnia: conceptual issues in the development, persistence, and treatment of sleep disorder in adults. <em>Annual Review of Psychology</em>, 53, 215-243. (Explains how the anticipation of the sleep environment directly fuels the hyperarousal loop).
              </li>
              <li>
                <strong>Environmental Context & Sleep:</strong> Perlis, M. L., et al. (1997). Cognitive and behavioral efficacy in insomnia. <em>American Journal of Psychiatry</em>. (Details why changing the sleep environment can provide rapid relief from conditioned insomnia).
              </li>
            </ul>
          </div>
          
          <div className="pt-8">
            <FaqAccordion faqs={faqs} title="FAQs: People Also Ask About Bedtime Dread" />
          </div>
        </div>
      </div>
    </article>
  );
}
