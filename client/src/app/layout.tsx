import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-burnr",
});


export const metadata: Metadata = {
  title: "Burnr - Temporary Email and Phone Numbers",
  description: "Get temporary emails and phone numbers instantly. No signup needed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body
        className="font-burnr"
      >
        {children}
      </body>
    </html>
  );
}
