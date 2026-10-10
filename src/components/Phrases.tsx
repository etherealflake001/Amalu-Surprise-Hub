"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const lines = [
  "Because a text can't cry happy tears.",
  "We call. They smile. You get the credit.",
  "Sorry, thank you, I love you. Out loud.",
  "Their phone rings. Their day gets better.",
  "Say it with a voice they'll never forget.",
];

export default function Phrases() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % lines.length), 3200);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="mt-6 min-h-16">
      <AnimatePresence mode="wait">
        <motion.p key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }} className="font-script text-2xl text-brand md:text-3xl">{lines[i]}</motion.p>
      </AnimatePresence>
    </div>
  );
}
