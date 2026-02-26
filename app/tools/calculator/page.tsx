"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function CalculatorPage() {
  const [days, setDays] = useState(
    Array.from({ length: 8 }, () => ({ tib: "", tst: "" })),
  );

  const [result, setResult] = useState<{
    daysLogged: number;
    avgTib: string;
    avgTst: string;
    score: number | null;
    title: string;
    feedback: string;
    isError?: boolean;
    hasSafetyWarning?: boolean;
  } | null>(null);

  const hasError = (tibStr: string, tstStr: string) => {
    if (!tibStr || !tstStr) return false;
    const tib = parseFloat(tibStr);
    const tst = parseFloat(tstStr);
    return !isNaN(tib) && !isNaN(tst) && tst > tib;
  };

  const handleInputChange = (
    index: number,
    field: "tib" | "tst",
    value: string,
  ) => {
    const newDays = [...days];
    newDays[index][field] = value;
    setDays(newDays);
    setResult(null);
  };

  const calculate = (showScore: boolean) => {
    let totalTib = 0;
    let totalTst = 0;
    let validDays = 0;
    let hasValidationError = false;
    let shortWindowCount = 0;

    days.forEach((day) => {
      if (hasError(day.tib, day.tst)) {
        hasValidationError = true;
      }

      const tib = parseFloat(day.tib);
      const tst = parseFloat(day.tst);

      if (!isNaN(tib) && !isNaN(tst) && tib > 0) {
        totalTib += tib;
        totalTst += tst;
        validDays++;

        if (tib < 5.5) {
          shortWindowCount++;
        }
      }
    });

    if (hasValidationError) {
      alert(
        "Please correct the highlighted fields. Total Sleep Time cannot be greater than Time in Bed.",
      );
      return;
    }

    if (validDays < 3) {
      setResult({
        daysLogged: validDays,
        avgTib: validDays > 0 ? (totalTib / validDays).toFixed(1) : "-",
        avgTst: validDays > 0 ? (totalTst / validDays).toFixed(1) : "-",
        score: null,
        title: "More Data Needed",
        feedback:
          "You have logged fewer than 3 days. A true sleep pattern usually emerges over a full week. Please continue logging to get a more accurate view.",
        isError: true,
      });
      return;
    }

    const avgTib = (totalTib / validDays).toFixed(1);
    const avgTst = (totalTst / validDays).toFixed(1);

    if (!showScore) {
      setResult({
        daysLogged: validDays,
        avgTib: `${avgTib}h`,
        avgTst: `${avgTst}h`,
        score: null, 
        title: "",
        feedback: "",
        isError: false,
        hasSafetyWarning: false
      });
    } else {
      const efficiency = Math.round((totalTst / totalTib) * 100);
      const title = "Your Next Steps";
      const feedback = "Please refer to your physical book in order to see your next action.";

      setResult({
        daysLogged: validDays,
        avgTib: `${avgTib}h`,
        avgTst: `${avgTst}h`,
        score: efficiency,
        title,
        feedback,
        isError: false,
        hasSafetyWarning: shortWindowCount > 0,
      });
    }

    setTimeout(() => {
      document
        .getElementById("result-card")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4 md:p-8 relative bg-[var(--background)]">
      <div className="card-container w-full max-w-2xl relative p-6 md:p-12">
        {/* Navigation & Header */}
        <div className="relative mb-8">
          <div className="absolute -top-2 right-0 z-50">
            <Link
              href="/"
              aria-label="Return to Home"
              className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors p-2 block"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </Link>
          </div>

          <p className="overline-text opacity-60 mb-2">
            The Good Night Companion
          </p>
          <h1 className="text-3xl md:text-4xl font-serif text-[var(--text-primary)]">
            Sleep Efficiency
          </h1>
        </div>

        {/* --- INFO BOX --- */}
        <div className="bg-[#EBE9E1] rounded-xl p-6 mb-8 text-sm text-[var(--text-secondary)] space-y-2">
          <p>
            <strong className="text-[var(--text-primary)]">
              TIB (Time in Bed)
            </strong>{" "}
            = Wake Time – Bed Time
          </p>
          <p>
            <strong className="text-[var(--text-primary)]">
              TST (Total Sleep Time)
            </strong>{" "}
            = TIB – (Time awake)
          </p>
        </div>

        <div className="text-center space-y-1 mb-8">
          <p className="text-sm text-[var(--text-secondary)]">
            Round to nearest 15 minutes.
          </p>
          <p className="text-sm text-[var(--text-secondary)]">
            Leave &quot;Planned Deviation&quot; nights blank.
          </p>
        </div>

        {/* --- INPUT GRID --- */}
        <div className="space-y-3">
          <div className="grid grid-cols-12 gap-4 text-[10px] font-bold tracking-widest uppercase text-[var(--text-secondary)] opacity-60 mb-2 px-1">
            <div className="col-span-2 md:col-span-2 pt-2">Day</div>
            <div className="col-span-5 md:col-span-5 text-center">
              TIB (Hrs)
            </div>
            <div className="col-span-5 md:col-span-5 text-center">
              TST (Hrs)
            </div>
          </div>

          {days.map((day, index) => {
            const isInvalid = hasError(day.tib, day.tst);

            return (
              <div key={index} className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-2 text-sm md:text-base font-medium text-[var(--text-secondary)]">
                  Day {index + 1}
                </div>

                <div className="col-span-5">
                  <input
                    type="number"
                    step="0.25"
                    placeholder="8.0"
                    className="w-full text-center p-3 bg-white border border-gray-100 rounded-lg focus:outline-none focus:border-[var(--primary)] text-[var(--text-primary)] font-serif text-lg shadow-sm placeholder:text-gray-300"
                    value={day.tib}
                    onChange={(e) =>
                      handleInputChange(index, "tib", e.target.value)
                    }
                  />
                </div>

                <div className="col-span-5 relative">
                  <input
                    type="number"
                    step="0.25"
                    placeholder="7.5"
                    className={`w-full text-center p-3 bg-white border rounded-lg focus:outline-none focus:border-[var(--primary)] text-[var(--text-primary)] font-serif text-lg shadow-sm placeholder:text-gray-300 ${
                      isInvalid
                        ? "border-red-400 text-red-600 bg-red-50"
                        : "border-gray-100"
                    }`}
                    value={day.tst}
                    onChange={(e) =>
                      handleInputChange(index, "tst", e.target.value)
                    }
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8 mb-6">
          <p className="text-xs text-[var(--text-secondary)] opacity-60">
            Shift Workers: Calculate Day/Night separately.
          </p>
        </div>

        {/* --- TWO BUTTONS --- */}
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <button
            onClick={() => calculate(false)}
            className="w-full sm:w-1/2 py-4 bg-[#EBE9E1] hover:bg-[#dfddcf] text-[var(--text-primary)] rounded-full font-bold uppercase tracking-widest text-xs shadow-sm transition-all active:scale-99 cursor-pointer"
          >
            See Averages Only
          </button>
          
          <button
            onClick={() => calculate(true)}
            className="w-full sm:w-1/2 py-4 bg-[#94A396] hover:bg-[#829285] text-white rounded-full font-bold uppercase tracking-widest text-xs shadow-md transition-all active:scale-99 cursor-pointer"
          >
            Calculate Score
          </button>
        </div>


        {/* --- RESULT SECTION --- */}
        {result && (
          <div
            id="result-card"
            className="mt-12 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700"
          >
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-[#F0EEE6] rounded-xl p-4 text-center flex flex-col justify-center min-h-[90px]">
                <span className="font-serif text-2xl text-[var(--text-primary)]">
                  {result.daysLogged}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)] opacity-70 leading-tight mt-1">
                  Days
                  <br />
                  Logged
                </span>
              </div>
              <div className="bg-[#F0EEE6] rounded-xl p-4 text-center flex flex-col justify-center min-h-[90px]">
                <span className="font-serif text-2xl text-[var(--text-primary)]">
                  {result.avgTib}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)] opacity-70 leading-tight mt-1">
                  Avg
                  <br />
                  TIB
                </span>
              </div>
              <div className="bg-[#F0EEE6] rounded-xl p-4 text-center flex flex-col justify-center min-h-[90px]">
                <span className="font-serif text-2xl text-[var(--text-primary)]">
                  {result.avgTst}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)] opacity-70 leading-tight mt-1">
                  Avg
                  <br />
                  TST
                </span>
              </div>
            </div>

            {result.score !== null && !result.isError && (
              <div className="text-center py-4">
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-2 opacity-60">
                  Sleep Efficiency (SE)
                </p>
                <div className="text-7xl font-serif text-[#9CA39B] tracking-tight">
                  {result.score}
                  <span className="text-4xl align-top opacity-60">%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full mt-6 overflow-hidden">
                  <div
                    className="h-full bg-[#9CA39B] rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${result.score}%` }}
                  ></div>
                </div>
              </div>
            )}

            {(result.title || result.feedback) && (
              <div className="mt-8">
                <p className="text-lg text-[var(--text-secondary)] mb-4 font-sans">
                  Insights
                </p>
                <div
                  className={`bg-white rounded-2xl p-8 border-l-4 shadow-sm ${result.isError ? "border-l-[#D4B483]" : "border-l-[#8da399]"}`}
                >
                  <h3 className="font-serif text-2xl text-[var(--text-primary)] mb-3">
                    {result.title}
                  </h3>
                  <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed font-semibold">
                    {result.feedback}
                  </p>

                  {result.hasSafetyWarning && (
                    <div className="mt-6 pt-4 border-t border-red-100">
                      <p className="text-xs font-bold uppercase tracking-widest text-red-500 mb-1">
                        Safety Warning
                      </p>
                      <p className="text-sm text-[var(--text-secondary)]">
                        You logged nights with{" "}
                        <span className="font-bold">less than 5.5 hours</span> in
                        bed. Unless supervised by a clinician, we strongly
                        recommend never restricting your TIB below 5.5 hours to
                        avoid excessive sleep deprivation.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* --- SHORT MEDICAL DISCLAIMER --- */}
        <div className="mt-16 pt-8 border-t border-[#8da399]/10">
          <div className="bg-[#EBE9E1]/30 rounded-xl p-6 border border-[#8da399]/10 text-xs text-[var(--text-secondary)] leading-relaxed">
            <p className="font-bold text-[var(--text-primary)] uppercase tracking-wider mb-2">
              Medical Disclaimer & Safety Warning
            </p>
            <p className="mb-2">
              This tool utilizes Sleep Restriction Therapy (SRT) concepts. This technique is <strong className="text-[var(--text-primary)]">NOT</strong> recommended for individuals with Bipolar Disorder, Seizure Disorders, untreated Sleep Apnea, or those in safety-sensitive occupations (e.g., transportation).
            </p>
            <p>
              SRT causes temporary daytime sleepiness. Use extreme caution when driving. Consult a healthcare provider before restricting your sleep window below 5.5 hours.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
