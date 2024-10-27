import { formatDate } from '@/lib/helpers'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import React from 'react'
import * as feather from 'feather-icons'

function Article ({ attributes, html }) {
  return (
    <section>
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
        <Link href='./'>
          <p className='row'>
            <span className='icon icon-left' dangerouslySetInnerHTML={{ __html: feather.icons['arrow-left'].toSvg() }} />
            <span>Go back</span>
          </p>
        </Link>
        <h1>{attributes.title}</h1>
        <p>{attributes.desc}</p>
        {attributes.pubdate && <p>{formatDate(attributes.pubdate)}</p>}
        <hr />
        <div data-test='content' dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </section>
  )
}

export default Article
