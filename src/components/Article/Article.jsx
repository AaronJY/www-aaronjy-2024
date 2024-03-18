import { NextSeo } from 'next-seo'
import React from 'react'

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
        <h1>{attributes.title}</h1>
        <p>{attributes.desc}</p>
        {attributes.pubdate && <p>{attributes.pubdate}</p>}
        <hr />
        <div data-test='content' dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </section>
  )
}

export default Article
