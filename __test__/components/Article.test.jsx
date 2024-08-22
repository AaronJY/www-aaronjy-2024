/* eslint-env jest */
import { render } from '@testing-library/react'
import Article from '../../src/components/Article/Article'
import '@testing-library/jest-dom'

describe('Article', () => {
  it('renders title', () => {
    const props = generateArticleProps()
    const { getByText } = render(<Article {...props} />)
    const titleElement = getByText(props.attributes.title)
    expect(titleElement).toBeInTheDocument()
  })

  it('renders description', () => {
    const props = generateArticleProps()
    const { getByText } = render(<Article {...props} />)
    const descriptionElement = getByText(props.attributes.desc)
    expect(descriptionElement).toBeInTheDocument()
  })

  it('renders pubdate if available', () => {
    const props = generateArticleProps()
    const { getByText } = render(<Article {...props} />)
    const pubdateElement = getByText(props.attributes.pubdate)
    expect(pubdateElement).toBeInTheDocument()
  })

  it('renders content', () => {
    const props = generateArticleProps()
    const { container } = render(<Article {...props} />)
    const contentElement = container.querySelector('[data-test=content]')
    expect(contentElement.innerHTML).toBe(props.html)
  })
})

function generateArticleProps () {
  return {
    attributes: {
      title: 'My title',
      desc: 'My description',
      pubdate: new Date().toUTCString()
    },
    html: '<p>This is my content!</p>'
  }
}
