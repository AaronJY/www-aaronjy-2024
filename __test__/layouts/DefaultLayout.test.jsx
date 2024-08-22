/* eslint-env jest */
import { render, screen } from '@testing-library/react'
import DefaultLayout from '../../src/layouts/DefaultLayout/DefaultLayout'
import '@testing-library/jest-dom'

describe('DefaultLayout', () => {
  const props = {
    children: <div>Test Content</div>
  }

  it('renders without crashing', () => {
    render(<DefaultLayout {...props} />)
  })

  it('renders Header', () => {
    render(<DefaultLayout {...props} />)
    expect(screen.getByTestId('header')).toBeInTheDocument()
  })

  it('renders Footer', () => {
    render(<DefaultLayout {...props} />)
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('renders children correctly', () => {
    render(<DefaultLayout {...props} />)
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })
})
