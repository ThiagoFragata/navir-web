import Link from 'next/link'
import Styles from './header.module.css'

export function Header() {
  return (
    <header className={Styles.navigation}>
      <Link href="/" className={Styles.brand}>
        N.A.V.I.R
      </Link>

      <nav className={Styles.items}>
        <Link href="/">Home</Link>
        <Link href="/about">Quem somos</Link>
        <Link href="/solutions-and-cases">Soluções e cases</Link>
        <Link href="/contact" className={Styles.callToAction}>
          Contato
        </Link>
      </nav>
    </header>
  )
}
