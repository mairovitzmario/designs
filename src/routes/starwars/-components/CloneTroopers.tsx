import styles from './CloneTroopers.module.css'
import genericStyles from '../starwars.module.css'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import { useState } from 'react'

import trooperList from '../-data'

export default function CloneTroopers() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const trooper = trooperList[selectedIndex]

  function cycleTrooper(x: -1 | 1) {
    const len = trooperList.length
    const newIndex = (((selectedIndex + x) % len) + len) % len
    setSelectedIndex(newIndex)
  }

  return (
    <section className={`${styles['wrapper']} ${genericStyles['starry-sky']}`}>
      <div className={styles['name-wrapper']}>
        <h2 className={styles['name']}>{trooper.name}</h2>
      </div>
      <div className={styles['description-block-shadow']}>
        <div className={styles['description-block']}>
          <div>
            <h2 style={{ '--trooper-color': trooper.color } as any}>
              {trooper.name}
            </h2>
            <h3>Commander: {trooper.commander}</h3>
            <p>{trooper.description}</p>
          </div>

          <div className={styles['buttons']}>
            <button onClick={() => cycleTrooper(-1)}>
              <ChevronLeft />
            </button>
            <button onClick={() => cycleTrooper(1)}>
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
      <img
        className={`${styles['trooper']}`}
        src={new URL(`../-assets/${trooper.img}`, import.meta.url).href}
      />
    </section>
  )
}
