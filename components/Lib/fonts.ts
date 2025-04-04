// lib/fonts.ts
import { Freckle_Face } from "next/font/google";
import { DM_Sans } from "next/font/google";

export const dmSans = DM_Sans({
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "1000",
  ],
  subsets: ["latin"],
});

export const freckleFace = Freckle_Face({
  weight: ["400"],
  subsets: ["latin"],
});
