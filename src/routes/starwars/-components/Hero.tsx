import { useRef } from 'react'
import styles from './Hero.module.css'
import genericStyles from '../starwars.module.css'
import { useScroll, motion, useTransform } from 'motion/react'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  const scaleLogo = useTransform(scrollYProgress, [0, 1], [1, 10])
  const opacityLogo = useTransform(scrollYProgress, [0, 1], [1, 0])
  const opacityHeading = useTransform(scrollYProgress, [0, 0.1], [1, 0])
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.6],
    ['rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 1)'],
  )

  return (
    <div ref={containerRef} className={styles['scroll-hero']}>
      <div className={styles['hero']}>
        <motion.div
          className={`${styles['overlay']} ${genericStyles['starry-sky']}`}
          style={{ backgroundColor: backgroundColor }}
        >
          <motion.img
            style={{ scale: scaleLogo, opacity: opacityLogo }}
            className={styles['logo']}
            src="/starwars/logo.svg"
            alt="Star Wars"
          />
          <motion.h1 style={{ opacity: opacityHeading }}>
            Clone Troopers
          </motion.h1>
          <motion.div
            className={styles['scroll-hint']}
            style={{ opacity: opacityHeading }}
          >
            <p>Scroll Down</p>
            <span>
              <ChevronDown />
            </span>
          </motion.div>
        </motion.div>
        <video
          className={styles['hero-video']}
          autoPlay
          loop
          muted
          disablePictureInPicture
        >
          <source src="/starwars/hoth-battle.webm" type="video/webm" />
        </video>
      </div>
    </div>
  )
}
