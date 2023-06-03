import clsx from 'clsx'
import { ReactNode } from 'react'
import { TextStyles } from '@/@types/types'

interface TextProps extends TextStyles {
  children?: ReactNode
  className?: string
}

export const Text = ({ fontStyle = 'smr', children, className }: TextProps) => {
  const textStyles = {
    smh: 'font-prim text-sm font-normal leading-6',
    smr: 'font-prim text-sm font-normal leading-5',
    xsh: 'font-prim text-xs font-normal leading-4.5',
    mdm: 'font-prim text-base font-medium leading-6.5',
  }

  return <p className={clsx(textStyles[fontStyle], className)}>{children}</p>
}
