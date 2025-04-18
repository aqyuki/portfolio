import { Container } from '@/component/container'
import Link from 'next/link'

type FooterLinkProps = {
  href: string
  children: React.ReactNode
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <Link href={href} className="text-gray-500 hover:text-gray-700 transition">
    {children}
  </Link>
)

export function Footer() {
  return (
    <Container>
      <footer className="bg-transition py-4">
        <div className="container mx-auto flex justify-center space-x-6">
          <FooterLink href="https://x.com/aqyuki21s">X</FooterLink>
          <FooterLink href="https://github.com/aqyuki">GitHub</FooterLink>
          <FooterLink href="https://misskey.io/@aqyuki">Misskey.io</FooterLink>
          <FooterLink href="https://misskey.systems/@aqyuki">
            みすてむ
          </FooterLink>
          <FooterLink href="https://aqyuki.hateblo.jp/">
            しろねの雑記帳
          </FooterLink>
        </div>
      </footer>
    </Container>
  )
}
