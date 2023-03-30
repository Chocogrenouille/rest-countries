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

  const getTheme = (theme: string) => {
    if (theme === 'light') return styles.lightHeader
    return styles.darkHeader
  }

  return (
    <header className={`${getTheme(theme)}`}>
      <section>
        <h2>Where in the world?</h2>
        <button onClick={handleChange}>{theme.toLocaleLowerCase()} mode</button>
      </section>
    </header>
  )
}
