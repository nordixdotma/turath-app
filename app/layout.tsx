import type React from "react"
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
  display: "swap", // Add display strategy
  preload: true,
})

const yeseva = Yeseva_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-yeseva",
  display: "swap", // Add display strategy
  preload: true,
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-tomato", // We'll keep the same variable name for compatibility
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-y-scroll">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
      </head>
      <body className={`${inter.variable} ${yeseva.variable} ${outfit.variable} font-tomato overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            {/* Background image with overlay */}
            <div className="fixed inset-0 z-[-1]">
              <Image
                src="https://images.unsplash.com/photo-1699210259985-fba56d28c3df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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



import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
