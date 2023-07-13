import Link from 'next/link'
import { Down, FacebookIcon, GoogleIcon } from '@/assets/icons'
import { Input } from '@/components/Molecules'
import { Button, Heading, Text } from '@/components/Atoms'

export default function SignUp() {
  return (
    <main className="mb-12 flex h-full w-full flex-col items-center gap-5 px-4 py-6">
      <Link href="/login" className="self-start rounded hover:bg-neutral-50">
        <Down className="stroke-1-900" />
      </Link>
      <Heading as="h3" fontStyle="sxl">
        Crie sua conta no Skula
      </Heading>
      <div className="-mt-2 flex w-full items-center justify-center gap-1">
        <Text>Já possui conta?</Text>
        <Link href="/login">
          <Text className="text-1-700">Faça login</Text>
        </Link>
      </div>
      <form className="mt-4 flex w-full flex-col gap-4">
        <Input
          name="fullname"
          type="text"
          label="Nome completo"
          border="purple"
        />
        <Input
          name="username"
          type="text"
          label="Nome usuário"
          border="purple"
        />
        <Input name="email" type="email" label="E-mail" border="purple" />
        <Input
          name="confirmemail"
          type="email"
          label="Confirmar e-mail"
          autoComplete="off"
          border="purple"
        />
        <Input name="password" type="password" label="Senha" border="purple" />
        <Input
          name="confirmpassword"
          type="password"
          label="Confirmar senha"
          border="purple"
        />
        <Text className="my-10 text-center">
          Ao clicar em Aceite e cadastre-se, você aceita o{' '}
          <Link href="#" className="font-bold text-1-700">
            Contrato do Usuário
          </Link>
          , a{' '}
          <Link href="#" className="font-bold text-1-700">
            Política de Privacidade
          </Link>{' '}
          e a{' '}
          <Link href="#" className="font-bold text-1-700">
            Política de Cookies
          </Link>{' '}
          do Skula
        </Text>
        <Button>Aceite os temos e cadastre-se</Button>
      </form>
      <div className="mt-1 flex w-full items-center justify-center">
        <hr className="h-px w-full border-0 bg-[#7B7B7B]/20" />
        <Text className="min-w-max px-4 text-[#7B7B7B]">Ou entre com</Text>
        <hr className="h-px w-full border-0 bg-[#7B7B7B]/20" />
      </div>
      <div className="mt-1 flex w-full gap-4">
        <Button theme="white" leftIcon={<GoogleIcon />} border>
          Google
        </Button>
        <Button theme="white" leftIcon={<FacebookIcon />} border>
          Facebook
        </Button>
      </div>
    </main>
  )
}
