import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dmsans" });

export const metadata: Metadata = {
  title: "Amalu Surprise Hub | Surprise calls for people you love",
  description: "Book a heartfelt surprise call for a birthday, anniversary, apology, appreciation and more.",
  openGraph: { title: "Amalu Surprise Hub", description: "At the peak of your happiness.", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body><Providers>{children}</Providers></body>
    </html>
  );
}
