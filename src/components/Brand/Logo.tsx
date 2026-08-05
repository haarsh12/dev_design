import styles from './Logo.module.css'

type LogoProps = {
  light?: boolean
}

export function Logo({ light = false }: LogoProps) {
  return (
    <span className={`${styles.logo} ${light ? styles.light : ''}`} aria-label="Vyamit AI">
      <span className={styles.mark} aria-hidden="true"><i /><i /><i /></span>
      <span className={styles.name}>Vyamit<span>AI</span></span>
    </span>
  )
}
