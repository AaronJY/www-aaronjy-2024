import React from 'react'
import DefaultLayout from '@/layouts/DefaultLayout/DefaultLayout'
import { getStaticEntryPaths, getStaticEntryProps } from '@/lib/content'
import Article from '@/components/Article/Article'

export const getStaticPaths = () => getStaticEntryPaths("./content/writing")
export const getStaticProps = (ctx) => getStaticEntryProps("./content/writing", ctx)

export default function WritingSingle ({ attributes, html }) {
  return (
    <DefaultLayout>
      <Article attributes={attributes} html={html} />
    </DefaultLayout>
  )
}
