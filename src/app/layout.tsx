import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NutriPro',
  description: 'AI menu generator app',
  icons: {
    icon: '/favicons/favicon.ico',
    shortcut: '/favicons/favicon.ico',
    apple: '/favicons/favicon.ico',
    other: {
      rel: 'favicon',
      url: '/favicons/favicon.ico',
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
