import { useState, useEffect, useMemo } from 'react'
import SearchBar from '../search-bar/search-bar'
import RegionFilter from '../region-filter/region-filter'
import GetAllCountries from './get-all-countries'
import { countryType } from '../../../types'
import styles from './countries-wrapper.module.scss'
import { Link } from 'react-router-dom'

export default function CountriesWrapper({ theme }: { theme: string }) {
  const allCountriesData: countryType[] = GetAllCountries()

  const [filteredCountries, setFilteredCountries] = useState(allCountriesData)
  const [selectedRegion, setSelectedRegion] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    if (searchTerm.length > 0) {
      setFilteredCountries(
        allCountriesData.filter((country: countryType) =>
          country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    } else {
      setFilteredCountries(allCountriesData)
    }
    setSelectedRegion('all')
  }, [searchTerm, allCountriesData])

  useEffect(() => {
    if (selectedRegion === 'all') {
      setFilteredCountries(allCountriesData)
      return
    } else {
      const stuff = allCountriesData.filter((country: countryType) => {
        return country.region === selectedRegion
      })

      setFilteredCountries(stuff)
      setSearchTerm('')
    }
  }, [selectedRegion, allCountriesData])

  const regionFilterMemo = useMemo(() => {
    return (
      <RegionFilter
        theme={theme}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />
    )
  }, [theme, selectedRegion])

  const SearchBarMemo = useMemo(() => {
    return (
      <SearchBar
        theme={theme}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
    )
  }, [theme, searchTerm])

  return (
    <div className={`${styles[theme]}`}>
      <div className={styles.filterSection}>
        {SearchBarMemo}
        {regionFilterMemo}
      </div>
      <div className={styles.countriesWrapper}>
        {filteredCountries.length === 0 ? (
          <p>loading</p>
        ) : (
          <>
            {filteredCountries.map((country: countryType) => (
              <section key={country.cca3}>
                <Link to={`/${country.cca3}`}>
                  <img src={country.flags.png} alt="country flag" />
                  <div className={styles.countryDetails}>
                    <h3>{country.name.common}</h3>
                    <p>
                      <b>Population: </b>
                      {country.population}
                    </p>
                    <p>
                      <b>Region: </b>
                      {country.region}
                    </p>
                    <p>
                      <b>Capital: </b>
                      {country.capital}
                    </p>
                  </div>
                </Link>
              </section>
            ))}
          </>
        )}
      </div>
    </div>
  )
}
