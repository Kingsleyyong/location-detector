import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AuthProvider from './context/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Location Detection App',
    description: '',
    generator: 'Next.js',
    manifest: '/manifest.json',
    keywords: ['nextjs', 'nextjs13', 'next13', 'pwa', 'next-pwa'],
    themeColor: [{ media: '(prefers-color-scheme: dark)', color: '#fff' }],
    authors: [{ name: 'Kingsley Yong' }],
    appleWebApp: {
        title: 'Location Detection App',
    },
    viewport:
        'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover',
    icons: [
        { rel: 'apple-touch-icon', url: 'icons/icon-128x128.png' },
        { rel: 'icon', url: 'icons/icon-192x192.png' },
        { rel: 'icon', url: 'icons/icon-256x256.png' },
        { rel: 'icon', url: 'icons/icon-384x384.png' },
        { rel: 'icon', url: 'icons/icon-512x512.png' },
    ],
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={inter.className} suppressHydrationWarning={true}>
                <AuthProvider>{children}</AuthProvider>
            </body>
        </html>
    )
}
