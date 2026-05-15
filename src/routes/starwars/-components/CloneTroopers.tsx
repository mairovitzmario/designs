import styles from './CloneTroopers.module.css'
import genericStyles from '../starwars.module.css'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import React, { useState, useRef } from 'react'
import { AnimatePresence, motion, useInView } from 'motion/react'

import trooperList from '../-data'

export default function CloneTroopers() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.5 })

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
          <div className={styles['description-block-shadow']}>
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
            <article className={styles['description-block']}>
              <div>
                <h2>{trooper.name}</h2>
                <h3>Commander: {trooper.commander}</h3>
                <p>{trooper.description}</p>
              </div>

              <nav className={styles['buttons']}>
                <button onClick={() => cycleTrooper(-1)}>
                  <ChevronLeft />
                </button>
                <button onClick={() => cycleTrooper(1)}>
                  <ChevronRight />
                </button>
              </nav>
            </article>
          </div>
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
