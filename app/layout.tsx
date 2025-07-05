import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Dr. Serena Blake, PsyD - Compassionate Therapy in Los Angeles",
  description:
    "Licensed clinical psychologist offering anxiety therapy, relationship counseling, and trauma recovery in Los Angeles. In-person and online sessions available. Book your free consultation today.",
  keywords:
    "therapist Los Angeles, clinical psychologist, anxiety therapy, relationship counseling, trauma recovery, EMDR, CBT, online therapy, Dr. Serena Blake",
  authors: [{ name: "Dr. Serena Blake" }],
  openGraph: {
    title: "Dr. Serena Blake, PsyD - Compassionate Therapy in Los Angeles",
    description:
      "Licensed clinical psychologist offering anxiety therapy, relationship counseling, and trauma recovery. Book your free consultation today.",
    type: "website",
    locale: "en_US",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
