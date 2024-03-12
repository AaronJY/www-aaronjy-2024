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
    attributes,
    html,
    slug
  }
}
