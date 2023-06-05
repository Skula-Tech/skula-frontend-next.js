import { ReactNode } from 'react'

interface InputProps {
  id?: string
  label?: string
  labelColor?: 'white' | 'black'
  labelLineHeight?: 'high' | 'low'
  placeholder?: string
  rightIcon?: ReactNode
  className?: string
  border?: 'none' | 'purple' | 'gray'
}

// TODO: remove m-4 class from root div
export const Input = ({}: InputProps) => {
  return (
    <div className="m-4 flex flex-col gap-2">
      <label htmlFor="input" className="font-prim text-base">
        Label
      </label>
      <div className="box-content flex max-w-sm items-center overflow-hidden rounded border border-n-500 bg-white outline-1 transition duration-200 focus-within:border-black focus-within:shadow-border focus-within:outline">
        <input
          type="text"
          name="input"
          id="input"
          className="w-full py-3 pl-4 font-prim text-base tracking-wide outline-none"
        />
        <button className="py-3 pl-1 pr-4">Click</button>
      </div>
    </div>
  )
}
