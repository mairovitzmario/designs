import type { Variants } from 'motion'

export const appearWiggleKeys = {
  initial: 'initial',
  wiggle: 'wiggle',
} as const

const appearWiggleVariant: Variants = {
  initial: { rotate: -5, scale: 0.9, opacity: 0 },
  wiggle: {
    rotate: 0,
    scale: 1,
    opacity: 1,
    transition: { type: 'spring', stiffness: 500, damping: 20 },
  },
}

export default appearWiggleVariant
