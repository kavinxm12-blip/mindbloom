import type { Metadata } from 'next'
import './globals.css'
import { Providers } from '@/components/providers'

const metadata: Metadata = {
  title: 'MindBloom - Track Your Emotions',
  description: 'Track your emotions. Understand yourself. Grow every day.',
}

export { metadata }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}