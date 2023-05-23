import { TypeRange } from '@/@types/types'

interface TextProps {
  type: TypeRange<1, 3>
  children: string
  className?: string
}

export default function Text({ type, children, className }: TextProps) {
  const textStyle =
    type === 1
      ? 'font-text text-sm font-normal leading-6'
      : type === 2
      ? 'font-text text-sm font-normal leading-5'
      : 'font-text text-xs font-normal leading-4.5'

  return <p className={`${textStyle} ${className}`}>{children}</p>
}
