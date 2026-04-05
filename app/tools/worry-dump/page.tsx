"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface WorryEntry {
  id: string;
  timestamp: number;
  worry: string;
  classification: "Signal" | "Noise" | null;
  advice: string | null;
  action: string;
}

export default function WorryDumpPage() {
  const [worries, setWorries] = useState<WorryEntry[]>([]);
  const [currentWorry, setCurrentWorry] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  
  // Pending state for an active workflow
  const [pendingEntry, setPendingEntry] = useState<WorryEntry | null>(null);
  const [actionInput, setActionInput] = useState("");

  // Load on mount
  useEffect(() => {
    const saved = localStorage.getItem("goodnight_worry_dump");
    if (saved) {
      try {
        setWorries(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved worries");
      }
    }
  }, []);

  // Save to local storage
  const saveWorries = (newWorries: WorryEntry[]) => {
    const top5 = newWorries.slice(0, 5); // Keep only last 5
    setWorries(top5);
    localStorage.setItem("goodnight_worry_dump", JSON.stringify(top5));
  };

  const handleAnalyze = async () => {
    if (!currentWorry.trim()) return;

    setIsAnalyzing(true);
    try {
      const response = await fetch("/api/worry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ worry: currentWorry }),
      });
      
      const data = await response.json();

      if (response.ok && data) {
        setPendingEntry({
          id: Date.now().toString(),
          timestamp: Date.now(),
          worry: currentWorry,
          classification: data.classification as "Signal" | "Noise",
          advice: data.advice,
          action: "",
        });
        setCurrentWorry("");
      } else {
        alert("Failed to analyze. Please check if your API key is configured properly.");
      }
    } catch (error) {
      console.error(error);
      alert("Error reaching the server. Ensure the development server is running.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleSaveAction = () => {
    if (pendingEntry) {
      const finalizedEntry = { ...pendingEntry, action: actionInput || "No action specified" };
      saveWorries([finalizedEntry, ...worries]);
      setPendingEntry(null);
      setActionInput("");
    }
  };

  const clearHistory = () => {
    if (confirm("Are you sure you want to clear your worry dump history?")) {
      saveWorries([]);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center p-6 md:p-12 relative bg-[var(--background)]">
      
      {/* Disclaimer Modal / Banner */}
      <div className="w-full max-w-4xl bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 shadow-sm rounded-r-md">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              <strong>Clinical Disclaimer:</strong> The AI guidance provided in this tool is for educational self-reflection based on general psychological principles. It is completely automated and does NOT constitute clinical, medical, or psychiatric advice.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-4xl z-10 mb-8 flex justify-between items-center">
        <Link 
          href="/" 
          className="inline-flex items-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm font-bold uppercase tracking-widest"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="m15 18-6-6 6-6"/></svg>
          Back to Home
        </Link>
      </div>

      <div className="w-full max-w-4xl space-y-12">
        <header className="mb-4">
          <h1 className="text-3xl md:text-5xl font-serif text-[var(--text-primary)] leading-tight mb-4">
            The Worry Dump 
          </h1>
          <p className="text-[var(--text-secondary)] font-sans text-lg">
            Isolate the signal from the noise. Dump your racing thoughts below so your brain knows they are safely stored somewhere other than your head.
          </p>
        </header>

        {/* Action Phase */}
        {pendingEntry ? (
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#8da399]/20">
            <h2 className="text-xl font-serif text-[var(--text-primary)] mb-6 border-b pb-4 border-[#8da399]/20">Analyze Your Worry</h2>
            
            <div className="space-y-6">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-[#8da399] mb-2">You Wrote:</p>
                <p className="text-lg text-[var(--text-primary)] italic">&quot;{pendingEntry.worry}&quot;</p>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-[#f9f8f6] rounded-xl border border-[#8da399]/20">
                <div className={`px-4 py-2 font-bold uppercase tracking-widest rounded-md text-sm text-white ${pendingEntry.classification === 'Signal' ? 'bg-[var(--primary)]' : 'bg-gray-400'}`}>
                  {pendingEntry.classification}
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                  {pendingEntry.classification === 'Signal' ? 'This is a solvable, actionable problem.' : 'This is a hypothetical scenario out of your direct control.'}
                </p>
              </div>

              <div className="p-5 border-l-4 border-[#8da399] bg-[#f9f8f6] rounded-r-xl">
                <p className="text-xs font-bold tracking-widest uppercase text-[#8da399] mb-2 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  AI Guide Advice:
                </p>
                <p className="text-[var(--text-primary)] font-sans">
                  {pendingEntry.advice}
                </p>
              </div>

              <div>
                <label className="block text-sm font-bold tracking-widest text-[var(--text-primary)] uppercase mb-2">Assign The Next Action:</label>
                <textarea 
                  className="w-full p-4 border border-[#8da399]/40 rounded-xl bg-transparent focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] text-[var(--text-primary)] transition-all resize-none h-24"
                  placeholder={pendingEntry.classification === 'Signal' ? "What exactly will you do about it tomorrow?" : "How will you let this thought pass?"}
                  value={actionInput}
                  onChange={(e) => setActionInput(e.target.value)}
                />
              </div>

              <div className="flex justify-end">
                <button 
                  onClick={handleSaveAction}
                  className="btn-primary"
                >
                  Park This Worry
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#8da399]/20">
             <div className="flex flex-col space-y-4">
                <textarea 
                  className="w-full p-4 border border-[#8da399]/40 rounded-xl bg-transparent focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] text-[var(--text-primary)] transition-all resize-none h-32"
                  placeholder="What is keeping you awake right now?"
                  value={currentWorry}
                  onChange={(e) => setCurrentWorry(e.target.value)}
                />
                <div className="flex justify-end">
                  <button 
                    onClick={handleAnalyze}
                    disabled={isAnalyzing || !currentWorry.trim()}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                  >
                    {isAnalyzing ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Analyzing...
                      </>
                    ) : (
                      "Dump It & Analyze"
                    )}
                  </button>
                </div>
             </div>
          </div>
        )}

        {/* History Table (Last 5) */}
        {worries.length > 0 && (
          <div className="mt-16">
            <div className="flex justify-between items-end mb-6">
              <h2 className="text-2xl font-serif text-[var(--text-primary)]">Your Parked Worries</h2>
              <button onClick={clearHistory} className="text-sm font-bold uppercase tracking-widest text-red-500 hover:text-red-700 transition-colors">Clear History</button>
            </div>
            
            <div className="overflow-hidden rounded-xl border border-[#8da399]/20 shadow-sm bg-white">
              <table className="min-w-full divide-y divide-[#8da399]/20">
                <thead className="bg-[#f9f8f6]">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-[#8da399]">
                      The Worry
                    </th>
                    <th scope="col" className="px-6 py-4 text-center text-xs font-bold uppercase tracking-widest text-[#8da399] w-32 border-l border-r border-[#8da399]/20">
                      Signal / Noise
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-[#8da399]">
                      The Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#8da399]/20 bg-white">
                  {worries.map((entry) => (
                    <tr key={entry.id}>
                      <td className="px-6 py-6 text-sm text-[var(--text-secondary)] font-sans italic w-1/3 align-top">
                        &quot;{entry.worry}&quot;
                      </td>
                      <td className="px-6 py-6 text-center align-top border-l border-r border-dashed border-[#8da399]/20 font-bold font-serif text-lg text-[var(--text-primary)]">
                        {entry.classification === 'Signal' ? 'S' : 'N'}
                      </td>
                      <td className="px-6 py-6 text-sm text-[var(--text-primary)] font-sans align-top">
                        <strong>Plan:</strong> {entry.action}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-xs text-[#8da399] mt-4 uppercase tracking-widest font-bold">Only the last 5 worries are saved to your device.</p>
          </div>
        )}

      </div>
    </main>
  );
}
