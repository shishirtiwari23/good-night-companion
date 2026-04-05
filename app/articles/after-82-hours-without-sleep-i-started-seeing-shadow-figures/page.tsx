import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import FaqAccordion from "../../components/FaqAccordion";

export const metadata: Metadata = {
  title: "After 82 Hours Without Sleep I Started Seeing Shadow Figures by My Bed — What Severe Sleep Deprivation Hallucinations Feel Like From Inside",
  description: "After 48 to 72 hours without sleep, the immense biological pressure for REM (dream) sleep forces your brain to experience 'microsleeps' while you are still awake.",
  alternates: {
    canonical: '/articles/after-82-hours-without-sleep-i-started-seeing-shadow-figures',
  },
};

export default function ArticlePage() {
  const pageFaqs = [
    {
        "question": "How many days without sleep causes hallucinations?",
        "answer": "Mild perceptual distortions (like blurred vision or seeing movement in your periphery) can begin after 24 to 48 hours without sleep. Complex hallucinations, such as seeing distinct shadow figures, hearing voices, or experiencing paranoid delusions, typically occur after 72 to 96 hours of continuous wakefulness."
    },
    {
        "question": "Why do I see shadow people when I can't sleep?",
        "answer": "Seeing \"shadow figures\" is a classic symptom of extreme sleep deprivation. It occurs because your brain is under massive biological pressure to enter REM (dream) sleep. It forces \"microsleeps\" while your eyes are open, causing your visual cortex to project dream imagery into the real world."
    },
    {
        "question": "Are sleep deprivation hallucinations permanent?",
        "answer": "No. Hallucinations caused purely by sleep deprivation are fully reversible. Once the individual achieves a consolidated period of restorative sleep, the REM pressure dissipates, the brain's sensory processing resets, and the hallucinations and perceptual distortions resolve without permanent neurological damage."
    },
    {
        "question": "Should I go to the ER for insomnia and hallucinations?",
        "answer": "If you are seeing shadows but know they are not real, it is a symptom of sleep loss. However, if you lose your grip on reality, genuinely believe the hallucinations are real, experience extreme paranoia, or have suicidal thoughts, you must go to the ER immediately for medical intervention."
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
            After 82 Hours Without Sleep I Started Seeing Shadow Figures by My Bed — What Severe Sleep Deprivation Hallucinations Feel Like From Inside
          </h1>
          <div className="h-[1px] w-full bg-[#8da399]/20" />
        </header>

        <div className="text-[var(--text-secondary)] font-sans leading-relaxed space-y-6 text-lg">
          <div className="bg-[#f9f8f6] p-6 rounded-[1rem] border border-[#8da399]/20 my-6">
            <h3 className="font-serif text-[var(--text-primary)] text-xl mb-4">The Short Answer:</h3>
            <p className="font-sans text-[var(--text-secondary)] text-lg">Why do you hallucinate when sleep-deprived? After 48 to 72 hours without sleep, the immense biological pressure for REM (dream) sleep forces your brain to experience "microsleeps" while you are still awake. Your visual cortex begins dreaming over your waking reality, causing you to see shadow figures, hear voices, or experience severe paranoia.</p>
          </div>

          
          <p>You hit the 48-hour mark, and the world just feels a little blurry.</p>
          <p>But by hour 72, reality starts to fracture. You are lying in bed, staring at the dark corner of the room, and the shadows begin to move. You hear someone whisper your name, but you live alone. You catch movement in your peripheral vision—a person, an animal, a dark shape—but when you turn your head, nothing is there.</p>
          <div className="my-8 border-l-4 border-[var(--primary)] pl-6 py-4 bg-[#f9f8f6] rounded-r-xl shadow-sm">
            <p className="text-xs font-bold tracking-widest uppercase text-[#8da399] mb-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="mr-2 text-[var(--primary)]"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.758.79 1.758 1.759 0 .312-.08.6-.22.846.015.152.023.308.023.465 0 3.255-3.535 5.892-7.896 5.892-4.362 0-7.897-2.637-7.897-5.892 0-.157.009-.313.024-.465a1.765 1.765 0 0 1-.22-.846c0-.969.79-1.759 1.759-1.759.458 0 .866.168 1.168.448 1.18-1.01 2.92-1.662 4.88-1.724l.875-4.111c.046-.222.261-.368.484-.325l3.153.665a1.252 1.252 0 0 1 1.124-.908zm-9.351 9.943c-.888 0-1.608.72-1.608 1.608 0 .889.72 1.609 1.608 1.609.889 0 1.609-.72 1.609-1.609 0-.888-.72-1.608-1.609-1.608zm7.555 0c-.889 0-1.609.72-1.609 1.608 0 .889.72 1.609 1.609 1.609.888 0 1.608-.72 1.608-1.609 0-.888-.72-1.608-1.608-1.608zm-3.778 3.902c-1.644 0-3.056-.583-3.094-.601a.342.342 0 1 1 .282-.622c.043.02 1.266.54 2.812.54 1.545 0 2.766-.52 2.81-.54a.342.342 0 1 1 .284.622c-.039.018-1.45.601-3.094.601z"/></svg>
              A Reddit User Shared:
            </p>
            <p className="italic text-lg text-[var(--text-primary)] m-0">
              "At 82 hours, I was so detached from reality I didn't know if I was awake or dreaming. I saw a shadow figure standing next to my closet, and I was too exhausted to even scream."
            </p>
          </div>
          <p>Experiencing a sleep deprivation hallucination is one of the most terrifying things a human being can endure. It convinces you that your insomnia has finally broken your mind, and that you are spiraling into permanent insanity.</p>
          <p>Here is the neurological reality of why sleep deprivation makes you see things that aren't there, and the critical framework for knowing when you are experiencing a sleep symptom versus a medical emergency.</p>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">The Neuroscience: Dreaming While Awake</h2>
          <p>When you stop sleeping, your brain does not just quietly accept it. It fights back.</p>
          <p>Human beings require REM (Rapid Eye Movement) sleep to survive. It is the stage of sleep where you dream. When you stay awake for three or four consecutive days, your biological "REM pressure" builds to explosive levels. Your brain becomes so desperate for this specific phase of sleep that it begins forcing it to happen while your eyes are open.</p>
          <p>This is called a <strong>Microsleep</strong>. For fractions of a second, your brain slips into a dream state. Your visual and auditory cortexes begin projecting dream imagery and sounds over your waking reality.</p>
          <p>Those shadow figures? The voices? The breathing walls? You are not going crazy. You are literally dreaming while you are awake. The hallucinations are your brain's desperate, evolutionary mechanism to steal the REM sleep it needs to keep your neurological system from collapsing.</p>
          <p className="text-sm bg-[#f2f0e9] p-4 rounded-xl mt-6 italic">
            (If you frequently lie in bed with your eyes closed, feeling awake the entire night, you may actually be sleeping without realizing it. Read: <Link href="/articles/i-didnt-sleep-a-wink" className="text-[var(--primary)] font-bold hover:underline">Paradoxical Insomnia: Sleep State Misperception Explained</Link>).
          </p>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">The Safety Framework: When is it an Emergency?</h2>
          <p>Severe sleep deprivation requires extreme care. While peripheral shadows and auditory glitches (hearing your name) are known, documented symptoms of extreme sleep loss, they are also a signal that your body is reaching a critical biological limit.</p>
          <p>You must know the difference between a sleep symptom and a medical crisis.</p>
          <p><strong>You are experiencing a sleep deprivation symptom if:</strong></p>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>You see visual distortions (walls breathing, shifting shadows) or hear muffled sounds.</li>
            <li>You retain insight—meaning you know the hallucination isn't real. You can say, "I am seeing shadows because I haven't slept."</li>
          </ul>
          
          <p><strong>You are experiencing a medical emergency and must seek immediate medical care (or go to the ER) if:</strong></p>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>You lose insight. You genuinely believe the hallucinations are real, that people are actively trying to harm you, or you experience profound paranoia.</li>
            <li>You have thoughts of harming yourself or others.</li>
            <li>You experience a complete detachment from reality (psychosis) where you cannot discern the real world from the dream.</li>
          </ul>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">Finding the Ground Again</h2>
          <p>If you are currently experiencing benign sleep hallucinations, the terror you feel is valid, but the shadows cannot hurt you. Your brain is simply trying to dream.</p>
          <p>However, reaching the point of hallucinations means your sleep architecture is in crisis. You need structured frameworks to break the wakefulness without making things worse.</p>
    

          <hr className="my-12 border-[#8da399]/20" />
          
          <div className="bg-[#f9f8f6] p-8 rounded-[1.5rem] mt-12 text-center shadow-sm">
            <h3 className="text-2xl font-serif text-[var(--text-primary)] mb-4">Ready to rebuild the foundation?</h3>
            <p className="mb-6 mx-auto max-w-lg">
              The Good Night Companion is a 90-day guided journal that doesn't just hand you generic sleep hygiene tips; it gives you the exact clinical, behavioral framework to dismantle the hyperarousal keeping you awake, allowing your body to finally heal the damage.
            </p>
            <Link 
              href="/journey" className="btn-primary inline-block w-auto !px-8 hover:!bg-[var(--primary-dark)]"
            >
              Get The Good Night Companion
            </Link>
          </div>

          <h2 className="text-xl font-serif text-[var(--text-primary)] mt-12 mb-4">Scientific References & Further Reading</h2>
          <ul className="list-disc pl-6 space-y-3 mb-12 text-sm">
            <li><strong>Sleep Deprivation and Hallucinations:</strong> Waters, F., et al. (2018). Severe sleep deprivation causes hallucinations and a gradual progression toward clinical psychosis. <em>Frontiers in Psychiatry</em>, 9, 303.</li>
          </ul>

          <p className="text-xs opacity-60 mt-12 leading-relaxed">
            <strong>Disclaimer:</strong> The content provided in this article is for educational purposes only. If you are experiencing severe paranoia, losing touch with reality, or having thoughts of self-harm, please go to your nearest emergency room or contact emergency services immediately. Sleep deprivation psychosis is a medical emergency that requires clinical intervention.
          </p>

          <hr className="my-12 border-[#8da399]/20" />

          <FaqAccordion faqs={pageFaqs} title="FAQs: People Also Ask About Insomnia" />
        </div>
      </article>
    </main>
  );
}
