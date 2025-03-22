import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/linelogo.png",
    href: "/linelogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${monaSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
