import type { Metadata, Viewport } from 'next'
import { Inter, Source_Code_Pro } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-source-code-pro',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://zalci.net'),
  title: {
    default: 'Zalci - Game Programmer & Tool Developer',
    template: '%s | Zalci',
  },
  description: 'C++、Unity、DirectXによるゲームプログラミングと、AIを活用した開発ツール制作の記録。',
  keywords: ['Zalci', 'Game Programmer', 'ゲームプログラマー', 'Unity', 'C++', 'DirectX', 'AI Tools', 'ゲーム開発'],
  authors: [{ name: 'Zalci' }],
  creator: 'Zalci',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://zalci.net',
    title: 'Zalci - Game Programmer & Tool Developer',
    description: 'C++、Unity、DirectXによるゲームプログラミングと、AIを活用した開発ツール制作の記録。',
    siteName: 'Zalci',
    /* images: [
      {
        url: '/og-image.jpg', // 準備ができたら追加
        width: 1200,
        height: 630,
        alt: 'Zalci Portfolio OG Image',
      },
    ], */
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zalci - Game Programmer & Tool Developer',
    description: 'C++、Unity、DirectXによるゲームプログラミングと、AIを活用した開発ツール制作の記録。',
    // creator: '@your_twitter_id',
    // images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://zalci.net',
  },
}

export const viewport: Viewport = {
  themeColor: '#f8fafc',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} ${sourceCodePro.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
