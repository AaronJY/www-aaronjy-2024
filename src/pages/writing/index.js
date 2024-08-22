import DefaultLayout from '@/layouts/DefaultLayout/DefaultLayout'
import React from 'react'
import Link from 'next/link'
import { getStaticEntryListProps } from '@/lib/content'
import { NextSeo } from 'next-seo'

export const getStaticProps = () => getStaticEntryListProps('./content/writing', '/writing/')

export default function Writing ({ entries, urlPrefix }) {
  const title = 'Writing'
  const description = 'Come get ya thoughts, ramblings, technical writing and other long-from text content here!'

  return (
    <DefaultLayout>
      <NextSeo
        title={title}
        description={description}
        openGraph={
          {
            title,
            description
          }
        }
      />
      <section>
        <h1>{title}</h1>
        <p>{description}</p>
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
