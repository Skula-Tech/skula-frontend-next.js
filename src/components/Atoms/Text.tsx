import clsx from 'clsx'
import { TextStyle } from '@/@types/types'

interface TextProps extends TextStyle {
  children?: string
  className?: string
}

export default function Text({
  fontStyle = 'smr',
  children,
  className,
}: TextProps) {
  const textStyle = {
    smh: 'font-text text-sm font-normal leading-6',
    smr: 'font-text text-sm font-normal leading-5',
    xsh: 'font-text text-xs font-normal leading-4.5',
    mdm: 'font-text text-base font-medium leading-6.5',
  }

  return <p className={clsx(textStyle[fontStyle], className)}>{children}</p>
}
