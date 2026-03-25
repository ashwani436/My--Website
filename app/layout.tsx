import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-agency.example"),
  title: {
    default: "ScaleForge Agency",
    template: "%s | ScaleForge Agency",
  },
  description:
    "ScaleForge builds high-performance web, mobile, AI, and backend systems for ambitious teams.",
  openGraph: {
    title: "ScaleForge Agency",
    description:
      "High-performance web, mobile, AI, and backend engineering for products that scale.",
    type: "website",
    url: "/",
    images: [
      {
        url: "/images/hero-tech.svg",
        width: 1280,
        height: 720,
        alt: "ScaleForge futuristic workspace illustration",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${geist.variable}`}>
      <body className="min-h-screen bg-background text-foreground">
        <div className="relative tech-grid">
          <div className="noise-overlay relative mx-auto flex min-h-screen max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
            <Navbar />
            <main className="flex-1 py-12 sm:py-16">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
