import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import BrandLoader from "@/src/components/BrandLoader";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Watchcore | Desenvolvimento web sob medida",
  description:
    "Criamos sites, landing pages e aplicações web sob medida para ajudar seu negócio a avançar.",
  icons: {
    icon: "/brand/watchcore_logo2.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-sans">
        <BrandLoader />
        {children}
      </body>
    </html>
  );
}
