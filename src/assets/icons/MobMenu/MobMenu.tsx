interface MobMenuProps extends React.SVGProps<SVGSVGElement> {}

export const MobMenu = ({ className, ...props }: MobMenuProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="19"
      fill="none"
      viewBox="0 0 32 19"
      className={className}
      {...props}
    >
      <path stroke="#fff" strokeWidth="3" d="M0 1.5L32 1.5"></path>
      <path stroke="#fff" strokeWidth="3" d="M0 9.5L32 9.5"></path>
      <path stroke="#fff" strokeWidth="3" d="M0 17.5L32 17.5"></path>
    </svg>
  )
}
