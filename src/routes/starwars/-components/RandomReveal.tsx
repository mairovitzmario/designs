import { useEffect, useState } from 'react'
import { animate, usePresence } from 'motion/react'

type ScrambleTextPropsType = {
  text: string
  delay?: number
  duration?: number
  exitDuration?: number
}

export default function ScrambleText({
  text,
  delay = 0,
  duration = 1,
  exitDuration = 0.3, // Defaults to 0.3 to match your exitAnimDur
}: ScrambleTextPropsType) {
  const [displayText, setDisplayText] = useState('')

  // 1. Hook into AnimatePresence's lifecycle
  const [isPresent, safeToRemove] = usePresence()

  useEffect(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$'
    let controls

    if (isPresent) {
      // --- ENTRANCE ANIMATION ---
      setDisplayText(
        text
          .split('')
          .map((c) =>
            c === ' ' ? ' ' : chars[Math.floor(Math.random() * chars.length)],
          )
          .join(''),
      )

      controls = animate(0, text.length, {
        duration: duration,
        delay: delay,
        ease: 'linear',
        onUpdate: (latest) => {
          const currentIndex = Math.floor(latest)
          const scrambled = text
            .split('')
            .map((char, index) => {
              if (char === ' ') return char
              if (index < currentIndex) return char // Lock in left-to-right
              return chars[Math.floor(Math.random() * chars.length)]
            })
            .join('')
          setDisplayText(scrambled)
        },
        onComplete: () => setDisplayText(text),
      })
    } else {
      // --- EXIT ANIMATION ---
      // Animate backwards: start at full length and shrink down to 0
      controls = animate(text.length, 0, {
        duration: exitDuration,
        ease: 'linear',
        onUpdate: (latest) => {
          const currentIndex = Math.floor(latest)
          const scrambled = text
            .split('')
            .map((char, index) => {
              if (char === ' ') return char
              if (index < currentIndex) return char // Keep locked
              return chars[Math.floor(Math.random() * chars.length)] // Scramble right-to-left
            })
            .join('')
          setDisplayText(scrambled)
        },
        // 2. Crucial: Tell AnimatePresence it is now safe to unmount the DOM node
        onComplete: () => safeToRemove(),
      })
    }

    return () => controls.stop()
  }, [text, delay, duration, exitDuration, isPresent, safeToRemove])

  return <>{displayText}</>
}
