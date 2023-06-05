interface PreviewCloseProps extends React.SVGProps<SVGSVGElement> {}

export const PreviewClose = ({ className, ...props }: PreviewCloseProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      className={className}
      {...props}
    >
      <g strokeLinecap="round" strokeLinejoin="round" clipPath="url(#a)">
        <path
          stroke="#B3B3B3"
          d="M4.929 9C3.119 10.5 2 12 2 12s4.477 6 10 6c.685 0 1.354-.092 2-.254M10.016 6.25A8.223 8.223 0 0 1 12 6c5.523 0 10 6 10 6s-1.12 1.5-2.929 3M10.157 10.31a2.5 2.5 0 0 0 3.593 3.475"
        />
        <path stroke="#8A8A8A" d="M21 21 3 3" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
