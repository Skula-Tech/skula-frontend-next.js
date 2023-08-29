import Image from 'next/image'
import SkulaLogo from '@/assets/logos/skula-logo.png'
import { tv } from 'tailwind-variants'
import { MobMenu, SearchNormal } from '@/assets/icons'
import { Heading, Text } from '@/components/Atoms'
import { Input } from '@/components/Molecules'

const header = tv({
  slots: {
    base: 'flex h-full w-full flex-col items-center gap-6 bg-gradient-lg px-4 py-6',
    head: 'flex w-full items-center justify-between gap-4',
  },
})

const { base, head } = header()

export const HomeHeader = () => {
  return (
    <header className={base()}>
      <div className={head()}>
        <button>
          <MobMenu />
        </button>
        <Image src={SkulaLogo} alt="Skula Logo" />
        <div className="w-11" />
      </div>
      <Heading as="h1" className="text-[#e9e9e9]">
        Bora aprender?
      </Heading>
      <Text className="text-center text-neutral-50">
        Curta a experiência de ter aulas com professores em várias disciplinas e
        ainda compartilhe a aula com os seus amigos!
      </Text>
      <Input
        placeholder="O que você gostaria de aprender?"
        border="purple"
        rightElement={<SearchNormal />}
      />
    </header>
  )
}
