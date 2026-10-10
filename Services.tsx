import Reveal from "./Reveal";
import { services } from "@/lib/config";

const naira = (n: number) => "₦" + n.toLocaleString("en-NG");

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-4xl px-6 py-24">
      <Reveal>
        <h2 className="font-display text-4xl text-wine">Pick the call</h2>
        <p className="mt-3 max-w-md text-wine/70">Prices in naira. You choose local or international when you book.</p>
        <ul className="mt-10 divide-y divide-wine/15">
          {services.map((s) => (
            <li key={s.name} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 px-2 py-5 transition-colors hover:bg-gold/25">
              <h3 className="font-display text-xl">{s.name}</h3>
              <p className="text-sm text-wine/80">
                <span className="font-semibold text-maroon">{naira(s.local)}</span> local
                <span className="mx-2 text-wine/30">/</span>
                <span className="font-semibold text-maroon">{naira(s.foreign)}</span> international
              </p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
