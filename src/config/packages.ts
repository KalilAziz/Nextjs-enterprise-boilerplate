import { IconType } from 'react-icons'
import { FaCodePullRequest } from 'react-icons/fa6'
import { FaLink } from 'react-icons/fa6'
import { GoShieldCheck, GoCommandPalette } from 'react-icons/go'
import { IoMdSettings } from 'react-icons/io'
import { IoInvertMode } from 'react-icons/io5'
import {
  SiTailwindcss,
  SiNextdotjs,
  SiCommitlint,
  SiConventionalcommits,
  SiRadixui,
  SiGithubactions,
  SiSonarcloud,
  SiEslint,
  SiPrettier,
  SiSemanticrelease,
  SiSimpleanalytics,
  SiVitest,
  SiCypress,
  SiDependabot,
  SiStorybook,
} from 'react-icons/si'

type ReferrerProps = {
  name: string
  url: string
}

export type PackageProp = {
  title: string
  description: string
  icon: IconType
  referrer: Array<ReferrerProps>
}

export const packages: Array<PackageProp> = [
  {
    title: 'Next.js',
    description:
      'Expanda horizontes no desenvolvimento React com Next.js. Rápido, escalável e com SSR integrado, permite construir aplicações web modernas de forma eficiente.',
    icon: SiNextdotjs,
    referrer: [
      {
        name: 'Documentação',
        url: 'https://nextjs.org/',
      },
    ],
  },
  {
    title: 'Tailwind CSS',
    description:
      'Simplifique a estilização com Tailwind CSS. Classes utilitárias predefinidas para criar interfaces bonitas sem perder agilidade no desenvolvimento.',
    icon: SiTailwindcss,
    referrer: [
      {
        name: 'Documentação',
        url: 'https://tailwindcss.com/',
      },
      {
        name: 'Tailwind UI',
        url: 'https://tailwindui.com/',
      },
    ],
  },
  {
    title: 'Commitizen',
    description:
      'Padronize commits com Commitizen. Simplifique a criação de commits seguindo o padrão Conventional Commits.',
    icon: SiConventionalcommits,
    referrer: [
      {
        name: 'Documentação',
        url: 'https://commitizen-tools.github.io/commitizen/',
      },
    ],
  },
  {
    title: 'Commitlint',
    description:
      'Eleve a consistência e clareza das mensagens de commits com o Commitlint. Estabeleça padrões e boas práticas para mensagens de commits, melhorando a rastreabilidade e a compreensão do desenvolvimento do projeto.',
    icon: SiCommitlint,
    referrer: [
      {
        name: 'Documentação',
        url: 'https://commitlint.js.org/#/',
      },
    ],
  },
  {
    title: 'Radix UI',
    description:
      'Acelere o desenvolvimento de interfaces com Radix UI. Componentes prontos para uso, acessíveis e com design responsivo.',
    icon: SiRadixui,
    referrer: [
      {
        name: 'Documentação',
        url: 'https://www.radix-ui.com/',
      },
    ],
  },
  {
    title: 'GitHub Actions',
    description:
      'Automatize tarefas com GitHub Actions. Crie fluxos de trabalho personalizados para automatizar o desenvolvimento, o teste e o deploy de aplicações.',
    icon: SiGithubactions,
    referrer: [
      {
        name: 'Documentação',
        url: 'https://docs.github.com/pt/actions',
      },
    ],
  },
  {
    title: 'SonarCloud',
    description:
      'Aumente a qualidade do código com SonarCloud. Analise a qualidade do código e identifique problemas de segurança, cobertura de testes e vulnerabilidades.',
    icon: SiSonarcloud,
    referrer: [
      {
        name: 'Documentação',
        url: 'https://sonarcloud.io/',
      },
    ],
  },
  {
    title: 'Typescript strict reset',
    description: 'Com a biblioteca ´ts-reset´ para aumentar a segurança e a consistência do código Typescript.',
    icon: GoShieldCheck,
    referrer: [
      {
        name: 'Documentação',
        url: 'https://www.totaltypescript.com/ts-reset',
      },
    ],
  },
  {
    title: 'ESLint',
    description:
      'Aumente a qualidade do código com ESLint. Analise a qualidade do código e identifique problemas de segurança, cobertura de testes e vulnerabilidades.',
    icon: SiEslint,
    referrer: [
      {
        name: 'Documentação',
        url: 'https://eslint.org/',
      },
    ],
  },
  {
    title: 'Prettier',
    description:
      'Padronize o estilo de código com Prettier. Formate o código de forma consistente, aumentando a legibilidade e a manutenibilidade.',
    icon: SiPrettier,
    referrer: [
      {
        name: 'Documentação',
        url: 'https://prettier.io/',
      },
    ],
  },
  {
    title: 'Template para Pull Request',
    description:
      'Padronize pull requests com Template para Pull Request. Simplifique a criação de pull requests seguindo o padrão Conventional Commits.',
    icon: FaCodePullRequest,
    referrer: [
      {
        name: 'Documentação',
        url: 'https://typicode.github.io/husky/#/',
      },
    ],
  },
  {
    title: 'Husky',
    description:
      'Hooks para Git com Husky. Simplifique a criação de hooks para Git, como pre-commit, commit-msg, pre-push, etc.',
    icon: GoCommandPalette,
    referrer: [
      {
        name: 'Documentação',
        url: 'https://typicode.github.io/husky/#/',
      },
    ],
  },
  {
    title: 'Semantic Release',
    description:
      'Automatize a versão de aplicações com Semantic Release. Simplifique a criação de releases seguindo o padrão Conventional Commits.',
    icon: SiSemanticrelease,
    referrer: [
      {
        name: 'Documentação',
        url: 'https://semantic-release.gitbook.io/semantic-release/',
      },
    ],
  },
  {
    title: 'T3 envs',
    description:
      'Validação de variáveis de ambiente com T3 envs. Simplifique a validação de variáveis de ambiente, garantindo que as variáveis necessárias estejam disponíveis.',
    icon: IoMdSettings,
    referrer: [
      {
        name: 'Documentação',
        url: 'https://editorconfig.org/',
      },
    ],
  },
  {
    title: 'Bundle analyzer plugin',
    description:
      'Analytics simples e privado para aplicações com Bundle analyzer plugin. Simplifique a análise de bundles, identificando dependências desnecessárias.',
    icon: SiSimpleanalytics,
    referrer: [
      {
        name: 'Documentação',
        url: 'https://simpleanalytics.com/',
      },
    ],
  },
  {
    title: 'Vite',
    description:
      'Acelere o desenvolvimento com Vite. Servidor de desenvolvimento rápido e com HMR integrado, permite construir aplicações web modernas de forma eficiente.',
    icon: SiVitest,
    referrer: [
      {
        name: 'Documentação',
        url: 'https://vitejs.dev/',
      },
    ],
  },
  {
    title: 'Cypress',
    description:
      'Testes end-to-end com Cypress. Testes end-to-end rápidos e confiáveis para qualquer coisa que rode em um navegador.',
    icon: SiCypress,
    referrer: [
      {
        name: 'Documentação',
        url: 'https://www.cypress.io/',
      },
    ],
  },
  {
    title: 'Dark Mode',
    description:
      'Dark mode para qualquer website. Aumente a acessibilidade do seu website com um dark mode responsivo e customizável.',
    icon: IoInvertMode,
    referrer: [
      {
        name: 'Documentação',
        url: 'https://darkreader.org/',
      },
    ],
  },
  {
    title: 'Importações absolutas',
    description:
      'Importações absolutas com Typescript. Simplifique a importação de módulos, eliminando a necessidade de importações relativas.',
    icon: FaLink,
    referrer: [
      {
        name: 'Documentação',
        url: 'https://www.npmjs.com/package/react-link-preview',
      },
    ],
  },
  {
    title: 'Dependabot',
    description:
      'Mantenha as dependências atualizadas com Dependabot. Simplifique a atualização de dependências, garantindo que as dependências estejam atualizadas e livres de vulnerabilidades.',
    icon: SiDependabot,
    referrer: [
      {
        name: 'Documentação',
        url: 'https://dependabot.com/',
      },
    ],
  },
  {
    title: 'Storybook',
    description:
      'Documentação de componentes com Storybook. Simplifique a documentação de componentes, garantindo que os componentes estejam bem documentados e testados.',
    icon: SiStorybook,
    referrer: [
      {
        name: 'Documentação',
        url: 'https://storybook.js.org/',
      },
    ],
  },
]
