import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/header";
import "./globals.css";
import Image from "next/image";
import './mouse.js'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AstroMood",
  description: "A mood tracker that lets you explore your emotions in a cosmic journey",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen min-w-full flex flex-col`}
      >
        <Header />
        <div className="absolute inset-0 z-0"><Image src="/bg.png" alt="bg" layout="fill" objectFit="cover" /></div>
        <div className="absolute inset-0 z-1 bg-black/30"></div>
        <div className="absolute inset-0 opacity-10 animate-customPulse">
            <Image src="/galaxy.png" alt="galaxy" layout="fill" objectFit="fill" />
        </div>
        <div className="relative text-white h-full w-full flex justify-center items-center content-center bg-cover overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
