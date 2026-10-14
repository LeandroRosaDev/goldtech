import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { seoConfig } from "@/content/site"
import { Footer } from "@/components/layout/Footer"
import { Header } from "@/components/layout/Header"
import { ScrollToTop } from "@/components/layout/ScrollToTop"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: seoConfig.title,
    template: "%s — Goldtech",
  },
  description: seoConfig.description,
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-ink">
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
