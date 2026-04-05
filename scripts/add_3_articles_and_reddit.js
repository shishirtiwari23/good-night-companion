const fs = require('fs');
const path = require('path');

const articlesDir = path.join(__dirname, '../app/articles');

function getRedditBlock(content) {
  return `<div className="my-8 border-l-4 border-[var(--primary)] pl-6 py-4 bg-[#f9f8f6] rounded-r-xl shadow-sm">
            <p className="text-xs font-bold tracking-widest uppercase text-[#8da399] mb-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="mr-2 text-[var(--primary)]"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.758.79 1.758 1.759 0 .312-.08.6-.22.846.015.152.023.308.023.465 0 3.255-3.535 5.892-7.896 5.892-4.362 0-7.897-2.637-7.897-5.892 0-.157.009-.313.024-.465a1.765 1.765 0 0 1-.22-.846c0-.969.79-1.759 1.759-1.759.458 0 .866.168 1.168.448 1.18-1.01 2.92-1.662 4.88-1.724l.875-4.111c.046-.222.261-.368.484-.325l3.153.665a1.252 1.252 0 0 1 1.124-.908zm-9.351 9.943c-.888 0-1.608.72-1.608 1.608 0 .889.72 1.609 1.608 1.609.889 0 1.609-.72 1.609-1.609 0-.888-.72-1.608-1.609-1.608zm7.555 0c-.889 0-1.609.72-1.609 1.608 0 .889.72 1.609 1.609 1.609.888 0 1.608-.72 1.608-1.609 0-.888-.72-1.608-1.608-1.608zm-3.778 3.902c-1.644 0-3.056-.583-3.094-.601a.342.342 0 1 1 .282-.622c.043.02 1.266.54 2.812.54 1.545 0 2.766-.52 2.81-.54a.342.342 0 1 1 .284.622c-.039.018-1.45.601-3.094.601z"/></svg>
              A Reddit User Shared:
            </p>
            <p className="italic text-lg text-[var(--text-primary)] m-0">
              ${content}
            </p>
          </div>`;
}

// 1. Process the 4 articles from today that have specific quote blocks
const recentArticles = [
  'why-my-body-feels-stuck-in-fight-or-flight',
  'why-i-followed-every-sleep-hygiene-rule-perfectly',
  'why-it-takes-me-hours-to-fall-asleep',
  'why-cbt-i-didnt-work-for-me'
];

for (const slug of recentArticles) {
  const pagePath = path.join(articlesDir, slug, 'page.tsx');
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, 'utf8');
    
    // Replace: <p className="pl-6 border-l-4 border-[#8da399]/40 italic">...</p>
    const quoteRegex = /<p className="pl-6 border-l-4 border-\[#8da399\]\/40 italic">\s*([\s\S]*?)\s*<\/p>/g;
    
    content = content.replace(quoteRegex, (match, innerHtml) => {
      // Remove double quotes if present to avoid redundancy
      const cleanQuote = innerHtml.replace(/^"|"$/g, '').trim();
      return getRedditBlock(`"${cleanQuote}"`);
    });
    
    fs.writeFileSync(pagePath, content);
  }
}

// 2. Data for the 3 new articles
const newArticlesData = [
  {
    slug: 'everything-starts-hurting-when-i-dont-sleep',
    title: "Everything Starts Hurting When I Don't Sleep — The Physical Symptoms of Chronic Insomnia Nobody Warned Me About",
    description: "When you stop sleeping, your central nervous system becomes hyper-sensitized to pain—a condition called hyperalgesia. Sleep loss also spikes systemic inflammation, leading to a bone-deep ache, burning skin, and nausea.",
    shortAnswer: "Why does sleep deprivation cause physical pain? When you stop sleeping, your central nervous system becomes hyper-sensitized to pain—a condition called hyperalgesia. Sleep loss also spikes systemic inflammation, leading to a bone-deep ache, burning skin, and nausea. Your body hurts because it lacks the biological downtime required to repair tissues and flush inflammatory cytokines.",
    story: "I lie in bed with my heart pounding and my skin burning, terrified that my body is just going to give out and I'm going to have a heart attack.",
    body: `
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
          {REDDIT_BLOCK}
          <p>This physical misery creates a vicious feedback loop. Because you feel sick, your brain assumes you are in physical danger. It triggers the amygdala, dumping adrenaline into your bloodstream, locking you in a state of Conditioned Hyperarousal. You cannot sleep because you are in pain, and you are in pain because you cannot sleep.</p>
          <p className="text-sm bg-[#f2f0e9] p-4 rounded-xl mt-6 italic">
            (To understand how to break this specific adrenaline loop, read: <Link href="/articles/why-my-body-feels-stuck-in-fight-or-flight" className="text-[var(--primary)] font-bold hover:underline">Why My Body Feels Stuck in Fight-or-Flight Every Single Time I Try to Sleep</Link>).
          </p>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">Recovery is Structural, Not Chemical</h2>
          <p>When you feel this sick, the instinct is to treat the symptoms. You take painkillers for the headache, antacids for the nausea, and muscle relaxers for the trembling. But you cannot cure sleep deprivation hyperalgesia with a pharmacy.</p>
          <p>The only way the pain stops is when the nervous system finally gets the biological downtime it requires to repair itself.</p>
    `,
    faqs: [
      { question: "Can insomnia cause physical body aches?", answer: "Yes. Severe sleep deprivation prevents your body from repairing tissues and flushing inflammatory proteins (cytokines) from your bloodstream. This systemic inflammation creates a physical sensation identical to the body aches and fatigue you experience when fighting a severe viral infection like the flu." },
      { question: "Why does my skin burn and crawl when I'm sleep-deprived?", answer: "Sleep deprivation drastically lowers your neurological pain threshold, a condition known as hyperalgesia. The brain's somatosensory cortex becomes hyper-reactive, causing normal, harmless sensory inputs—like the temperature of the air or the feeling of your clothes—to register as burning, itching, or crawling skin." },
      { question: "Can lack of sleep make you feel nauseous?", answer: "Yes. Nausea and severe gastrointestinal distress are common physical symptoms of chronic sleep loss. The digestive system is highly sensitive to the stress hormones (cortisol and adrenaline) that flood your body during sleep deprivation, throwing off your gut motility and causing persistent nausea." },
      { question: "Are hypnic jerks and body tremors caused by insomnia?", answer: "Yes. When the central nervous system is exhausted and flooded with adrenaline, it struggles to smoothly transition from wakefulness to rest. This neurological misfiring often causes uncontrollable muscle twitching, trembling, and violent hypnic jerks just as you are about to fall asleep." }
    ],
    refs: [
      "<strong>Sleep Deprivation and Pain (Hyperalgesia):</strong> Krause, A. J., et al. (2019). The pain of sleep loss: A brain characterization in humans. <em>Journal of Neuroscience</em>, 39(12), 2291-2300.",
      "<strong>Systemic Inflammation:</strong> Haack, M., et al. (2007). Sleep restriction induces an inflammatory response. <em>Biological Psychiatry</em>, 62(1), 56-63.",
      "<strong>Gastrointestinal Distress & Sleep Loss:</strong> Konturek, P. C., et al. (2011). Stress and the gut: pathophysiology, clinical consequences, diagnostic approach and treatment options. <em>Journal of Physiology and Pharmacology</em>, 62(6), 591-599."
    ]
  },
  {
    slug: 'the-night-every-sleep-medication-stopped-working',
    title: "The Night Every Sleep Medication I Had Stopped Working at Once — What Happens When Your Brain Becomes Tolerant to Every Sedative",
    description: "Over time, your brain develops a chemical tolerance to sedatives. The receptors in your nervous system downregulate, meaning they require escalating doses to achieve the same effect.",
    shortAnswer: "Why do sleeping pills suddenly stop working? Over time, your brain develops a chemical tolerance to sedatives. The receptors in your nervous system downregulate, meaning they require massive, escalating doses to achieve the same effect. Furthermore, sedatives do not cure the underlying fight-or-flight hyperarousal keeping you awake; they merely mask it until tolerance inevitably breaks the mask.",
    story: "The night my meds stopped working was the scariest night of my life. If a heavy-duty antipsychotic can't even knock me out, what hope do I have? I felt completely beyond saving.",
    body: `
          <p>It is a terror that people who sleep normally will never understand.</p>
          <p>You take your prescribed pill. You wait an hour. Nothing happens. You take another dose. You wait another hour. Still nothing.</p>
          <p>Eventually, you are staring at the ceiling at 4 AM, having taken a heavy, desperate cocktail of strong sedatives—maybe zolpidem, quetiapine, or olanzapine—and you are still completely, violently awake. Your body is heavily drugged, your speech is slurred, but your brain refuses to shut off.</p>
          {REDDIT_BLOCK}
          <p>When your absolute last resort fails, the panic is paralyzing. If you are living through the nightmare of massive medication tolerance, I want to tell you something crucial: Your insomnia is not invincible. Here is the clinical biology of why your brain is currently rejecting sedatives, why escalating your dose is a trap, and the exact framework you need to build a permanent foundation beneath your medication.</p>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">The Biology: Receptor Downregulation</h2>
          <p>To understand why your cocktail stopped working, you have to look at the neurochemistry of tolerance.</p>
          <p>When you take a strong sedative (like a Z-drug or a benzodiazepine), it binds to specific receptors in your brain (usually GABA receptors) to artificially force the nervous system to slow down.</p>
          <p>The human brain is an incredibly adaptive machine designed to maintain baseline equilibrium (homeostasis). When you flood it with artificial sedatives every night, the brain senses that it is being chemically forced to slow down. To fight back and maintain its equilibrium, it does something called <strong>receptor downregulation</strong>.</p>
          <p>It actually reduces the number of active receptors available for the drug to bind to, or makes them less sensitive.</p>
          <p>When this happens, the 10mg dose that knocked you out a month ago barely makes you yawn today. This creates the "Law of Diminishing Returns." You need 20mg, then 30mg, just to get the same effect. Eventually, the receptors are so downregulated that the medication simply stops working entirely.</p>
          <p className="text-sm bg-[#f2f0e9] p-4 rounded-xl mt-6 italic">
            (Tolerance is often a sign of underlying hyperarousal overpowering the sedative. Read: <Link href="/articles/why-my-body-feels-stuck-in-fight-or-flight" className="text-[var(--primary)] font-bold hover:underline">Why My Body Feels Stuck in Fight-or-Flight Every Single Time I Try to Sleep</Link>).
          </p>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">The Psychology: The Mask vs. The Engine</h2>
          <p>When the meds stop working, it feels like your insomnia has mutated into something terminal. But that is an illusion.</p>
          <p>Medication is a mask; Conditioned Hyperarousal is the engine.</p>
          <p>A sleeping pill does not cure the psychological fear of the bed. It does not cure the adrenaline dump you experience when the sun goes down. It simply acts as a heavy blanket thrown over a revving engine. When you build tolerance, the blanket gets thinner, and the engine of your anxiety roars right through it.</p>
          <p>You are still awake because the underlying behavioral engine of your insomnia was never turned off.</p>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">The Fix: Building the Foundation (Do Not Stop Cold Turkey)</h2>
          <p>If your medication has stopped working, do not panic, and absolutely <strong>do not stop taking it cold turkey.</strong> Sudden withdrawal from heavy sedatives can cause dangerous rebound insomnia, seizures, and severe neurological distress.</p>
          <p>You cannot fix chemical tolerance overnight, but you can immediately start addressing the hyperarousal engine that the medication was failing to cover up.</p>
          <p>You need to implement the clinical tools of CBT-I to mathematically build biological sleep pressure, and the psychological tools of ACT-I to lower your baseline adrenaline. You build this behavioral foundation while you are still taking your medication. Once the behavioral tools begin working and your natural sleep drive returns, you can work closely with your prescribing doctor to begin a safe, structured taper.</p>
    `,
    faqs: [
      { question: "Why did my sleeping pills suddenly stop working?", answer: "Over time, your brain adapts to the chemical presence of a sedative through a process called receptor downregulation. The brain removes or desensitizes the receptors the drug binds to, meaning you build a chemical tolerance. The drug becomes less effective, eventually failing to overpower your underlying sleep anxiety." },
      { question: "Should I take a higher dose if my sleep meds aren't working?", answer: "No. Escalating your dose without medical supervision is dangerous and only provides a temporary fix. Your brain will rapidly downregulate its receptors to match the new, higher dose, trapping you in a cycle of tolerance and dependency while the underlying cause of your insomnia remains untreated." },
      { question: "How do I sleep when my sleeping pills stop working?", answer: "If tolerance has rendered your medication ineffective, you must address the behavioral and psychological root of your wakefulness. Utilizing Cognitive Behavioral Therapy for Insomnia (CBT-I) helps rebuild your natural biological sleep drive and lowers the hyperarousal (adrenaline) that the medication is currently failing to mask." },
      { question: "Is it safe to quit sleeping pills cold turkey if they don't work?", answer: "Absolutely not. Even if a medication is no longer helping you sleep, your brain has become chemically dependent on it. Quitting cold turkey can cause severe withdrawal symptoms, including dangerous rebound insomnia, hallucinations, and seizures. You must taper off medication slowly under the direct guidance of a doctor." }
    ],
    refs: [
      "<strong>Tolerance and Downregulation:</strong> Lader, M. (1992). History of benzodiazepine dependence. <em>Journal of Substance Abuse Treatment</em>, 8(1-2), 53-59.",
      "<strong>CBT-I vs. Medication:</strong> Morin, C. M., et al. (1999). Behavioral and pharmacological therapies for late-life insomnia: a randomized controlled trial. <em>JAMA</em>, 281(11), 991-999."
    ],
    disclaimerOverrides: "<strong>Disclaimer:</strong> The content provided in this article is strictly for educational and informational purposes and does not constitute medical or psychiatric advice. Never stop, alter, or taper prescription sleep medications, benzodiazepines, or antipsychotics abruptly or without the direct supervision of your prescribing physician, as sudden withdrawal can cause severe, life-threatening medical emergencies."
  },
  {
    slug: 'after-82-hours-without-sleep-i-started-seeing-shadow-figures',
    title: "After 82 Hours Without Sleep I Started Seeing Shadow Figures by My Bed — What Severe Sleep Deprivation Hallucinations Feel Like From Inside",
    description: "After 48 to 72 hours without sleep, the immense biological pressure for REM (dream) sleep forces your brain to experience 'microsleeps' while you are still awake.",
    shortAnswer: "Why do you hallucinate when sleep-deprived? After 48 to 72 hours without sleep, the immense biological pressure for REM (dream) sleep forces your brain to experience \"microsleeps\" while you are still awake. Your visual cortex begins dreaming over your waking reality, causing you to see shadow figures, hear voices, or experience severe paranoia.",
    story: "At 82 hours, I was so detached from reality I didn't know if I was awake or dreaming. I saw a shadow figure standing next to my closet, and I was too exhausted to even scream.",
    body: `
          <p>You hit the 48-hour mark, and the world just feels a little blurry.</p>
          <p>But by hour 72, reality starts to fracture. You are lying in bed, staring at the dark corner of the room, and the shadows begin to move. You hear someone whisper your name, but you live alone. You catch movement in your peripheral vision—a person, an animal, a dark shape—but when you turn your head, nothing is there.</p>
          {REDDIT_BLOCK}
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
    `,
    faqs: [
      { question: "How many days without sleep causes hallucinations?", answer: "Mild perceptual distortions (like blurred vision or seeing movement in your periphery) can begin after 24 to 48 hours without sleep. Complex hallucinations, such as seeing distinct shadow figures, hearing voices, or experiencing paranoid delusions, typically occur after 72 to 96 hours of continuous wakefulness." },
      { question: "Why do I see shadow people when I can't sleep?", answer: "Seeing \"shadow figures\" is a classic symptom of extreme sleep deprivation. It occurs because your brain is under massive biological pressure to enter REM (dream) sleep. It forces \"microsleeps\" while your eyes are open, causing your visual cortex to project dream imagery into the real world." },
      { question: "Are sleep deprivation hallucinations permanent?", answer: "No. Hallucinations caused purely by sleep deprivation are fully reversible. Once the individual achieves a consolidated period of restorative sleep, the REM pressure dissipates, the brain's sensory processing resets, and the hallucinations and perceptual distortions resolve without permanent neurological damage." },
      { question: "Should I go to the ER for insomnia and hallucinations?", answer: "If you are seeing shadows but know they are not real, it is a symptom of sleep loss. However, if you lose your grip on reality, genuinely believe the hallucinations are real, experience extreme paranoia, or have suicidal thoughts, you must go to the ER immediately for medical intervention." }
    ],
    refs: [
      "<strong>Sleep Deprivation and Hallucinations:</strong> Waters, F., et al. (2018). Severe sleep deprivation causes hallucinations and a gradual progression toward clinical psychosis. <em>Frontiers in Psychiatry</em>, 9, 303."
    ],
    disclaimerOverrides: "<strong>Disclaimer:</strong> The content provided in this article is for educational purposes only. If you are experiencing severe paranoia, losing touch with reality, or having thoughts of self-harm, please go to your nearest emergency room or contact emergency services immediately. Sleep deprivation psychosis is a medical emergency that requires clinical intervention."
  }
];

function generatePageTemplate(data) {
  const disclaimer = data.disclaimerOverrides || `<strong>Disclaimer:</strong> This article is an educational resource and does not constitute medical advice. Please consult a healthcare professional if you are navigating severe mental health challenges or underlying sleep disorders.`;

  let finalBody = data.body.replace('{REDDIT_BLOCK}', getRedditBlock(`"${data.story}"`));

  return `import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import FaqAccordion from "../../components/FaqAccordion";

export const metadata: Metadata = {
  title: "${data.title.replace(/"/g, '\\"')}",
  description: "${data.description.replace(/"/g, '\\"')}",
  alternates: {
    canonical: '/articles/${data.slug}',
  },
};

export default function ArticlePage() {
  const pageFaqs = ${JSON.stringify(data.faqs, null, 4)};

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
            ${data.title}
          </h1>
          <div className="h-[1px] w-full bg-[#8da399]/20" />
        </header>

        <div className="text-[var(--text-secondary)] font-sans leading-relaxed space-y-6 text-lg">
          <div className="bg-[#f9f8f6] p-6 rounded-[1rem] border border-[#8da399]/20 my-6">
            <h3 className="font-serif text-[var(--text-primary)] text-xl mb-4">The Short Answer:</h3>
            <p className="font-sans text-[var(--text-secondary)] text-lg">${data.shortAnswer}</p>
          </div>

          ${finalBody}

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
            ${data.refs.map(r => "<li>" + r + "</li>").join('\n            ')}
          </ul>

          <p className="text-xs opacity-60 mt-12 leading-relaxed">
            ${disclaimer}
          </p>

          <hr className="my-12 border-[#8da399]/20" />

          <FaqAccordion faqs={pageFaqs} title="FAQs: People Also Ask About Insomnia" />
        </div>
      </article>
    </main>
  );
}
`;
}

// Write the files
for (const art of newArticlesData) {
  const dirPath = path.join(articlesDir, art.slug);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  fs.writeFileSync(path.join(dirPath, 'page.tsx'), generatePageTemplate(art));
  console.log('Created:', art.slug);
}

// 3. Update app/articles/page.tsx
const articlesListPath = path.join(__dirname, '../app/articles/page.tsx');
let listContent = fs.readFileSync(articlesListPath, 'utf8');

const newArrayItems = newArticlesData.map(a => `  {
    title: "${a.title}",
    description: "${a.description}",
    slug: "${a.slug}",
  }`).join(',\n');

// Try finding the end of the array `];`
listContent = listContent.replace(/  \}\s*\];/, `  },
${newArrayItems}
];`);

fs.writeFileSync(articlesListPath, listContent);
console.log('Updated articles list');

// 4. Update app/sitemap.ts
const sitemapPath = path.join(__dirname, '../app/sitemap.ts');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

const sitemapRoutes = newArticlesData.map(a => `    {
      url: \`\${baseUrl}/articles/\${a.slug}\`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    }`).join(',\n');

sitemapContent = sitemapContent.replace(/    \}\s*\];/, `    },
${sitemapRoutes}
  ];`);

fs.writeFileSync(sitemapPath, sitemapContent);
console.log('Updated sitemap');
