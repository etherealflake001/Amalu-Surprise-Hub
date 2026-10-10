import type { Metadata } from "next";
import Link from "next/link";
import { EMAIL } from "@/lib/config";

export const metadata: Metadata = { title: "Privacy | Amalu Surprise Hub" };

const sections = [
  ["What we collect", "The details you type into the booking form: your name, the recipient's name and phone number, your relationship to them, the call date and a short overview of what the call should say. This website does not store them. The form opens WhatsApp with a message that you send yourself."],
  ["How we use it", "Only to plan and deliver your surprise call or gift. The recipient's number is used only for your call."],
  ["Sharing", "We do not sell or share your details with advertisers."],
  ["Visits", "We may use basic analytics to count visits to this website."],
  ["Questions", `Message us on WhatsApp or write to ${EMAIL}.`],
];

export default function Privacy() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24">
      <h1 className="font-display text-5xl text-wine">Privacy</h1>
      <p className="mt-3 text-wine/70">Last updated October 2026</p>
      {sections.map(([h, t]) => (
        <section key={h} className="mt-10">
          <h2 className="font-display text-2xl text-maroon">{h}</h2>
          <p className="mt-2 leading-relaxed text-wine/80">{t}</p>
        </section>
      ))}
      <Link href="/" className="mt-12 inline-block underline underline-offset-4 hover:text-brand">Back to the website</Link>
    </main>
  );
}
