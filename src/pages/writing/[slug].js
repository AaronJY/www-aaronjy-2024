import { toSlug } from '@/lib/helpers'
import React from 'react'
import fs from 'fs'
import DefaultLayout from '@/layouts/DefaultLayout/DefaultLayout'
import { getMarkdownEntry } from '@/lib/content'
import Article from '@/components/Article/Article'

function FunSingle ({ attributes, html }) {
  return (
    <DefaultLayout>
      <Article attributes={attributes} html={html} />
    </DefaultLayout>
  )
}

export function getStaticPaths () {
  const fun = fs.readdirSync('./content/writing', { withFileTypes: true })

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
  const path = `./content/writing/${params.slug}.md`

  const entry = getMarkdownEntry(path)
  return { props: { ...entry } }
}

export default FunSingle
