"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";

const Qs = [
  {
    text: "Where does your sleep most reliably break down?",
    hint: "Think about what happens on most bad nights.",
    opts: [
      { t: "I can't fall asleep — I lie awake for a long time at the start of the night",         s: [4,0,0,0] },
      { t: "I fall asleep, but I wake up in the middle of the night and can't get back to sleep", s: [0,4,0,0] },
      { t: "I fall asleep fine but wake up far too early — 3 or 4am — feeling alert",             s: [0,0,4,0] },
      { t: "It shifts — sometimes one, sometimes another, and I can't predict it",                s: [1,1,1,4] },
    ]
  },
  {
    text: "On a typical bad night, how long does it take you to fall asleep initially?",
    hint: "From lights off to first falling asleep.",
    opts: [
      { t: "More than 45 minutes — often over an hour",                                           s: [4,0,0,1] },
      { t: "30–45 minutes — it takes a while but I get there",                                    s: [2,1,0,1] },
      { t: "Under 20 minutes — falling asleep isn't the hard part",                               s: [0,3,2,1] },
      { t: "Very fast — I'm often exhausted and drop off immediately",                            s: [0,2,2,1] },
    ]
  },
  {
    text: "If you wake during the night, when does it typically happen?",
    hint: "Your most common waking time, if any.",
    opts: [
      { t: "I don't really wake up — my problem is that I never properly fell asleep",            s: [3,0,0,0] },
      { t: "Around 1am–3am — the middle of the night",                                            s: [0,4,0,0] },
      { t: "Around 3am–5am — disturbingly close to morning, feeling wide awake",                  s: [0,0,4,0] },
      { t: "Multiple times at irregular hours throughout the night",                              s: [0,1,1,4] },
    ]
  },
  {
    text: "What is your mind doing during the worst moments of a sleepless night?",
    hint: "This question is about cognitive state — not timing.",
    opts: [
      { t: "Racing — plans, worries, thoughts I can't switch off",                                s: [2,0,0,1] },
      { t: "Calm but frustratingly awake — not thinking much, just not sleeping",                 s: [0,2,1,1] },
      { t: "A creeping alertness — feeling almost ready to start the day even at 4am",            s: [0,0,2,1] },
      { t: "Catastrophising — spiralling about consequences of not sleeping",                     s: [1,1,1,2] },
    ]
  },
  {
    text: "What does your alarm feel like on a bad morning?",
    hint: "How the night lands for you.",
    opts: [
      { t: "Like it went off after I'd only just managed to fall asleep",                         s: [3,1,0,1] },
      { t: "Okay — I had some sleep but it felt thin and fragmented",                             s: [0,3,0,1] },
      { t: "Almost unnecessary — I'd been awake for hours before it went off",                    s: [0,0,4,0] },
      { t: "Completely unpredictable — I never know what kind of night I've had",                 s: [0,1,1,3] },
    ]
  },
  {
    text: "How does your bedroom feel when you're having a bad stretch?",
    hint: "The emotional association, not just the physical space.",
    opts: [
      { t: "Dreadful — the anxiety starts before I even get into bed",                            s: [3,0,0,1] },
      { t: "Fine to begin with, then it becomes tense when I wake in the night",                  s: [0,3,0,1] },
      { t: "Not the problem — I can fall asleep there, I just can't stay asleep until morning",   s: [0,0,3,1] },
      { t: "Completely unpredictable — I never know how I'll respond",                            s: [0,1,1,3] },
    ]
  },
  {
    text: "How long have these sleep problems been going on?",
    hint: "Duration helps clarify how established the pattern has become.",
    opts: [
      { t: "Under 3 months — this is relatively recent",                                          s: [1,1,1,1] },
      { t: "3 to 12 months",                                                                      s: [1,1,1,1] },
      { t: "1 to 3 years",                                                                        s: [0,0,0,2] },
      { t: "More than 3 years — this has become my normal",                                       s: [0,0,0,3] },
    ]
  },
];

const ResultsData = [
  {
    label: "Sleep Onset Type",
    badgeBg: "#d6e4dc", badgeColor: "#2c4a3a",
    title: "Sleep Onset\nInsomnia",
    sub: "The mind that won't switch off.",
    accentColor: "#4d7260",
    paragraphs: [
      "Your insomnia pattern begins at the very start of the night. You get into bed and your nervous system activates rather than winds down — thoughts race, the mind problem-solves, and the body remains alert despite profound exhaustion.",
      "Clinically, this is the clearest pattern of Conditioned Hyperarousal. Your brain has learned to associate the sleep environment with vigilance rather than safety. Every night you've spent lying awake has quietly reinforced that association — bed has become a cue for alertness, not rest.",
      "This is the most researched insomnia pattern and the most directly addressed by Stimulus Control Therapy — the technique of rebuilding the brain's bed-sleep association systematically. The association was learned. It can be unlearned."
    ],
    mechanism: "The primary driver is cognitive arousal at sleep onset — a conditioned response that activates the nervous system the moment you attempt sleep. Stimulus Control Therapy is the first-line clinical intervention for your pattern.",
    tools: [
      { name: "The 20-Minute Rule", desc: "The NHS & CBT-I protocol — when to leave the bed and exactly what to do instead.", href: "/20-minute-rule" },
      { name: "Racing Thoughts Tool", desc: "A structured cognitive offload to quieten the overactive mind before bed.", href: "/tools/racing-thoughts" },
      { name: "Wired & Tense — PMR Session", desc: "Release the physical tension that accompanies cognitive arousal.", href: "/tools/wired-tense" },
    ]
  },
  {
    label: "Sleep Maintenance Type",
    badgeBg: "#d4e0ee", badgeColor: "#2a4a6a",
    title: "Sleep Maintenance\nInsomnia",
    sub: "The night that breaks in two.",
    accentColor: "#2a4a6a",
    paragraphs: [
      "Your insomnia pattern is not about falling asleep — it's about staying asleep. The first stretch of sleep is often reasonable. It's the second half of the night that fractures, typically somewhere between 1am and 3am, leaving you lying awake for hours with no way back.",
      "Sleep Maintenance Insomnia is almost always a sleep pressure problem. When you spend more time in bed than your current sleep capacity can fill, the Homeostatic Sleep Drive depletes in the first half of the night. Brief natural awakenings — which every human has — then become full wakings you can't recover from because the biological drive to sleep is spent.",
      "Sleep Restriction Therapy, tracked through your Sleep Efficiency score, is the primary clinical tool for your pattern. It sounds counterintuitive, but spending less time in bed produces deeper, more consolidated sleep — including through the vulnerable 2am window."
    ],
    mechanism: "Diluted sleep pressure from a sleep window that's too wide for your current sleep capacity. Consolidating your window through Sleep Efficiency tracking is the clinical fix.",
    tools: [
      { name: "Sleep Efficiency Calculator", desc: "The key metric for your pattern — calculates your score and tells you exactly what to adjust.", href: "/tools/sleep-efficiency" },
      { name: "Why Going to Bed Early Makes It Worse", desc: "The sleep pressure explanation that directly addresses your 2am waking.", href: "/early-bedtime" },
      { name: "The 20-Minute Rule", desc: "What to do in the specific moment of a 2am waking.", href: "/20-minute-rule" },
    ]
  },
  {
    label: "Early Morning Type",
    badgeBg: "#f0e4d0", badgeColor: "#a06020",
    title: "Early Morning\nAwakening",
    sub: "Awake before the world, exhausted.",
    accentColor: "#a06020",
    paragraphs: [
      "Your insomnia pattern is characterised by waking significantly earlier than intended — often between 3am and 5am — feeling disturbingly alert and unable to return to sleep. Falling asleep may not be the difficulty. Staying asleep until a reasonable hour is.",
      "Early Morning Awakening is closely tied to the body's circadian architecture and the natural shift in sleep composition that occurs in the second half of the night. The final hours of sleep contain the highest proportion of REM sleep — the stage most critical for emotional regulation and memory consolidation. Losing it consistently has effects beyond tiredness.",
      "This pattern is also strongly associated with mood and anxiety — the cortisol awakening response that naturally occurs in early morning can trigger in the early hours, producing a cascade of alertness and rumination that makes returning to sleep impossible. The 3P Model is particularly useful for understanding how this pattern became self-sustaining."
    ],
    mechanism: "A combination of circadian phase advance (your body clock running early) and premature cortisol activation, often amplified by anxiety and maintained through perpetuating behaviours like extended time in bed.",
    tools: [
      { name: "The 3P Model of Insomnia", desc: "The clinical framework that explains how your pattern became self-sustaining.", href: "/3p-model" },
      { name: "Foggy & Depleted — NSDR Protocol", desc: "Nervous system recovery for the exhausted, low-mood mornings.", href: "/tools/foggy-depleted" },
      { name: "Sleep Efficiency Calculator", desc: "Track whether your overall sleep architecture is improving week by week.", href: "/tools/sleep-efficiency" },
    ]
  },
  {
    label: "Mixed Pattern Type",
    badgeBg: "#ede4f4", badgeColor: "#5a3a7a",
    title: "Mixed Pattern\nInsomnia",
    sub: "The unpredictable night.",
    accentColor: "#5a3a7a",
    paragraphs: [
      "Your insomnia is complex and variable — difficulty falling asleep on some nights, waking in the middle of others, early morning waking on others. The unpredictability itself is exhausting. You have learned not to trust any single night.",
      "Mixed Pattern Insomnia is the most common presentation in longer-duration chronic insomnia. What begins as a single, identifiable pattern — usually Sleep Onset or Sleep Maintenance — often generalises over months and years as the nervous system becomes broadly hypervigilant about sleep rather than in one specific way.",
      "The important clinical insight is that despite the surface variability, the underlying mechanism is almost always the same: Conditioned Hyperarousal across the full sleep environment. CBT-I addresses this root mechanism — which is why it works even when the symptom pattern shifts night to night."
    ],
    mechanism: "Generalised Conditioned Hyperarousal across the sleep environment, typically built over years. The surface pattern changes; the underlying nervous system conditioning does not — which makes it consistently addressable through CBT-I.",
    tools: [
      { name: "Do I Have Chronic Insomnia? The 3P Model", desc: "How variable insomnia becomes self-perpetuating — and how to identify your own three Ps.", href: "/3p-model" },
      { name: "The 20-Minute Rule", desc: "The foundational technique for any pattern of nocturnal wakefulness.", href: "/20-minute-rule" },
      { name: "Sleep Efficiency Calculator", desc: "Find your baseline — the first clinical step for complex patterns.", href: "/tools/sleep-efficiency" },
    ]
  },
];

export default function QuizPage() {
  const [stage, setStage] = useState<"intro" | "quiz" | "result">("intro");
  const [cur, setCur] = useState(0);
  const [sel, setSel] = useState<number[]>(new Array(Qs.length).fill(-1));
  const resultRef = useRef<HTMLDivElement>(null);

  const startQuiz = () => {
    setStage("quiz");
  };

  const pick = (i: number) => {
    const newSel = [...sel];
    newSel[cur] = i;
    setSel(newSel);

    // Auto-advance after a brief pause so they can see their selection
    setTimeout(() => {
      if (cur < Qs.length - 1) {
        setCur((prev) => prev + 1);
      } else {
        setStage("result");
        setTimeout(() => {
          resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }, 350);
  };

  const back = () => {
    if (cur > 0) setCur(cur - 1);
  };

  const retake = () => {
    setCur(0);
    setSel(new Array(Qs.length).fill(-1));
    setStage("intro");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Calculate results if in result stage
  let resultObj = null;
  let totals = [0, 0, 0, 0];
  let typeIdx = 0;
  let barHeights = [8, 8, 8, 8];

  if (stage === "result") {
    for (let i = 0; i < Qs.length; i++) {
      if (sel[i] !== -1) {
        Qs[i].opts[sel[i]].s.forEach((v, t) => totals[t] += v);
      }
    }
    const max = Math.max(...totals);
    const winners = totals.map((v, i) => v === max ? i : -1).filter(i => i >= 0);
    typeIdx = winners.length > 1 ? 3 : winners[0];
    resultObj = ResultsData[typeIdx];
    const maxPossible = Math.max(...totals) || 1;
    barHeights = totals.map(v => Math.max(8, Math.round((v / maxPossible) * 48)));
  }

  const letters = ["A", "B", "C", "D"];

  return (
    <div className="min-h-screen bg-cream text-ink font-sans antialiased pb-safe">
      <nav className="flex items-center justify-between px-6 py-5 md:px-12 border-b border-rule">
        <Link href="/" className="font-serif text-[1rem] font-medium text-ink decoration-transparent">
          The Goodnight Companion
        </Link>
        <Link href="/" className="text-[0.72rem] text-ink-3 hover:text-sage transition-colors decoration-transparent">
          ← Back
        </Link>
      </nav>

      <div className="max-w-[620px] mx-auto px-6 pt-16 pb-24">
        {stage === "intro" && (
          <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="text-[0.68rem] font-normal tracking-[0.16em] uppercase text-sage mb-4">
              2-Minute Pattern Assessment
            </div>
            <h1 className="font-cormorant text-[clamp(2.1rem,5vw,3rem)] font-light leading-[1.2] text-ink mb-4.5">
              What type of<br />
              <em className="italic text-sage font-serif">insomniac</em> are you?
            </h1>
            <p className="text-[0.9rem] font-light leading-[1.8] text-ink-2 max-w-[460px] mx-auto mb-9">
              Not all insomnia works the same way. The timing of your sleep problem points to a specific underlying mechanism — and a specific recovery path. Seven questions to find yours.
            </p>
            <div className="text-[0.78rem] font-light text-ink-3 italic mb-8">
              This is an educational tool, not a clinical diagnosis.
            </div>
            <button
              onClick={startQuiz}
              className="inline-flex items-center gap-2 font-sans text-[0.75rem] font-medium tracking-[0.1em] uppercase text-white bg-sage-dark px-7 py-3 rounded-sm hover:bg-sage transition-colors border-none cursor-pointer"
            >
              Begin
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}

        {stage === "quiz" && (
          <div className="animate-in fade-in">
            <div className="mb-11">
              <div className="flex justify-between items-baseline mb-2.5">
                <span className="text-[0.68rem] font-normal tracking-[0.12em] uppercase text-ink-3">Assessment</span>
                <span className="font-serif text-[0.9rem] text-ink-3">{cur + 1} of {Qs.length}</span>
              </div>
              <div className="h-[2px] bg-rule rounded-[1px] overflow-hidden">
                <div
                  className="h-full bg-sage rounded-[1px] transition-all duration-450 ease-[cubic-bezier(0.4,0,0.2,1)]"
                  style={{ width: `${Math.round((cur / Qs.length) * 100)}%` }}
                ></div>
              </div>
            </div>

            <div key={cur} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="text-[0.65rem] font-normal tracking-[0.14em] uppercase text-sage mb-3.5">
                Question {cur + 1} of {Qs.length}
              </div>
              <div className="font-cormorant text-[clamp(1.25rem,3vw,1.7rem)] font-light leading-[1.35] text-ink mb-9">
                {Qs[cur].text}
              </div>
              <div className="flex flex-col gap-2">
                {Qs[cur].opts.map((o, i) => {
                  const isSelected = sel[cur] === i;
                  return (
                    <button
                      key={i}
                      onClick={() => pick(i)}
                      className={`flex items-start gap-3.5 p-4 bg-cream-3 border rounded-sm cursor-pointer transition-colors text-left font-sans w-full ${
                        isSelected ? "border-sage bg-sage-dim" : "border-rule hover:border-sage hover:bg-white"
                      }`}
                    >
                      <span
                        className={`shrink-0 w-[22px] h-[22px] border rounded-full flex items-center justify-center text-[0.67rem] font-medium mt-[2px] transition-colors ${
                          isSelected ? "bg-sage border-sage text-white" : "border-rule text-ink-3"
                        }`}
                      >
                        {letters[i]}
                      </span>
                      <span
                        className={`text-[0.88rem] leading-[1.6] transition-colors ${
                          isSelected ? "text-sage-dark font-normal" : "text-ink-2 font-light"
                        }`}
                      >
                        {o.t}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="flex justify-start items-center mt-8">
                <button
                  onClick={back}
                  className={`text-[0.75rem] font-light text-ink-3 bg-transparent border-none cursor-pointer hover:text-sage transition-colors p-0 ${
                    cur === 0 ? "invisible" : ""
                  }`}
                >
                  ← Back
                </button>
              </div>
            </div>
          </div>
        )}

        {stage === "result" && resultObj && (
          <div ref={resultRef} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div
              className="inline-flex items-center gap-2 text-[0.68rem] font-medium tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-[20px] mb-7"
              style={{ background: resultObj.badgeBg, color: resultObj.badgeColor }}
            >
              Your pattern: {resultObj.label}
            </div>

            <div className="border-t border-rule pt-4 mb-8 text-ink-3 text-[0.78rem] leading-relaxed">
              <strong className="block mb-1">About this result</strong>
              This assessment is an educational tool based on common insomnia patterns described in CBT-I clinical literature. It is not a medical diagnosis. Insomnia presentations are complex and often overlap — your result reflects your most prominent pattern, not your complete picture.
              <br /><br />
              If you are experiencing significant distress, suspect an underlying sleep disorder such as sleep apnoea, or have a history of bipolar disorder, seizure disorders, or other serious health conditions, please speak to a qualified healthcare provider before making changes to your sleep schedule.
              <br /><br />
              This tool is intended to help you understand your experience and find relevant resources — not to replace professional care.
            </div>
            <h2 className="font-cormorant text-[clamp(1.8rem,4vw,2.8rem)] font-light leading-[1.15] text-ink mb-2 whitespace-pre-line">
              {resultObj.title}
            </h2>
            <div className="font-serif text-[1.05rem] italic mb-8" style={{ color: resultObj.accentColor }}>
              {resultObj.sub}
            </div>

            <div className="h-px bg-rule mb-8"></div>

            <div className="text-[0.65rem] font-medium tracking-[0.14em] uppercase text-ink-3 mb-3">
              Your pattern breakdown
            </div>
            <div className="grid grid-cols-4 gap-2 mb-8">
              {["Sleep Onset", "Sleep Maint.", "Early Morn.", "Mixed"].map((name, i) => (
                <div key={i} className="text-center">
                  <div className="h-12 flex items-end justify-center mb-1.5">
                    <div
                      className={`w-6 rounded-t-sm transition-all duration-400 min-h-[4px] ${
                        i === typeIdx ? "bg-sage" : "bg-rule"
                      }`}
                      style={{ height: barHeights[i] }}
                    ></div>
                  </div>
                  <div
                    className={`text-[0.62rem] font-normal tracking-[0.06em] uppercase leading-[1.35] ${
                      i === typeIdx ? "text-sage-dark font-medium" : "text-ink-3"
                    }`}
                  >
                    {name}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-[0.65rem] font-medium tracking-[0.14em] uppercase text-ink-3 mb-3">
              What this means
            </div>
            {resultObj.paragraphs.map((p, i) => (
              <div key={i} className="text-[0.9rem] font-light leading-[1.82] text-ink-2 mb-5">
                {p}
              </div>
            ))}

            <div className="text-[0.65rem] font-medium tracking-[0.14em] uppercase text-ink-3 mb-3 mt-8">
              The underlying mechanism
            </div>
            <div className="text-[0.9rem] font-light leading-[1.82] text-ink-2 mb-5">
              {resultObj.mechanism}
            </div>

            <div className="bg-cream-2 border border-rule rounded-sm p-5.5 mb-7 mt-8">
              <div className="text-[0.65rem] font-medium tracking-[0.14em] uppercase text-sage mb-3.5">
                Most relevant for your pattern
              </div>
              <div className="flex flex-col">
                {resultObj.tools.map((t, i) => (
                  <Link
                    key={i}
                    href={t.href}
                    className={`flex items-start gap-3 py-3 text-inherit decoration-transparent hover:opacity-65 transition-opacity ${
                      i !== resultObj.tools.length - 1 ? "border-b border-rule" : "pb-0"
                    }`}
                  >
                    <div className="w-1.5 h-1.5 bg-sage rounded-full shrink-0 mt-[7px]"></div>
                    <div>
                      <div className="font-serif text-[0.95rem] font-medium text-ink mb-0.5">
                        {t.name}
                      </div>
                      <div className="text-[0.78rem] font-light text-ink-3 leading-[1.5]">
                        {t.desc}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2.5 mt-2">
              <Link
                href="/join-the-program"
                className="flex items-center justify-between gap-4 p-5 md:px-6 bg-sage-dark rounded-sm text-white decoration-transparent hover:bg-sage transition-colors"
              >
                <div>
                  <div className="text-[0.63rem] font-normal tracking-[0.12em] uppercase text-white/45 mb-1">
                    The complete 90-day protocol
                  </div>
                  <div className="font-serif text-[1rem] font-medium text-white">
                    Get The Goodnight Companion
                  </div>
                </div>
                <div className="text-[1rem] shrink-0">→</div>
              </Link>
              <button
                onClick={retake}
                className="text-[0.75rem] font-light text-ink-3 bg-transparent border border-rule rounded-sm p-3 w-full cursor-pointer font-sans hover:border-sage hover:text-sage transition-colors"
              >
                Retake the assessment
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
