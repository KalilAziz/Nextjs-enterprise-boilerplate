import { Button } from '../../ui/button'
import { Container } from '../container'

export const HomeCtaSection = () => {
  return (
    <Container className="py-16 text-center sm:py-32">
      <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
        Next.js&nbsp;<span className="text-primary">Enterprise</span>&nbsp; Boilerplate
      </h2>
      <p className="mx-auto mt-6 max-w-5xl text-lg leading-8 text-muted-foreground" role="paragraph">
        Inicie seu projeto empresarial com nosso modelo Next.js repleto de recursos e de alto desempenho!
        <br />
        Experimente o rápido desenvolvimento de UI e um amplo conjunto de ferramentas para um processo de
        desenvolvimento tranquilo e agradável.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Button>Get started</Button>
        <Button variant="outline">Learn more</Button>
      </div>
    </Container>
  )
}
