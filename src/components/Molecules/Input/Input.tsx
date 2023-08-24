import { MouseEventHandler, ReactNode, forwardRef } from 'react'
import clsx from 'clsx'

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  type?: 'text' | 'email' | 'password' | 'tel'
  label?: string
  labelColor?: 'white' | 'black'
  border?: 'none' | 'purple' | 'gray'
  className?: string
  rightElement?: ReactNode
  onRightElementClick?: MouseEventHandler
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({
    type,
    label,
    labelColor = 'black',
    border = 'gray',
    className,
    rightElement,
    onRightElementClick,
    ...inputprops
  }: InputProps, ref) => {
    const inputBorder = {
      gray: 'ring-gray-500',
      purple: 'ring-1-900',
      none: 'ring-transparent',
    }

    return (
      <div className={clsx('flex w-full flex-col gap-2 font-prim', className)}>
        <label
          htmlFor={inputprops.name}
          className={clsx('text-sm', { 'text-white': labelColor === 'white' })}
        >
          {label}
        </label>
        <div
          //TODO: verificar com equipe de UI/UX o padrão de outline
          className={clsx(
            'box-content flex max-w-full items-center justify-center overflow-hidden rounded bg-white ring-1 ring-inset',
            inputBorder[border],
            'p-1 transition focus-within:shadow-border focus-within:ring-black'
          )}
        >
          <input
            type={type}
            name={inputprops.name}
            id={inputprops.name}
            placeholder={inputprops.placeholder}
            className={clsx(
              'w-full py-2 pl-4 font-prim text-base tracking-wide outline-none placeholder:text-xs',
              { 'pr-4': !rightElement }
            )}
            ref={ref}
            {...inputprops}
          />
          {rightElement && (
            <button
              className="rounded px-4 outline-none ring-2 ring-transparent transition duration-200 focus-visible:shadow-border focus-visible:ring-black"
              onClick={onRightElementClick}
            >
              {rightElement}
            </button>
          )}
        </div>
      </div>
    )
  }
)

Input.displayName = 'Input'
