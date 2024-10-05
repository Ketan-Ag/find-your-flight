import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Loading from "@/components/Loading";
import { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";

const neueMontreal = localFont({
  src: "./fonts/NeueMontreal-Regular.otf",
  variable: "--font-neue-montreal-regular",
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
        className={`${neueMontreal.variable} antialiased font-neueMontreal`}
      >
        <Suspense fallback={<Loading/>}>
          {children}
          <Toaster />
        </Suspense>
        
      </body>
    </html>
  );
}
