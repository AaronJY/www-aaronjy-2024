import fs from 'fs'
import fm from 'front-matter'
import showdown from 'showdown'
import { toSlug } from './helpers'

export function getMarkdownEntry (path) {
  const fileContents = fs.readFileSync(path, {
    encoding: 'utf-8'
  })

  const { attributes, body } = fm(fileContents)

  const converter = new showdown.Converter()
  const html = converter.makeHtml(body)

  const slug = toSlug(path.substring(path.lastIndexOf('/') + 1))

  return {
    attributes: {
      ...attributes,
      pubdate: attributes.pubdate?.toUTCString() ?? null

    },
    html,
    slug
  }
}

export function getStaticEntryPaths (contentPath) {
  const entries = fs.readdirSync(contentPath, { withFileTypes: true })

  const paths = entries.map((dirent) => ({
    params: {
      slug: toSlug(dirent.name)
    }
  }))

  return {
    fallback: false,
    paths
  }
}

export function getStaticEntryProps (contentPath, { params }) {
  const path = `${contentPath}/${params.slug}.md`
  const entry = getMarkdownEntry(path)
  const { attributes } = entry

  return { props: { ...entry, attributes } }
}

export function getStaticEntryListProps (contentPath, urlPrefix) {
  const fun = fs.readdirSync(contentPath, { withFileTypes: true })
  const entries = fun.map((dirent) =>
    getMarkdownEntry(`${dirent.path}/${dirent.name}`)
  ).sort((a, b) => new Date(b.attributes.pubdate) - new Date(a.attributes.pubdate))

  return { props: { entries, urlPrefix } }
}
