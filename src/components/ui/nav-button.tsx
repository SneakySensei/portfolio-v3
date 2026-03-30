import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import type { JSX } from 'react'

const navButtonVariants = cva(
  'relative flex size-8 cursor-pointer items-center justify-center border border-neutral-300 bg-neutral-100 p-0 text-neutral-500 transition-all [&_svg]:size-5',
  {
    variants: {
      active: {
        true: 'border-brand-200 bg-brand-100 text-brand-300',
      },
    },
  },
)

export interface NavButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof navButtonVariants> {}

function NavButton({
  className,
  active,
  children,
  ...props
}: NavButtonProps): JSX.Element {
  return (
    <button className={cn(navButtonVariants({ active, className }))} {...props}>
      {children}
      {active && (
        <>
          <svg
            width="6"
            height="6"
            viewBox="0 0 6 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -top-[3.5px] -left-[3.5px] size-1.5!"
          >
            <path
              d="M6 3.64286H3.64286V6H2.35714V3.64286H0V2.35714H2.35714V0H3.64286V2.35714H6V3.64286Z"
              fill="#E05B2D"
            />
          </svg>
          <svg
            width="6"
            height="6"
            viewBox="0 0 6 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -top-[3.5px] -right-[3.5px] size-1.5!"
          >
            <path
              d="M6 3.64286H3.64286V6H2.35714V3.64286H0V2.35714H2.35714V0H3.64286V2.35714H6V3.64286Z"
              fill="#E05B2D"
            />
          </svg>
          <svg
            width="6"
            height="6"
            viewBox="0 0 6 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -right-[3.5px] -bottom-[3.5px] size-1.5!"
          >
            <path
              d="M6 3.64286H3.64286V6H2.35714V3.64286H0V2.35714H2.35714V0H3.64286V2.35714H6V3.64286Z"
              fill="#E05B2D"
            />
          </svg>
          <svg
            width="6"
            height="6"
            viewBox="0 0 6 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -bottom-[3.5px] -left-[3.5px] size-1.5!"
          >
            <path
              d="M6 3.64286H3.64286V6H2.35714V3.64286H0V2.35714H2.35714V0H3.64286V2.35714H6V3.64286Z"
              fill="#E05B2D"
            />
          </svg>
        </>
      )}
    </button>
  )
}

export { NavButton, navButtonVariants }
