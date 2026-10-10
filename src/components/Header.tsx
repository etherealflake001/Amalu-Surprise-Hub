import Image from "next/image";

const links = [["Calls", "#services"], ["Packages", "#packages"], ["FAQ", "#faq"]];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-wine/10 bg-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2">
        <a href="#top" aria-label="Amalu Surprise Hub, back to top">
          <Image src="/logo.png" alt="Amalu Surprise Hub" width={351} height={178} priority className="h-12 w-auto" />
        </a>
        <nav className="flex items-center gap-6 text-sm font-medium">
          {links.map(([l, h]) => (
            <a key={l} href={h} className="hidden hover:text-brand md:inline">{l}</a>
          ))}
          <a href="#book" className="rounded-full bg-maroon px-5 py-2 text-cream transition hover:bg-brand">Book a call</a>
        </nav>
      </div>
    </header>
  );
}
