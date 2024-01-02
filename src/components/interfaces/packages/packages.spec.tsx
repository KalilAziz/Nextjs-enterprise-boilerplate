import '@testing-library/jest-dom'

import { PackageProp, packages } from '@/config/packages'
import { cleanup, render, screen } from '@/lib/custom-render'
import { it, describe, expect, afterEach, vi } from 'vitest'

import { Packages } from './packages'

const intersectionObserverMock = () => ({
  observe: () => null,
})

describe('Packages - Component', () => {
  beforeEach(() => {
    window.IntersectionObserver = vi.fn().mockImplementation(intersectionObserverMock)
  })

  afterEach(() => {
    cleanup()
  })

  it('should be able render the packages', () => {
    render(<Packages />)
    const wrapper = screen.getByTestId('packages')
    expect(wrapper).toBeInTheDocument()
  })

  it.each(packages)('should be able render the package %s', (pkg: PackageProp) => {
    render(<Packages />)
    const wrapper = screen.getByRole('heading', { name: pkg.title, level: 3 })
    expect(wrapper).toBeInTheDocument()
  })
})
