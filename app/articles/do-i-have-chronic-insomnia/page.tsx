import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Do I Have Chronic Insomnia? (The Clinical \"Rule of 3s\" Explained)",
  description: "Worried your sleep is permanently broken? Discover the clinical \"Rule of 3s\" for chronic insomnia, and how the 3P model proves you can unlearn the pattern.",
};

export default function Article8Page() {
  return (
    <main className="min-h-screen flex flex-col items-center p-6 md:p-24 relative bg-[var(--background)]">
      <div className="w-full max-w-3xl z-10 mb-12">
        <Link 
          href="/articles" 
          className="inline-flex items-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm font-bold uppercase tracking-widest"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="m15 18-6-6 6-6"/></svg>
          Back to Articles
        </Link>
      </div>

      <article className="w-full max-w-3xl z-10 bg-white p-8 md:p-16 rounded-[2rem] shadow-sm mb-20 shadow-[rgba(0,0,0,0.03)_0px_10px_30px]">
        <header className="mb-12">
          <p className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-[#8da399] mb-4">
            Sleep Science
          </p>
          <h1 className="text-3xl md:text-5xl font-serif text-[var(--text-primary)] leading-tight mb-8">
            Do I Have Chronic Insomnia? (The Clinical &quot;Rule of 3s&quot; Explained)
          </h1>
          <div className="h-[1px] w-full bg-[#8da399]/20" />
        </header>

        <div className="text-[var(--text-secondary)] font-sans leading-relaxed space-y-6 text-lg">
          <p className="text-xl md:text-2xl font-serif text-[var(--text-primary)] leading-snug">
            When you string together a few terrible nights of sleep, it is incredibly easy to panic. You wake up exhausted, open Google, and suddenly you are reading articles about the long-term health effects of &quot;Chronic Insomnia.&quot;
          </p>
          <p>
            Immediately, your mind spirals: &quot;Is my sleep permanently broken? Am I an insomniac now?&quot; Labeling yourself with a chronic medical condition at 3:00 AM is a guaranteed way to spike your adrenaline and push sleep even further away. Before you panic, let&apos;s take a step back and look at the actual clinical data.
          </p>
          <p>
            In sleep medicine, a bad week of sleep is not chronic insomnia. Here is the exact medical criteria doctors use to diagnose sleep struggles, the biological difference between a &quot;rough patch&quot; and a &quot;pattern,&quot; and why the word &quot;chronic&quot; does not mean what you think it means.
          </p>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">The Clinical Definition: The &quot;Rule of 3s&quot;</h2>
          <p>
            To prevent patients from panicking over normal fluctuations in human sleep, sleep specialists use specific diagnostic criteria (outlined in the DSM-5 and ICSD-3).
          </p>
          <p>
            To be clinically classified as experiencing Chronic Insomnia, your sleep struggles must meet the <strong>&quot;Rule of 3s&quot;</strong>:
          </p>
          <ul className="list-disc pl-6 space-y-3 my-6">
            <li><strong>The Time:</strong> It takes you more than 30 minutes to fall asleep, OR you wake up in the middle of the night and stay awake for more than 30 minutes.</li>
            <li><strong>The Frequency:</strong> This happens at least 3 nights a week.</li>
            <li><strong>The Duration:</strong> This pattern has been happening consistently for at least 3 months.</li>
            <li><strong>The Impact:</strong> It is causing clinically significant distress or impairment in your daytime functioning (fatigue, mood, cognitive focus).</li>
          </ul>
          <blockquote className="border-l-4 border-[var(--primary)] pl-6 italic text-xl text-[var(--text-primary)] my-8">
            If you have been sleeping poorly for two weeks because of a stressful project at work, you do not have Chronic Insomnia. You are experiencing Acute Insomnia.
          </blockquote>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">Acute vs. Chronic: The 3P Model</h2>
          <p>
            Why does Acute Insomnia (a short-term struggle) sometimes turn into Chronic Insomnia? To explain this, sleep doctors use the 3P Model of Insomnia, developed by Dr. Arthur Spielman.
          </p>
          
          <div className="space-y-6 my-8">
            <div className="bg-[#f9f8f6] p-6 rounded-[1rem] border border-[#8da399]/20">
              <h3 className="font-serif text-[var(--text-primary)] text-xl mb-2 flex items-center">
                <span className="bg-[var(--primary)] text-white w-6 h-6 rounded-full inline-flex items-center justify-center text-sm mr-3">1</span>
                Predisposing Factors (The Baseline)
              </h3>
              <p className="text-sm m-0">Some people are simply biologically or psychologically wired to be more alert than others. If you are a naturally analytical person (a &quot;Systemizer&quot;), a light sleeper, or someone who is naturally prone to anxiety, you have a higher baseline of arousal. You aren&apos;t doing anything wrong; your nervous system is just naturally vigilant. This doesn&apos;t cause insomnia on its own, but it makes the soil fertile for it.</p>
            </div>
            
            <div className="bg-[#f9f8f6] p-6 rounded-[1rem] border border-[#8da399]/20">
              <h3 className="font-serif text-[var(--text-primary)] text-xl mb-2 flex items-center">
                <span className="bg-[var(--primary)] text-white w-6 h-6 rounded-full inline-flex items-center justify-center text-sm mr-3">2</span>
                Precipitating Factors (The Trigger)
              </h3>
              <p className="text-sm m-0">Acute insomnia always has a trigger. You get sick, you go through a breakup, you have a baby, or you face financial stress. Your body reacts to this stress by keeping you awake. This is biologically normal. Your naturally vigilant nervous system reacts to the temporary threat to keep you safe.</p>
            </div>

            <div className="bg-[#f9f8f6] p-6 rounded-[1rem] border border-[#8da399]/20">
              <h3 className="font-serif text-[var(--text-primary)] text-xl mb-2 flex items-center">
                <span className="bg-[var(--primary)] text-white w-6 h-6 rounded-full inline-flex items-center justify-center text-sm mr-3">3</span>
                Perpetuating Factors (The Trap)
              </h3>
              <p className="text-sm m-0">Here is where the shift to &quot;chronic&quot; happens. Eventually, the original stressful event resolves. But by this point, you have spent weeks tossing, turning, and panicking in bed.<br/><br/>To cope with the initial sleep loss, you started implementing &quot;perpetuating&quot; habits: you started going to bed earlier, staying in bed while awake, or obsessively tracking your sleep data. Because the human brain learns by association, it starts to associate the bed itself with stress, frustration, and wakefulness. Now, the trigger keeping you awake isn&apos;t your job or your finances—it is the fear of insomnia itself. You have accidentally built a habit of wakefulness (Conditioned Hyperarousal).</p>
            </div>
          </div>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">&quot;Chronic&quot; Does Not Mean &quot;Permanent&quot;</h2>
          <p>
            This is the most important reframe for an analytical mind: In sleep medicine, the word &quot;chronic&quot; does not mean &quot;permanent&quot; or &quot;incurable.&quot; It simply means that your sleep struggle has transitioned from a temporary reaction (stress) into a learned behavioral pattern (hyperarousal).
          </p>
          <p>
            If your brain learned this pattern, your brain can unlearn it. You do not have a broken brain, a chemical imbalance, or an incurable disease. You simply have a highly efficient nervous system that has temporarily learned the wrong habit.
          </p>
          <p className="text-sm bg-[#f2f0e9] p-4 rounded-xl mt-6 italic">
            If you realize your bed has become a trigger for anxiety, you can start unlearning that habit tonight. Read our guide: <Link href="/articles/the-20-minute-rule" className="text-[var(--primary)] font-bold hover:underline">The 20-Minute Rule</Link>.
          </p>

          <h2 className="text-2xl font-serif text-[var(--text-primary)] mt-12 mb-4">Time to Unlearn the Pattern</h2>
          <p>
            Whether you are in week three of Acute Insomnia or year three of Chronic Insomnia, the foundational treatment is exactly the same. You don&apos;t need heavier medication or generic &quot;sleep hygiene.&quot; You need a structured system to unlearn the hyperarousal and retrain your master clock.
          </p>

          <hr className="my-12 border-[#8da399]/20" />
          
          <div className="bg-[#f9f8f6] p-8 rounded-[1.5rem] mt-12 text-center shadow-sm">
            <h3 className="text-2xl font-serif text-[var(--text-primary)] mb-4">Stop Fighting. Start Healing.</h3>
            <p className="mb-6 mx-auto max-w-lg">
              Ready to break the pattern? The Goodnight Companion is a 90-day guided journal that uses the gold-standard science of CBT-I to dismantle Conditioned Hyperarousal. It gives you the exact biological formulas and cognitive tools to prove to your nervous system that the bed is safe again.
            </p>
            <Link 
              href="https://www.amazon.com/dp/B0GQTGFSG7" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block w-auto !px-8 hover:!bg-[var(--primary-dark)]"
            >
              Get The Goodnight Companion
            </Link>
          </div>

          <h2 className="text-xl font-serif text-[var(--text-primary)] mt-12 mb-4">Scientific References & Further Reading</h2>
          <ul className="list-disc pl-6 space-y-3 mb-12 text-sm">
            <li><strong>The Diagnostic Criteria (Rule of 3s):</strong> American Psychiatric Association. (2013). Diagnostic and statistical manual of mental disorders (5th ed.). (The DSM-5 provides the globally accepted clinical criteria distinguishing acute sleep disruptions from chronic insomnia disorder).</li>
            <li><strong>The 3P Model of Insomnia:</strong> Spielman, A. J., Caruso, L. S., & Glovinsky, P. B. (1987). A clinical perspective on the nature and management of insomnia. <em>Psychiatric Clinics of North America</em>, 10(4), 541-553. (This foundational clinical model perfectly explains how short-term stress evolves into a long-term behavioral pattern through perpetuating habits).</li>
            <li><strong>Conditioned Hyperarousal:</strong> Perlis, M. L., et al. (1997). Psychophysiological insomnia: The behavioural model and a neurocognitive perspective. <em>Journal of Sleep Research</em>, 6(3), 179-188. (This research explains how the brain mistakenly associates the physical sleep environment with wakefulness and anxiety).</li>
          </ul>
          
          <p className="text-xs opacity-60 mt-12 leading-relaxed">
            <strong>Disclaimer:</strong> This article is an educational resource and does not constitute medical advice, diagnosis, or clinical therapy. If you are experiencing severe distress, please consult a qualified healthcare provider.
          </p>

        </div>
      </article>
      
    </main>
  );
}
