interface SeparatorProps extends React.SVGProps<SVGSVGElement> {}

export const Separator = (props: SeparatorProps) => {
  return (
    <svg
      width="1"
      height="24"
      viewBox="0 0 1 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        opacity="0.08"
        x1="0.5"
        y1="-2.18557e-08"
        x2="0.500001"
        y2="24"
        stroke="black"
      />
    </svg>
  )
}