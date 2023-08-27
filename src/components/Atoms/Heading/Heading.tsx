import { tv, type VariantProps } from 'tailwind-variants'

const heading = tv({
  base: 'font-prim font-medium',
  variants: {
    as: {
      h1: 'text-3.5xl',
      h2: 'text-2.5xl',
      h3: 'text-xl leading-8',
      h4: 'text-base leading-none',
    },
  },
  compoundVariants: [{ as: 'h1', className: 'font-sec font-normal' }],
})

type HeadingProps = VariantProps<typeof heading> & React.ComponentProps<'h1'>

export const Heading = ({ as = 'h3', className, ...props }: HeadingProps) => {
  const Comp = as

  return <Comp className={heading({ as, className })} {...props} />
}
