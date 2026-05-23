import styles from './CloneTroopers.module.css'
import genericStyles from '../starwars.module.css'
import { ChevronRight, ChevronLeft, ChevronUp, ChevronDown } from 'lucide-react'
import React, { useState, useRef } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import RandomReveal from './RandomReveal'

import trooperList from '../-data'

export default function CloneTroopers() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const [isMobileTabletOpen, setIsMobileTabletOpen] = useState<boolean>(false)
  const ref = useRef(null)

  const trooper = trooperList[selectedIndex]

  const enterTextDur = 1
  const enterTrooperDur = 0.5
  const exitAnimDur = 0.3

  function cycleTrooper(x: -1 | 1) {
    const len = trooperList.length
    const newIndex = (((selectedIndex + x) % len) + len) % len
    setSelectedIndex(newIndex)
  }

  return (
    <AnimatePresence mode="wait">
      <section
        ref={ref}
        key={trooper.id}
        className={`${styles['wrapper']} ${genericStyles['starry-sky']}`}
        style={{ '--trooper-color': trooper.color } as React.CSSProperties}
      >
        <div>
          {/* Big Name */}
          <div className={styles['name-wrapper']}>
            <motion.h2
              initial={{ x: 1000 }}
              animate={{
                x: 0,
                transition: {
                  duration: enterTextDur,
                  delay: enterTrooperDur - 0.1,
                  ease: 'easeOut',
                },
              }}
              exit={{ x: 1000, transition: { duration: exitAnimDur } }}
              className={styles['name']}
            >
              {trooper.name}
            </motion.h2>
          </div>

          {/* Description Tablet */}
          <motion.div
            layout
            transition={{
              layout: { duration: 0.1 },
            }}
            className={`${styles['tablet-wrapper']} ${!isMobileTabletOpen && styles['closed']}`}
          >
            <motion.div
              initial={{ y: 20 }}
              animate={{
                y: 0,
                transition: { duration: 0.5, ease: 'easeOut' },
              }}
              exit={{
                y: 20,
                transition: { duration: 0.25, delay: exitAnimDur },
              }}
              className={styles['notch']}
            ></motion.div>
            <article className={styles['tablet']}>
              <div className={styles['tablet-text']}>
                <h2>
                  <RandomReveal
                    text={trooper.name}
                    exitDuration={exitAnimDur * 2}
                  />
                </h2>
                <h3>
                  <RandomReveal
                    text={`Commander: ${trooper.commander}`}
                    exitDuration={exitAnimDur * 2}
                  />
                </h3>
                <p>
                  <RandomReveal
                    text={trooper.description}
                    duration={1.5}
                    exitDuration={exitAnimDur * 2}
                  />
                </p>
              </div>

              <motion.nav layout className={styles['buttons']}>
                <button onClick={() => cycleTrooper(-1)}>
                  <ChevronLeft />
                </button>
                <button
                  onClick={() => setIsMobileTabletOpen(!isMobileTabletOpen)}
                  className={styles['expand-button']}
                >
                  {isMobileTabletOpen ? <ChevronDown /> : <ChevronUp />}
                </button>
                <button onClick={() => cycleTrooper(1)}>
                  <ChevronRight />
                </button>
              </motion.nav>
            </article>
          </motion.div>

          {/* Clone trooper */}
          <motion.img
            initial={{ y: 1000 }}
            animate={{ y: 0, transition: { duration: enterTrooperDur } }}
            exit={{
              y: 1000,
              transition: {
                duration: exitAnimDur,
                delay: exitAnimDur,
                ease: 'easeOut',
              },
            }}
            className={`${styles['trooper']}`}
            src={new URL(`../-assets/${trooper.img}`, import.meta.url).href}
            alt={`${trooper.name} Clone Trooper`}
          />
        </div>
      </section>
    </AnimatePresence>
  )
}
