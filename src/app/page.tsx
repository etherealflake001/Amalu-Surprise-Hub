import Image from "next/image";
import Link from "next/link";
import BookingForm from "@/components/BookingForm";
import Faces from "@/components/Faces";
import Faq from "@/components/Faq";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Loader from "@/components/Loader";
import Marquee from "@/components/Marquee";
import Packages from "@/components/Packages";
import Reveal from "@/components/Reveal";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import StickyCta from "@/components/StickyCta";
import { CALL, EMAIL, WHATSAPP } from "@/lib/config";

export default function Home() {
  return (
    <>
      <Loader />
      <Header />
      <main id="top">
        <Hero />
        <Marquee />
        <Services />
        <HowItWorks />
        <Faces />
        <Packages />
        <Reviews />
        <section id="book" className="mx-auto max-w-4xl px-6 py-24">
          <Reveal>
            <h2 className="font-display text-4xl text-wine">Book your call</h2>
            <p className="mt-3 max-w-md text-wine/70">Fill this in and it opens in WhatsApp with your details ready to send.</p>
          </Reveal>
          <BookingForm />
        </section>
        <Faq />
      </main>
      <footer className="px-6 pb-28 pt-12 text-center text-sm text-wine/75 md:pb-12">
        <Image src="/logo.png" alt="Amalu Surprise Hub" width={351} height={178} className="mx-auto h-16 w-auto" />
        <p className="mt-3 font-script text-xl text-brand">At the peak of your happiness</p>
        <p className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2">
          <a className="underline underline-offset-4" href={`https://wa.me/${WHATSAPP}`}>WhatsApp</a>
          <a className="underline underline-offset-4" href={`tel:+${CALL}`}>Call us</a>
          <a className="underline underline-offset-4" href={`mailto:${EMAIL}`}>Email</a>
          <Link className="underline underline-offset-4" href="/privacy">Privacy</Link>
        </p>
      </footer>
      <StickyCta />
    </>
  );
}
