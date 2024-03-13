import React from 'react'
import DefaultLayout from '@/layouts/DefaultLayout/DefaultLayout'
import Article from '@/components/Article/Article'
import { getStaticEntryPaths, getStaticEntryProps } from '@/lib/content'

const CONTENT_PATH = './content/fun'

export const getStaticPaths = () => getStaticEntryPaths(CONTENT_PATH)
export const getStaticProps = (ctx) => getStaticEntryProps(CONTENT_PATH, ctx)

export default function FunSingle ({ attributes, html }) {
  return (
    <DefaultLayout>
      <Article attributes={attributes} html={html} />
    </DefaultLayout>
  )
}
