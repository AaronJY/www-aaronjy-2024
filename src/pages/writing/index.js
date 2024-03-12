import DefaultLayout from '@/layouts/DefaultLayout/DefaultLayout'
import { NextSeo } from 'next-seo'

export default function Writing () {
  return (
    <DefaultLayout>
      <NextSeo title='Writing' />
      <section>
        <h1>Writing</h1>
      </section>
      <section>
        <i>Nothing to see here yet!</i>
      </section>
    </DefaultLayout>
  )
}
