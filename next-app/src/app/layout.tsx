import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { UIProvider } from './provider'
import "./globals.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ryutaro Portfolio",
  description: "Ryutaro Asahara's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <UIProvider>
        <body className={inter.className}>{children}</body>
      </UIProvider>
    </html>
  );
}
