import Link from 'next/link'
import React from 'react'

import styles from './Header.module.css'

function Header () {
  return (
    <header className={styles.header}>
      <nav>
        <Link href='/'>Home</Link>
        {/* <Link href='/writing'>Writing</Link> */}
        <Link href='/cv'>CV</Link>
        <Link href='/fun'>Fun</Link>
      </nav>
    </header>
  )
}

export default Header
