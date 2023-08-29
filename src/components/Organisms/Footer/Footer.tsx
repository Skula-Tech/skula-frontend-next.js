import Link from 'next/link'
import Image from 'next/image'
import { tv } from 'tailwind-variants'
import SkulaLogo from '@/assets/logos/skula-logo.png'
import { Text } from '@/components/Atoms'

const links = [
  { href: '/quemsomos', label: 'Quem somos' },
  { href: '/faleconosco', label: 'Fale conosco' },
  { href: '/termos', label: 'Termos' },
  { href: '/politica', label: 'Política de privacidade' },
  { href: '/faq', label: 'FAQ' },
]

const footer = tv({
  slots: {
    base: 'flex flex-col gap-4 divide-y-2 divide-[#d7d7d7] bg-gradient-lg px-5 pb-4 pt-6',
    navLinks: 'flex flex-col gap-2',
    disclaimer: 'flex flex-col gap-2 pt-4',
  },
})

const { base, navLinks, disclaimer } = footer()

export const Footer = () => {
  return (
    <footer className={base()}>
      <nav className={navLinks()}>
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            <Text fontStyle="body3" className="text-white">
              {link.label}
            </Text>
          </Link>
        ))}
      </nav>
      <div className={disclaimer()}>
        <Link href="/">
          <Image src={SkulaLogo} width={95} height={36} alt="Skula Logo" />
        </Link>
        <Text fontStyle="body3" className="text-white">
          © 2022 Copyright - SKULA
        </Text>
      </div>
    </footer>
  )
}
