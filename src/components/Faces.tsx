import Image from "next/image";
import Reveal from "./Reveal";
import { photos } from "@/lib/config";

const faces = [
  { p: photos.blazer, cap: "The proud, can't-stop-smiling call", tilt: "-rotate-2" },
  { p: photos.grandmother, cap: "The happy-tears-at-home call", tilt: "rotate-1" },
  { p: photos.orange, cap: "The blushing, stop-it call", tilt: "rotate-2" },
  { p: photos.stripes, cap: "The full-belly laugh call", tilt: "-rotate-1" },
  { p: photos.blueman, cap: "The no-way-it's-you call", tilt: "rotate-2" },
];

export default function Faces() {
  return (
    <section className="py-20">
      <Reveal className="mx-auto max-w-5xl px-6">
        <h2 className="font-display text-4xl text-wine">The faces on the other end</h2>
        <p className="mt-3 max-w-md text-wine/75">This is what a surprise call looks like when it lands. Scroll sideways.</p>
      </Reveal>
      <ul tabIndex={0} aria-label="Photos of people enjoying surprise calls"
        className="mx-auto mt-10 flex max-w-5xl snap-x gap-6 overflow-x-auto px-6 pb-8 pt-2">
        {faces.map(({ p, cap, tilt }) => (
          <li key={p.src} className={`group w-64 shrink-0 snap-start rounded-2xl bg-cream p-3 pb-4 transition duration-300 hover:rotate-0 ${tilt}`}>
            <div className="relative h-72 overflow-hidden rounded-xl">
              <Image src={p.src} alt={p.alt} fill sizes="16rem" className="object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <p className="mt-3 font-script text-xl leading-snug text-brand">{cap}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
