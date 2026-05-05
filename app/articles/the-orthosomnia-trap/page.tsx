import React from "react";
import Link from "next/link";
import FaqAccordion from "../../components/FaqAccordion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sleep Trackers & Insomnia: Why Your Oura Ring or Apple Watch May Be Making It Worse",
  description: "Consumer sleep trackers can't read brainwaves — they estimate. Obsessing over their scores causes Orthosomnia, a clinically recognised condition that worsens insomnia. The science, the accuracy data, and what to do instead.",
  alternates: {
    canonical: '/articles/the-orthosomnia-trap',
  },
};

const faqs = [
  { 
    question: "What is Orthosomnia?", 
    answer: "Orthosomnia is a clinically recognised condition first described by Dr. Kelly Baron and colleagues in a 2017 paper in the Journal of Clinical Sleep Medicine. It refers to the perfectionistic pursuit of perfect sleep data — driven by consumer fitness trackers — that paradoxically worsens insomnia. People with Orthosomnia become preoccupied with improving their sleep scores, causing performance anxiety that activates the sympathetic nervous system and creates the hyperarousal that makes sleep impossible. It is increasingly recognised in CBT-I clinical practice as a modern perpetuating factor in chronic insomnia." 
  },
  { 
    question: "Why does my smartwatch say I got poor deep sleep?", 
    answer: "Consumer smartwatches including the Apple Watch, Oura Ring, Whoop, Garmin and Fitbit cannot directly measure sleep stages. They estimate them using heart rate patterns and wrist movement data — a technique called actigraphy. Academic studies comparing these devices against clinical polysomnography (PSG) — the gold standard using actual EEG brainwave measurement — consistently find that consumer wearables are inaccurate at staging sleep, particularly for deep (slow-wave) sleep and for distinguishing between light sleep and wakefulness. A \"poor deep sleep\" reading may simply be an algorithmic misclassification rather than a meaningful reflection of your sleep architecture." 
  },
  { 
    question: "Can tracking my sleep make me feel more tired?", 
    answer: "Yes — this is documented and has a name: the Nocebo Effect. Research on cognitive models of insomnia shows that negative expectations about sleep, including reading a poor sleep score, directly increase perceived daytime fatigue beyond what the actual sleep quality would produce. In other words, being told by your device that you slept badly makes you feel more tired than you objectively are. For someone with chronic insomnia — whose nervous system is already primed toward hypervigilance — this effect is particularly pronounced." 
  },
  { 
    question: "Should I use an Apple Watch or Oura Ring to help with insomnia?", 
    answer: "No — not during active insomnia recovery. The clinical recommendation within CBT-I is to remove consumer sleep trackers during recovery because the performance anxiety they generate directly worsens the Conditioned Hyperarousal that sustains chronic insomnia. If you need to track data for your recovery, the clinically validated tool is a simple paper sleep diary recording time in bed, estimated sleep time, and wake time — from which you calculate your weekly Sleep Efficiency score. This is what CBT-I practitioners actually use. It generates actionable data without generating anxiety." 
  },
  { 
    question: "How accurate is the Oura Ring compared to a clinical sleep study?", 
    answer: "Independent studies comparing the Oura Ring against polysomnography (PSG) — the gold standard clinical sleep study — find that it performs reasonably well at detecting sleep versus wakefulness overall, but its accuracy for specific sleep stage classification, particularly deep sleep, is substantially lower than the device's marketing suggests. Independent validation studies typically report sleep stage classification accuracy in the 50–70% range, compared to near-perfect inter-rater agreement between trained PSG scorers. The device's own validation studies, conducted under controlled conditions, tend to report higher accuracy figures than independent research replicates in real-world use." 
  },
  { 
    question: "What should I track instead of using a sleep tracker?", 
    answer: "The four metrics that CBT-I clinical practice actually uses are: Sleep Efficiency (total sleep time divided by time in bed, calculated as a weekly average), approximate sleep onset latency, number of nocturnal wakings, and a morning functional rating. These are recorded in a simple paper sleep diary each morning and take about 60 seconds. They produce no performance anxiety, generate the data that actually guides recovery decisions, and are what The Goodnight Companion's daily log is designed around." 
  }
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
          <p className="text-[0.68rem] font-medium tracking-[0.16em] uppercase text-sage mb-4">
            Sleep Science
          </p>
          <h1 className="text-[clamp(2rem,5vw,3.2rem)] font-cormorant font-light text-ink leading-[1.1] mb-6">
            Sleep Trackers and Insomnia: Why Your Oura Ring, Apple Watch or Whoop May Be Making It Worse
          </h1>
          
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="bg-[#e4e1d3] text-sage-dark text-[0.65rem] font-bold uppercase tracking-[0.12em] py-1.5 px-3 rounded-[2px]">Clinically recognised</span>
            <span className="bg-[#e4e1d3] text-sage-dark text-[0.65rem] font-bold uppercase tracking-[0.12em] py-1.5 px-3 rounded-[2px]">Orthosomnia research 2017–present</span>
            <span className="bg-[#e4e1d3] text-sage-dark text-[0.65rem] font-bold uppercase tracking-[0.12em] py-1.5 px-3 rounded-[2px]">CBT-I evidence-based</span>
          </div>

          <div className="h-px w-full bg-rule" />
        </header>

        <div className="text-ink-2 font-sans leading-[1.8] space-y-7 text-[0.95rem] font-light">

          {/* Quick Answer */}
          <div className="bg-cream p-7 md:p-8 rounded-sm border border-rule my-8">
            <h3 className="font-serif font-medium text-ink text-[1.3rem] mb-4">Quick Answer</h3>
            <p className="font-sans text-ink-2 text-[0.95rem] leading-[1.7] mb-4">
              Yes — for people with chronic insomnia, sleep trackers frequently make things worse. Obsessing over wearable sleep data causes a clinically recognised condition called Orthosomnia: a perfectionistic pursuit of perfect sleep scores that triggers performance anxiety, spikes cortisol, and deepens the very hyperarousal that sustains insomnia. Compounding this, consumer devices including the Oura Ring, Apple Watch, Whoop, Garmin and Fitbit cannot accurately measure your sleep stages — they estimate them from heart rate and movement data, and they get it wrong frequently enough to matter.
            </p>
            <p className="font-sans text-ink-2 text-[0.95rem] leading-[1.7]">
              This is not an argument against technology. It is an argument for understanding what these devices actually measure — and what they don't.
            </p>
          </div>

          <p className="text-[1.3rem] font-cormorant font-light text-ink leading-[1.4] italic">
            You wake up on a Tuesday morning and actually feel, for the first time in weeks, almost okay. You stretch, sit up, and reach for your phone.
          </p>
          <p>
            The app loads. Sleep Score: 42%. Poor Recovery. Minimal Deep Sleep.
          </p>
          <p>
            The fragile okayness evaporates instantly. You feel the familiar weight settle in — dread about today, anxiety about tonight, the mental calculation of what you did wrong and how to fix it.
          </p>
          <p>
            The device on your wrist just manufactured that dread. And if you have chronic insomnia, it is doing this to you every single morning.
          </p>

          <h2 className="text-[1.8rem] font-cormorant font-light text-ink mt-12 mb-5 leading-[1.2]">The Device Landscape: What People Are Actually Using</h2>
          <p>
            The consumer sleep tracking market has grown enormously over the last decade. The most widely used devices people bring into clinical conversations about insomnia are:
          </p>
          <ul className="list-disc pl-6 space-y-3 marker:text-sage">
            <li><strong>Oura Ring</strong> — measures heart rate, heart rate variability (HRV), skin temperature, and movement. Uses these signals to estimate sleep stages and produces a daily Readiness Score and Sleep Score.</li>
            <li><strong>Apple Watch</strong> (watchOS sleep tracking) — uses accelerometry and heart rate to estimate sleep stages. Sleep data integrated with the Health app. The Series 8 onwards added skin temperature sensing.</li>
            <li><strong>Whoop</strong> — focuses on HRV and recovery metrics. Produces a daily Recovery Score (0–100%) that many users check before deciding how to approach their day.</li>
            <li><strong>Garmin</strong> (various models) — uses Pulse Ox and heart rate to produce sleep stage estimates and Body Battery scores.</li>
            <li><strong>Fitbit / Google Pixel Watch</strong> — accelerometry and heart rate, sleep stage breakdown including estimated deep and REM sleep with premium subscription.</li>
          </ul>
          <p>
            All of these devices use the same fundamental approach, with minor variations: they measure physiological proxies (movement, heart rate patterns, HRV) and use proprietary algorithms to infer what sleep stage you are likely in. None of them reads your brain. None of them measures what clinical sleep medicine actually uses to stage sleep.
          </p>

          <h2 className="text-[1.8rem] font-cormorant font-light text-ink mt-12 mb-5 leading-[1.2]">What Clinical Sleep Staging Actually Requires</h2>
          <p>
            To definitively determine whether someone is in Light, Deep (slow-wave), or REM sleep, clinical sleep medicine uses polysomnography (PSG) — an overnight sleep study conducted in a lab. PSG simultaneously records:
          </p>
          <ul className="list-disc pl-6 space-y-3 marker:text-sage">
            <li><strong>Electroencephalography (EEG)</strong> — direct brainwave measurement. This is the only way to identify the specific waveforms that define each sleep stage. Delta waves (0.5–4 Hz) define deep sleep. Alpha and theta waves define the light stages. REM is identified by the characteristic EEG pattern plus muscle atonia.</li>
            <li><strong>Eye movements (EOG)</strong> — essential for confirming REM sleep.</li>
            <li><strong>Muscle tone (EMG)</strong> — used to confirm the paralysis that characterises REM.</li>
          </ul>
          <p>
            Your Oura Ring, Apple Watch, Whoop, Garmin and Fitbit measure none of these directly. They measure your wrist movement and your heartbeat, and they make an educated statistical guess.
          </p>

          <h2 className="text-[1.8rem] font-cormorant font-light text-ink mt-12 mb-5 leading-[1.2]">How Accurate Are They, Actually?</h2>
          <p>
            The academic literature on this is more critical than device manufacturers tend to highlight in their marketing.
          </p>
          <p>
            A comprehensive 2019 review by de Zambotti and colleagues in Medicine & Science in Sports & Exercise — one of the most cited analyses of consumer wearable accuracy — found that wrist-actigraphy based devices consistently overestimate total sleep time and struggle significantly with accurate sleep stage classification, particularly in distinguishing between wakefulness and light sleep, and between light and deep sleep stages.
          </p>
          <p>
            Research specifically comparing the Oura Ring against PSG found that while it performs reasonably well at detecting sleep versus wakefulness overall, its accuracy in staging — particularly for slow-wave (deep) sleep — is substantially lower than its marketing materials suggest. Accuracy for specific sleep stage identification in independent validation studies typically falls between 50–70%, compared to near-perfect agreement between trained PSG scorers.
          </p>
          <p>
            For Apple Watch, studies have found similar limitations — the device performs adequately at detecting total sleep time but poorly at staging.
          </p>
          <p className="mt-6 mb-3 font-medium text-ink">The two traps this creates for insomnia sufferers:</p>
          <ul className="list-disc pl-6 space-y-3 marker:text-sage">
            <li><strong>The Stillness Trap:</strong> If you wake at 3am and lie completely still — frustrated but motionless, which is what many people with chronic insomnia do — your device will often record this period as Light Sleep. You slept worse than it shows, yet you may receive a score that doesn't reflect your actual experience, or conversely, be told you got more sleep than you felt you did, creating a confusing contradiction.</li>
            <li><strong>The Normal Awakening Trap:</strong> Brief awakenings between sleep cycles are biologically normal — every human has four to six of these per night, typically lasting a few minutes. They are a feature of healthy sleep architecture, not a bug. When your app flags these with red bars and deducts points from your score, it pathologises something your body is doing correctly.</li>
          </ul>

          <h2 className="text-[1.8rem] font-cormorant font-light text-ink mt-12 mb-5 leading-[1.2]">The Condition: Orthosomnia</h2>
          <p>
            In 2017, sleep researchers Dr. Kelly Baron and colleagues at Rush University Medical Center published a case study in the Journal of Clinical Sleep Medicine that named something clinicians were increasingly observing: patients arriving at sleep clinics with severe insomnia symptoms whose distress was directly tied not to their sleep, but to the data on their wearable devices.
          </p>
          <p>
            They coined the term <strong>Orthosomnia</strong> — from the Greek ortho (correct) and somnia (sleep). It describes the perfectionistic pursuit of perfect sleep data, driven by consumer fitness trackers, that paradoxically worsens the sleep it is meant to improve.
          </p>
          <p>
            The patients in the case study had adjusted their behaviour, routines, and nightly rituals entirely around improving their tracker scores — and were more anxious, more hyperaroused, and sleeping worse than before they began tracking.
          </p>
          <p>
            Since 2017, Orthosomnia has moved from a case study curiosity into a recognised clinical phenomenon, documented in subsequent research and increasingly discussed in CBT-I literature as a specific perpetuating factor in modern chronic insomnia.
          </p>

          <h2 className="text-[1.8rem] font-cormorant font-light text-ink mt-12 mb-5 leading-[1.2]">Why Performance Anxiety Destroys Sleep Specifically</h2>
          <p>
            Understanding why tracking causes such harm requires understanding what kind of biological process sleep actually is.
          </p>
          <p>
            Sleep is an autonomic process. It is not something you do — it is something that happens to you when the conditions are right. It cannot be improved through effort, concentration, or optimisation. The harder you consciously try to sleep, the less likely sleep becomes.
          </p>
          <p>
            When you get into bed thinking "I need to get my Deep Sleep score up tonight", you are treating an autonomic process like a performance task. Your brain responds to this framing by activating the sympathetic nervous system — the fight-or-flight system. Cortisol and adrenaline are released. Heart rate elevates. The brain enters a state of vigilance.
          </p>
          <p>
            This is <strong>Conditioned Hyperarousal</strong> — the biological state that is the primary engine of chronic insomnia. The tracker, by creating a daily performance review, reliably triggers the exact neurological state that makes sleep impossible. It is not a side effect. It is a direct, predictable consequence of applying a metrics-driven mindset to an autonomic biological process.
          </p>
          <p>
            There is also a documented <strong>Nocebo Effect</strong> at work. Research on cognitive models of insomnia shows that negative expectations about sleep — including reading a bad sleep score — directly increase daytime fatigue beyond what the actual sleep quality would produce. In other words, being told by your device that you slept poorly makes you feel more tired than you actually are, independent of your objective sleep quality.
          </p>

          <h2 className="text-[1.8rem] font-cormorant font-light text-ink mt-12 mb-5 leading-[1.2]">Should I Use a Sleep Tracker If I Have Insomnia?</h2>
          <p>
            This is the most searched question in this space, and it deserves a direct answer rather than a hedge.
          </p>
          <ul className="space-y-4 pl-0">
            <li className="pl-4 border-l-2 border-sage">
              <strong>If you have chronic insomnia:</strong> the clinical recommendation is no — at least not during active recovery. The performance anxiety and Nocebo effects described above are not hypothetical risks. They are documented, predictable outcomes for a nervous system already primed toward hyperarousal.
            </li>
            <li className="pl-4 border-l-2 border-sage">
              <strong>If you are curious about your sleep generally and don't have insomnia:</strong> A tracker can be an interesting data point, held lightly. The key is treating it as entertainment rather than clinical truth, and never allowing a score to determine how you feel about a night's sleep.
            </li>
            <li className="pl-4 border-l-2 border-sage">
              <strong>If you have been recommended to track your sleep by a clinician:</strong> The tool your clinician almost certainly has in mind is not an Oura Ring or Apple Watch. It is a paper sleep diary — a simple morning log of the time you went to bed, estimated sleep onset, number of wakings, and wake time. This is what CBT-I uses. It generates the Sleep Efficiency metric that actually guides clinical decision-making. It costs nothing, produces no performance anxiety, and captures the data that matters without producing the data that harms.
            </li>
          </ul>

          <h2 className="text-[1.8rem] font-cormorant font-light text-ink mt-12 mb-5 leading-[1.2]">The 30-Day Data Detox — With a Structured Replacement</h2>
          <p>
            For an analytical mind, "stop tracking" is not a sufficient instruction. You need something to do with the impulse to measure. Here is the full protocol.
          </p>
          <div className="bg-cream p-7 rounded-sm border border-rule my-6 space-y-5">
            <div>
              <h4 className="font-serif font-medium text-ink mb-1">Week 1 — Remove the stimulus</h4>
              <p className="m-0 text-[0.9rem]">Charge your wearable in another room overnight. This is the hardest part, particularly the first two or three mornings. You will feel the urge to check. The urge itself is information — it tells you how conditioned the checking behaviour has become.</p>
            </div>
            <div>
              <h4 className="font-serif font-medium text-ink mb-1">From Day 1 — Switch to the morning subjective audit</h4>
              <p className="m-0 text-[0.9rem]">Before checking any screen in the morning, answer one question internally: <em>Do I have enough energy to function today?</em> This binary assessment — yes or no — is genuinely more useful clinical data than a score derived from heart rate variability algorithms, because it measures the output that actually matters: your functional capacity.</p>
            </div>
            <div>
              <h4 className="font-serif font-medium text-ink mb-1">From Day 1 — Begin a paper sleep diary</h4>
              <p className="m-0 text-[0.9rem]">Each morning, spend 60 seconds recording: approximate time in bed, approximate time you fell asleep, number of times you woke, wake time. That is all. After seven days, calculate your Sleep Efficiency score. This is the metric CBT-I uses — not deep sleep percentage, not REM minutes, not readiness scores. (Our <Link href="/tools/calculator" className="text-sage font-medium hover:underline">Sleep Efficiency Calculator</Link> can do this calculation for you.)</p>
            </div>
            <div>
              <h4 className="font-serif font-medium text-ink mb-1">Week 2 onwards — Acknowledge the Nocebo withdrawal</h4>
              <p className="m-0 text-[0.9rem]">For the first week without scores, you may find you feel less certain about your sleep quality. This uncertainty feels uncomfortable to an analytical mind. It is, however, accurate — you are learning to trust your own sensory data rather than a proxy measurement. This recalibration is the point.</p>
            </div>
            <div>
              <h4 className="font-serif font-medium text-ink mb-1">At 30 days — Evaluate honestly</h4>
              <p className="m-0 text-[0.9rem]">If your sleep has improved, your anxiety has reduced, and your mornings feel less loaded, you have your answer. If you choose to return to a tracker at this point, you can do so with the conscious decision to wear it loosely — as a curiosity, not a verdict.</p>
            </div>
          </div>

          <h2 className="text-[1.8rem] font-cormorant font-light text-ink mt-12 mb-5 leading-[1.2]">What to Track Instead</h2>
          <p>
            If the impulse to collect data about your recovery feels important — and for many people it is a genuinely grounding part of managing insomnia — here is what the clinical literature suggests is worth measuring:
          </p>
          <ul className="list-disc pl-6 space-y-3 marker:text-sage">
            <li><strong>Sleep Efficiency (weekly average)</strong> — the ratio of time asleep to time in bed. This is the single metric that guides CBT-I titration decisions. It is calculated from your paper diary, not from a wearable.</li>
            <li><strong>Sleep Onset Latency</strong> — approximately how long it took you to fall asleep. Estimated, not measured to the minute.</li>
            <li><strong>Number of wakings</strong> — a rough count. Not the duration, not the time, not whether they were "Light Sleep" or "Wakefulness." Just: did you wake, approximately how many times.</li>
            <li><strong>Morning functional rating</strong> — the subjective 1–10 you give yourself on functional capacity. Over weeks, this is far more meaningful than any score your device produces.</li>
          </ul>
          <p>
            These four data points, tracked in a simple table each morning, give your clinician or your own protocol everything needed to make accurate titration decisions. They generate no performance anxiety. They are what The Goodnight Companion's daily log is built around.
          </p>

          <h2 className="text-[1.8rem] font-cormorant font-light text-ink mt-12 mb-5 leading-[1.2]">Stop Grading Your Sleep</h2>
          <p>
            Your bed is a sanctuary, not an exam room. The device on your wrist cannot tell you how you feel. It cannot measure the quality of your rest. It can measure your heartbeat and the stillness of your arm, and from those two signals it produces a number that you have been allowing to determine the emotional tone of your entire morning.
          </p>
          <p>
            The 30-Day Data Detox is not about abandoning data. It is about replacing unreliable, anxiety-inducing proxy data with the straightforward, clinical metrics that actually guide recovery. Take off the watch. Trust your nervous system to find its way back — with the right map.
          </p>

          {/* Call to Action block */}
          <div className="bg-sage-dark p-8 md:p-10 rounded-sm mt-12 mb-12 text-center text-white shadow-sm">
            <h3 className="text-[1.6rem] font-cormorant font-light mb-4">If You're Ready to Replace the Tech With a System</h3>
            <p className="mb-8 mx-auto max-w-xl text-[0.95rem] leading-[1.7] text-white/90">
              Removing a tracker creates a gap — the analytical mind wants something to fill it. The Goodnight Companion provides a structured daily log, a weekly Sleep Efficiency calculation, and a 90-day guided protocol built on CBT-I mechanics. It gives your data-driven mind the formulas to work with, without the performance anxiety that wearables produce.
            </p>
            <Link 
              href="/join-the-program" 
              className="inline-block bg-white text-sage-dark font-medium font-sans text-[0.8rem] tracking-[0.12em] uppercase px-8 py-3.5 rounded-sm hover:bg-cream-2 transition-colors"
            >
              Get The Goodnight Companion →
            </Link>
          </div>

          <FaqAccordion faqs={faqs} />

          <h2 className="text-[1.2rem] font-serif font-medium text-ink mt-12 mb-4">Scientific References & Further Reading</h2>
          <ul className="list-disc pl-6 space-y-4 mb-12 text-[0.85rem] text-ink-2">
            <li><strong>The Coining of Orthosomnia:</strong> Baron, K. G., Abbott, S., Jao, N., Manalo, N., & Kelly, R. (2017). Orthosomnia: Are Some Patients Taking the Quantified Self Too Far? <em>Journal of Clinical Sleep Medicine</em>, 13(2), 351–354. The foundational case study documenting how sleep tracker obsession induces clinical insomnia symptoms.</li>
            <li><strong>Accuracy of Consumer Wearables:</strong> de Zambotti, M., Cellini, N., Goldstone, A., Colrain, I. M., & Baker, F. C. (2019). Wearable Sleep Technology in Clinical and Research Settings. <em>Medicine & Science in Sports & Exercise</em>, 51(7), 1538–1557. A comprehensive review of the limitations of consumer wrist-actigraphy in accurately staging sleep compared to polysomnography.</li>
            <li><strong>The Nocebo Effect and Sleep Cognition:</strong> Harvey, A. G. (2002). A cognitive model of insomnia. <em>Behaviour Research and Therapy</em>, 40(8), 869–893. Establishes how negative sleep-related cognitions — including reading a poor sleep score — directly amplify daytime fatigue and nighttime hyperarousal.</li>
            <li><strong>Conditioned Hyperarousal:</strong> Perlis, M. L., et al. (1997). Psychophysiological insomnia: The behavioural model and a neurocognitive perspective. <em>Journal of Sleep Research</em>, 6(3), 179–188. The neurological basis for why performance-oriented approaches to sleep activate the arousal system that prevents it.</li>
          </ul>
          
          <p className="text-[0.75rem] text-ink-3 mt-12 leading-[1.6] border-t border-rule pt-6">
            <strong>Disclaimer:</strong> This article is an educational resource and does not constitute medical advice, diagnosis, or clinical therapy. Please consult a qualified healthcare provider if you are navigating severe mental health challenges or suspect an underlying sleep disorder.
          </p>

        </div>
      </article>
      
    </main>
  );
}
