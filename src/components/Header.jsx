import Link from 'next/link'
import React from 'react'

function Header () {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href='/'>home</Link>
          </li>
          <li>
            <Link href='/writing'>writing</Link>
          </li>
          <li>
            <Link href='/recipes'>recipes</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
