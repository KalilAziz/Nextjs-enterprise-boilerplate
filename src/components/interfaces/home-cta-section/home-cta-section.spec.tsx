import '@testing-library/jest-dom'

import { render, screen } from '@/lib/custom-render'
import { it, describe, expect } from 'vitest'

import { HomeCtaSection } from './home-cta-section'

describe('Home Cta Section - Component', () => {
  it('should render the component', () => {
    render(<HomeCtaSection />)

    const title = screen.getByRole('heading')
    const description = screen.getByRole('paragraph')
    const buttons = screen.getAllByRole('button')

    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(buttons).toHaveLength(2)
  })
})
