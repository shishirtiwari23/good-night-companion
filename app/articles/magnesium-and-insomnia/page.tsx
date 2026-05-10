import React from "react";
import Link from "next/link";
import FaqAccordion from "../../components/FaqAccordion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Does Magnesium Help With Sleep? What the Research Actually Says",
  description: "Magnesium glycinate and threonate support GABA pathways and reduce baseline anxiety — but they can't fix conditioned hyperarousal. Here's the honest, mechanism-first truth about what magnesium can and can't do.",
};

const faqs = [
  { question: "Which form of magnesium is best for sleep?", answer: "Magnesium Glycinate and Magnesium L-Threonate are the most appropriate for sleep and anxiety support. Both offer good bioavailability and efficient pathways to the brain. Magnesium Glycinate is generally the more accessible and better-studied option for relaxation. Avoid Magnesium Citrate and Magnesium Oxide for sleep purposes — their primary effect is laxative rather than neurological." },
  { question: "Why is magnesium not helping my insomnia?", answer: "Magnesium supports physical relaxation by activating GABA pathways — it reduces baseline physiological arousal and takes the edge off low-grade predisposing anxiety. What it cannot do is override Conditioned Hyperarousal: the acute adrenaline response your brain has learned to trigger in response to the sleep environment after repeated nights of lying awake anxiously. That response requires behavioural intervention — specifically Stimulus Control and Sleep Restriction Therapy — not supplementation." },
  { question: "When should I take magnesium for sleep?", answer: "Take it one to two hours before your intended bedtime, during your natural wind-down window. A dose of 200–400mg is well-tolerated for most adults. Above 400mg you are unlikely to gain additional sleep benefit and may experience digestive side effects. Consult your healthcare provider for guidance specific to your health profile." },
  { question: "Can you take melatonin and magnesium together?", answer: "Yes. The two compounds operate on entirely different biological pathways. Melatonin is a circadian hormone that signals darkness and shifts your sleep timing — it does not directly produce sleep. Magnesium supports GABAergic relaxation. Taking them together is generally safe, though neither addresses the conditioned hyperarousal that sustains chronic insomnia." }
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
            <span>CBT-I Evidence-Based · ACT-I Informed · Supplement Science Reviewed</span>
          </div>

          <p className="text-[10px] md:text-xs font-bold tracking-[0.16em] uppercase text-sage mb-4">
            Sleep Science
          </p>
          <h1 className="text-3xl md:text-5xl font-cormorant font-light text-ink leading-tight mb-8">
            Does Magnesium Help With Sleep? What the Research Actually Says
          </h1>

          <div className="h-[1px] w-full bg-[#8da399]/20" />
        </header>

        <div className="text-ink-2 font-sans leading-relaxed space-y-6 text-lg">

          {/* Quick Answer */}
          <div className="bg-[#f9f8f6] p-6 rounded-[1rem] border border-rule my-6">
            <p className="text-[10px] font-bold tracking-[0.16em] uppercase text-sage mb-2">Quick Answer</p>
            <h3 className="font-serif font-medium text-ink text-xl mb-4">
              Does magnesium cure chronic insomnia?
            </h3>
            <p className="font-sans text-ink-2 text-lg mb-4">
              No. Magnesium glycinate and L-threonate can genuinely support physical relaxation and reduce low-grade predisposing anxiety by activating GABA pathways. But they cannot fix chronic insomnia, which is driven by a conditioned adrenaline response that magnesium is physiologically incapable of overriding. It is a useful supporting tool. It is not the answer.
            </p>
          </div>

          
          <p className="text-xl md:text-2xl font-serif font-medium text-ink leading-snug">
            Your nightstand looks like a pharmacy. Melatonin gummies, valerian root, chamomile tea, and three different bottles of magnesium.
          </p>
          <p>
            You bought them because every wellness account, sleep podcast, and late-night Reddit thread swore that magnesium was the supplement the medical establishment didn't want you to know about.
          </p>
          <blockquote className="border-l-4 border-[var(--primary)] pl-6 italic text-xl text-ink my-8">
            "I'm taking 400mg of magnesium glycinate every single night. My muscles feel a little heavier, but my brain is still racing at 100 miles an hour. I feel like I must be doing something wrong."
          </blockquote>
          <p>
            You are not doing something wrong. You are doing something that the supplement industry has very little incentive to tell you the truth about. Magnesium is a legitimate, well-studied mineral with real effects on the nervous system. It also has a specific ceiling — and chronic insomnia sits well above it.
          </p>
          <p>
            Here is the honest, mechanism-first explanation of what magnesium actually does, why it is not working for your insomnia, and how to use it correctly as part of a broader recovery approach.
          </p>

          <h2 className="text-3xl font-cormorant font-light text-ink mt-16 mb-8">The Biology: How Magnesium Affects the Brain</h2>
          <p>
            Magnesium is not a wellness trend or a placebo. It plays a genuine and well-documented role in nervous system regulation.
          </p>
          <p>
            When you take a bioavailable form of magnesium — primarily <strong>Magnesium Glycinate</strong> or <strong>Magnesium L-Threonate</strong> — it crosses the blood-brain barrier and helps activate GABA pathways. GABA (gamma-aminobutyric acid) is your brain's primary inhibitory neurotransmitter: the chemical system responsible for quieting neural activity, reducing muscle tension, and creating the physiological conditions associated with relaxation and wind-down.
          </p>
          <p>
            In plain terms: magnesium acts as a gentle brake pedal for the nervous system. It lowers baseline physiological arousal, takes the edge off low-grade anxiety, and nudges your nervous system toward a calmer resting state.
          </p>
          <p>
            This is real. It is clinically documented. And it is exactly where its usefulness ends for most people with chronic insomnia.
          </p>

          <h2 className="text-3xl font-cormorant font-light text-ink mt-16 mb-8">The Psychology: Predisposing vs. Conditioned</h2>
          <p>
            If magnesium genuinely activates GABA and reduces arousal, why is your brain still racing at midnight? Because there are two entirely different types of arousal at play — and magnesium only addresses one of them.
          </p>
          <p>
            <strong>Predisposing anxiety</strong> is the low-grade, generalised stress that most people carry — the background hum of a demanding job, a difficult relationship, financial pressure, or a naturally reactive nervous system. Magnesium is genuinely useful here. For someone whose sleep difficulty is primarily rooted in this kind of baseline tension, it can meaningfully reduce that hum and make the transition to sleep easier.
          </p>
          <p>
            <strong>Conditioned Hyperarousal</strong> is something different in kind, not just in degree. After weeks or months of lying awake in bed, frustrated and frightened, your brain has undergone a specific learning process: it has encoded the bed as a threat environment. The moment you lie down, your amygdala registers the context and triggers an adrenaline release. Not a slow cortisol build. An acute adrenaline spike.
          </p>
          <p>
            Magnesium gently pushes the brake pedal. Adrenaline slams a brick on the accelerator.
          </p>
          <p>
            These are not comparable forces. You cannot resolve a conditioned threat response — a behavioural, neurological pattern built through repetition — with a mineral supplement, regardless of the dose.
          </p>
          <p>
            There is a second problem with relying heavily on magnesium: it can become a <strong>Safety Behaviour</strong>. When you come to believe you cannot sleep without it, skipping a dose or questioning whether you took enough becomes its own source of anxiety. The supplement designed to calm your nervous system becomes the object of the performance anxiety keeping you awake.
          </p>

          <h2 className="text-3xl font-cormorant font-light text-ink mt-16 mb-8">Dosing and Timing: How to Use It Correctly</h2>
          <p>
            If you are using magnesium as a supporting tool alongside behavioural therapy, form, dose, and timing all matter.
          </p>
          <ul className="list-disc pl-6 space-y-4 my-6">
            <li><strong>The form:</strong> Magnesium Glycinate is the most widely used form for sleep and anxiety. Magnesium L-Threonate is also worth considering as it crosses the blood-brain barrier efficiently. Avoid Magnesium Citrate and Oxide for sleep purposes.</li>
            <li><strong>The timing:</strong> Take it one to two hours before your intended bedtime.</li>
            <li><strong>The dose:</strong> A well-tolerated, effective range is typically 200–400mg. Higher doses do not produce stronger sedation, but they do increase the likelihood of digestive discomfort.</li>
          </ul>

          <h2 className="text-3xl font-cormorant font-light text-ink mt-16 mb-8">The Fix: A Tool in a Larger System</h2>
          <p>
            You do not need to throw your magnesium away. Used correctly, it is a reasonable support for baseline nervous system health during insomnia recovery.
          </p>
          <p>
            What you do need to stop is expecting it to fix the thing it was never capable of fixing. Chronic insomnia is a behavioural and neurological condition. The fix is architectural: compress your sleep window to rebuild adenosine pressure, use stimulus control to retrain your brain's association with the bed, and use cognitive tools to dismantle performance anxiety. Magnesium can take a little of the edge off while you do the real work.
          </p>

          <h2 className="text-xl font-serif font-medium text-ink mt-12 mb-4">Scientific References & Further Reading</h2>
          <ul className="list-disc pl-6 space-y-4 mb-12 text-[0.85rem] text-ink-2">
            <li><strong>Magnesium and Sleep Clinical Trial:</strong> Abbasi, B., et al. (2012). The effect of magnesium supplementation on primary insomnia in elderly. <em>Journal of Research in Medical Sciences</em>.</li>
            <li><strong>Magnesium L-Threonate:</strong> Slutsky, I., et al. (2010). Enhancement of learning and memory by elevating brain magnesium. <em>Neuron</em>. Demonstrates superior blood-brain barrier crossing efficiency.</li>
            <li><strong>Safety Behaviours and Insomnia:</strong> Harvey, A. G. (2002). A cognitive model of insomnia. <em>Behaviour Research and Therapy</em>. Explains how reliance on external aids creates performance anxiety.</li>
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
