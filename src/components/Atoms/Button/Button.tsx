import clsx from 'clsx'
import { ReactNode } from 'react'
import { Separator } from '@/assets/icons'

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  theme?: 'purple' | 'white'
  leftIcon?: ReactNode
  border?: boolean
}

export const Button = ({
  children,
  className,
  theme = 'purple',
  leftIcon,
  border,
  ...props
}: ButtonProps) => {
  const themeStyle = {
    purple: 'bg-1-700 text-white',
    white: 'bg-white',
  }

  return (
    <button
      className={clsx(
        'flex w-full items-center justify-center gap-4 overflow-hidden rounded font-semibold',
        themeStyle[theme],
        'px-4 py-3 text-base outline-none',
        {
          'ring-1 ring-inset ring-1-900 focus:ring-1': border,
          'ring-1 ring-inset ring-transparent focus:ring-1': !border,
        },
        'transition duration-200 focus:shadow-border focus:ring-black',
        className
      )}
      {...props}
    >
      {leftIcon}
      {leftIcon && <Separator />}

      {children}
    </button>
  )
}
