"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    try {
      if (sessionStorage.getItem("hub-seen")) { setShow(false); return; }
      sessionStorage.setItem("hub-seen", "1");
    } catch {}
    const t = setTimeout(() => setShow(false), 1500);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div key="loader" exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 grid place-items-center bg-gold">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
            <Image src="/logo.png" alt="Amalu Surprise Hub" width={351} height={178} priority className="h-auto w-64" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
