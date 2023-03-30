import styles from './search-bar.module.scss'

export default function SearchBar({
  setSearchTerm,
  searchTerm,
  theme,
}: {
  theme: string
  setSearchTerm: any
  searchTerm: string
}) {
  const getTheme = (theme: string) => {
    if (theme === 'light') return styles.light
    return styles.dark
  }
  return (
    <>
      <input
        type="text"
        value={searchTerm}
        id=""
        placeholder="search for a country"
        onChange={(event) => setSearchTerm(event.target.value)}
        className={`${styles.searchBar} ${getTheme(theme)}`}
      />
    </>
  )
}
