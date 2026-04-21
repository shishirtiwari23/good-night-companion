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
      const baseWidth = 970;

      if (vw < baseWidth) {
        const scale = vw / baseWidth;
        envelope.style.transform = `scale(${scale})`;
        const originH = 600;
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
        /* --- VENN DIAGRAM SCOPED STYLES --- */
        .venn-envelope {
          width: 970px;
          height: 600px;
          position: relative;
          transform-origin: top center;
        }

        .venn-main-card {
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.95) 0%,
            rgba(245, 248, 246, 0.7) 100%
          );
          border-radius: 2rem;
          box-sizing: border-box;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.03),
            inset 0 0 0 1px rgba(255, 255, 255, 1);
          backdrop-filter: blur(25px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          animation: vennDriftUp 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        .venn-program-heading {
          position: relative;
          width: 100%;
          font-family: var(--font-serif), "Playfair Display", serif;
          font-size: 2.3rem;
          color: #7a8f86;
          margin: 0;
          text-align: center;
          z-index: 30;
          animation: vennFadeDown 1s ease-out 0.2s both;
        }

        .venn-wrapper {
          position: relative;
          width: 800px;
          height: 500px;
          margin-top: 15px;
        }

        .venn-intersection-glow {
          position: absolute;
          left: 400px;
          top: 250px;
          width: 280px;
          height: 520px;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          background: radial-gradient(
            ellipse at center,
            rgba(141, 163, 153, 0.8) 0%,
            rgba(141, 163, 153, 0.2) 60%,
            transparent 80%
          );
          pointer-events: none;
          z-index: 3;
          animation: vennLiquidReaction 2.5s ease-in-out 1.2s both;
        }

        .venn-slide-container {
          position: absolute;
          top: 0;
          width: 500px;
          height: 500px;
        }

        .venn-slide-left {
          left: 0;
          z-index: 1;
          animation: vennSlideInLeft 2s cubic-bezier(0.2, 0.8, 0.2, 1) 0.3s both;
          transform: translateX(-200px);
        }

        .venn-slide-right {
          right: 0;
          z-index: 2;
          animation: vennSlideInRight 2s cubic-bezier(0.2, 0.8, 0.2, 1) 0.3s both;
          transform: translateX(200px);
        }

        .venn-circle-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
          transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .venn-circle-wrapper:hover {
          transform: scale(1.03);
          z-index: 10;
        }

        .venn-circle-bg {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.95) 0%,
            rgba(255, 255, 255, 0.2) 100%
          );
          border: 1px solid rgba(141, 163, 153, 0.35);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03),
            inset 2px 2px 10px rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          transition: all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .venn-circle-wrapper:hover .venn-circle-bg {
          animation: vennLiquidWobble 4s ease-in-out infinite;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.05),
            inset 2px 2px 15px rgba(255, 255, 255, 1);
        }

        .venn-content-box {
          position: absolute;
          top: 0;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          padding-top: 110px;
          align-items: center;
          text-align: center;
          z-index: 10;
          pointer-events: none;
          box-sizing: border-box;
        }

        .venn-cbt-content {
          left: 20px;
          width: 260px;
        }
        .venn-act-content {
          right: 20px;
          width: 260px;
        }
        .venn-shared-content {
          left: 300px;
          width: 200px;
          padding-top: 210px;
        }

        .venn-title {
          font-family: var(--font-serif), "Playfair Display", serif;
          font-size: 2.6rem;
          color: #27302a;
          margin: 0 0 0.5rem 0;
          animation: vennSlideInUp 1s ease-out 1.2s both;
        }

        .venn-subtitle {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: #9ba6a0;
          margin-bottom: 1.25rem;
          animation: vennSlideInUp 1s ease-out 1.4s both;
        }

        .venn-shared-content .venn-title {
          font-size: 1.8rem;
          line-height: 1.15;
          margin-bottom: 0.8rem;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.9),
            0 0 20px rgba(255, 255, 255, 0.6);
        }

        .venn-tagline {
          font-size: 0.9rem;
          line-height: 1.4;
          color: #4a544e;
          font-weight: 500;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
          animation: vennSlideInUp 1s ease-out 1.6s both;
        }

        .venn-content-box ul {
          list-style: none;
          padding: 0;
          margin: 0 auto;
          width: max-content;
          max-width: 90%;
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .venn-content-box ul li {
          font-size: 0.95rem;
          font-weight: 700;
          color: #27302a;
          position: relative;
          padding-left: 1.2rem;
          margin-bottom: 1rem;
          line-height: 1.35;
          white-space: normal;
          animation: vennSlideInUp 0.8s ease-out both;
        }

        .venn-content-box ul li:last-child {
          margin-bottom: 0;
        }

        .venn-content-box ul li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.45rem;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: #8da399;
        }

        .venn-cbt-content ul li:nth-child(1) { animation-delay: 1.8s; }
        .venn-cbt-content ul li:nth-child(2) { animation-delay: 1.9s; }
        .venn-cbt-content ul li:nth-child(3) { animation-delay: 2.0s; }
        .venn-cbt-content ul li:nth-child(4) { animation-delay: 2.1s; }
        .venn-cbt-content ul li:nth-child(5) { animation-delay: 2.2s; }

        .venn-act-content ul li:nth-child(1) { animation-delay: 2.0s; }
        .venn-act-content ul li:nth-child(2) { animation-delay: 2.1s; }
        .venn-act-content ul li:nth-child(3) { animation-delay: 2.2s; }
        .venn-act-content ul li:nth-child(4) { animation-delay: 2.3s; }

        @keyframes vennSlideInLeft {
          0% { transform: translateX(-200px); opacity: 0; }
          5% { opacity: 1; }
          100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes vennSlideInRight {
          0% { transform: translateX(200px); opacity: 0; }
          5% { opacity: 1; }
          100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes vennLiquidReaction {
          0% { opacity: 0; filter: blur(10px); transform: translate(-50%, -50%) scale(0.6); }
          50% { opacity: 1; filter: blur(35px); transform: translate(-50%, -50%) scale(1.1); }
          100% { opacity: 0.85; filter: blur(35px); transform: translate(-50%, -50%) scale(1); }
        }
        @keyframes vennLiquidWobble {
          0%, 100% { border-radius: 50%; }
          33% { border-radius: 48% 52% 47% 53%; }
          66% { border-radius: 52% 48% 53% 47%; }
        }
        @keyframes vennDriftUp {
          0% { transform: translateY(30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes vennSlideInUp {
          0% { transform: translateY(12px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes vennFadeDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div ref={envelopeRef} className="venn-envelope">
        <div className="venn-main-card">
          <h2 className="venn-program-heading">The Good Night Companion</h2>

          <div className="venn-wrapper">
            {/* Central liquid sage glow */}
            <div className="venn-intersection-glow"></div>

            {/* Left Circle: CBT-I */}
            <div className="venn-slide-container venn-slide-left">
              <div className="venn-circle-wrapper">
                <div className="venn-circle-bg"></div>
                <div className="venn-content-box venn-cbt-content">
                  <h3 className="venn-title">CBT-I</h3>
                  <div className="venn-subtitle">The Mechanics</div>
                  <ul>
                    <li>Circadian Rhythm</li>
                    <li>Sleep Pressure</li>
                    <li>Stimulus Control</li>
                    <li>Cognitive Restructuring</li>
                    <li>Somatic Tools</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Circle: ACT-I */}
            <div className="venn-slide-container venn-slide-right">
              <div className="venn-circle-wrapper">
                <div className="venn-circle-bg"></div>
                <div className="venn-content-box venn-act-content">
                  <h3 className="venn-title">ACT-I</h3>
                  <div className="venn-subtitle">The Mindset</div>
                  <ul>
                    <li>Calling a Truce</li>
                    <li>Cognitive Defusion</li>
                    <li>Non-Striving</li>
                    <li>Values &amp; Committed Action</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Center overlap */}
            <div className="venn-content-box venn-shared-content">
              <h3 className="venn-title">
                The Alchemy
                <br />
                of Recovery
              </h3>
              <div className="venn-tagline">
                Where Mechanics
                <br />
                Meet Mindset
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
