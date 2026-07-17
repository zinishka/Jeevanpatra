import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JeevanPatra - Record of Life | Birth & Death Registration',
  description: 'Official government portal for birth and death registration. Recording every life with dignity and care across India.',
  authors: [{ name: 'Government of India' }],
  openGraph: {
    title: 'JeevanPatra - Record of Life | Birth & Death Registration',
    description: 'Official government portal for birth and death registration. Recording every life with dignity and care across India.',
    type: 'website',
    url: 'https://jeevanpatra.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@jeevanpatra',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
