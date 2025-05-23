import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import "reset-css/reset.css";
import { GeneralTemplate } from "@ui/templates/general";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "アボカドプログラミング｜初心者でもアプリ開発ができるようになる",
  description: "アボカドでプログラミング",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicons/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicons/favicon.svg" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <GeneralTemplate>{children}</GeneralTemplate>
      </body>
    </html>
  );
}
