import { Container } from '@/component/container'
import { andikaItalic, notoSansJP } from '@/font/andika'
import { mergeStyles } from '@/util/style'
import type { IconType } from 'react-icons'
import { FaBlog } from 'react-icons/fa6'
import { FiGithub, FiTwitter } from 'react-icons/fi'
import { SiZenn } from 'react-icons/si'

type service = 'github' | 'twitter' | 'hatena' | 'zenn'

type linkItemProps = {
  service: service
  href: string
}

const links: linkItemProps[] = [
  { service: 'github', href: 'https://github.com/aqyuki' },
  { service: 'twitter', href: 'https://x.com/aqyuki21s' },
  { service: 'hatena', href: 'https://aqyuki.hateblo.jp' },
  { service: 'zenn', href: 'https://zenn.dev/aqyuki' },
]

const iconMap: Record<service, IconType> = {
  github: FiGithub,
  twitter: FiTwitter,
  hatena: FaBlog,
  zenn: SiZenn,
}

const displayTitleMap: Record<service, string> = {
  github: 'GitHub',
  twitter: 'Twitter',
  hatena: 'Hatena',
  zenn: 'Zenn',
}

export function Link() {
  return (
    <Container>
      <h2 className={mergeStyles(andikaItalic.className, 'text-2xl', 'my-8')}>
        ## Links
      </h2>
      <div className={mergeStyles('gap-4')}>
        {links.map((link) => (
          <LinkItem key={link.service} {...link} />
        ))}
      </div>
    </Container>
  )
}

function LinkItem({ service, href }: linkItemProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div
        className={mergeStyles(
          'grid',
          'grid-cols-4',
          'gap-4',
          'text-lg',
          'place-content-center',
          'place-items-center',
          'my-6',
        )}
      >
        {iconMap[service]({ size: '3rem' })}
        <span
          className={mergeStyles(
            notoSansJP.className,
            'block',
            'col-start-3',
            'text-center',
          )}
        >
          {displayTitleMap[service]}
        </span>
      </div>
    </a>
  )
}
