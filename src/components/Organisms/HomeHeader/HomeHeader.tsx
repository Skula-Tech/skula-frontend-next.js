import Image from 'next/image'
import SkulaLogo from '@/assets/logos/skula-logo.png'
import { MobMenu, SearchNormal } from '@/assets/icons'
import { Heading, Text } from '@/components/Atoms'
import { Input } from '@/components/Molecules'

export const HomeHeader = () => {
  return (
    <header className="flex h-full w-full flex-col items-center gap-6 bg-gradient-lg px-4 py-6">
      <div className="flex w-full items-center justify-between gap-4">
        <button className="">
          <MobMenu />
        </button>
        <Image src={SkulaLogo} alt="Skula Logo" />
        <div className="w-11" />
      </div>
      <Heading fontStyle="xxl" className="text-[#E9E9E9]">
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
