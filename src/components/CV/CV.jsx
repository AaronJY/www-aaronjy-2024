import React from 'react'

import style from './CV.module.css'

function CV ({ competencies, education, certifications, languages, experience }) {
  return (
    <div className={style.cv}>
      <div>
        <h2>Core competencies</h2>
        <ul>
          {competencies.sort().map((c, i) => <li key={i}>{c}</li>)}
        </ul>

        <h2>Certifications</h2>
        <ul>
          {certifications.sort().map((c, i) => <li key={i}>{c}</li>)}
        </ul>

        <h2>Languages</h2>
        <ul>
          {languages.sort().map((c, i) => <li key={i}>{c.name} - {c.proficiency}</li>)}
        </ul>

        <h2>Education history</h2>
        <p>{education}</p>
      </div>
      <div>
        <h2>Professional experience</h2>

        {experience.map((exp, i) => (
          <CVWorkExperience key={i} employer={exp.employer} position={exp.position} start={exp.start} end={exp.end}>{exp.desc}</CVWorkExperience>
        ))}
      </div>
    </div>
  )
}

export default CV

function CVWorkExperience ({ position, employer, start, end, children }) {
  return (
    <div className={style['work-experience']}>
      <div>
        <h3>
          {position}
          <br />
          <small>{employer}</small>
        </h3>
        <div>
          <time>{start}</time>-<time>{end}</time>
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: children }} />
    </div>
  )
}
