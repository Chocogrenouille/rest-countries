import { useState, useEffect } from 'react'
import SearchBar from '../search-bar/search-bar'
import RegionFilter from '../region-filter/region-filter'
import GetAllCountries from './get-all-countries'
import { countryType } from '../../../types'
import styles from './countries-wrapper.module.scss'
import { Link } from 'react-router-dom'

export default function CountriesWrapper() {
  const allCountriesData: countryType[] = GetAllCountries()

  const [filteredCountries, setFilteredCountries] = useState(allCountriesData)
  const [selectedRegion, setSelectedRegion] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    if (searchTerm.length > 0) {
      setFilteredCountries(
        //@ts-ignore
        allCountriesData.filter((country: countryType) =>
          country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    } else {
      //@ts-ignore
      setFilteredCountries(allCountriesData)
    }

    setSelectedRegion('all')
  }, [searchTerm, allCountriesData])

  useEffect(() => {
    if (selectedRegion === 'all') {
      //@ts-ignore
      setFilteredCountries(allCountriesData)
      return
    } else {
      const stuff = allCountriesData.filter((country: countryType) => {
        return country.region === selectedRegion
      })
      //@ts-ignore
      setFilteredCountries(stuff)
      setSearchTerm('')
    }
  }, [selectedRegion, allCountriesData])

  console.log(filteredCountries)
  return (
    <>
      <div>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <RegionFilter
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
        />
      </div>
      <div className={styles.countriesWrapper}>
        {filteredCountries.length === 0 ? (
          <p>loading</p>
        ) : (
          <>
            {filteredCountries.map((country: countryType) => (
              <section key={country.cca3}>
                <img src={country.flags.png} alt="country flag" />
                <h4>{country.name.common}</h4>
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
                <Link to={`/${country.cca3}`}>See details</Link>
              </section>
            ))}
          </>
        )}
      </div>
    </>
  )
}
