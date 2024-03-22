/* eslint-env jest */
import { render, screen } from '@testing-library/react'
import ExternalLink from './ExternalLink'
import '@testing-library/jest-dom'

describe('ExternalLink', () => {
  const props = {
    href: 'https://example.com',
    children: 'Test Link'
  }

  it('renders without crashing', () => {
    render(<ExternalLink {...props} />)
  })

  it('renders correct href and rel attributes', () => {
    render(<ExternalLink {...props} />)
    const link = screen.getByText(props.children)
    expect(link).toHaveAttribute('href', props.href)
    expect(link).toHaveAttribute('rel', 'nofollow noopener')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders children correctly', () => {
    render(<ExternalLink {...props} />)
    expect(screen.getByText(props.children)).toBeInTheDocument()
  })
})
