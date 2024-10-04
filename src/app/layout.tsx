import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Loading from "@/components/Loading";
import { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Find Your Flight",
  description: "An app to search for flights",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense fallback={<Loading/>}>
          {children}
          <Toaster />
        </Suspense>
        
      </body>
    </html>
  );
}
