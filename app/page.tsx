"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";

// Calm, premium fade-in animation component
function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
  const [isVisible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans bg-cream text-ink min-h-screen overflow-x-hidden pb-safe">
      {/* NAV */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 md:py-5 transition-all duration-500 border-b ${
          scrolled
            ? "bg-cream/95 backdrop-blur-md border-rule shadow-sm"
            : "bg-transparent border-transparent"
        }`}
      >
        <Link
          href="/"
          className="font-serif text-[1.05rem] font-medium tracking-[0.01em] text-ink decoration-transparent hover:opacity-70 transition-opacity"
        >
          The Goodnight Companion
        </Link>
        <div className="flex items-center gap-6 md:gap-10">
          <Link
            href="#articles"
            className="text-[0.75rem] font-normal tracking-[0.1em] uppercase text-ink-3 hover:text-sage transition-colors duration-300 hidden md:block"
          >
            Articles
          </Link>
          <Link
            href="#toolkit"
            className="text-[0.75rem] font-normal tracking-[0.1em] uppercase text-ink-3 hover:text-sage transition-colors duration-300 hidden md:block"
          >
            Toolkit
          </Link>
          <Link
            href="/join-the-program"
            className="text-[0.72rem] font-medium tracking-[0.08em] uppercase text-sage-dark border-b border-sage pb-[1px] hover:opacity-60 transition-opacity duration-300"
          >
            Get the Journal
          </Link>
        </div>
      </nav>

      {/* HERO (Centered Text Only) */}
      <section className="min-h-screen flex flex-col items-center justify-center pt-[88px] px-6 text-center">
        <FadeIn>
          <div className="font-sans text-[0.7rem] font-normal tracking-[0.16em] uppercase text-ink-3 mb-8 flex items-center justify-center gap-3 before:content-[''] before:w-6 before:h-px before:bg-ink-3 before:shrink-0 after:content-[''] after:w-6 after:h-px after:bg-ink-3 after:shrink-0">
            A 90-Day CBT-I Program
          </div>
        </FadeIn>
        
        <FadeIn delay={150}>
          <h1 className="font-cormorant text-[clamp(3.5rem,6vw,6rem)] font-light leading-[1.05] tracking-[-0.01em] text-ink mb-8 max-w-[800px] mx-auto">
            Call a truce<br />
            with your <em className="italic text-sage font-serif">sleep.</em>
          </h1>
        </FadeIn>

        <FadeIn delay={300}>
          <p className="text-[1.05rem] font-light leading-[1.8] text-ink-2 max-w-[500px] mx-auto mb-12">
            You have tried everything the internet recommends. The problem isn't
            effort — it's that you haven't had the right map. The Goodnight
            Companion is a structured, science-based path out.
          </p>
        </FadeIn>

        <FadeIn delay={450}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Link
              href="/join-the-program"
              className="inline-flex items-center justify-center gap-2 font-sans text-[0.75rem] font-medium tracking-[0.1em] uppercase text-white bg-sage-dark px-8 py-4 rounded-sm hover:bg-sage transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Get the Journal
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/understand"
              className="font-sans text-[0.8rem] font-light text-ink-3 hover:text-sage transition-colors duration-300"
            >
              Read the science first →
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* TOOLKIT */}
      <section className="px-6 py-14 md:px-12 md:py-24" id="toolkit">
        <FadeIn>
          <div className="text-[0.68rem] font-normal tracking-[0.16em] uppercase text-ink-3 mb-2">
            Your Free Digital Toolkit
          </div>
          <h2 className="font-cormorant text-[clamp(1.8rem,3vw,2.5rem)] font-light text-ink mb-12 leading-[1.2]">
            What do you need<br />
            right now?
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-rule border border-rule">
          <FadeIn delay={100} className="h-full">
            <Link
              href="/tools/pmr"
              className="bg-cream p-8 md:p-10 flex items-start gap-5 hover:bg-cream-3 transition-colors duration-300 text-inherit h-full"
            >
              <div className="w-10 h-10 bg-sage-dim rounded-full flex items-center justify-center text-base shrink-0 mt-0.5">
                🌿
              </div>
              <div>
                <div className="font-serif text-[1.1rem] font-medium text-ink mb-2 leading-[1.25]">
                  Wired & Tense
                </div>
                <div className="text-[0.85rem] font-light text-ink-3 leading-[1.6]">
                  Release physical tension with a guided PMR session.
                </div>
              </div>
            </Link>
          </FadeIn>
          <FadeIn delay={200} className="h-full">
            <Link
              href="/tools/recharge"
              className="bg-cream p-8 md:p-10 flex items-start gap-5 hover:bg-cream-3 transition-colors duration-300 text-inherit h-full"
            >
              <div className="w-10 h-10 bg-sage-dim rounded-full flex items-center justify-center text-base shrink-0 mt-0.5">
                ☁️
              </div>
              <div>
                <div className="font-serif text-[1.1rem] font-medium text-ink mb-2 leading-[1.25]">
                  Foggy & Depleted
                </div>
                <div className="text-[0.85rem] font-light text-ink-3 leading-[1.6]">
                  A 10-minute NSDR recharge. No nap, no sleep pressure lost.
                </div>
              </div>
            </Link>
          </FadeIn>
          <FadeIn delay={300} className="h-full">
            <Link
              href="/tools/worry-dump"
              className="bg-cream p-8 md:p-10 flex items-start gap-5 hover:bg-cream-3 transition-colors duration-300 text-inherit h-full"
            >
              <div className="w-10 h-10 bg-sage-dim rounded-full flex items-center justify-center text-base shrink-0 mt-0.5">
                🌊
              </div>
              <div>
                <div className="font-serif text-[1.1rem] font-medium text-ink mb-2 leading-[1.25]">
                  Racing Thoughts
                </div>
                <div className="text-[0.85rem] font-light text-ink-3 leading-[1.6]">
                  Park your worries and let go. A cognitive offload for the
                  overactive mind.
                </div>
              </div>
            </Link>
          </FadeIn>
          <FadeIn delay={400} className="h-full">
            <Link
              href="/tools/calculator"
              className="bg-cream p-8 md:p-10 flex items-start gap-5 hover:bg-cream-3 transition-colors duration-300 text-inherit h-full"
            >
              <div className="w-10 h-10 bg-sage-dim rounded-full flex items-center justify-center text-base shrink-0 mt-0.5">
                ◎
              </div>
              <div>
                <div className="font-serif text-[1.1rem] font-medium text-ink mb-2 leading-[1.25]">
                  Track Progress
                </div>
                <div className="text-[0.85rem] font-light text-ink-3 leading-[1.6]">
                  Calculate your weekly Sleep Efficiency — the one number that
                  matters.
                </div>
              </div>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* QUIZ STRIP */}
      <FadeIn delay={150}>
        <Link
          href="/quiz"
          className="mx-6 md:mx-12 border border-rule rounded-sm px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-cream-3 hover:border-sage hover:bg-white transition-all duration-300 text-inherit mb-14 md:mb-0 shadow-sm hover:shadow-md group"
        >
          <div>
            <div className="text-[0.67rem] font-normal tracking-[0.14em] uppercase text-sage mb-2">
              2-minute assessment
            </div>
            <div className="font-cormorant text-[1.25rem] md:text-[1.35rem] font-medium text-ink">
              What type of insomniac are you? Find out which pattern is keeping you
              awake.
            </div>
          </div>
          <div className="text-[1.2rem] text-sage shrink-0 bg-sage-dim w-10 h-10 flex items-center justify-center rounded-full group-hover:bg-sage group-hover:text-white transition-colors duration-300">→</div>
        </Link>
      </FadeIn>

      {/* ARTICLES */}
      <section className="px-6 py-14 md:px-12 md:py-24 border-t border-rule md:mt-24" id="articles">
        <FadeIn>
          <div className="text-[0.68rem] font-normal tracking-[0.16em] uppercase text-ink-3 mb-2">
            Science-Backed Insights
          </div>
          <h2 className="font-cormorant text-[clamp(1.8rem,3vw,2.5rem)] font-light text-ink mb-12 leading-[1.2]">
            Understand what is<br />
            happening to you.
          </h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-rule border border-rule mt-12">
          <FadeIn delay={100} className="h-full">
            <Link
              href="/articles/the-20-minute-rule"
              className="bg-cream p-8 md:p-8 flex flex-col gap-4 hover:bg-cream-3 transition-colors duration-300 text-inherit h-full min-h-[220px]"
            >
              <div className="text-[0.65rem] font-normal tracking-[0.12em] uppercase text-sage">
                Stimulus Control
              </div>
              <div className="font-serif text-[1.05rem] font-medium text-ink leading-[1.45] flex-1">
                The 20-Minute Rule: The NHS & CBT-I Guideline for When You Can't
                Sleep
              </div>
              <div className="text-[0.75rem] text-ink-3 font-light flex items-center gap-2">Read <span className="text-[0.9rem]">→</span></div>
            </Link>
          </FadeIn>
          <FadeIn delay={200} className="h-full">
            <Link
              href="/articles/why-going-to-bed-early-is-making-your-insomnia-worse"
              className="bg-cream p-8 md:p-8 flex flex-col gap-4 hover:bg-cream-3 transition-colors duration-300 text-inherit h-full min-h-[220px]"
            >
              <div className="text-[0.65rem] font-normal tracking-[0.12em] uppercase text-sage">
                Sleep Pressure
              </div>
              <div className="font-serif text-[1.05rem] font-medium text-ink leading-[1.45] flex-1">
                Why Going to Bed Early Is Making Your Insomnia Worse
              </div>
              <div className="text-[0.75rem] text-ink-3 font-light flex items-center gap-2">Read <span className="text-[0.9rem]">→</span></div>
            </Link>
          </FadeIn>
          <FadeIn delay={300} className="h-full">
            <Link
              href="/articles"
              className="bg-cream-2 p-8 md:p-8 flex flex-col justify-center items-start text-inherit h-full min-h-[220px] hover:bg-[#dfddcf] transition-colors duration-300"
            >
              <div>
                <div className="text-[0.65rem] font-normal tracking-[0.12em] uppercase text-ink-3 mb-2">
                  All Articles
                </div>
                <div className="font-serif text-[0.95rem] font-normal text-ink flex items-center gap-2">
                  Browse the full science library <span className="text-[1.1rem]">→</span>
                </div>
              </div>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* CLOSING CTA */}
      <FadeIn>
        <div className="px-6 py-16 md:px-12 md:py-24 bg-sage-dark flex flex-col md:flex-row md:items-center justify-between gap-10">
          <div>
            <div className="text-[0.68rem] font-normal tracking-[0.14em] uppercase text-white/50 mb-3">
              The Goodnight Companion Journal
            </div>
            <div className="font-cormorant text-[clamp(1.8rem,3vw,2.8rem)] font-light italic text-white leading-[1.25]">
              The bedroom is no longer<br />
              a battlefield.
            </div>
          </div>
          <Link
            href="/join-the-program"
            className="shrink-0 inline-flex items-center gap-2 font-sans text-[0.72rem] font-medium tracking-[0.1em] uppercase text-sage-dark bg-cream px-8 py-4 rounded-sm whitespace-nowrap hover:bg-white transition-all duration-300 self-start md:self-auto hover:-translate-y-0.5 hover:shadow-lg"
          >
            Get the Journal
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </FadeIn>

      {/* FOOTER */}
      <footer className="px-6 py-8 md:px-12 md:py-10 border-t border-rule flex flex-col md:flex-row md:items-center justify-between gap-6">
        <Link
          href="/"
          className="font-serif text-[0.9rem] font-medium text-ink decoration-transparent hover:opacity-70 transition-opacity"
        >
          The Goodnight Companion
        </Link>
        <div className="flex gap-7">
          <Link
            href="#articles"
            className="text-[0.72rem] text-ink-3 hover:text-sage transition-colors duration-300"
          >
            Articles
          </Link>
          <Link
            href="#toolkit"
            className="text-[0.72rem] text-ink-3 hover:text-sage transition-colors duration-300"
          >
            Toolkit
          </Link>
          <Link
            href="/join-the-program"
            className="text-[0.72rem] text-ink-3 hover:text-sage transition-colors duration-300"
          >
            Get the Journal
          </Link>
        </div>
        <div className="text-[0.7rem] text-ink-3">
          © {new Date().getFullYear()} The Goodnight Companion
        </div>
      </footer>
    </div>
  );
}
