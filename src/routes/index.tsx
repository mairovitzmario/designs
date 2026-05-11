import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'motion/react'
import styles from './index.module.css'
import appearGrowVariant, { appearGrowKeys } from '#/variants/appear-grow.ts'
import ThemeButton from '#/components/ThemeButton.tsx'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <>
      <ThemeButton />
      <motion.h1
        className="text-center"
        variants={appearGrowVariant}
        initial={appearGrowKeys.initial}
        animate={appearGrowKeys.grow}
      >
        Designs
      </motion.h1>

      <ul></ul>
    </>
  )
}
