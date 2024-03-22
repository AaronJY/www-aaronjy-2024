/* eslint-env jest */
import { render } from '@testing-library/react'
import Footer from './Footer'
import '@testing-library/jest-dom'

describe('Footer', () => {
  it('renders without crashing', () => {
    render(<Footer />)
  })
})
