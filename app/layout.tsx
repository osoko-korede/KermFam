import type { Metadata } from "next";
import { dmSans } from "../components/Lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "KermFam",
  description: "The next Biggest Memecoin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className}  antialiased`}>{children}</body>
    </html>
  );
}
