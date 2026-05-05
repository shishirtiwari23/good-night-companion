"use client";

import React, { useEffect, useRef } from "react";

export default function VennDiagram() {
  const envelopeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function resizeVenn() {
      const envelope = envelopeRef.current;
      if (!envelope) return;
      const parent = envelope.parentElement;
      if (!parent) return;
      const vw = parent.clientWidth;
      const baseWidth = 850;

      if (vw < baseWidth) {
        const scale = vw / baseWidth;
        envelope.style.transform = `scale(${scale})`;
        const originH = 500;
        const newH = originH * scale;
        envelope.style.marginBottom = `-${originH - newH}px`;
      } else {
        envelope.style.transform = "scale(1)";
        envelope.style.marginBottom = "0px";
      }
    }

    resizeVenn();
    window.addEventListener("resize", resizeVenn);
    return () => window.removeEventListener("resize", resizeVenn);
  }, []);

  return (
    <>
      <style jsx>{`
        .venn-container {
          width: 850px;
          min-width: 850px;
          max-width: none;
          flex-shrink: 0;
          height: 500px;
          position: relative;
          transform-origin: top center;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .venn-heading {
          position: absolute;
          top: -80px;
          left: 50%;
          transform: translateX(-50%);
          font-family: var(--font-cormorant), ui-serif, Georgia, serif;
          font-size: 2.4rem;
          font-weight: 300;
          color: var(--sage);
          letter-spacing: 0.02em;
          animation: fadeDown 1s ease-out both;
          width: 100%;
          text-align: center;
        }

        .venn-circle {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          mix-blend-mode: multiply;
          animation: circleIn 1.5s cubic-bezier(0.2, 0.8, 0.2, 1) both;
        }

        .venn-circle-left {
          left: 0px;
          background-color: var(--sage-dim);
          opacity: 0.5;
          border: 1px solid rgba(77, 114, 96, 0.15); /* very faint sage border */
        }

        .venn-circle-right {
          right: 0px;
          background-color: #ebe7de; /* A warm, creamy gray */
          opacity: 0.6;
          border: 1px solid rgba(28, 28, 24, 0.08); /* very faint ink border */
          animation-delay: 0.2s;
        }

        .venn-content {
          position: absolute;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          pointer-events: none;
        }

        .venn-content-left {
          left: 80px;
          width: 220px;
          align-items: flex-start;
          animation: slideUp 1s ease-out 0.6s both;
        }

        .venn-content-right {
          right: 80px;
          width: 220px;
          align-items: flex-start;
          animation: slideUp 1s ease-out 0.8s both;
        }

        .venn-content-center {
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 240px;
          text-align: center;
          animation: centerIn 1s ease-out 1.2s both;
        }

        .venn-title {
          font-family: var(--font-cormorant), ui-serif, Georgia, serif;
          font-weight: 300;
          font-size: 2.8rem;
          color: var(--ink);
          margin-bottom: 0.3rem;
          line-height: 1;
        }

        .venn-subtitle {
          font-family: var(--font-sans), system-ui, sans-serif;
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          color: var(--sage);
          margin-bottom: 1.5rem;
        }

        .venn-list {
          list-style: none;
          padding: 0;
          margin: 0;
          width: 100%;
          text-align: left;
        }

        .venn-list li {
          font-family: var(--font-sans), system-ui, sans-serif;
          font-size: 0.85rem;
          color: var(--ink-2);
          margin-bottom: 0.9rem;
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          line-height: 1.4;
        }

        .venn-list li::before {
          content: "•";
          color: var(--sage);
          font-size: 1.2rem;
          line-height: 0.8;
          margin-top: 0.15rem;
          opacity: 0.7;
        }

        .center-title {
          font-family: var(--font-cormorant), ui-serif, Georgia, serif;
          font-weight: 400;
          font-size: 2.3rem;
          color: var(--ink);
          line-height: 1.15;
          margin-bottom: 0.8rem;
        }

        .center-subtitle {
          font-family: var(--font-sans), system-ui, sans-serif;
          font-size: 0.75rem;
          color: var(--ink-2);
          line-height: 1.5;
        }

        @keyframes circleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { transform: scale(1); }
        }
        @keyframes centerIn {
          from { opacity: 0; transform: translate(-50%, -40%); }
          to { opacity: 1; transform: translate(-50%, -50%); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeDown {
          from { opacity: 0; transform: translate(-50%, -15px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
      `}</style>

      <div ref={envelopeRef} className="venn-container">
        
        <div className="venn-heading">The Good Night Companion</div>

        {/* The Intersecting Circles */}
        <div className="venn-circle venn-circle-left"></div>
        <div className="venn-circle venn-circle-right"></div>

        {/* Left Content: CBT-I */}
        <div className="venn-content venn-content-left">
          <h3 className="venn-title">CBT-I</h3>
          <div className="venn-subtitle">The Mechanics</div>
          <ul className="venn-list">
            <li>Circadian Rhythm</li>
            <li>Sleep Pressure</li>
            <li>Stimulus Control</li>
            <li>Cognitive Restructuring</li>
            <li>Somatic Tools</li>
          </ul>
        </div>

        {/* Right Content: ACT-I */}
        <div className="venn-content venn-content-right">
          <h3 className="venn-title">ACT-I</h3>
          <div className="venn-subtitle">The Mindset</div>
          <ul className="venn-list">
            <li>Calling a Truce</li>
            <li>Cognitive Defusion</li>
            <li>Non-Striving</li>
            <li>Values &amp; Committed Action</li>
          </ul>
        </div>

        {/* Center Content */}
        <div className="venn-content venn-content-center">
          <h3 className="center-title">The Alchemy<br />of Recovery</h3>
          <div className="center-subtitle">Where Mechanics<br />Meet Mindset</div>
        </div>
      </div>
    </>
  );
}
