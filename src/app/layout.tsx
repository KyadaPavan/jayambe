import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrolling } from "@/components/layout/SmoothScrolling";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Jai Shree Radha Plywood | Plywood Supplier in Araria, Bihar",
  description: "Strong, durable plywood for furniture, interiors and construction. Bulk supply for dealers, carpenters and builders across Bihar. Call +91 70911 61465.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${poppins.variable} font-poppins bg-[var(--color-cream)] text-[var(--color-ink)] antialiased selection:bg-[var(--color-amber)] selection:text-white`} suppressHydrationWarning>
        <SmoothScrolling>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
