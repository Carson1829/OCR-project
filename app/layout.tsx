import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Merienda } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const merien = Merienda({subsets: ['latin']})
const classes = `${inter.className} ${merien.className}`

export const metadata: Metadata = {
    title: 'ECS 170 OCR Demo',
    description: 'Optical Character Recognition Demo for ECS 170',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={classes}>{children}</body>
    </html>
  )
}
