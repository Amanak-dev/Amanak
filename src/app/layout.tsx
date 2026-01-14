import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Footer from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/Navbar";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "أمانك - منصة المفقودات",
  description: "منصة أمانك لتسهيل العثور على المفقودات وربط المجتمع بشكل فوري وآمن.",
  keywords: [
    "أمانك",
    "مفقودات",
    "أشخاص مفقودين",
    "بحث سريع",
    "أمان البيانات",
    "التواصل المجتمعي",
    "منصة المفقودات"
  ],
  authors: [
    { name: "فريق أمانك" }
  ],
  openGraph: {
    title: "أمانك - منصة المفقودات والاشخاص المفقودين",
    description: "أمانك منصة مبتكرة لربط المفقودات بأصحابها بسرعة وأمان. ساعد في العثور على الأشياء والأشخاص المفقودين بمشاركة فورية وموثوقة في مجتمعك.",
    url: "https://amanak.com", 
    siteName: "Amanak",
    images: [
      {
        url: "/AmanakLogo.jpeg", 
        width: 1200,
        height: 630,
        alt: "أمانك - منصة المفقودات"
      }
    ],
    locale: "ar_EG",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} antialiased font-cairo`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
