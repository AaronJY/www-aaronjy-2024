import DefaultLayout from '@/layouts/DefaultLayout/DefaultLayout'
import React from 'react'
import Link from 'next/link'
import { getStaticEntryListProps } from '@/lib/content'
import { NextSeo } from 'next-seo'
import { formatDate } from '@/lib/helpers'

export const getStaticProps = () => getStaticEntryListProps('./content/writing', '/writing/')

export const Title = 'Writing'
export const Description = 'A collection of writing and musings on various topics that interest me, as well as technical writing.'

export default function Writing ({ entries, urlPrefix }) {
  return (
    <DefaultLayout>
      <NextSeo
        title={Title}
        description={Description}
        openGraph={
          {
            Title,
            Description
          }
        }
      />
      <section>
        <h1>{Title} ✍🏻</h1>
        <p>{Description}</p>
      </section>

      <section>
        {entries.map((e) => (
          <div key={e.attributes.title}>
            <h2>
              <Link href={`${urlPrefix}${e.slug}`}>{e.attributes.title}</Link>
            </h2>
            {!!e.attributes.pubdate && <p>{formatDate(e.attributes.pubdate)}</p>}

            <p>{e.attributes.desc}</p>
            <Link href={`${urlPrefix}${e.slug}`}>Read more</Link>
          </div>
        ))}
      </section>
    </DefaultLayout>
  )
}
