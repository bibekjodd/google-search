import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LoadingBar from "@/components/LoadingBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Google Search",
  description: "google search clone",
  authors: { name: "bibekjodd", url: "https://github.com/bibekjodd" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LoadingBar />
        {children}
      </body>
    </html>
  );
}
