import styles from './region-filter.module.scss'

export default function RegionFilter({
  setSelectedRegion,
  selectedRegion,
  theme,
}: {
  theme: string
  setSelectedRegion: any
  selectedRegion: string
}) {
  return (
    <>
      <select
        defaultValue={selectedRegion}
        onChange={(e) => setSelectedRegion(e.target.value)}
        className={`${styles.regionFilter} ${styles[theme]}`}
      >
        <option value="all">Filter by region</option>
        <option value="Europe">Europe</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Americas">Americas</option>
        <option value="Oceania">Oceania</option>
      </select>
    </>
  )
}
