import type { Metadata } from 'next'
import 'modern-css-reset'
import './globals.css'

export const metadata: Metadata = {
  title: 'しろね✨ | aqyuki.dev',
  description: 'しろね✨のポートフォリとサイトです｡',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
