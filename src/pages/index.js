import Head from 'next/head'
import DefaultLayout from '@/layouts/DefaultLayout/DefaultLayout'
import Link from 'next/link'

import StaticContentList from '@/components/StaticContentList/StaticContentList'
import { getStaticEntries } from '@/lib/content'

export const getStaticProps = () => ({
  props: {
    postEntries: getStaticEntries("content/writing")
  }
})

export default function Home({ postEntries }) {
  return (
    <DefaultLayout>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Hello!</h1>

      <section>
        <p>
          I&apos;m Aaron, a Brit living in Newcastle-upon-tyne, UK. I
          work professionally as a Software Engineer, and study
          languages, history and philosophy in my spare time.
        </p>
        <p>
          I current work as a Lead Consultant at Hippo Digital, working on public sector project for the Department of Education. You can find out more about my work history <Link href='/cv'>on my CV</Link>.
        </p>
      </section>

      <section>
        <h2>Recent posts</h2>
        <StaticContentList entries={postEntries} urlPrefix={"writing/"} />
      </section>

    </DefaultLayout>
  )
}
