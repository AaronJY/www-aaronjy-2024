import CV from '@/components/CV/CV'
import DefaultLayout from '@/layouts/DefaultLayout/DefaultLayout'
import React from 'react'
import yaml from 'js-yaml'
import fs from 'fs'
import showdown from 'showdown'

function CVPage ({
  competencies,
  education,
  certifications,
  languages,
  experience
}) {
  return (
    <DefaultLayout>
      <section>
        <h1>CV</h1>
      </section>
      <section>
        {/* eslint-disable-next-line react/jsx-pascal-case */}
        <CV
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

  data.experience = data.experience.map((exp) => ({
    ...exp,
    desc: MDConverter.makeHtml(exp.desc)
  }))

  return {
    props: { ...data }
  }
}

export default CVPage
