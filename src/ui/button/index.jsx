import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2',
  outline:
    'group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none',
}

const variantStyles = {
  solid: {
    slate:
      'bg-secondary-900 text-white hover:bg-secondary-700 hover:text-secondary-100 active:bg-secondary-800 active:text-secondary-300 focus-visible:outline-secondary-900',
    blue: 'bg-primary-600 text-white hover:text-secondary-100 hover:bg-primary-500 active:bg-primary-800 active:text-primary-100 focus-visible:outline-primary-600',
    white:
      'bg-white text-secondary-900 hover:bg-primary-50 active:bg-primary-200 active:text-secondary-600 focus-visible:outline-white',
  },
  outline: {
    slate:
      'ring-secondary-200 text-secondary-700 hover:text-secondary-900 hover:ring-secondary-300 active:bg-secondary-100 active:text-secondary-600 focus-visible:outline-primary-600 focus-visible:ring-secondary-300',
    white:
      'ring-secondary-700 text-white hover:ring-secondary-500 active:ring-secondary-700 active:text-secondary-400 focus-visible:outline-white',
  },
}

export function Button({ className, ...props }) {
  props.variant ??= 'solid'
  props.color ??= 'slate'

  className = clsx(
    baseStyles[props.variant],
    props.variant === 'outline'
      ? variantStyles.outline[props.color]
      : props.variant === 'solid'
        ? variantStyles.solid[props.color]
        : undefined,
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
