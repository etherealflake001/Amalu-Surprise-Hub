"use client";
import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { photos } from "@/lib/config";
import Phrases from "./Phrases";

const confetti = [[6, 16, 20], [24, 70, -30], [46, 8, 40], [64, 88, 15], [86, 24, -45], [94, 64, 30], [38, 44, -15]];

function Frame({ p, className, priority }: { p: { src: string; alt: string }; className: string; priority?: boolean }) {
  return (
    <div className={`absolute overflow-hidden rounded-3xl ${className}`}>
      <Image src={p.src} alt={p.alt} fill priority={priority} sizes="(min-width: 768px) 24rem, 80vw" className="object-cover" />
    </div>
  );
}

export default function Hero() {
  const calm = useReducedMotion();
  const { scrollY } = useScroll();
  const up = useTransform(scrollY, [0, 600], [0, -80]);
  const down = useTransform(scrollY, [0, 600], [0, 60]);
  const rx = useSpring(useMotionValue(0), { stiffness: 120, damping: 14 });
  const ry = useSpring(useMotionValue(0), { stiffness: 120, damping: 14 });

  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-14 md:pt-20">
      <motion.div aria-hidden style={{ y: up }} className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-amber/40 blur-3xl" />
      <motion.div aria-hidden style={{ y: down }} className="absolute -right-24 top-40 h-[28rem] w-[28rem] rounded-full bg-brand/20 blur-3xl" />
      {confetti.map(([l, t, r], i) => (
        <span key={i} aria-hidden className={`absolute h-6 w-2.5 rounded-sm ${i % 2 ? "bg-brand/60" : "bg-amber"}`}
          style={{ left: `${l}%`, top: `${t}%`, transform: `rotate(${r}deg)` }} />
      ))}
      <motion.div initial={{ scale: 1.08, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 1.2 }}
        className="relative mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
        <div>
          <Image src="/logo.png" alt="Amalu Surprise Hub" width={351} height={178} priority className="h-auto w-56 md:w-72" />
          <h1 className="mt-8 font-display text-5xl leading-tight text-wine md:text-7xl">At the peak of your happiness.</h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-wine/80">
            We call the people you love and say what you feel, in words written for them.
          </p>
          <Phrases />
          <div className="mt-8 flex items-center gap-6">
            <motion.a href="#book" whileTap={{ scale: 0.97 }}
              className="rounded-full bg-maroon px-8 py-4 font-semibold text-cream shadow-[0_0_40px_rgba(245,158,11,0.5)] transition hover:bg-brand">
              Book a call
            </motion.a>
            <a href="#services" className="underline underline-offset-4 hover:text-brand">See prices</a>
          </div>
        </div>
        <div style={{ perspective: 1000 }}
          onMouseMove={(e) => {
            if (calm) return;
            const r = e.currentTarget.getBoundingClientRect();
            ry.set(((e.clientX - r.left) / r.width - 0.5) * 14);
            rx.set(-((e.clientY - r.top) / r.height - 0.5) * 14);
          }}
          onMouseLeave={() => { rx.set(0); ry.set(0); }}>
          <motion.div style={{ rotateX: rx, rotateY: ry }} className="relative mx-auto aspect-square w-full max-w-md">
            <Frame p={photos.curls} priority className="left-0 top-0 h-[72%] w-[78%] border-4 border-maroon shadow-[0_0_80px_rgba(245,158,11,0.45)]" />
            <Frame p={photos.surprised} className="right-0 top-[8%] h-[34%] w-[34%] border-4 border-cream" />
            <Frame p={photos.turtleneck} className="bottom-0 left-0 h-[34%] w-[40%] border-4 border-cream" />
            <motion.svg aria-hidden viewBox="0 0 24 24" fill="currentColor"
              animate={{ rotate: [0, -14, 14, -14, 14, 0] }} transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 2.4 }}
              className="absolute left-[56%] top-[-4%] z-10 h-14 w-14 rounded-full bg-gold p-3 text-maroon">
              <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.6 3.6a1 1 0 0 1-.25 1z" />
            </motion.svg>
            <div className="absolute bottom-0 right-0 z-10 w-[56%] rounded-2xl bg-maroon p-4 text-cream">
              <div className="flex items-center gap-2 text-xs text-gold">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold" />
                </span>
                Incoming call
              </div>
              <p className="mt-1 font-display text-lg leading-snug">Someone is thinking of you.</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
