import React from 'react'

import style from './DefaultLayout.module.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer'

import { Barlow } from 'next/font/google'

const fontMain = Barlow({ subsets: ['latin'], weight: ['400', '600'] })

function DefaultLayout ({ children }) {
  return (
    <div className={style.layout}>
      <Header />
      <main className={`${fontMain.className}`}>{children}</main>
      <Footer />
    </div>
  )
}

export default DefaultLayout
