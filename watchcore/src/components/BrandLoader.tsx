"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function BrandLoader() {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const minimumDuration = prefersReducedMotion ? 450 : 900;
    const completeHold = prefersReducedMotion ? 120 : 320;
    const exitDuration = prefersReducedMotion ? 80 : 420;
    const startedAt = performance.now();
    let completedAt: number | null = null;
    let exitTimeout: ReturnType<typeof setTimeout> | undefined;

    const interval = setInterval(() => {
      const now = performance.now();
      const elapsed = now - startedAt;
      const isPageReady = document.readyState === "complete";

      if (!isPageReady || elapsed < minimumDuration) {
        setProgress(Math.min(94, Math.floor((elapsed / minimumDuration) * 94)));
        return;
      }

      setProgress(100);
      completedAt ??= now;

      if (now - completedAt >= completeHold) {
        setIsExiting(true);
        clearInterval(interval);
        exitTimeout = setTimeout(() => setIsVisible(false), exitDuration);
      }
    }, 40);

    return () => {
      clearInterval(interval);
      if (exitTimeout) clearTimeout(exitTimeout);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`brand-loader${isExiting ? " is-exiting" : ""}`}
      aria-hidden={isExiting}
    >
      <div
        className="brand-loader-content"
        role="status"
        aria-live="polite"
        aria-label="Carregando o site WatchCore"
      >
        <span className="brand-loader-signal" aria-hidden="true" />
        <div className="brand-loader-brand">
          <Image
            className="brand-loader-logo"
            src="/brand/watchcore_logo.png"
            alt=""
            width={2160}
            height={720}
            priority
            sizes="(max-width: 640px) 220px, 280px"
          />
        </div>
        <p className="brand-loader-caption">Preparando sua experiência</p>
        <div
          className="brand-loader-track"
          role="progressbar"
          aria-label="Carregamento"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
        >
          <span style={{ width: `${progress}%` }} />
        </div>
        <span className="brand-loader-progress" aria-hidden="true">
          {progress}%
        </span>
      </div>
    </div>
  );
}
