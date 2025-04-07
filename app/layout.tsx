import "@/styles/globals.css";

import type { Metadata } from "next";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "PERCENTZERO",
  description: "포트폴리오",
};
const font = localFont({
  src: [
    {
      path: "../font/PretendardVariable.woff2",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={font.className}>
      <body>{children}</body>
    </html>
  );
}
