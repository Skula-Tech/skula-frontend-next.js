'use client'
import { FormEvent, useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import Heading from '@/components/Atoms/Heading'
import EyeClosed from '../assets/icons/previewCloseOne.svg'
import Facebook from '../assets/icons/fb.svg'

interface IMessage {
  email: string
  password: string
  account: string
}

export default function Home() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useState('')
  const [message, setMessage] = useState<IMessage>()

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    console.log({
      email,
      password,
    })

    setToken('')

    axios
      .post('https://skula-api.onrender.com/users/login', {
        email,
        password,
      })
      .then(function (response) {
        console.log(response)
        setToken(response.data.token)
      })
      .catch(function (error) {
        console.log(error)
        setMessage(error.response.data.errors)
      })
  }
  console.log(token)

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-4">
      <div className="flex h-[595px] w-full max-w-[360px] flex-col items-center rounded-3xl border border-n-200 px-4 pt-14 shadow-lg">
        <Heading type={1} className="text-1-700">
          Login
        </Heading>

        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex w-full flex-col gap-2 pt-6">
            <label htmlFor="email" className="font-text text-base leading-none">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="border-box w-full rounded-lg border-2 border-n-500 bg-n-100 px-3 py-3"
              onChange={({ target }) => setEmail(target.value)}
            />
          </div>
          <div className="flex w-full flex-col gap-2 pt-3">
            <label
              htmlFor="password"
              className="font-text text-base leading-none"
            >
              Senha
            </label>
            <div className="flex w-full justify-between rounded-lg border-2 border-n-500 bg-n-100 px-3 py-3 focus-within:border-black">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                id="password"
                className="bg-n-100 outline-none"
                onChange={({ target }) => setPassword(target.value)}
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="w-5"
              >
                <Image src={EyeClosed} alt="Eye closed" />
              </button>
            </div>
          </div>
          <div className="flex w-full items-center justify-between pt-3">
            <div className="flex items-center">
              <label className="bg-grey-700 mr-1 h-4 w-4 cursor-pointer rounded-[5px]  border-2 border-[#616161] bg-n-100 text-red-500">
                <input
                  type="checkbox"
                  name="keep"
                  id="keep"
                  className="hidden"
                />
              </label>
              <label
                htmlFor="keep"
                className="font-text text-xs text-[#616161]"
              >
                Mantenha-me conectado
              </label>
            </div>
            <a href="#" className="font-text text-xs text-1-700">
              Esqueci minha senha
            </a>
          </div>
          <button className="mt-[18px] w-full rounded-[10px] bg-1-700 py-[10px] font-text text-base font-medium text-white hover:bg-1-900">
            Login
          </button>
        </form>

        <div className="relative flex w-full items-center justify-center pt-4">
          <p className="z-10 bg-n-100 px-2 font-text text-base leading-none text-n-600">
            ou entre
          </p>
          <span className="absolute w-full border-[1.5px] border-b-black/40" />
        </div>

        <div className="flex w-full gap-[18px]">
          <button className=" mt-[18px] flex w-full items-center justify-center gap-2 rounded-lg bg-1-700 py-3 font-text text-base font-medium text-white hover:bg-1-900">
            <Image width={24} height={24} src={Facebook} alt="Facebook logo" />
            <span className="h-5 border border-[#E8EDF0]/30" />
            Facebook
          </button>

          <button className=" mt-[18px] flex w-full items-center justify-center gap-2 rounded-lg bg-1-700 py-3 font-text text-base font-medium text-white hover:bg-1-900">
            <Image
              width={20}
              height={20}
              src="https://www.vectorlogo.zone/logos/google/google-icon.svg"
              alt="Google logo"
            />
            <span className="h-5 border border-[#E8EDF0]/30" />
            Google
          </button>
        </div>

        <p className="pt-6 font-text text-base leading-none">
          Não possui login?
        </p>

        <a
          href="#"
          className="pt-5 font-text text-base leading-none text-1-700"
        >
          Cadastre-se
        </a>
      </div>
      <div>
        {token ? (
          <p>Login realizado com sucesso!</p>
        ) : (
          message?.password || message?.email || message?.account
        )}
      </div>
    </main>
  )
}
