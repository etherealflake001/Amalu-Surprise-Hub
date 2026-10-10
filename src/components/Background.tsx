"use client";
import { useEffect, useRef } from "react";

const COLORS = ["#f59e0b", "#b5202f", "#f5c32c", "#4a0e1f", "#ffffff"];

export default function Background() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = ref.current!;
    const ctx = cv.getContext("2d")!;
    const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const m = { x: -999, y: -999 };
    let w = 0, h = 0, raf = 0;
    const ps = Array.from({ length: 90 }, (_, i) => ({
      x: Math.random(), y: Math.random(), s: 8 + Math.random() * 12, r: Math.random() * 6,
      vr: (Math.random() - 0.5) * 0.03, vy: 0.15 + Math.random() * 0.35, c: COLORS[i % COLORS.length],
      round: i % 3 === 0, dx: 0, dy: 0,
    }));
    const size = () => {
      const d = devicePixelRatio || 1;
      w = innerWidth; h = innerHeight;
      cv.width = w * d; cv.height = h * d;
      ctx.setTransform(d, 0, 0, d, 0, 0);
    };
    const move = (e: PointerEvent) => { m.x = e.clientX; m.y = e.clientY; };
    const pop = (e: PointerEvent) => {
      for (const p of ps) {
        const ex = p.x * w + p.dx - e.clientX, ey = p.y * h + p.dy - e.clientY, d = Math.hypot(ex, ey) || 1;
        if (d < 260) { p.dx += (ex / d) * (260 - d) * 0.5; p.dy += (ey / d) * (260 - d) * 0.5; }
      }
    };
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of ps) {
        const x = p.x * w + p.dx, y = p.y * h + p.dy;
        const ex = x - m.x, ey = y - m.y, d = Math.hypot(ex, ey) || 1;
        if (d < 150) { p.dx += (ex / d) * (150 - d) * 0.06; p.dy += (ey / d) * (150 - d) * 0.06; }
        p.dx *= 0.94; p.dy *= 0.94;
        if (!calm) { p.y += p.vy / h; p.r += p.vr; if (p.y > 1.05) p.y = -0.05; }
        ctx.save();
        ctx.translate(x, y); ctx.rotate(p.r);
        ctx.globalAlpha = 0.65; ctx.fillStyle = p.c;
        if (p.round) { ctx.beginPath(); ctx.arc(0, 0, p.s / 2.2, 0, 7); ctx.fill(); }
        else ctx.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2);
        ctx.restore();
      }
      if (!calm) raf = requestAnimationFrame(draw);
    };
    size(); draw();
    addEventListener("resize", size); addEventListener("pointermove", move); addEventListener("pointerdown", pop);
    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("resize", size); removeEventListener("pointermove", move); removeEventListener("pointerdown", pop);
    };
  }, []);
  return <canvas ref={ref} aria-hidden className="pointer-events-none fixed inset-0 -z-10" />;
}
