interface PreviewCloseProps extends React.SVGProps<SVGSVGElement> {}

export const PreviewClose = ({ className, ...props }: PreviewCloseProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 48 48"
      className={className}
      {...props}
    >
      <path
        stroke="#B3B3B3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M9.858 18C6.238 21 4 24 4 24s8.954 12 20 12c1.37 0 2.708-.185 4-.508M20.032 12.5c1.282-.318 2.61-.5 3.968-.5 11.046 0 20 12 20 12s-2.239 3-5.858 6M20.314 20.621a5 5 0 0 0 7.186 6.95M42 42 6 6"
      />
    </svg>
  )
}
