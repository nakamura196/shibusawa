import type { Metadata } from "next";
import Header from "@/components/base/Header";
import Footer from "@/components/base/Footer";

import "./globals.css";

export const metadata: Metadata = {
  title: "渋沢栄一伝記資料 可視化サイト",
  description: "渋沢栄一伝記資料 可視化サイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        {/* <SessionProvider></SessionProvider> */}
        <Footer />
      </body>
    </html>
  );
}
