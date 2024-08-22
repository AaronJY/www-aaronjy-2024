/* eslint-env jest */
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from '@/components/Footer/Footer'

describe('Footer', () => {
  it('renders without crashing', () => {
    render(<Footer />)
  })
})
