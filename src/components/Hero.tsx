"use client";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";

export default function Hero() {
  const calm = useReducedMotion();
  const { scrollY } = useScroll();
  const up = useTransform(scrollY, [0, 600], [0, -80]);
  const down = useTransform(scrollY, [0, 600], [0, 60]);
  const rx = useSpring(useMotionValue(0), { stiffness: 120, damping: 14 });
  const ry = useSpring(useMotionValue(0), { stiffness: 120, damping: 14 });

  return (
    <section className="relative overflow-hidden px-6 pb-28 pt-24 md:pt-32">
      <motion.div aria-hidden style={{ y: up }} className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-amber/40 blur-3xl" />
      <motion.div aria-hidden style={{ y: down }} className="absolute -right-24 top-40 h-[28rem] w-[28rem] rounded-full bg-brand/20 blur-3xl" />
      <motion.div initial={{ scale: 1.08, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 1.2 }}
        className="relative mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
        <div>
          <p className="font-medium text-brand">Amalu Surprise Hub</p>
          <h1 className="mt-4 font-display text-5xl leading-tight text-wine md:text-7xl">At the peak of your happiness.</h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-wine/80">
            We call the people you love and say what you feel, in words written for them.
          </p>
          <div className="mt-10 flex items-center gap-6">
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
          <motion.div style={{ rotateX: rx, rotateY: ry }}
            className="rounded-3xl bg-maroon p-10 text-cream shadow-[0_0_80px_rgba(245,158,11,0.45)]">
            <p className="text-sm text-gold">Incoming call</p>
            <p className="mt-4 font-display text-3xl leading-snug">Someone is thinking of you.</p>
            <p className="mt-6 text-cream/70">Birthdays, thank-yous, anniversaries, apologies and more.</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
