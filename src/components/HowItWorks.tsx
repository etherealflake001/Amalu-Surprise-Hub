import Reveal from "./Reveal";

const steps = [
  ["Book your slot", "Tap a call, fill the form and send it on WhatsApp."],
  ["Get reminders", "We nudge you as the big day gets close."],
  ["They get the surprise", "Their phone rings. Their face does the rest."],
];

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <Reveal>
        <h2 className="font-display text-4xl text-wine">How it works</h2>
        <ol className="mt-10 space-y-8">
          {steps.map(([t, d], i) => (
            <li key={t} className="flex items-start gap-6">
              <span className="font-display text-5xl leading-none text-brand">{i + 1}</span>
              <div>
                <h3 className="font-display text-2xl text-maroon">{t}</h3>
                <p className="mt-1 text-wine/75">{d}</p>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
