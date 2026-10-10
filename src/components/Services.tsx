"use client";
import Reveal from "./Reveal";
import { services } from "@/lib/config";

const naira = (n: number) => "₦" + n.toLocaleString("en-NG");

export default function Services() {
  const pick = (name: string) => {
    window.dispatchEvent(new CustomEvent("pick-call", { detail: name }));
    document.getElementById("book")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="services" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal className="rounded-3xl bg-maroon p-8 text-cream md:p-14">
        <h2 className="font-script text-4xl font-normal text-gold md:text-5xl">Phone Calling Services</h2>
        <p className="mt-3 max-w-md text-cream/75">Prices in naira. Tap a call to book it.</p>
        <ul className="mt-10 grid gap-x-14 md:grid-cols-2">
          {services.map((s) => (
            <li key={s.name} className="border-b border-cream/15">
              <button type="button" onClick={() => pick(s.name)}
                className="block w-full px-2 py-5 text-left transition-all hover:bg-cream/10 hover:pl-5 focus-visible:bg-cream/10">
                <h3 className="font-display text-xl">{s.name}</h3>
                <p className="font-script text-lg text-gold/90">{s.line}</p>
                <p className="mt-1 text-sm text-cream/75">
                  <span className="font-semibold text-gold">{naira(s.local)}</span> local
                  <span className="mx-2 text-cream/30">/</span>
                  <span className="font-semibold text-gold">{naira(s.foreign)}</span> international
                </p>
              </button>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
