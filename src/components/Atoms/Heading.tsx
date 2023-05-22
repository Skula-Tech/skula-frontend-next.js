import { TypeRange } from '@/@types/types'

interface HeadingProps {
  type: TypeRange<1, 4>
  children: string
  className?: string
}

export default function Heading({ type, children, className }: HeadingProps) {
  const Comp = type === 1 ? 'h1' : type === 2 ? 'h2' : type === 3 ? 'h3' : 'h4'

  const headStyle =
    type === 1
      ? 'font-head text-3.5xl'
      : type === 2
      ? 'font-head text-2.5xl'
      : type === 3
      ? 'font-head text-xl leading-8'
      : 'font-text text-base leading-6.5'
  return <Comp className={`${headStyle} ${className}`}>{children}</Comp>
}
