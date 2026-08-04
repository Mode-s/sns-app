import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./reset.css";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  display: "swap",
  preload: false,
});


export const metadata: Metadata = {
  title: "SNSApp",
  description: "簡易的なSNSアプリです",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>{children}</body>
    </html>
  );
}
