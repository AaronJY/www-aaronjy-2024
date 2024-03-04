import React from 'react'

function Footer () {
  return (
    <footer>
      <nav>
        <ul>
          <li>
            <a href='#'>back to top</a>
          </li>
          <li>
            <a href='mailto:me@aaronjy.me'>send me an email</a>
          </li>
        </ul>
      </nav>

      <nav>
        <ul>
          <li>
            <small>
              2024 Aaron Yarborough, made with{' '}
              <a
                target='_blank'
                rel='nofollow noopener noreferrer'
                href='https://nextjs.org/'
              >
                Next.js
              </a>{' '}
              and{' '}
              <a
                target='_blank'
                rel='nofollow noopener noreferrer'
                href='https://yegor256.github.io/tacit/'
              >
                Tacit
              </a>
            </small>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
