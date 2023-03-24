export default function RegionFilter({
  setSelectedRegion,
  selectedRegion,
}: {
  setSelectedRegion: any
  selectedRegion: string
}) {
  return (
    <>
      <select
        defaultValue="all"
        onChange={(e) => setSelectedRegion(e.target.value)}
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
