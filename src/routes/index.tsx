import { createFileRoute, Link } from '@tanstack/react-router'
import ThemeButton from '#/components/ThemeButton.tsx'
import routeList from './-route-list'
import styles from './index.module.css'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <>
      <ThemeButton />
      <h1 className="text-center mb-5">Designs</h1>

      <ul className={styles['designs-list']}>
        {routeList.map((route) => (
          <li>
            <Link
              to={route.url}
              className={styles['design-card']}
              style={
                {
                  '--thumbnail': `url(${route.url}/thumbnail.webp)`,
                } as React.CSSProperties
              }
            >
              <h2>{route.name}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
