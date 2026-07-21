import type { Metadata, Viewport } from 'next'

import './globals.css'

import { ThemeProvider } from 'next-themes'
import { Overpass_Mono } from 'next/font/google'

export const metadata: Metadata = {
	description: 'Track how many days you have left in the year',
	metadataBase: new URL('https://everyday.cargill.dev'),
	openGraph: {
		description: 'Track how many days you have left in the year',
		siteName: 'Dan Cargill',
		title: 'Dan Cargill',
		url: 'https://everyday.cargill.dev'
	},
	title: 'Everyday | Dan Cargill',
	twitter: {
		card: 'summary_large_image'
	}
}
export const viewport: Viewport = {
	initialScale: 1,
	minimumScale: 1,
	themeColor: [
		{
			color: '#100f0f',
			media: '(prefers-color-scheme: dark)'
		},
		{
			color: '#fffcf0',
			media: '(prefers-color-scheme: light)'
		}
	],
	width: 'device-width'
}

const mono = Overpass_Mono({
	subsets: ['latin'],
	weight: '300'
})

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${mono.className} bg-background text-foreground select-none`}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
