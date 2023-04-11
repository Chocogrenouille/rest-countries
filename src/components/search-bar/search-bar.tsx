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
  return (
    <>
      <input
        type="text"
        value={searchTerm}
        id=""
        placeholder="search for a country"
        onChange={(event) => setSearchTerm(event.target.value)}
        className={`${styles.searchBar} ${styles[theme]}`}
      />
    </>
  )
}
