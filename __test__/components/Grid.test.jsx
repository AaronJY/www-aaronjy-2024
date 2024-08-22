/* eslint-env jest */
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Grid from '@/components/Grid/Grid'

describe('Grid', () => {
  it('renders without crashing', () => {
    const { container } = render(<Grid />)
    expect(container.firstChild).toHaveClass('grid')
  })

  it('renders its children', () => {
    const { getByText } = render(<Grid><div>Child</div></Grid>)
    expect(getByText('Child')).toBeInTheDocument()
  })
})
