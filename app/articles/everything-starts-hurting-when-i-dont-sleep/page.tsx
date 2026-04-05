import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import FaqAccordion from "../../components/FaqAccordion";

export const metadata: Metadata = {
  title: "Everything Starts Hurting When I Don't Sleep — The Physical Symptoms of Chronic Insomnia Nobody Warned Me About",
  description: "When you stop sleeping, your central nervous system becomes hyper-sensitized to pain—a condition called hyperalgesia. Sleep loss also spikes systemic inflammation, leading to a bone-deep ache, burning skin, and nausea.",
  alternates: {
    canonical: '/articles/everything-starts-hurting-when-i-dont-sleep',
  },
};

export default function ArticlePage() {
  const pageFaqs = [
    {
        "question": "Can insomnia cause physical body aches?",
        "answer": "Yes. Severe sleep deprivation prevents your body from repairing tissues and flushing inflammatory proteins (cytokines) from your bloodstream. This systemic inflammation creates a physical sensation identical to the body aches and fatigue you experience when fighting a severe viral infection like the flu."
    },
    {
        "question": "Why does my skin burn and crawl when I'm sleep-deprived?",
        "answer": "Sleep deprivation drastically lowers your neurological pain threshold, a condition known as hyperalgesia. The brain's somatosensory cortex becomes hyper-reactive, causing normal, harmless sensory inputs—like the temperature of the air or the feeling of your clothes—to register as burning, itching, or crawling skin."
    },
    {
        "question": "Can lack of sleep make you feel nauseous?",
        "answer": "Yes. Nausea and severe gastrointestinal distress are common physical symptoms of chronic sleep loss. The digestive system is highly sensitive to the stress hormones (cortisol and adrenaline) that flood your body during sleep deprivation, throwing off your gut motility and causing persistent nausea."
    },
    {
        "question": "Are hypnic jerks and body tremors caused by insomnia?",
        "answer": "Yes. When the central nervous system is exhausted and flooded with adrenaline, it struggles to smoothly transition from wakefulness to rest. This neurological misfiring often causes uncontrollable muscle twitching, trembling, and violent hypnic jerks just as you are about to fall asleep."
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
            Everything Starts Hurting When I Don't Sleep — The Physical Symptoms of Chronic Insomnia Nobody Warned Me About
          </h1>
          <div className="h-[1px] w-full bg-[#8da399]/20" />
        </header>

        <div className="text-[var(--text-secondary)] font-sans leading-relaxed space-y-6 text-lg">
          <div className="bg-[#f9f8f6] p-6 rounded-[1rem] border border-[#8da399]/20 my-6">
            <h3 className="font-serif text-[var(--text-primary)] text-xl mb-4">The Short Answer:</h3>
            <p className="font-sans text-[var(--text-secondary)] text-lg">Why does sleep deprivation cause physical pain? When you stop sleeping, your central nervous system becomes hyper-sensitized to pain—a condition called hyperalgesia. Sleep loss also spikes systemic inflammation, leading to a bone-deep ache, burning skin, and nausea. Your body hurts because it lacks the biological downtime required to repair tissues and flush inflammatory cytokines.</p>
          </div>

          
          <p>You expected to be tired. You expected the brain fog, the irritability, and the dark circles under your eyes.</p>
          <p>What nobody warned you about was the sheer, brutal physical pain.</p>
          <p>When you go days with barely any sleep, you don't just feel "sleepy." Your skin feels like it is burning or crawling. Your eyes ache so deeply they feel bruised. You have a constant, low-grade nausea that ruins your appetite. Your limbs feel like they are made of lead, and your muscles twitch and tremble for no apparent reason. You feel like you have a severe case of the flu, but without the fever.</p>
          <p>If you have ever Googled, "Am I dying from insomnia?" because your body physically hurts so much, take a deep breath. You are not dying, and you are not imagining the pain.</p>
          <p>Here is the unfiltered biological reality of what chronic sleep deprivation actually does to your physical body, and why everything hurts right now.</p>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">The Biology: The Loss of the Pain Buffer</h2>
          <p>To understand why your skin is crawling and your joints ache, we have to look at how your brain processes physical sensation.</p>
          <p>In a healthy sleeper, the brain has a built-in pain-buffering system. When you sleep, your body repairs micro-tears in your muscles, regulates your immune system, and flushes out inflammatory proteins called cytokines.</p>
          <p>When you stop sleeping, two biological disasters happen simultaneously:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4 mb-6">
            <li><strong>Systemic Inflammation:</strong> Without the nightly repair cycle, inflammatory cytokines flood your bloodstream. This triggers the exact same immune response you experience when you have a severe viral infection. This is why you feel a bone-deep, flu-like ache and profound nausea.</li>
            <li><strong>Neurological Hyperalgesia:</strong> Brain scans of sleep-deprived individuals show that the somatosensory cortex (the part of the brain that feels pain) goes into overdrive, while the brain's natural pain-blocking centers completely shut down. Your pain threshold drops to zero. A normal sensation—like the fabric of your shirt or the temperature of the room—suddenly registers as a sharp, burning pain.</li>
          </ul>
          <p>Your body is not failing; your alarm system is just broken.</p>
          <p className="text-sm bg-[#f2f0e9] p-4 rounded-xl mt-6 italic">
            (Not sure if your physical symptoms are the result of a few bad nights or a chronic condition? Read our clinical guide: <Link href="/articles/do-i-have-chronic-insomnia" className="text-[var(--primary)] font-bold hover:underline">Do I Have Chronic Insomnia? The Clinical &quot;Rule of 3s&quot; Explained</Link>).
          </p>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">The Psychology: The Terror of the Symptoms</h2>
          <p>When your body starts shaking or your chest gets tight, it is terrifying. The physical pain feeds the insomnia.</p>
          <div className="my-8 border-l-4 border-[var(--primary)] pl-6 py-4 bg-[#f9f8f6] rounded-r-xl shadow-sm">
            <p className="text-xs font-bold tracking-widest uppercase text-[#8da399] mb-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="mr-2 text-[var(--primary)]"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.758.79 1.758 1.759 0 .312-.08.6-.22.846.015.152.023.308.023.465 0 3.255-3.535 5.892-7.896 5.892-4.362 0-7.897-2.637-7.897-5.892 0-.157.009-.313.024-.465a1.765 1.765 0 0 1-.22-.846c0-.969.79-1.759 1.759-1.759.458 0 .866.168 1.168.448 1.18-1.01 2.92-1.662 4.88-1.724l.875-4.111c.046-.222.261-.368.484-.325l3.153.665a1.252 1.252 0 0 1 1.124-.908zm-9.351 9.943c-.888 0-1.608.72-1.608 1.608 0 .889.72 1.609 1.608 1.609.889 0 1.609-.72 1.609-1.609 0-.888-.72-1.608-1.609-1.608zm7.555 0c-.889 0-1.609.72-1.609 1.608 0 .889.72 1.609 1.609 1.609.888 0 1.608-.72 1.608-1.609 0-.888-.72-1.608-1.608-1.608zm-3.778 3.902c-1.644 0-3.056-.583-3.094-.601a.342.342 0 1 1 .282-.622c.043.02 1.266.54 2.812.54 1.545 0 2.766-.52 2.81-.54a.342.342 0 1 1 .284.622c-.039.018-1.45.601-3.094.601z"/></svg>
              A Reddit User Shared:
            </p>
            <p className="italic text-lg text-[var(--text-primary)] m-0">
              "I lie in bed with my heart pounding and my skin burning, terrified that my body is just going to give out and I'm going to have a heart attack."
            </p>
          </div>
          <p>This physical misery creates a vicious feedback loop. Because you feel sick, your brain assumes you are in physical danger. It triggers the amygdala, dumping adrenaline into your bloodstream, locking you in a state of Conditioned Hyperarousal. You cannot sleep because you are in pain, and you are in pain because you cannot sleep.</p>
          <p className="text-sm bg-[#f2f0e9] p-4 rounded-xl mt-6 italic">
            (To understand how to break this specific adrenaline loop, read: <Link href="/articles/why-my-body-feels-stuck-in-fight-or-flight" className="text-[var(--primary)] font-bold hover:underline">Why My Body Feels Stuck in Fight-or-Flight Every Single Time I Try to Sleep</Link>).
          </p>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">Recovery is Structural, Not Chemical</h2>
          <p>When you feel this sick, the instinct is to treat the symptoms. You take painkillers for the headache, antacids for the nausea, and muscle relaxers for the trembling. But you cannot cure sleep deprivation hyperalgesia with a pharmacy.</p>
          <p>The only way the pain stops is when the nervous system finally gets the biological downtime it requires to repair itself.</p>
    

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
            <li><strong>Sleep Deprivation and Pain (Hyperalgesia):</strong> Krause, A. J., et al. (2019). The pain of sleep loss: A brain characterization in humans. <em>Journal of Neuroscience</em>, 39(12), 2291-2300.</li>
            <li><strong>Systemic Inflammation:</strong> Haack, M., et al. (2007). Sleep restriction induces an inflammatory response. <em>Biological Psychiatry</em>, 62(1), 56-63.</li>
            <li><strong>Gastrointestinal Distress & Sleep Loss:</strong> Konturek, P. C., et al. (2011). Stress and the gut: pathophysiology, clinical consequences, diagnostic approach and treatment options. <em>Journal of Physiology and Pharmacology</em>, 62(6), 591-599.</li>
          </ul>

          <p className="text-xs opacity-60 mt-12 leading-relaxed">
            <strong>Disclaimer:</strong> This article is an educational resource and does not constitute medical advice. Please consult a healthcare professional if you are navigating severe mental health challenges or underlying sleep disorders.
          </p>

          <hr className="my-12 border-[#8da399]/20" />

          <FaqAccordion faqs={pageFaqs} title="FAQs: People Also Ask About Insomnia" />
        </div>
      </article>
    </main>
  );
}
