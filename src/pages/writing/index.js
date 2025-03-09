import DefaultLayout from '@/layouts/DefaultLayout/DefaultLayout'
import React from 'react'
import { getStaticEntries } from '@/lib/content'
import { NextSeo } from 'next-seo'
import StaticContentList from '@/components/StaticContentList/StaticContentList'

export const getStaticProps = () => ({
  props: {
    postEntries: getStaticEntries('./content/writing')
  }
})

export const Title = 'Writing'

export default function Writing ({ postEntries }) {
  return (
    <DefaultLayout>
      <NextSeo
        title={Title}
        openGraph={
          {
            title: Title
          }
        }
      />
      <h1>{Title}</h1>

      <section>
        <StaticContentList entries={postEntries} urlPrefix='writing/' />
      </section>
    </DefaultLayout>
  )
}
