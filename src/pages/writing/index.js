import DefaultLayout from '@/layouts/DefaultLayout/DefaultLayout'
import React from 'react'
import Link from 'next/link'
import { getStaticEntryListProps } from '@/lib/content'

export const getStaticProps = () => getStaticEntryListProps('./content/writing', '/writing/')

export default function Writing ({ entries, urlPrefix }) {
  return (
    <DefaultLayout>
      <section>
        <h1>Writing</h1>
        <p>
          Come get ya thoughts, ramblings, technical writing and other
          long-from text content here!
        </p>
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
