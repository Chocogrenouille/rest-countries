export default function SearchBar({
  setSearchTerm,
  searchTerm,
}: {
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
      />
    </>
  )
}
