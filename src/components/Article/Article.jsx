import { formatDate } from '@/lib/helpers'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import React from 'react'

function Article ({ attributes, html }) {
  return (
    <>
      <h1>{attributes.title}</h1>
      <article>
        <NextSeo
          title={attributes.title} description={attributes.desc} openGraph={
            {
              title: attributes.title,
              description: attributes.desc,
              type: 'article',
              article: {
                publishedTime: attributes.pubdate ?? null
              }
            }
          }
        />
        <div>
          <Link href='./'>Back...</Link>
          {attributes.pubdate && <p>{formatDate(attributes.pubdate)}</p>}
          <div data-test='content' dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </article>
    </>

  )
}

export default Article
