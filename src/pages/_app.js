import '@/styles/globals.css'

import { Inter } from 'next/font/google'
import { DefaultSeo } from 'next-seo'

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] })

export default function App ({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <DefaultSeo defaultTitle='Aaron Yarborough' titleTemplate='%s | Aaron Yarborough' />
      <Component {...pageProps} />
    </main>
  )
}
