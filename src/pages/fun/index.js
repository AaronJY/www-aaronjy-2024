import DefaultLayout from '@/layouts/DefaultLayout/DefaultLayout'
import React from 'react'
import Link from 'next/link'
import { getStaticEntryListProps } from '@/lib/content'

export const getStaticProps = () => getStaticEntryListProps('./content/fun', '/fun/')

export default function Fun ({ entries, urlPrefix }) {
  return (
    <DefaultLayout>
      <section>
        <h1>Fun</h1>
        <p>Hobby projects, helpful scripts, and other fun bits and bobs!</p>
      </section>

      <section>
        {entries.map((e) => (
          <div key={e.attributes.title}>
            <h2>
              <Link href={`${urlPrefix}${e.slug}`}>{e.attributes.title}</Link>
            </h2>
            {!!e.attributes.pubdate && <p>{e.attributes.pubdate}</p>}

            <p>{e.attributes.desc}</p>
            <Link href={`${urlPrefix}${e.slug}`}>Read more</Link>
          </div>
        ))}
      </section>
    </DefaultLayout>
  )
}
