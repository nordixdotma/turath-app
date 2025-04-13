import type React from "react"
import type { Metadata } from "next"
import { Inter, Yeseva_One, Outfit } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/hooks/use-language"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"

// Optimize font loading to prevent preload warnings
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
})

const yeseva = Yeseva_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-yeseva",
  display: "swap",
  preload: true,
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-tomato", // We'll keep the same variable name for compatibility
  display: "swap",
})

// SEO metadata
export const metadata: Metadata = {
  title: "Turâth Association | Preserving Marrakech's Heritage",
  description:
    "Turâth is a non-profit Moroccan association established in 2021 with the aim of preserving the tangible and intangible heritage of Marrakech and its surrounding region.",
  keywords: ["Marrakech", "heritage", "culture", "preservation", "Morocco", "non-profit", "association", "Turâth"],
  authors: [{ name: "Turâth Association" }],
  creator: "Turâth Association",
  publisher: "Turâth Association",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://turath.org/",
    title: "Turâth Association | Preserving Marrakech's Heritage",
    description: "Preserving the tangible and intangible heritage of Marrakech and its region",
    siteName: "Turâth Association",
    images: [
      {
        url: "https://associationturath.org/wp-content/uploads/2023/07/turath.png",
        width: 800,
        height: 600,
        alt: "Turâth Association Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Turâth Association | Preserving Marrakech's Heritage",
    description: "Preserving the tangible and intangible heritage of Marrakech and its region",
    images: ["https://associationturath.org/wp-content/uploads/2023/07/turath.png"],
  },
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-y-scroll">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${inter.variable} ${yeseva.variable} ${outfit.variable} font-tomato overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            {/* Background image with overlay */}
            <div className="fixed inset-0 z-[-1]">
              <Image
                src="/PHOTOS-JDP/DSC06271.jpg"
                alt="Background"
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/70"></div>
            </div>

            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

