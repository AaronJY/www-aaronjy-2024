import React from 'react'

function Article ({ attributes, html }) {
  return (
    <section>
      <article>
        <h1>{attributes.title}</h1>
        <p>{attributes.desc}</p>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </section>
  )
}

export default Article
