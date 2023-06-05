interface PreviewOpenProps extends React.SVGProps<SVGSVGElement> {}

export const PreviewOpen = ({ className, ...props }: PreviewOpenProps) => {
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
        strokeLinejoin="round"
        strokeWidth="3"
        d="M24 36c11.046 0 20-12 20-12s-8.954-12-20-12S4 24 4 24s8.954 12 20 12Z"
      />
      <path
        stroke="#B3B3B3"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M24 29a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
      />
    </svg>
  )
}
