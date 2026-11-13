"use client";

import { useEffect, useRef } from "react";

/**
 * Pri's hand-drawn avocado, recolored into the site palette (forest skin,
 * plum pit, cream flesh), roaming the homepage as an ambient companion.
 * - Wanders to random targets, drifts toward the cursor when it comes near.
 * - Eyes track the cursor; a click gives a hop and a floating heart.
 * Desktop only (no cursor to play with on touch), and it bows out entirely
 * for anyone who prefers reduced motion. The wrapper is click-through; only
 * the avocado itself is interactive, so it never blocks the page.
 */
export function AvocadoCompanion() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const palRef = useRef<HTMLDivElement>(null);
  const eyesRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const wrap = wrapRef.current;
    const pal = palRef.current;
    const eyes = eyesRef.current;
    if (!wrap || !pal || !eyes) return;

    const W = 78;
    const H = 96;
    // Stay clear of the fixed left identity rail (w-72 = 288px) on desktop.
    const MIN_X = 312;

    let x = window.innerWidth - 160;
    let y = window.innerHeight - 200;
    let tx = x;
    let ty = y;
    let t = 0;
    let hop = 0;
    let idle = 0;
    let mouseX: number | null = null;
    let mouseY: number | null = null;
    let raf = 0;

    const maxX = () => Math.max(MIN_X + 20, window.innerWidth - W - 24);
    const maxY = () => Math.max(100, window.innerHeight - H - 24);

    function pick() {
      tx = MIN_X + Math.random() * (maxX() - MIN_X);
      ty = 90 + Math.random() * (maxY() - 90);
      idle = 90 + Math.random() * 160;
    }
    pick();

    function onMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }
    function onLeave() {
      mouseX = null;
      mouseY = null;
    }
    function onClick() {
      hop = 1;
      const h = document.createElement("span");
      h.textContent = "♥";
      h.style.cssText =
        "position:fixed;left:" +
        (x + 30) +
        "px;top:" +
        (y + 2) +
        "px;color:#b06a9a;font-size:18px;pointer-events:none;transition:transform .9s ease,opacity .9s ease;z-index:40";
      wrap!.appendChild(h);
      requestAnimationFrame(() => {
        h.style.transform = "translateY(-46px)";
        h.style.opacity = "0";
      });
      setTimeout(() => h.remove(), 950);
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    pal.addEventListener("click", onClick);

    function frame() {
      t += 0.05;
      const cx = x + W / 2;
      const cy = y + H / 2;

      if (mouseX !== null && mouseY !== null) {
        const d = Math.hypot(mouseX - cx, mouseY - cy);
        if (d < 180) {
          tx = Math.min(Math.max(mouseX - W / 2, MIN_X), maxX());
          ty = Math.min(Math.max(mouseY - H / 2, 90), maxY());
          idle = 24;
        }
      }
      if (idle > 0) {
        idle--;
        if (idle === 0) pick();
      }

      x += (tx - x) * 0.035;
      y += (ty - y) * 0.035;
      if (hop > 0) {
        hop *= 0.86;
        if (hop < 0.02) hop = 0;
      }
      const bob = Math.sin(t) * 2 - hop * 18;
      pal!.style.transform =
        "translate(" + x.toFixed(1) + "px," + (y + bob).toFixed(1) + "px)";

      // Eyes drift toward the cursor.
      let ox = 0;
      let oy = 0;
      if (mouseX !== null && mouseY !== null) {
        const ex = x + 39;
        const ey = y + 50 + bob;
        const a = Math.atan2(mouseY - ey, mouseX - ex);
        const dd = Math.min(Math.hypot(mouseX - ex, mouseY - ey) / 50, 1);
        ox = Math.cos(a) * 2.4 * dd;
        oy = Math.sin(a) * 2.4 * dd;
      }
      eyes!.setAttribute(
        "transform",
        "translate(" + ox.toFixed(2) + "," + oy.toFixed(2) + ")",
      );

      raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      pal.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 hidden lg:block"
    >
      <div
        ref={palRef}
        className="pointer-events-auto absolute left-0 top-0 cursor-pointer"
        style={{ willChange: "transform" }}
      >
        <svg width="78" height="96" viewBox="0 0 90 112" aria-label="Avocado">
          <ellipse cx="12" cy="68" rx="7" ry="10" fill="#3f5a3a" />
          <ellipse cx="78" cy="68" rx="7" ry="10" fill="#3f5a3a" />
          <path
            d="M45 10 C24 12 12 40 13 66 C14 92 30 101 45 101 C60 101 76 92 77 66 C78 40 66 12 45 10 Z"
            fill="#3f5a3a"
          />
          <g transform="translate(45,56) scale(0.85) translate(-45,-56)">
            <path
              d="M45 10 C24 12 12 40 13 66 C14 92 30 101 45 101 C60 101 76 92 77 66 C78 40 66 12 45 10 Z"
              fill="#8aad78"
            />
          </g>
          <g transform="translate(45,57) scale(0.6) translate(-45,-57)">
            <path
              d="M45 10 C24 12 12 40 13 66 C14 92 30 101 45 101 C60 101 76 92 77 66 C78 40 66 12 45 10 Z"
              fill="#f6efd8"
            />
          </g>
          <ellipse cx="24" cy="70" rx="5.5" ry="3.2" fill="#e59ba6" />
          <ellipse cx="66" cy="70" rx="5.5" ry="3.2" fill="#e59ba6" />
          <g ref={eyesRef}>
            <ellipse cx="34" cy="58" rx="7" ry="8.5" fill="#16130f" />
            <ellipse cx="56" cy="58" rx="7" ry="8.5" fill="#16130f" />
            <circle cx="37" cy="54" r="2.3" fill="#fff" />
            <circle cx="59" cy="54" r="2.3" fill="#fff" />
            <circle cx="31" cy="61" r="1.3" fill="#fff" />
            <circle cx="53" cy="61" r="1.3" fill="#fff" />
          </g>
          <path
            d="M40 67 Q45 72 50 67"
            stroke="#16130f"
            strokeWidth="2.4"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="45" cy="84" r="11" fill="#6d3a6a" />
          <ellipse cx="41" cy="80" rx="4.5" ry="3.3" fill="#b592c9" />
        </svg>
      </div>
    </div>
  );
}
