import { render } from '@/lib/custom-render'
import { expect, test } from 'vitest'

import { Heading } from './heading'

test('Heading', () => {
  const wapper = render(<Heading />)

  expect(wapper.getByRole('heading', { level: 1, name: 'Home' })).toBeDefined()
})
