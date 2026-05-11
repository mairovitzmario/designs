import { createFileRoute } from '@tanstack/react-router'
import styles from './starwars.module.css'
import { style } from 'motion/react-client'
import Hero from './-components/Hero'
import CloneTroopers from './-components/CloneTroopers'

export const Route = createFileRoute('/starwars/')({
  component: StarWarsPage,
})

function StarWarsPage() {
  return (
    <main>
      <Hero />

      <CloneTroopers />
    </main>
  )
}
