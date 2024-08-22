/* eslint-env jest */
import { render } from '@testing-library/react'
import Cv from '../../src/components/Cv/Cv'
import '@testing-library/jest-dom'

describe('Cv', () => {
  const props = {
    competencies: ['Competency 1', 'Competency 2'],
    education: 'My education history',
    certifications: ['Certification 1', 'Certification 2'],
    languages: [{ name: 'English', proficiency: 'Fluent' }],
    experience: [
      {
        employer: 'Employer 1',
        position: 'Position 1',
        start: 'Start date 1',
        end: 'End date 1',
        desc: 'Description 1'
      }
    ]
  }

  it('renders without crashing', () => {
    render(<Cv {...props} />)
  })

  it('renders competencies', () => {
    const { getByText } = render(<Cv {...props} />)
    props.competencies.forEach(competency => {
      expect(getByText(competency)).toBeInTheDocument()
    })
  })

  it('renders education', () => {
    const { getByText } = render(<Cv {...props} />)
    expect(getByText(props.education)).toBeInTheDocument()
  })

  it('renders certifications', () => {
    const { getByText } = render(<Cv {...props} />)
    props.certifications.forEach(certification => {
      expect(getByText(certification)).toBeInTheDocument()
    })
  })

  it('renders languages', () => {
    const { getByText } = render(<Cv {...props} />)
    props.languages.forEach(language => {
      expect(getByText(`${language.name} - ${language.proficiency}`)).toBeInTheDocument()
    })
  })

  it('renders experience', () => {
    const { getByText } = render(<Cv {...props} />)
    props.experience.forEach(exp => {
      expect(getByText(exp.employer)).toBeInTheDocument()
      expect(getByText(exp.position)).toBeInTheDocument()
      expect(getByText(exp.start)).toBeInTheDocument()
      expect(getByText(exp.end)).toBeInTheDocument()
      expect(getByText(exp.desc)).toBeInTheDocument()
    })
  })
})
