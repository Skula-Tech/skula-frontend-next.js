import { tv, type VariantProps } from 'tailwind-variants'

const text = tv({
  base: 'font-prim font-medium',
  variants: {
    fontStyle: {
      body1: 'text-sm',
      body2: 'text-sm',
      body3: 'text-xs leading-4.5',
      body4: 'text-sxs',
    },
  },
  compoundVariants: [
    { fontStyle: 'body1', className: 'font-prim font-normal' },
  ],
  defaultVariants: { fontStyle: 'body2' },
})

type TextProps = VariantProps<typeof text> & React.ComponentProps<'p'>

export const Text = ({ fontStyle, className, ...props }: TextProps) => {
  return <p className={text({ fontStyle, className })} {...props} />
}
