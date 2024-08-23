import React from 'react'

import style from './DefaultLayout.module.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

function DefaultLayout ({ children }) {
  return (
    <main className={`${style.layout}`}>
      <Header />
      <article>{children}</article>
      <Footer />
    </main>
  )
}

export default DefaultLayout
