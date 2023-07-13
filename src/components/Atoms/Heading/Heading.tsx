import clsx from 'clsx'
import { ReactNode } from 'react'
import { HeadingStyles } from '@/@types/types'

interface HeadingProps extends HeadingStyles {
  children?: ReactNode
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'span'
}

export const Heading = ({
  fontStyle = 'xlh',
  as = 'h3',
  children,
  className,
}: HeadingProps) => {
  const Comp = as

  const headStyles = {
    xxl: 'font-sec text-3.5xl',
    sxl: 'font-prim text-2.5xl font-medium text-1-800',
    xlh: 'font-prim text-xl leading-8 text-1-800',
    mdh: 'font-prim text-base leading-6.5 text-1-800',
  }

  return (
    <Comp className={clsx(headStyles[fontStyle], className)}>{children}</Comp>
  )
}
