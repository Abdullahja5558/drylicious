import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://drylicious.vercel.app"),

  title: {
    default: "Drylicious | Ghar Kay Masalay",
    template: "%s | Drylicious",
  },

  description:
    "Drylicious brings you 100% pure, unadulterated whole spices and premium ghar kay masalay in Pakistan. Fresh, organic, and hand-picked spices delivered to your home.",

  keywords: [
    "Drylicious",
    "Ghar Kay Masalay",
    "Whole Spices Pakistan",
    "Organic Masala",
    "Sabut Masala",
    "Premium Spices",
    "Pakistani Masala Brand",
    "Faisalabad Masala",
  ],

  authors: [{ name: "Drylicious" }],

  creator: "Drylicious",
  publisher: "Drylicious",

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "Drylicious | Premium Ghar Kay Masalay",
    description:
      "Buy premium quality whole spices and ghar kay masalay from Drylicious. 100% pure and organic spices in Pakistan.",
    url: "https://drylicious.vercel.app",
    siteName: "Drylicious",
    locale: "en_PK",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Drylicious | Premium Masalay",
    description:
      "100% pure whole spices and ghar kay masalay in Pakistan.",
  },

  

};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressContentEditableWarning
      suppressHydrationWarning
    >
      <body
      
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
        
        {children}
        </CartProvider>
      </body>
    </html>
  );
}