import { useState, useEffect } from 'react'
import SearchBar from '../search-bar/search-bar'
import RegionFilter from '../region-filter/region-filter'
import UseCountryAPI from '../../use-country-api'
import styles from './countries-wrapper.module.scss'

export default function CountriesWrapper() {
  const [selectedRegion, setSelectedRegion] = useState('all')
  const allCountriesData: countryType[] = UseCountryAPI(selectedRegion)
  const [filteredCountries, setFilteredCountries] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  type countryType = {
    name: {
      common: string
    }
    flags: {
      png: string
    }
    region: string
    population: number
    capital: string
    cca2: string
  }

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
    }
  }, [selectedRegion, allCountriesData])

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
              <section key={country.cca2}>
                <img src={country.flags.png} alt="country flag" />
                <h4>{country.name.common}</h4>
                <p>
                  <b>Population: </b> {country.population}
                </p>
                <p>
                  <b>Region: </b> {country.region}
                </p>
                <p>
                  <b>Capital: </b>
                  {country.capital}
                </p>
              </section>
            ))}
          </>
        )}
      </div>
    </>
  )
}
