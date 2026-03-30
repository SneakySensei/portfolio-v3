import { cva, type VariantProps } from 'class-variance-authority'
import type { JSX } from 'react'

const textVariants = cva('', {
  variants: {
    variant: {
      'display-lg': 'font-display text-[64px] leading-tight tracking-normal',
      'display-md': 'font-display text-[40px] leading-tight tracking-normal',
      'display-sm': 'font-display text-2xl leading-tight tracking-normal',
      'body-lg': 'font-mono text-base leading-none tracking-normal',
      'body-md': 'font-mono text-sm leading-none tracking-normal',
      'body-sm': 'font-mono text-xs leading-none tracking-normal',
      'caption-lg': 'font-mono text-[11px] leading-none tracking-normal',
      'caption-sm': 'font-mono text-[10px] leading-none tracking-normal',
    },
  },
  defaultVariants: {
    variant: 'body-md',
  },
})

type ElementType =
  | 'p'
  | 'span'
  | 'div'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'

export interface TextProps
  extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof textVariants> {
  as?: ElementType
}

function Text({ className, variant, as, ...props }: TextProps): JSX.Element {
  const Component = as ?? getDefaultElement(variant)

  return (
    <Component className={textVariants({ variant, className })} {...props} />
  )
}

const getDefaultElement = (
  variant: VariantProps<typeof textVariants>['variant'],
): ElementType => {
  switch (variant) {
    case 'display-lg':
      return 'h1'
    case 'display-md':
      return 'h2'
    case 'display-sm':
      return 'h3'
    case 'body-lg':
    case 'body-md':
    case 'body-sm':
      return 'p'
    case 'caption-lg':
    case 'caption-sm':
      return 'span'
  }

  return 'div'
}

export { Text, textVariants }
