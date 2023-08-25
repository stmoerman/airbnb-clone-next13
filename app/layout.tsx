import "./globals.css";

import Navbar from "./components/navbar/Navbar";
import Modal from "./components/modals/Modal";

import { Nunito } from "next/font/google";
const nunito = Nunito({ subsets: ["latin"] });

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Airbnb clone",
  description: "Airbnb clone built using Next.js 13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Modal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
