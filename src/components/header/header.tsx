import styles from './header.module.scss'

export default function Header({
  theme,
  setTheme,
}: {
  theme: string
  setTheme: any
}) {
  const handleChange = () => {
    const isCurrentDark = theme === 'dark'
    setTheme(isCurrentDark ? 'light' : 'dark')
    localStorage.setItem('theme', isCurrentDark ? 'light' : 'dark')
  }

  return (
    <header className={`${styles.header} ${styles[theme]}`}>
      <section>
        <h2>Where in the world?</h2>
        <button onClick={handleChange}>{theme.toLocaleLowerCase()} mode</button>
      </section>
    </header>
  )
}
