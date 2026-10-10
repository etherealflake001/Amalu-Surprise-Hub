import BookingForm from "@/components/BookingForm";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import Reveal from "@/components/Reveal";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import { WHATSAPP } from "@/lib/config";

export default function Home() {
  return (
    <main>
      <Loader />
      <Hero />
      <Services />
      <Reviews />
      <section id="book" className="mx-auto max-w-4xl px-6 py-24">
        <Reveal>
          <h2 className="font-display text-4xl text-wine">Book your call</h2>
          <p className="mt-3 max-w-md text-wine/70">Fill this in and it opens in WhatsApp with your details ready to send.</p>
        </Reveal>
        <BookingForm />
      </section>
      <footer className="px-6 py-12 text-center text-sm text-wine/70">
        <p>Amalu Surprise Hub</p>
        <a className="mt-2 inline-block underline underline-offset-4" href={`https://wa.me/${WHATSAPP}`}>Chat on WhatsApp</a>
      </footer>
    </main>
  );
}
