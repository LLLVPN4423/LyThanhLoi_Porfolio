import type { Metadata } from "next";
import { Cinzel, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { AmbientSciFi } from "@/components/AmbientSciFi";
import { Navigation } from "@/components/Navigation";
import { ScrollProgress } from "@/components/ScrollProgress";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ly Thanh Loi — Fantasy × Tech Portfolio",
  description:
    "Personal portfolio of Ly Thanh Loi — IT student at HUTECH, backend & cross-platform development, AI integration, and verified project archive.",
  openGraph: {
    title: "Ly Thanh Loi — Digital Archive",
    description: "Fantasy × Tech personal portfolio and project showcase.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${dmSans.variable} ${jetbrains.variable}`}>
      <body className="relative antialiased">
        <AmbientSciFi />
        <ScrollProgress />
        <Navigation />
        <main className="relative z-[1]">{children}</main>
      </body>
    </html>
  );
}
