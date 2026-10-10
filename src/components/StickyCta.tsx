import { WHATSAPP } from "@/lib/config";

export default function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-3 bg-maroon p-3 md:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}>
      <a href="#book" className="flex-1 rounded-full bg-gold py-3 text-center font-semibold text-wine">Book a call</a>
      <a href={`https://wa.me/${WHATSAPP}`} className="rounded-full border border-cream/40 px-5 py-3 text-cream">WhatsApp</a>
    </div>
  );
}
