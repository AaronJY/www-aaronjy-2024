import DefaultLayout from '@/layouts/DefaultLayout/DefaultLayout'
import React from 'react'
import Link from 'next/link'
import { getStaticEntryListProps } from '@/lib/content'

export const getStaticProps = () => getStaticEntryListProps('./content/recipes', '/recipes/')

export default function Recipes ({ entries, urlPrefix }) {
  return (
    <DefaultLayout>
      <section>
        <h1>Recipes</h1>
        <p>Some of my favourite recipes. Most of them are variations of recipes I have found online, but some I&apos;ve cooked up myself!</p>
      </section>

      <section>
        {entries.map((e) => (
          <div key={e.attributes.title}>
            <h2>
              <Link href={`${urlPrefix}${e.slug}`}>{e.attributes.title}</Link>
            </h2>
            <p>{e.attributes.desc}</p>
            <Link href={`${urlPrefix}${e.slug}`}>Read more</Link>
          </div>
        ))}
      </section>
    </DefaultLayout>
  )
}
