import type { Metadata } from "next";
import { Anton, Fraunces, Inter } from "next/font/google";
import "./globals.css";
import MeshBackground from "@/components/MeshBackground";
import SplashScreen from "@/components/SplashScreen";

const anton = Anton({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-body",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-ui",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Byaquta — Portfolio",
  description: "Building data driven intelligent solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="relative isolate min-h-full overflow-x-hidden bg-background font-ui text-text-body">
        <SplashScreen />
        <div className="print:hidden" aria-hidden="true">
          <MeshBackground />
        </div>
        <div className="relative z-10 flex min-h-full flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
