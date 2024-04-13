import React from 'react'

import style from './DefaultLayout.module.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

import { Ubuntu } from 'next/font/google'

const fontMain = Ubuntu({ subsets: ['latin'], weight: ['400', '500'] })

function DefaultLayout ({ children }) {
  return (
    <main className={`${style.layout} ${fontMain.className}`}>
      <Header />
      <article>{children}</article>
      <Footer />
    </main>
  )
}

export default DefaultLayout
