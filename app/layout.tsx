import type { Metadata } from 'next'
import './globals.css'
import { AppWrapper } from '@/components/ui/app-wrapper'

export const metadata: Metadata = {
  metadataBase: new URL('https://marvlock.dev'),
  title: 'Project Marvlock — Design and Build Digital Products',
  description: 'We design and build digital products that define the future. From startups to enterprises — we craft intuitive, high-performance websites, apps, and dashboards.',
  icons: {
    icon: '/marvlock-logo.png',
    shortcut: '/marvlock-logo.png',
    apple: '/marvlock-logo.png',
  },
  openGraph: {
    title: 'Project Marvlock — Design and Build Digital Products',
    description: 'We design and build digital products that define the future. From startups to enterprises — we craft intuitive, high-performance websites, apps, and dashboards.',
    images: [
      {
        url: '/marvlock-logo.png',
        width: 1200,
        height: 630,
        alt: 'Project Marvlock Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Project Marvlock — Design and Build Digital Products',
    description: 'We design and build digital products that define the future.',
    images: ['/marvlock-logo.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <style>{`
html {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-heading: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
        `}</style>
      </head>
      <body className="dark">
        <AppWrapper>
          {children}
        </AppWrapper>
      </body>
    </html>
  )
}
