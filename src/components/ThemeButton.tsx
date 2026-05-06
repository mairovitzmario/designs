import { useTheme } from '#/context/theme.tsx'
import { Sun, Moon } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import type { Variants } from 'motion/react'
import styles from './ThemeButton.module.css'

const transition = { duration: 0.1 }

const buttonVariant: Variants = {
  small: {
    scale: 0,

    transition,
  },
  normal: {
    scale: 1,

    transition,
  },
}

export default function ThemeButton() {
  const { theme, setTheme } = useTheme()

  return (
    <AnimatePresence mode="wait">
      <motion.button
        className={styles.button}
        variants={buttonVariant}
        initial="small"
        animate="normal"
        exit="small"
        key={theme}
        onClick={() => {
          setTheme(theme == 'light' ? 'dark' : 'light')
        }}
      >
        {theme == 'light' ? (
          <Sun className={styles.icon} />
        ) : (
          <Moon className={styles.icon} />
        )}
      </motion.button>
    </AnimatePresence>
  )
}
