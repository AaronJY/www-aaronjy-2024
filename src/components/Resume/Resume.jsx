import React from 'react'

import style from './Resume.module.css'

function Resume({
  competencies,
  education,
  certifications,
  languages,
  experience
}) {
  return (
    <div className={style.cv}>
      <ol>
        <li><a href='#experience'>Professional experience</a>
          <ol>{experience.map(e =>
            <li key={e.position}>
              <a href={'#' + e.position}>{e.position}</a>
            </li>
          )}</ol></li>
        <li><a href='#competencies'>Competencies</a></li>
        <li><a href='#competencies'>Certifications</a></li>
        <li><a href='#languages'>Languages</a></li>
        <li><a href='#education'>Education</a></li>
      </ol>
      <div>
        <h2 id="experience">Professional experience</h2>

        {experience.map((exp, i) => (
          <WorkExperience
            key={i}
            employer={exp.employer}
            position={exp.position}
            start={exp.start}
            end={exp.end}
          >
            {exp.desc}
          </WorkExperience>
        ))}
      </div>
      <div className='sidebar'>
        <h2 id="competencies">Competencies</h2>
        <ul>
          {competencies.sort().map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>

        <h2 id="certifications">Certifications</h2>
        <ul>
          {certifications.sort().map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>

        <h2 className='languages'>Languages</h2>
        <ul>
          {languages.sort().map((c, i) => (
            <li key={i}>
              {c.name} - {c.proficiency}
            </li>
          ))}
        </ul>

        <h2 className='education'>Education</h2>
        <p>{education}</p>
      </div>

    </div>
  )
}

export default Resume;

function WorkExperience({ position, employer, start, end, children }) {
  return (
    <div className={style['work-experience']}>
      <div>
        <h3 id={position}>
          {position}
          <br />
          <small>{employer}</small>
        </h3>
        <small>
          <time>{start}</time> - <time>{end}</time>
        </small>
      </div>
      <div
        data-test='children'
        dangerouslySetInnerHTML={{ __html: children }}
      />
    </div>
  )
}
