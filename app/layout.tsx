import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Freckle_Face } from "next/font/google";
import { DM_Sans } from "next/font/google";
import "./globals.css";



const dmsans = DM_Sans({
  weight:['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000'],
  subsets:["latin"]
})

const freckleface = Freckle_Face({
  weight: ['400'],
  subsets:["latin"]
})

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

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
      <body
        className={`${dmsans.className} ${freckleface.className}  antialiased`} 
      >
        {children}
      </body>
    </html>
  );
}
