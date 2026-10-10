"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { services, WHATSAPP } from "@/lib/config";

const input =
  "mt-1 w-full rounded-xl border border-cream/30 bg-wine/40 px-4 py-3 text-cream outline-none transition focus:border-gold focus:ring-2 focus:ring-gold";
const fields = [
  ["name", "Your name", "text"],
  ["recipient", "Recipient's name", "text"],
  ["phone", "Recipient's phone number", "tel"],
  ["relationship", "Your relationship to them", "text"],
  ["date", "Call date", "date"],
] as const;

export default function BookingForm() {
  const [done, setDone] = useState(false);

  function submit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const g = (k: string) => String(d.get(k) ?? "").trim();
    const s = services.find((x) => x.name === g("type"));
    const where = g("where");
    const price = s ? (where === "international" ? s.foreign : s.local) : 0;
    const text = [
      "Hello Amalu Surprise Hub, I'd like to book a call.",
      `Call type: ${g("type")} (${where})`,
      `Price: ₦${price.toLocaleString("en-NG")}`,
      `Call date: ${g("date")}`,
      `My name: ${g("name")}`,
      `Recipient: ${g("recipient")}, ${g("phone")}`,
      `Relationship: ${g("relationship")}`,
      `What the call should say: ${g("note")}`,
    ].join("\n");
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    setDone(true);
  }

  return (
    <form onSubmit={submit} className="mt-10 grid gap-5 rounded-3xl bg-maroon p-6 text-cream md:grid-cols-2 md:p-10">
      {fields.map(([n, l, t]) => (
        <label key={n} className="block text-sm">{l}
          <input required name={n} type={t} className={input} />
        </label>
      ))}
      <label className="block text-sm">Call type
        <select name="type" className={input}>
          {services.map((s) => <option key={s.name} className="bg-wine">{s.name}</option>)}
        </select>
      </label>
      <label className="block text-sm">Local or international
        <select name="where" className={input}>
          <option value="local" className="bg-wine">Local</option>
          <option value="international" className="bg-wine">International</option>
        </select>
      </label>
      <label className="block text-sm md:col-span-2">What should the call say?
        <textarea name="note" rows={4} className={input} />
      </label>
      <motion.button type="submit" whileTap={{ scale: 0.97 }}
        className="rounded-full bg-gold px-8 py-4 font-semibold text-wine transition hover:bg-amber md:col-span-2 md:justify-self-start">
        Send booking on WhatsApp
      </motion.button>
      {done && (
        <motion.p role="status" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-gold md:col-span-2">
          Your details are in WhatsApp. Send the message there to secure your slot.
        </motion.p>
      )}
    </form>
  );
}
