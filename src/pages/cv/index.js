import DefaultLayout from '@/layouts/DefaultLayout/DefaultLayout'
import React from 'react'
import yaml from 'js-yaml'
import fs from 'fs'
import showdown from 'showdown'
import { NextSeo } from 'next-seo'
import Resume from '@/components/Resume/Resume'

export const Title = 'CV'

function ResumePage ({
  competencies,
  education,
  certifications,
  languages,
  experience
}) {
  return (
    <DefaultLayout>
      <NextSeo
        title={Title} openGraph={
        {
          title: Title,
        }
      }
      />
        <h1>{Title}</h1>
      <section>
        <Resume
          competencies={competencies}
          education={education}
          certifications={certifications}
          languages={languages}
          experience={experience}
        />
      </section>
    </DefaultLayout>
  )
}

export function getStaticProps () {
  const content = fs.readFileSync('./content/pages/cv.yml', {
    encoding: 'utf-8'
  })

  const data = yaml.load(content)

  const MDConverter = new showdown.Converter()

  // @ts-ignore
  data.experience = data.experience.map((exp) => ({
    ...exp,
    desc: MDConverter.makeHtml(exp.desc)
  }))

  return {
    // @ts-ignore
    props: { ...data }
  }
}

export default ResumePage
