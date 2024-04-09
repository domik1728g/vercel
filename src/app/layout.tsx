import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "../../node_modules/next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fraud Check | Your Trusted Partner In Fraud Detection",
  description:
    "Fraud Check is your trusted partner in fraud detection. Our comprehensive database, which expands daily, provides free access to the insights you need to protect your personal finances or business operations. Choose Fraud Check for fast and effective fraud prevention services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
