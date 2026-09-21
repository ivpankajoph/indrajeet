import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const viewport: Viewport = {
  themeColor: "#2e7d32",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://patelglobalgreen.com"),
  title: "Patel Global Green | Buy Plants Online in Delhi NCR | Indoor & Outdoor Plants In Noida",
  description:
    "Patel Global Green Nursery offers indoor plants, outdoor plants, flowering plants, bonsai, herbs and gardening accessories with home delivery.",
  keywords: [
    "indoor plants",
    "outdoor plants",
    "nursery",
    "bonsai",
    "flowering plants",
    "herbs",
    "climbers",
    "gardening",
    "buy plants online delhi ncr",
    "plants in noida",
  ],
  authors: [{ name: "Patel Global Green" }],
  icons: {
    icon: "/images/logo.jpeg",
  },
  openGraph: {
    title: "Patel Global Green Nursery",
    description: "Buy Indoor & Outdoor Plants Online",
    url: "https://patelglobalgreen.com",
    siteName: "Patel Global Green",
    images: [
      {
        url: "/images/logo.avif",
        width: 800,
        height: 600,
        alt: "Patel Global Green Nursery",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GardenStore",
    name: "Patel Global Green Nursery",
    description: "Indoor and Outdoor Plants Nursery in Noida & Delhi NCR",
    url: "https://patelglobalgreen.com",
    telephone: "+917292009034",
    email: "patelglobalgreen9034@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Atul Marg, Near Ace Spuire ke Samne, Amrapali Leisure Valley",
      addressLocality: "Noida, Greater Noida",
      addressRegion: "Uttar Pradesh",
      postalCode: "201301",
      addressCountry: "IN",
    },
  };

  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500;600&family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
