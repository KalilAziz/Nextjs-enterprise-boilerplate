import '@testing-library/jest-dom'

import { PackageProp } from '@/config/packages'
import { cleanup, render, screen } from '@/lib/custom-render'
import { it, describe, expect, afterEach, vi } from 'vitest'

import { Package } from './package'

const item: PackageProp = {
  title: 'title',
  description: 'description',
  icon: vi.fn(),
  referrer: [
    {
      name: 'google',
      url: 'https://google.com',
    },
    {
      name: 'facebook',
      url: 'https://facebool.com',
    },
  ],
}

describe('Package - Component', () => {
  afterEach(() => {
    cleanup()
  })

  it('should be able render the package', () => {
    render(<Package {...item} />)
    const wrapper = screen
    const title = wrapper.getByText(/title/i)
    const description = wrapper.getByText(/description/i)

    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })

  it.each(item.referrer)('should be able render the package with referrer %s', (link) => {
    render(<Package {...item} />)
    const wrapper = screen.getByRole('link', { name: link.name })
    expect(wrapper).toBeInTheDocument()
  })
})
