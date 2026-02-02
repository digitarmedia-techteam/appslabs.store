import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://appslabs.store"),
  title: "AppsLabs.store | Premium App Development & Solutions",
  description: "AppsLabs is a premium digital engineering lab building next-gen mobile and web applications. We specialize in high-performance React Native, Next.js, and scaling secure cloud infrastructure.",
  keywords: ["App Development", "Web Development", "Next.js", "React Native", "UI/UX Design", "Enterprise Software", "Digital Engineering"],
  authors: [{ name: "AppsLabs Team" }],
  creator: "AppsLabs Global",
  openGraph: {
    title: "AppsLabs.store | Premium App Development & Solutions",
    description: "Crafting exceptional digital experiences. Premium mobile and web applications tailored for your business needs.",
    url: "https://appslabs.store",
    siteName: "AppsLabs.store",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "AppsLabs Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AppsLabs.store | Premium App Development",
    description: "Building tomorrow's digital infrastructure today.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
