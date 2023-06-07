'use client'
import { useState } from 'react'
import {
  PreviewClose,
  PreviewOpen,
  FacebookIcon,
  GoogleIcon,
} from '@/assets/icons'
import { Input } from '@/components/Molecules'
import { Button } from '@/components/Atoms'

export default function Home() {
  const [show, setShow] = useState(false)

  function handleClick() {
    setShow(!show)
  }

  return (
    <main className="p-5">
      <Input
        label="Senha"
        name="password"
        type={show ? 'text' : 'password'}
        rightIcon={show ? <PreviewOpen /> : <PreviewClose />}
        onRightIconClick={handleClick}
      />
      <Input
        label="Nome do usuário"
        name="username"
        type='text'
        className='mt-4'
      />
      <Button className="mt-4">Entrar</Button>
      <div className="flex justify-between">
        <Button
          className="mt-4 max-w-[160px]"
          theme="white"
          leftIcon={<FacebookIcon />}
        >
          Facebook
        </Button>
        <Button
          className="mt-4 max-w-[160px]"
          theme="white"
          leftIcon={<GoogleIcon />}
          border
        >
          Google
        </Button>
      </div>
    </main>
  )
}
