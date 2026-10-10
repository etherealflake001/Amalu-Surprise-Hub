"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    try {
      if (sessionStorage.getItem("hub-seen")) { setShow(false); return; }
      sessionStorage.setItem("hub-seen", "1");
    } catch {}
    const t = setTimeout(() => setShow(false), 1300);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div key="loader" exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 grid place-items-center bg-maroon">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="font-display text-4xl text-gold">Amalu Surprise Hub</motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
