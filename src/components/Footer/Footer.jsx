import React from 'react'

import style from './Footer.module.css'

function Footer() {
  return (
    <footer className={style.footer} data-testid='footer'>
      <hr />
      <nav>
        <div>
          <span>
            <a href='#'>Back to top</a>
          </span>{', '}
          <span>
            <a href='/static/pgp.txt'>PGP key</a>
          </span>{', '}
          <span>
            <a href='mailto:me@aaronjy.me'>Send me an email</a>
          </span>
        </div>

        <div>
          <small>2025 Aaron Yarborough</small>
        </div>
      </nav>


    </footer>
  )
}

export default Footer
