import { NextSeo } from 'next-seo'
import React from 'react'

function Article ({ attributes, html }) {
  return (
    <section>
      <NextSeo
        title={attributes.title} description={attributes.desc} openGraph={
        {
          title: attributes.title,
          description: attributes.desc
        }
      }
      />
      <div>
        <h1>{attributes.title}</h1>
        <p>{attributes.desc}</p>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </section>
  )
}

export default Article