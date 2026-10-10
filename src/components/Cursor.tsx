"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

type Pop = { id: number; x: number; y: number };
const COLORS = ["#f59e0b", "#b5202f", "#f5c32c", "#4a0e1f"];

export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 300, damping: 28 });
  const sy = useSpring(y, { stiffness: 300, damping: 28 });
  const [pops, setPops] = useState<Pop[]>([]);
  const [fine, setFine] = useState(false);
  const [big, setBig] = useState(false);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setFine(matchMedia("(pointer: fine)").matches);
    let id = 0;
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setBig(!!(e.target as Element | null)?.closest?.("a,button,summary,input,select,textarea,label"));
    };
    const down = (e: PointerEvent) => {
      const n = ++id;
      setPops((p) => [...p, { id: n, x: e.clientX, y: e.clientY }]);
      setTimeout(() => setPops((p) => p.filter((q) => q.id !== n)), 800);
    };
    addEventListener("pointermove", move);
    addEventListener("pointerdown", down);
    return () => { removeEventListener("pointermove", move); removeEventListener("pointerdown", down); };
  }, [x, y]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[60]">
      {fine && (
        <motion.div style={{ x: sx, y: sy }} className="absolute left-0 top-0">
          <motion.div animate={{ scale: big ? 1.8 : 1 }} className="-ml-4 -mt-4 h-8 w-8 rounded-full border-2 border-brand/70 bg-gold/30" />
        </motion.div>
      )}
      {pops.map((p) => (
        <div key={p.id} className="absolute" style={{ left: p.x, top: p.y }}>
          {Array.from({ length: 12 }, (_, i) => {
            const a = (i / 12) * Math.PI * 2;
            return (
              <motion.span key={i} initial={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
                animate={{ x: Math.cos(a) * 70, y: Math.sin(a) * 70, opacity: 0, rotate: 180 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="absolute h-3 w-1.5 rounded-sm" style={{ background: COLORS[i % 4] }} />
            );
          })}
        </div>
      ))}
    </div>
  );
}
