import Link from 'next/link'
import Image from 'next/image'
import SkulaLogo from '@/assets/logos/skula-logo.png'
import { Text } from '@/components/Atoms'

const links = [
  { href: '/quemsomos', label: 'Quem somos' },
  { href: '/faleconosco', label: 'Fale conosco' },
  { href: '/termos', label: 'Termos' },
  { href: '/politica', label: 'Política de privacidade' },
  { href: '/faq', label: 'FAQ' },
]

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-4 divide-y-2 divide-[#D7D7D7] bg-gradient-lg px-5 pb-4 pt-6">
      <div className="flex flex-col gap-2">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            <Text fontStyle="xsh" className="text-white">
              {link.label}
            </Text>
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-2 pt-4">
        <Link href="/">
          <Image src={SkulaLogo} width={95} height={36} alt="Skula Logo" />
        </Link>
        <Text fontStyle="xsh" className="text-white">
          © 2022 Copyright - SKULA
        </Text>
      </div>
    </footer>
  )
}
