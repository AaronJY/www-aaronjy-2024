/* eslint-env jest */
import { render, screen } from '@testing-library/react'
import Header from '../../src/components/Header/Header'
import '@testing-library/jest-dom'

describe('Header', () => {
  it('renders without crashing', () => {
    render(
      <Header />)
  })

  it('renders correct navigation links', () => {
    render(<Header />)
    const links = ['Home', 'Writing', 'CV']
    links.forEach(link => {
      expect(screen.getByText(link)).toBeInTheDocument()
    })
  })
})
