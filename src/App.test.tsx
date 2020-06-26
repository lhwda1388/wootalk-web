import React from 'react'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import renderer from 'react-test-renderer'
import App from './App'

expect.extend(toHaveNoViolations)

describe('App component', () => {
  test('renders text', () => {
    /*
    const { getByText } = render(<App />)
    const linkElement = getByText(/learn react/i)
    expect(linkElement).toBeInTheDocument()
    */

    render(<App />)
    expect(screen.getByText(/Sign up/)).toBeInTheDocument()
  })

  test('renders check router href link', () => {
    render(<App />)
    expect(screen.getByText('Sign up')).toHaveAttribute('href', '/signup')
  })
})

describe('App accessibility Test', () => {
  test('accessibility violations', async () => {
    const { container } = render(<App />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
  test('snapShot testing', () => {
    const tree = renderer.create(<App />).toJSON()
    console.log(tree)
    expect(tree).toMatchSnapshot()
  })
})
