import type { Metadata } from "next";
import { Bodoni_Moda } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "PERCENTZERO",
  description: "Striving for the ideal through refined sensibility.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={bodoniModa.className}>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
