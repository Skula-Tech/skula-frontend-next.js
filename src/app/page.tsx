'use client'
import { useState } from 'react'
import { PreviewClose, PreviewOpen } from '@/assets/icons'
import { Input } from '@/components/Molecules'

export default function Home() {
  const [show, setShow] = useState(false)

  function handleClick() {
    setShow(!show)
  }

  return (
    <main>
      <Input
        label="Senha"
        name="password"
        type={show ? 'text' : 'password'}
        rightIcon={show ? <PreviewOpen /> : <PreviewClose />}
        onRightIconClick={handleClick}
      />
    </main>
  )
}
