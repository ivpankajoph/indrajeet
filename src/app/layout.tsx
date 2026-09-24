import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";
import { EMAIL_ADDRESS } from "@/lib/whatsapp";

export const viewport: Viewport = {
  themeColor: "#2e7d32",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://aardhyagreennursery.com"),
  title: "Aardhya Green Nursery | Plants, Pots & Gardening Services in Greater Noida",
  description:
    "Aardhya Green Nursery in Greater Noida offers indoor, outdoor, flowering and fruit plants, pots, fertilizers, soil, gardening, landscaping and home plant delivery across selected Delhi NCR areas.",
  keywords: [
    "Aardhya Green Nursery",
    "plant nursery in Greater Noida",
    "plants in Greater Noida",
    "plants in Noida",
    "indoor plants Delhi NCR",
    "outdoor plants Greater Noida",
    "flowering plants",
    "fruit plants",
    "pots and planters",
    "fertilizers and manure",
    "soil and potting mix",
    "gardening services Greater Noida",
    "landscaping services Noida",
    "home plant delivery Delhi NCR",
    "Ghaziabad plant delivery",
  ],
  authors: [{ name: "Aardhya Green Nursery" }],
  icons: {
    icon: "/images/logo.jpeg",
  },
  openGraph: {
    title: "Aardhya Green Nursery | Plants, Pots & Gardening Services in Greater Noida",
    description:
      "Aardhya Green Nursery in Greater Noida offers indoor, outdoor, flowering and fruit plants, pots, fertilizers, soil, gardening, landscaping and home plant delivery across selected Delhi NCR areas.",
    url: "https://aardhyagreennursery.com",
    siteName: "Aardhya Green Nursery",
    images: [
      {
        url: "/images/logo.jpeg",
        width: 800,
        height: 600,
        alt: "Aardhya Green Nursery",
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
    name: "Aardhya Green Nursery",
    description:
      "Aardhya Green Nursery in Greater Noida offers indoor, outdoor, flowering and fruit plants, pots, fertilizers, soil, gardening, landscaping and home plant delivery across selected Delhi NCR areas.",
    url: "https://aardhyagreennursery.com",
    telephone: "+918076754604",
    email: EMAIL_ADDRESS,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Atul Marg, Near Ace Spuire ke Samne, Amrapali Leisure Valley",
      addressLocality: "Noida, Greater Noida",
      addressRegion: "Uttar Pradesh",
      postalCode: "201301",
      addressCountry: "IN",
    },
    areaServed: [
      "Greater Noida",
      "Noida",
      "Delhi NCR",
      "Ghaziabad",
    ],
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
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
