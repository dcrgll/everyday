import type { Metadata, Viewport } from 'next'

import './globals.css'

import { Overpass_Mono } from 'next/font/google'
import { ThemeProvider } from 'next-themes'

export const metadata: Metadata = {
  metadataBase: new URL('https://everyday.cargill.dev'),
  title: 'Everyday | Dan Cargill',
  description: 'Track how many days you have left in the year',
  twitter: {
    card: 'summary_large_image'
  },
  openGraph: {
    url: 'https://everyday.cargill.dev',
    title: 'Dan Cargill',
    description: 'Track how many days you have left in the year',
    siteName: 'Dan Cargill'
  }
}
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,

  themeColor: [
    {
      media: '(prefers-color-scheme: dark)',
      color: '#100f0f'
    },
    {
      media: '(prefers-color-scheme: light)',
      color: '#fffcf0'
    }
  ]
}

const mono = Overpass_Mono({
  weight: '300',
  subsets: ['latin']
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${mono.className} bg-background text-foreground select-none`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
