"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function RechargePage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      if (audio.readyState >= 1) {
        if (!isNaN(audio.duration) && audio.duration !== Infinity) {
          setDuration(audio.duration);
        }
      }
    }
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleDurationChange = () => {
    if (audioRef.current) {
      const seconds = audioRef.current.duration;
      if (!isNaN(seconds) && seconds !== Infinity) {
        setDuration(seconds);
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const jump = (seconds: number) => {
    if (audioRef.current && duration > 0) {
      const newTime = audioRef.current.currentTime + seconds;
      const safeTime = Math.min(Math.max(newTime, 0), duration);
      audioRef.current.currentTime = safeTime;
      setCurrentTime(safeTime);
    }
  };

  const formatTime = (time: number) => {
    if (!time || isNaN(time) || time === Infinity) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-[var(--background)]">
      <audio
        ref={audioRef}
        src="/audio/nsdr-session.mp3"
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onDurationChange={handleDurationChange}
        onLoadedMetadata={handleDurationChange}
        onEnded={() => setIsPlaying(false)}
      />

      <div className="card-container w-full max-w-md text-center relative flex flex-col min-h-[550px]">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div className="text-left"></div>
          <Link
            href="/"
            aria-label="Return to Home"
            className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors p-2 -mr-2"
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

        {/* Content - Reduced Spacing (mb-6) */}
        <div className="space-y-4 mb-6 flex-grow flex flex-col justify-center">
          <p className="overline-text opacity-60">The Good Night Companion</p>
          <h1 className="text-3xl md:text-4xl font-serif text-[var(--text-primary)]">
            A 10-Minute Recharge
          </h1>
          <p className="text-[10px] font-bold tracking-widest uppercase text-[var(--text-secondary)] mt-2">
            Non Sleep Deep Rest
          </p>

          <p className="text-[var(--text-secondary)] font-sans text-sm md:text-base max-w-xs mx-auto">
            Rest your body. Clear your mind. <br />
            Save your sleep.
          </p>

          <div className="py-6 text-[#8da399] flex justify-center opacity-80">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17.5 19c0-1.7-1.3-3-3-3h-5c-1.7 0-3 1.3-3 3" />
              <path d="M19 16c0-1.7-1.3-3-3-3h-5c-1.7 0-3 1.3-3 3" />
              <path d="M17.5 19h-11" />
            </svg>
          </div>
        </div>

        {/* Player Controls */}
        <div className="bg-[#F8F6F2] rounded-2xl p-6 border border-[#8da399]/10">
          {/* Progress Bar */}
          <div className="mb-4">
            <input
              type="range"
              min={0}
              max={duration > 0 ? duration : 0}
              value={currentTime}
              onChange={handleSeek}
              disabled={duration === 0}
              className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--primary)] disabled:opacity-50"
              aria-label="Audio Progress"
            />
            <div className="flex justify-between text-[10px] font-bold text-[var(--text-secondary)] mt-2 tracking-wider">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-6 md:gap-8">
            {/* Rewind 30s */}
            <button
              onClick={() => jump(-30)}
              disabled={duration === 0}
              className="p-3 text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors disabled:opacity-30"
              aria-label="Rewind 30 seconds"
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
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                <path d="M3 3v5h5" />
                <path d="M9 12h6" />
                <path d="M12 9v6" />
              </svg>
            </button>

            {/* Play/Pause */}
            <button
              onClick={togglePlay}
              className="w-16 h-16 md:w-20 md:h-20 bg-[var(--primary)] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#7a8f86] hover:scale-105 active:scale-95 transition-all"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <path d="M5 3l14 9-14 9V3z" />
                </svg>
              )}
            </button>

            {/* Restart */}
            <button
              onClick={() => {
                if (audioRef.current) {
                  audioRef.current.currentTime = 0;
                  setCurrentTime(0);
                }
              }}
              disabled={duration === 0}
              className="p-3 text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors disabled:opacity-30"
              aria-label="Reset Session"
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
                <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.85.99 6.74 2.74L21 8" />
                <path d="M21 3v5h-5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
