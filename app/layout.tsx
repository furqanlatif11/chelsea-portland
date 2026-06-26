import type { Metadata } from "next";
import { Outfit, Cormorant_Garamond } from "next/font/google";
import "./styles/globals.scss";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const headingSerif = Cormorant_Garamond({
  variable: "--font-heading-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chelseaportland.com"),
  title: {
    default: "Chelsea Portland | Modern Digital Presence",
    template: "%s | Chelsea Portland",
  },
  description:
    "Chelsea Portland creates thoughtful, polished digital experiences for ambitious brands through modern web design and strategic storytelling.",
  keywords: [
    "Chelsea Portland",
    "web design",
    "digital experience",
    "brand strategy",
    "modern website",
  ],
  authors: [{ name: "Chelsea Portland" }],
  openGraph: {
    title: "Chelsea Portland | Modern Digital Presence",
    description:
      "Chelsea Portland creates thoughtful, polished digital experiences for ambitious brands through modern web design and strategic storytelling.",
    url: "https://chelseaportland.com",
    siteName: "Chelsea Portland",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chelsea Portland | Modern Digital Presence",
    description:
      "Chelsea Portland creates thoughtful, polished digital experiences for ambitious brands through modern web design and strategic storytelling.",
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
  alternates: {
    canonical: "https://chelseaportland.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${headingSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
