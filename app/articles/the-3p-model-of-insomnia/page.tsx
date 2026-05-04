import React from "react";
import Link from "next/link";
import FaqAccordion from "../../components/FaqAccordion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The 3P Model of Insomnia Explained: Predisposing, Precipitating & Perpetuating Factors",
  description: "Spielman's 3P Model shows exactly how a bad week of sleep becomes chronic insomnia — and why \"chronic\" doesn't mean permanent. Here's the clinical framework and what it means for your recovery.",
  alternates: {
    canonical: '/articles/the-3p-model-of-insomnia',
  },
  openGraph: {
    title: "The 3P Model of Insomnia Explained: Predisposing, Precipitating & Perpetuating Factors",
    description: "Spielman's 3P Model shows exactly how a bad week of sleep becomes chronic insomnia — and why \"chronic\" doesn't mean permanent. Here's the clinical framework and what it means for your recovery.",
    url: "https://www.thegoodnightcompanion.com/articles/the-3p-model-of-insomnia",
    siteName: "The Good Night Companion",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The 3P Model of Insomnia Explained: Predisposing, Precipitating & Perpetuating Factors",
    description: "Spielman's 3P Model shows exactly how a bad week of sleep becomes chronic insomnia — and why \"chronic\" doesn't mean permanent. Here's the clinical framework and what it means for your recovery.",
    images: ["/twitter-image.jpg"],
  },
};

const faqs = [
  { question: "What is the 3P Model of insomnia?", answer: "The 3P Model of Insomnia is a clinical framework developed by sleep researcher Dr. Arthur Spielman in 1987 that explains how chronic insomnia develops. The three Ps stand for Predisposing factors (your baseline nervous system sensitivity that makes you vulnerable to insomnia), Precipitating factors (the specific trigger or event that caused your sleep to break down initially), and Perpetuating factors (the habits, behaviours, and thought patterns that keep insomnia running long after the original trigger has resolved). The model is the conceptual foundation for CBT-I — the gold-standard clinical treatment for chronic insomnia — because it identifies exactly where therapeutic intervention is most effective: the third P." },
  { question: "What are the perpetuating factors in insomnia?", answer: "Perpetuating factors are the behaviours and psychological patterns that sustain insomnia after the original trigger has passed — making it self-perpetuating insomnia. They typically include spending excessive time in bed while awake (which dilutes sleep pressure and strengthens the association between bed and wakefulness), going to bed before feeling genuinely sleepy, napping to compensate for lost sleep, obsessively monitoring sleep data, avoiding activities to \"protect\" sleep, and developing anxiety about sleep itself. These behaviours arise from entirely understandable attempts to cope with sleep loss, but they inadvertently reinforce the Conditioned Hyperarousal that keeps chronic insomnia running. CBT-I specifically targets perpetuating factors." },
  { question: "What is the clinical definition of Chronic Insomnia?", answer: "According to the DSM-5 and ICSD-3, Chronic Insomnia Disorder is diagnosed when sleep difficulties — trouble falling asleep or staying asleep, or early morning waking — occur at least 3 nights per week, for at least 3 months, and cause significant daytime distress or functional impairment. This is sometimes called the \"Rule of 3s.\" If your sleep problems began recently (under 3 months), you likely have Acute Insomnia, which is a normal biological response to stress and often resolves on its own." },
  { question: "Is chronic insomnia permanent?", answer: "No. In clinical medicine, \"chronic\" refers to duration and pattern — it means the sleep problem has persisted for three or more months and become self-sustaining. It does not mean permanent or incurable. The 3P Model explains why: chronic insomnia is maintained by perpetuating factors — learned behaviours and conditioned associations — not by structural brain damage or irreversible neurological change. Because these patterns were learned, they can be unlearned. CBT-I, the gold-standard treatment, has robust clinical evidence for achieving full remission even in people who have suffered from chronic insomnia for many years." },
  { question: "What is the difference between acute and chronic insomnia?", answer: "Acute Insomnia is a short-term sleep disruption lasting days to weeks, typically triggered by an identifiable stressor — illness, grief, work pressure, or life change. It usually resolves when the stressor passes. Chronic Insomnia Disorder, by clinical definition, has persisted for at least three months and occurs at least three nights per week. The critical difference is not just duration but mechanism: in chronic insomnia, the original trigger is no longer the primary cause. The insomnia has become self-sustaining through Conditioned Hyperarousal — the brain has learned to associate the bed with vigilance and stress rather than safety and sleep." },
  { question: "How does the 3P Model explain self-perpetuating insomnia?", answer: "The 3P Model explains the development of self-perpetuating insomnia through the third P — Perpetuating factors. After an initial sleep disruption (Precipitating factor), people naturally adopt coping behaviours: going to bed earlier, staying in bed while awake, eliminating activities to \"protect\" sleep. These behaviours weaken sleep pressure and strengthen the brain's association between the bed and wakefulness. Over weeks, this creates Conditioned Hyperarousal — a learned state in which the bed itself triggers anxiety and alertness. At this point the original stressor may be long gone, but the insomnia continues independently, sustained entirely by the conditioned response. This is what makes it self-perpetuating: the insomnia itself becomes the cause of the insomnia." }
];

export default function Article5Page() {
  return (
    <main className="min-h-screen flex flex-col items-center p-4 md:p-12 relative bg-cream text-ink">
      
      {/* Navigation */}
      <div className="w-full max-w-3xl z-10 mb-12 flex justify-between items-center">
        <Link 
          href="/articles" 
          className="inline-flex items-center text-ink-2 hover:text-ink transition-colors text-sm font-bold uppercase tracking-[0.16em]"
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
          className="inline-flex items-center text-ink-2 hover:text-ink transition-colors text-sm font-bold uppercase tracking-[0.16em]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          Home
        </Link>
      </div>

      <article className="w-full max-w-3xl z-10 bg-cream p-6 md:p-12 rounded-[2rem] shadow-sm mb-20 shadow-[rgba(0,0,0,0.03)_0px_10px_30px]">
        
        <header className="mb-12">
          {/* Authority Badge */}
          <div className="inline-flex items-start md:items-center gap-2 bg-[#8da399]/10 border border-rule text-sage text-[10px] md:text-xs font-bold px-4 py-2 rounded-xl md:rounded-full mb-6 tracking-[0.16em] uppercase text-left">
            <svg className="flex-shrink-0 mt-[1px] md:mt-0" width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 1L1 3.5V7C1 10.0376 3.41 12.8776 6.5 13.5C9.59 12.8776 12 10.0376 12 7V3.5L6.5 1Z" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>
            <span>Spielman&apos;s foundational framework · DSM-5 diagnostic criteria · CBT-I evidence-based</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-cormorant font-light text-ink leading-tight mb-8">
            The 3P Model of Insomnia: How Acute Stress Becomes Chronic — And How to Reverse It
          </h1>

          <div className="h-[1px] w-full bg-[#8da399]/20" />
        </header>

        <div className="text-ink-2 font-sans leading-relaxed space-y-6 text-lg">

          {/* QUICK ANSWER */}
          <div className="bg-[#f9f8f6] p-6 rounded-[1rem] border border-rule my-6">
            <p className="text-[10px] font-bold tracking-[0.16em] uppercase text-sage mb-2">Quick Answer</p>
            <h3 className="font-serif font-medium text-ink text-xl mb-4">
              The 3P Model of Insomnia explains how chronic insomnia develops through three stages: Predisposing factors, Precipitating factors, and Perpetuating factors.
            </h3>
            <p className="font-sans text-ink-2 text-lg mb-4">
              Understanding which of your three Ps is currently active is the first step toward recovery — because the Predisposing and Precipitating factors are mostly outside your control, while the Perpetuating factors are entirely addressable.
            </p>
            <p className="text-sm text-ink-2 italic border-t border-rule pt-4">
              That&apos;s where CBT-I focuses. That&apos;s where your recovery lives.
            </p>
          </div>

          <p className="text-xl md:text-2xl font-serif font-medium text-ink leading-snug">
            You are three weeks into terrible sleep. Or three months. Or three years. You opened Google, started reading, and now you are staring at the phrase &quot;chronic insomnia&quot; and wondering whether your brain is permanently broken.
          </p>
          
          <p>
            Before you spiral further: the word &quot;chronic&quot; in medicine does not mean what it means in common language. It does not mean permanent. It does not mean incurable. In sleep medicine, it simply means your sleep struggle has transitioned from a temporary reaction to stress into a learned behavioural pattern — and learned patterns can be unlearned.
          </p>

          <p>
            To understand exactly how that transition happens, sleep medicine uses a framework developed by Dr. Arthur Spielman in 1987 that remains the dominant clinical model for understanding insomnia today. It is called the <strong>3P Model</strong>, and it is the conceptual foundation that CBT-I is built upon.
          </p>

          {/* THE CLINICAL CRITERIA PANEL */}
          <div className="bg-[#8da399]/10 border-l-4 border-[var(--primary)] p-6 rounded-r-lg my-8">
            <h3 className="font-serif font-medium text-ink text-xl font-semibold mb-3">The Clinical Criteria — How Sleep Medicine Defines &quot;Chronic&quot;</h3>
            <p className="text-base text-ink-2 leading-relaxed mb-3">
              Sleep specialists use specific diagnostic criteria from the DSM-5 and ICSD-3 to distinguish normal sleep fluctuations from clinical insomnia. The standard is sometimes called the &quot;Rule of 3s&quot;:
            </p>
            <ul className="text-base text-ink-2 list-disc pl-6 space-y-2">
              <li><strong>The Time:</strong> It takes more than 30 minutes to fall asleep, or you wake in the night and remain awake for more than 30 minutes.</li>
              <li><strong>The Frequency:</strong> This happens at least 3 nights per week.</li>
              <li><strong>The Duration:</strong> This pattern has persisted for at least 3 months.</li>
              <li><strong>The Impact:</strong> It causes measurable daytime impairment — fatigue, mood disruption, cognitive difficulties, or significant distress.</li>
            </ul>
          </div>

          <p>
            If you have slept badly for two weeks because of a stressful project at work, you do not meet the criteria for Chronic Insomnia Disorder. What you are experiencing is <strong>Acute Insomnia</strong> — a temporary, biologically normal response to stress. Most acute insomnia resolves on its own when the stressor passes.
          </p>

          <p>
            The 3P Model explains exactly why, for some people, it doesn&apos;t.
          </p>

          <h2 className="text-3xl font-cormorant font-light text-ink mt-16 mb-8 text-center">
            The 3P Model of Insomnia
          </h2>

          <div className="space-y-12">
            
            {/* P1: PREDISPOSING */}
            <div className="bg-[#f9f8f6] border border-rule p-8 rounded-[1.5rem]">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-sage-dark text-white text-white rounded-full flex items-center justify-center font-serif font-medium text-xl">P1</div>
                <h3 className="font-serif font-medium text-ink text-2xl">Predisposing Factors: Your Baseline</h3>
              </div>
              <p className="mb-4">
                Some people are biologically wired to be more alert, reactive, and arousal-prone than others. This is not a flaw — it is simply a trait of your nervous system.
              </p>
              <p className="mb-4">
                Predisposing factors include a naturally high baseline level of physiological arousal, a tendency toward anxiety or rumination, being a &quot;light sleeper&quot; by nature, genetic predisposition to sleep fragmentation, and being what researchers sometimes call a &quot;systemiser&quot; — someone whose mind is naturally analytical, vigilant, and pattern-seeking.
              </p>
              <p className="mb-6">
                These factors don&apos;t cause insomnia on their own. Think of them as the soil conditions. Someone with high predisposing factors has fertile ground for insomnia to take root — but only if a seed is planted.
              </p>
              <div className="bg-[#f2f0e9] p-5 rounded-xl text-sm text-ink-2 italic border-l-2 border-rule">
                <strong className="not-italic text-ink">For your own mapping:</strong> If you have always been a light sleeper, if anxiety has run in your family, or if you have tended toward overthinking throughout your life, your predisposing score is elevated. This explains why you developed insomnia from a stressor that another person might have slept straight through.
              </div>
            </div>

            {/* P2: PRECIPITATING */}
            <div className="bg-[#f9f8f6] border border-rule p-8 rounded-[1.5rem]">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-sage-dark text-white text-white rounded-full flex items-center justify-center font-serif font-medium text-xl">P2</div>
                <h3 className="font-serif font-medium text-ink text-2xl">Precipitating Factors: The Trigger</h3>
              </div>
              <p className="mb-4">
                Acute insomnia always has a beginning. A specific event disrupts your sleep — and your elevated nervous system responds by keeping you vigilant.
              </p>
              <p className="mb-4">
                Common precipitating factors include major life stress (job loss, bereavement, relationship breakdown), acute illness or physical pain, a new baby or significant disruption to routine, trauma, shift work changes, or even a period of jet lag that never fully resolved.
              </p>
              <p className="mb-4">
                The important thing to understand about precipitating factors is that they are often entirely outside your control, and they are rarely the reason insomnia persists. The body is designed to respond to genuine threat with increased arousal — that is not dysfunction, it is biology working correctly.
              </p>
              <p className="mb-6">
                For most people, when the precipitating event resolves, sleep returns to normal within a few weeks. For people with high predisposing factors, however, something else has begun to happen while they were waiting for the trigger to pass.
              </p>
              <div className="bg-[#f2f0e9] p-5 rounded-xl text-sm text-ink-2 italic border-l-2 border-rule">
                <strong className="not-italic text-ink">For your own mapping:</strong> Can you identify the specific event, period, or change that preceded your sleep problems? Even if it was years ago, there is almost always a clear precipitant. Identifying it matters because it helps you separate the original cause from what is actually keeping your insomnia running today.
              </div>
            </div>

            {/* P3: PERPETUATING */}
            <div className="bg-cream border-2 border-[var(--primary)] shadow-[rgba(0,0,0,0.06)_0px_10px_30px] p-8 rounded-[1.5rem] relative">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-sage-dark text-white text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-[0.16em]">
                The Core Target
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-sage-dark text-white text-white rounded-full flex items-center justify-center font-serif font-medium text-xl">P3</div>
                <h3 className="font-serif font-medium text-ink text-2xl">Perpetuating Factors: The Trap</h3>
              </div>
              <p className="mb-4">
                This is the most clinically important of the three Ps, the most frequently misunderstood, and the one that determines whether acute insomnia becomes self-perpetuating insomnia.
              </p>
              <p className="mb-4">
                Here is what happens. You have been sleeping badly for several weeks because of a stressor. Exhausted and desperate, you begin adapting your behaviour to compensate. You start going to bed earlier to give yourself more opportunity to sleep. You stay in bed even when you are wide awake. You cancel social plans to protect your sleep. You begin tracking every detail of your sleep data obsessively. You start napping.
              </p>
              <p className="mb-4 font-bold text-ink">
                Every single one of these behaviours is logical. Every single one of them makes your insomnia worse.
              </p>
              <p className="mb-4">
                By spending more time in bed awake, you weaken your <strong>Homeostatic Sleep Drive</strong>. By lying awake in bed night after night, anxious and frustrated, you are training your nervous system through basic associative learning: your brain begins to encode bed as a place associated with danger, stress, and vigilance. This is <strong>Conditioned Hyperarousal</strong> — and it is the mechanism by which the bed itself becomes the trigger for wakefulness.
              </p>
              <p className="mb-6">
                At this point, something significant has shifted. The original stressor may have long since resolved. But your nervous system is now generating insomnia independently. The clinical term is <strong>Psychophysiological Insomnia</strong>. The common experience of it is: <em>&quot;I don&apos;t even know why I can&apos;t sleep anymore. Nothing is wrong. I just lie there.&quot;</em>
              </p>
              <div className="bg-[#8da399]/10 p-5 rounded-xl text-sm text-ink-2 italic border-l-2 border-[var(--primary)]">
                <strong className="not-italic text-ink">For your own mapping:</strong> Ask yourself honestly — are the habits you developed to cope with early insomnia still in place? Are you going to bed before you are genuinely sleepy? Are you spending large amounts of time lying awake in bed? Do you feel anxious before bed in a way you didn&apos;t used to? If yes, your perpetuating factors are active, and these are the target of recovery.
              </div>
            </div>

          </div>

          <h2 className="text-2xl font-serif font-medium text-ink mt-16 mb-4">
            &quot;Chronic&quot; Does Not Mean &quot;Permanent&quot;
          </h2>

          <p>
            This is the reframe that changes everything for people who have been suffering for months or years.
          </p>

          <p>
            In clinical medicine, &quot;chronic&quot; is a descriptor of duration and pattern — it means &quot;ongoing&quot; and &quot;recurring.&quot; It does not mean &quot;structural,&quot; &quot;incurable,&quot; or &quot;permanent.&quot; A chronic behaviour is, by definition, a learned one. And learned behaviours can be unlearned.
          </p>

          <blockquote className="border-l-4 border-[var(--primary)] pl-6 italic text-xl text-ink my-8">
            You do not have a broken brain. You do not have a chemical imbalance. You do not have an incurable neurological condition. You have a highly efficient nervous system that learned — through entirely understandable circumstances — to be hypervigilant in the sleep environment.
          </blockquote>

          <p>
            The bedrock insight of the 3P Model is that the third P — the perpetuating factors — is where the clinical leverage exists. You cannot change your predisposing factors. You often cannot change your precipitating factors. But you have complete access to your perpetuating factors. Your behaviours, your associations, your relationship with your bed — these are precisely what CBT-I is designed to address.
          </p>

          <h2 className="text-2xl font-serif font-medium text-ink mt-12 mb-4">
            From Model to Recovery: What the Framework Tells You to Do
          </h2>

          <p>
            Understanding the 3P Model isn&apos;t just intellectually satisfying — it is operationally useful. It tells you where to aim.
          </p>

          <ul className="list-disc pl-6 space-y-4 my-8">
            <li><strong>If your Predisposing factors are high:</strong> Your treatment needs to include work on your baseline arousal — somatic tools like Progressive Muscle Relaxation (PMR) and NSDR help here, as does the mindset work from ACT-I (Acceptance and Commitment Therapy for Insomnia).</li>
            <li><strong>If your Precipitating factor is still active:</strong> The goal is not to cure the insomnia immediately but to prevent the perpetuating loop from taking hold. Protecting sleep hygiene basics and using contingency tools for difficult nights is the priority.</li>
            <li><strong>If your Perpetuating factors are dominant:</strong> Which they are for most people with insomnia lasting more than three months — the treatment is CBT-I&apos;s core protocol: Stimulus Control (rebuilding the bed-sleep association), Sleep Restriction Therapy (rebuilding sleep pressure), and Cognitive Restructuring (addressing the fear and hypervigilance around sleep itself).</li>
          </ul>

          <p>
            Whether you are in week three of acute insomnia or year three of chronic insomnia, the treatment target is the same third P. The only difference is that longer-standing chronic insomnia has had more time to consolidate the conditioned associations — meaning recovery takes more patience, but not a different approach.
          </p>

          {/* FINAL CTA */}
          <div className="bg-[#f9f8f6] p-8 md:p-12 rounded-[1.5rem] mt-16 text-center shadow-sm border border-rule">
            <h3 className="text-3xl font-cormorant font-light text-ink mb-4">If You Recognise Your Own Pattern Here</h3>
            <p className="mb-8 mx-auto max-w-lg text-ink-2">
              The 3P Model is most useful when it stops being abstract and becomes your own story. If you can identify your predisposing baseline, name the precipitating event, and honestly audit your perpetuating behaviours — you have the map of exactly what needs to change.
            </p>
            <p className="mb-8 mx-auto max-w-lg text-ink-2">
              The Goodnight Companion is a 90-day guided journal built on the CBT-I framework that the 3P Model underpins. It walks you through dismantling the perpetuating loop systematically — from Stimulus Control and Sleep Restriction through to relapse prevention — in the right order, at the right pace.
            </p>
            <Link 
              href="/join-the-program" className="btn-primary inline-block w-auto !px-10 hover:!bg-[var(--primary-dark)]"
            >
              Get The Goodnight Companion →
            </Link>
          </div>

          <FaqAccordion faqs={faqs} title="People Also Ask" />

          <div className="mt-16 pt-8 border-t border-rule">
            <h2 className="text-xl font-serif font-medium text-ink mb-6">Scientific References &amp; Further Reading</h2>
            <ul className="list-disc pl-6 space-y-3 mb-12 text-sm text-ink-2">
              <li>
                <strong>The 3P Model of Insomnia:</strong> Spielman, A. J., Caruso, L. S., &amp; Glovinsky, P. B. (1987). A clinical perspective on the nature and management of insomnia. <em>Psychiatric Clinics of North America, 10(4)</em>, 541–553. The foundational paper establishing the Predisposing-Precipitating-Perpetuating framework that underlies CBT-I.
              </li>
              <li>
                <strong>Conditioned Hyperarousal and Psychophysiological Insomnia:</strong> Perlis, M. L., et al. (1997). Psychophysiological insomnia: The behavioural model and a neurocognitive perspective. <em>Journal of Sleep Research, 6(3)</em>, 179–188. Explains how the brain develops conditioned associations between the sleep environment and wakefulness, creating self-perpetuating insomnia.
              </li>
              <li>
                <strong>Diagnostic Criteria (Rule of 3s):</strong> American Psychiatric Association. (2013). <em>Diagnostic and Statistical Manual of Mental Disorders (5th ed.)</em>. The DSM-5 clinical criteria distinguishing acute sleep disruption from Chronic Insomnia Disorder.
              </li>
              <li>
                <strong>CBT-I as First-Line Treatment for Chronic Insomnia:</strong> Qaseem, A., et al. (2016). Management of Chronic Insomnia Disorder in Adults. <em>Annals of Internal Medicine</em>. American College of Physicians guideline recommending CBT-I — which directly addresses perpetuating factors — as the first-line treatment for chronic insomnia.
              </li>
            </ul>
          </div>

          <div className="mt-10 p-5 bg-[#f2f0e9] rounded-lg text-xs text-ink-2 leading-relaxed">
            <strong>Disclaimer:</strong> This article is an educational resource and does not constitute medical advice, diagnosis, or clinical therapy. If you are experiencing severe distress or suspect an underlying sleep disorder, please consult a qualified healthcare provider.
          </div>

        </div>
      </article>
      
    </main>
  );
}
