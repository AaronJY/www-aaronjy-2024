/* eslint-env jest */
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Writing, { Title, Description } from '../../src/pages/writing'

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }) => {
      return <>{children}</>
    }
  }
})

describe('Writing', () => {
  it('renders without crashing', () => {
    render(
      getStubWritingComponent())
  })

  it('renders meta title', async () => {
    const { container } = render(getStubWritingComponent())
    expect(container.querySelector('title')).toHaveTextContent(Title)
  })

  it('renders opengraph title', () => {
    const { container } = render(getStubWritingComponent())
    expect(container.querySelector('meta[property="og:title"]'))
      .toHaveAttribute('content', Title)
  })

  it('renders meta description', () => {
    const { container } = render(getStubWritingComponent())
    expect(container.querySelector('meta[name="description"]'))
      .toHaveAttribute('content', Description)
  })

  it('renders opengraph description', () => {
    const { container } = render(getStubWritingComponent())

    expect(container.querySelector('meta[property="og:description"]'))
      .toHaveAttribute('content', Description)
  })
})

function getStubWritingComponent () {
  const entries = [
    {
      attributes: {
        title: 'My title one',
        pubdate: 'Mon, 18 Mar 2024 16:47:32 GMT',
        desc: 'This is my description.'
      },
      html: '<p>This is some content</p>',
      slug: 'my-title-one'
    },
    {
      attributes: {
        title: 'My title Two',
        pubdate: 'Mon, 19 Mar 2024 16:47:32 GMT',
        desc: 'This is my description.'
      },
      html: '<p>This is some content</p>',
      slug: 'my-title-two'
    }
  ]

  return <Writing entries={entries} urlPrefix='/' />
}
