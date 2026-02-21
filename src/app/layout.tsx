import type { Metadata } from "next";
import "./globals.css";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://yazan-khoulani.com"),
  title: {
    default: "في حبّك ثار الوطن | رواية يزن خولاني",
    template: "%s | في حبّك ثار الوطن",
  },
  description:
    "رواية واقعية عن حبٍّ لم يحتمل الصمت… ووطنٍ لم يحتمل الحقيقة. من تأليف يزن خولاني، صادرة عن ببلومانيا للنشر والتوزيع.",
  keywords: [
    "في حبك ثار الوطن",
    "يزن خولاني",
    "رواية عربية",
    "أدب عربي",
    "روايات واقعية",
    "حب ووطن",
    "أدب سوري",
  ],
  authors: [{ name: "يزن خولاني" }],
  creator: "يزن خولاني",
  publisher: "ببلومانيا للنشر والتوزيع",
  openGraph: {
    type: "book",
    locale: "ar_AR",
    url: "https://yazan-khoulani.com",
    siteName: "في حبّك ثار الوطن",
    title: "في حبّك ثار الوطن | رواية يزن خولاني",
    description:
      "رواية واقعية عن حبٍّ لم يحتمل الصمت… ووطنٍ لم يحتمل الحقيقة.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "غلاف رواية في حبّك ثار الوطن",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "في حبّك ثار الوطن | رواية يزن خولاني",
    description:
      "رواية واقعية عن حبٍّ لم يحتمل الصمت… ووطنٍ لم يحتمل الحقيقة.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://yazan-khoulani.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://yazan-khoulani.com" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1a472a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="في حبّك ثار الوطن" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Book",
              name: "في حبّك ثار الوطن",
              author: {
                "@type": "Person",
                name: "يزن خولاني",
                url: "https://yazan-khoulani.com/about-author",
              },
              publisher: {
                "@type": "Organization",
                name: "ببلومانيا للنشر والتوزيع",
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "EG",
                },
              },
              isbn: "9789779945980",
              datePublished: "2025",
              inLanguage: "ar",
              genre: "رواية",
              description:
                "رواية واقعية عن حبٍّ لم يحتمل الصمت… ووطنٍ لم يحتمل الحقيقة.",
            }),
          }}
        />
        <script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Service Worker Registration
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js');
                });
              }
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
        <ThemeProvider>
          <AnnouncementBar />
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <FloatingButtons />
        </ThemeProvider>
      </body>
    </html>
  );
}
