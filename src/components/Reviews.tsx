import { reviews } from "@/lib/config";

export default function Reviews() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <h2 className="font-display text-4xl text-wine">What customers say</h2>
      <div className="mt-10 space-y-12">
        {reviews.map((r) => (
          <figure key={r.quote}>
            <blockquote className="font-display text-2xl leading-snug text-maroon md:text-3xl">{r.quote}</blockquote>
            <figcaption className="mt-3 text-sm text-wine/70">{r.who}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
