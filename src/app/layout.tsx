import '@/styles/globals.css'
import { ReactNode } from 'react'
import { Inter } from 'next/font/google'

import StyledComponentsRegistry from '@/app/registry'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: {
    default: 'NAVIR',
    template: '%s | NAVIR',
  },
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Header />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <Footer />
      </body>
    </html>
  )
}
