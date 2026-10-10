import Reveal from "./Reveal";

const faqs = [
  ["How do I book?", "Pick a call, fill in the form and send it to us on WhatsApp. We secure your slot and remind you as the day gets close."],
  ["What do you need from me?", "Your name, the recipient's name and phone number, your relationship to them and a short overview of what the call should say."],
  ["How much does it cost?", "It depends on the type of call and whether it is local or international. The full price list is above."],
  ["Can you call someone abroad?", "Yes. Choose international when you book."],
  ["How do I pay?", "We share the payment details when we confirm your booking on WhatsApp."],
];

export default function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-24">
      <Reveal>
        <h2 className="font-display text-4xl text-wine">Questions people ask</h2>
        <div className="mt-10">
          {faqs.map(([q, a]) => (
            <details key={q} className="group border-b border-wine/15 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-xl [&::-webkit-details-marker]:hidden">
                {q}
                <span aria-hidden className="text-2xl text-brand transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 max-w-xl leading-relaxed text-wine/75">{a}</p>
            </details>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
