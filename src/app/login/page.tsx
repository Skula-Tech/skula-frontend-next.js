'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SkulaLogo from '@/assets/logos/skula-logo.png'
import {
  Down,
  FacebookIcon,
  GoogleIcon,
  PreviewClose,
  PreviewOpen,
} from '@/assets/icons'
import { Button, Text } from '@/components/Atoms'
import { Input } from '@/components/Molecules'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <main className="flex h-screen w-screen flex-col items-center gap-5 overflow-x-hidden bg-gradient-xl px-4 py-6">
      <Link href="/" className="self-start rounded hover:bg-neutral-50/20">
        <Down className="stroke-white" />
      </Link>
      <Image src={SkulaLogo} alt="Skula Logo" />
      <Text className="mt-2 text-center text-n-50">
        Entre e faça parte da nossa comunidade. Aqui, você encontrará uma equipe
        de professores dedicados e comprometidos, prontos para auxiliar você e
        seus amigos com o melhor preço.
      </Text>
      <form onSubmit={handleSubmit} className="mt-1 flex w-full flex-col gap-4">
        <Input name="email" type="email" label="E-mail" labelColor="white" />
        <Input
          name="password"
          type={showPassword ? 'text' : 'password'}
          label="Senha"
          labelColor="white"
          rightElement={showPassword ? <PreviewOpen /> : <PreviewClose />}
          onRightElementClick={() => setShowPassword(!showPassword)}
        />
        <Link href="#" className="-mt-2 self-end text-white">
          <Text>Esqueci minha senha</Text>
        </Link>
        <Button className="mt-2">Entrar</Button>
      </form>
      <div className="mt-6 flex w-full items-center justify-center">
        <hr className="h-px w-full border-0 bg-[#B3B0B8]/20" />
        <Text className="min-w-max px-4 text-[#D8D8D9]">Ou entre com</Text>
        <hr className="h-px w-full border-0 bg-[#B3B0B8]/20" />
      </div>
      <div className="flex w-full gap-4">
        <Button theme="white" leftIcon={<GoogleIcon />}>
          Google
        </Button>
        <Button theme="white" leftIcon={<FacebookIcon />}>
          Facebook
        </Button>
      </div>
      <div className="flex w-full items-center justify-center gap-2 text-white">
        <Text>Novo no Skula?</Text>
        <Link href="#">
          <Text className="font-semibold underline underline-offset-2">
            Crie uma conta
          </Text>
        </Link>
      </div>
    </main>
  )
}
