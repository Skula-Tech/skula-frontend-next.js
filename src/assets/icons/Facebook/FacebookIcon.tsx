interface FacebookIconProps extends React.SVGProps<SVGSVGElement> {}

export const FacebookIcon = (props: FacebookIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      fill="none"
      {...props}
    >
      <path
        stroke="#183C70"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M18.657 6.3H15.651a.983.983 0 0 0-.984.983v3.45h3.99l-.584 3.8h-3.406V21.5H10.28v-6.968H6.657v-3.798h3.576l.047-3.606-.007-.654A3.934 3.934 0 0 1 14.207 2.5h4.45v3.8Z"
      />
    </svg>
  )
}
