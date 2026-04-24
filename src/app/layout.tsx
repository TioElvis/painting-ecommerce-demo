import "./globals.css";
import type { Metadata } from "next";
import { Noto_Serif } from "next/font/google";

import { cn } from "@/lib/utils";

const notoSerif = Noto_Serif({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "Painting E-commerce Demo",
  description: "This is a demo for an e-commerce that sells painting.",
};

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <html
      lang="en"
      className={cn("antialiased", "font-sans", notoSerif.variable)}>
      <body className="h-screen relative flex flex-col gap-4 md:gap-8 lg:gap-12">
        {children}
      </body>
    </html>
  );
}
