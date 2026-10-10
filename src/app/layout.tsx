import type { Metadata } from "next";
import { Kaushan_Script, Playfair_Display, Poppins } from "next/font/google";
import Background from "@/components/Background";
import Cursor from "@/components/Cursor";
import Providers from "@/components/Providers";
import { SITE_URL } from "@/lib/config";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--font-poppins" });
const kaushan = Kaushan_Script({ subsets: ["latin"], weight: "400", variable: "--font-kaushan" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Amalu Surprise Hub | Surprise calls and gifts for people you love",
  description: "Book a heartfelt surprise call or a curated surprise package for a birthday, anniversary, apology, appreciation and more.",
  openGraph: { title: "Amalu Surprise Hub", description: "At the peak of your happiness.", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable} ${kaushan.variable}`}>
      <body>
        <Background />
        <Cursor />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
