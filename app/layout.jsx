// The frame around every page: fonts, the top menu and the footer.

import { Fraunces, Inter } from "next/font/google";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import "./globals.css";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-heading" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata = {
  title: {
    default: "Stones of Scotland · A rock collector's guide",
    template: "%s · Stones of Scotland",
  },
  description:
    "Find, identify and collect the rocks, gemstones and minerals of Scotland, from agates on the beach to gold in the burns.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
