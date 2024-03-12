import { toSlug } from '@/lib/helpers'
import React from 'react'
import fs from 'fs'
import DefaultLayout from '@/layouts/DefaultLayout/DefaultLayout'
import { getMarkdownEntry } from '@/lib/content'

function FunSingle ({ attributes, html, slug }) {
  return (
    <DefaultLayout>
      <section>
        <div />
        <h1>{attributes.title}</h1>
        <p>{attributes.desc}</p>
      </section>
      <section>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </section>
    </DefaultLayout>
  )
}

export function getStaticPaths () {
  const fun = fs.readdirSync('./content/fun', { withFileTypes: true })

  const paths = fun.map((dirent) => ({
    params: {
      slug: toSlug(dirent.name)
    }
  }))

  return {
    fallback: false,
    paths
  }
}

export function getStaticProps ({ params }) {
  const path = `./content/fun/${params.slug}.md`

  const entry = getMarkdownEntry(path)
  return { props: { ...entry } }
}

export default FunSingle
