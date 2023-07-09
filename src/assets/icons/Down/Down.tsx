import clsx from 'clsx'

interface DownProps extends React.SVGProps<SVGSVGElement> {
  strokeTheme?: 'white' | 'purple'
}

export const Down = ({ strokeTheme = 'purple', ...props }: DownProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
      className={clsx({
        'stroke-white': strokeTheme === 'white',
        'stroke-1-900': strokeTheme === 'purple',
      })}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20 24l-8-8 8-8"
      ></path>
    </svg>
  )
}
