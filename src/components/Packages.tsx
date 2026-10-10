import Image from "next/image";
import Reveal from "./Reveal";
import { photos, WHATSAPP } from "@/lib/config";

const ask = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hello Amalu Surprise Hub, I'd like to ask about a surprise package.\nOccasion:\nBudget:\nWho it is for:")}`;

export default function Packages() {
  return (
    <section id="packages" className="mx-auto grid max-w-5xl items-center gap-12 px-6 py-24 md:grid-cols-2">
      <Reveal className="relative aspect-[4/3] overflow-hidden rounded-3xl border-4 border-maroon">
        <Image src={photos.gift.src} alt={photos.gift.alt} fill sizes="(min-width: 768px) 32rem, 90vw" className="object-cover" />
      </Reveal>
      <Reveal>
        <h2 className="font-display text-4xl text-wine">Surprise packages</h2>
        <p className="mt-2 font-script text-2xl text-brand">Picked for them. Wrapped with love.</p>
        <p className="mt-5 max-w-md leading-relaxed text-wine/80">
          Tell us who it is for, the occasion and your budget. We curate the gift, and we can pair it with a surprise call.
        </p>
        <a href={ask} target="_blank" rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-maroon px-8 py-4 font-semibold text-cream transition hover:bg-brand">
          Ask about a package
        </a>
      </Reveal>
    </section>
  );
}
