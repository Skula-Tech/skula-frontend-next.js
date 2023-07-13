import clsx from 'clsx'

interface DownProps extends React.SVGProps<SVGSVGElement> {}

export const Down = ({ className, ...props }: DownProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
      className={className}
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
