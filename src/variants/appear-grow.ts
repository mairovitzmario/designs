import type { Variants } from 'motion'

export const appearGrowKeys = {
  initial: 'initial',
  grow: 'grow',
}

const appearGrowVariant: Variants = {
  initial: { scale: 0.5 },
  grow: {
    scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
}

export default appearGrowVariant
