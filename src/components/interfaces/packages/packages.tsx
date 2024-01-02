import { FadeIn, FadeInStagger } from '@/components/interfaces/fade-in'

import { packages } from '@/config/packages'

import { Container } from '../container'
import { Package } from './package'

export const Packages = () => {
  return (
    <Container data-testid="packages">
      <FadeInStagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {packages.map((pkg) => (
          <FadeIn key={pkg.title}>
            <Package {...pkg} />
          </FadeIn>
        ))}
      </FadeInStagger>
    </Container>
  )
}
