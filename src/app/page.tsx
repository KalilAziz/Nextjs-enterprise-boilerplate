import { FadeIn, FadeInStagger } from '@/components/interfaces/fade-in'
import { HomeCtaSection } from '@/components/interfaces/home-cta-section'
import { Packages } from '@/components/interfaces/packages'

const Home = () => {
  return (
    <main>
      <FadeInStagger>
        <FadeIn>
          <HomeCtaSection />
        </FadeIn>
        <FadeIn>
          <Packages />
        </FadeIn>
      </FadeInStagger>
    </main>
  )
}

export default Home
