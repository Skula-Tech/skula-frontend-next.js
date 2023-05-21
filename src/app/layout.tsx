import './globals.css'
import { Inter, Varela } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-roboto' })
const varela = Varela({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-varela',
})

export const metadata = {
  title: 'Skula',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${varela.variable} bg-n-100`}
      >
        {children}
      </body>
    </html>
  )
}
