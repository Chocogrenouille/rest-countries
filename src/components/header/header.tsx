import styles from './header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <section>
        <h2>Where in the world?</h2>
        <button>Dark mode</button>
      </section>
    </header>
  )
}
