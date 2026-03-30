import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drylicious.vercel.app"),

  title: {
    default: "Drylicious Global Foods | Buy Pure Spices Online in Pakistan",
    template: "%s | Drylicious",
  },

  description:
    "Buy 100% pure, organic whole spices and ghar kay masalay online in Pakistan. Drylicious offers premium quality masalay with fast delivery.",

  keywords: [
    "Drylicious Global Foods",
    "Buy Spices Online Pakistan",
    "Whole Spices Pakistan",
    "Ghar Kay Masalay",
    "Organic Masala Pakistan",
    "Sabut Masala",
    "Premium Spices Pakistan",
    "Best Masala Brand Pakistan",
    "Faisalabad Spices",
  ],

  authors: [{ name: "Drylicious" }],
  creator: "Drylicious",
  publisher: "Drylicious",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://drylicious.vercel.app",
  },

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "Drylicious | Premium Ghar Kay Masalay",
    description:
      "Buy premium quality whole spices and ghar kay masalay from Drylicious. 100% pure spices in Pakistan.",
    url: "https://drylicious.vercel.app",
    siteName: "Drylicious",
    images: [
      {
        url: "https://drylicious.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Drylicious Masalay",
      },
    ],
    locale: "en_PK",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Drylicious | Premium Masalay",
    description:
      "100% pure whole spices and ghar kay masalay in Pakistan.",
    images: ["https://drylicious.vercel.app/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* --- ORGANIZATION SCHEMA --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Drylicious Global Foods",
              url: "https://drylicious.vercel.app",
              logo: "https://drylicious.vercel.app/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+923367999509",
                contactType: "customer service",
                areaServed: "PK",
                availableLanguage: ["English", "Urdu"],
              },
              sameAs: [
                "https://www.facebook.com/dryliciousfoods",
                "https://www.instagram.com/dryliciousfoods",
              ],
            }),
          }}
        />

        {/* --- WEBSITE SEARCH SCHEMA --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: "https://drylicious.vercel.app",
              name: "Drylicious Global Foods",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://drylicious.vercel.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* --- GOOGLE ANALYTICS --- */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#FBF9F4] text-[#111111]`}
      >
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}