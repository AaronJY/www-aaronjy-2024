import DefaultLayout from '@/layouts/DefaultLayout/DefaultLayout'
import React from 'react'
import fs from 'fs'
import Link from 'next/link'
import { getMarkdownEntry } from '@/lib/content'

function Fun ({ entries }) {
  return (
    <DefaultLayout>
      <section>
        <h1>Writing</h1>
        <p>Hobby projects, helpful scripts, and other fun bits and bobs!</p>
      </section>

      <section>
        {entries.map((e) => (
          <div key={e.attributes.title}>
            <h2>
              <Link href={'/writing/' + e.slug}>{e.attributes.title}</Link>
            </h2>
            <p>{e.attributes.desc}</p>
            <Link href={'/writing/' + e.slug}>Read more</Link>
          </div>
        ))}
      </section>
    </DefaultLayout>
  )
}

export function getStaticProps () {
  const fun = fs.readdirSync('./content/writing', { withFileTypes: true })

  const entries = fun.map((dirent) =>
    getMarkdownEntry(`${dirent.path}/${dirent.name}`)
  )

  return { props: { entries } }
}

export default Fun
