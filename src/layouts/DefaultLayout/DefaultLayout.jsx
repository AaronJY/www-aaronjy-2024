import React from 'react'

import style from './DefaultLayout.module.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Head from 'next/head'

function DefaultLayout ({ children }) {
  return (
    <main className={`${style.layout}`}>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        <link href='https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,100..900;1,100..900&display=swap' rel='stylesheet' />
      </Head>
      <Header />
      <>{children}</>
      <Footer />
    </main>
  )
}

export default DefaultLayout
