import type { Metadata } from 'next'
import { Beth_Ellen, Courier_Prime } from 'next/font/google'
import './globals.css'

const bethEllen = Beth_Ellen({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-logo',
})

const courierPrime = Courier_Prime({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Mona — Fashion Designer',
  description:
    'Fashion designer and creative pattern maker based in Barcelona, working internationally. Reclaiming textiles with a past — antique quilts, tapestries, and found objects.',
  generator: 'v0.app',
}

export const viewport = {
  themeColor: '#f8f5f0',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${courierPrime.variable} ${bethEllen.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
