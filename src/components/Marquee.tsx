import { services } from "@/lib/config";

const items = [...services.map((s) => s.name), "At the peak of your happiness"];

function Row() {
  return (
    <ul className="flex shrink-0 items-center gap-8 pr-8">
      {items.map((t) => (
        <li key={t} className="flex items-center gap-8 whitespace-nowrap font-script text-2xl text-gold">
          {t}
          <span aria-hidden className="h-2 w-2 rotate-45 bg-cream" />
        </li>
      ))}
    </ul>
  );
}

export default function Marquee() {
  return (
    <div aria-hidden className="overflow-hidden bg-maroon py-4">
      <div className="marquee flex w-max">
        <Row />
        <Row />
      </div>
    </div>
  );
}
