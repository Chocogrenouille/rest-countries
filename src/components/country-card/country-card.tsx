import { Link } from 'react-router-dom'
import { countryDetailsType } from '../../../types'
import styles from './country-card.module.scss'

export default function CountryCard({
  country,
  theme,
}: {
  country: countryDetailsType
  theme: string
}) {
  return (
    <div className={`${styles.countryDetailsWrapper} ${styles[theme]}`}>
      <figure className={styles.flag}>
        <img src={country.flags.png} alt="country flag" />
      </figure>
      <section className={styles.countryDetails}>
        <h1>{country.name.common}</h1>
        <p className={styles.nativeName}>
          <b>Native name: </b>
          {Object.values(country.name.nativeName).map((nativeName) => (
            <span key={nativeName.common}>{nativeName.common}</span>
          ))}
        </p>
        <p className={styles.population}>
          <b>Population: </b>
          {country.population}
        </p>
        <p className={styles.region}>
          <b>Region: </b>
          {country.region}
        </p>
        <p className={styles.subregion}>
          <b>Sub Region: </b>
          {country.subregion}
        </p>
        <p className={styles.capital}>
          <b>Capital: </b>
          {country.capital}
        </p>
        <p className={styles.topLevelDomain}>
          <b>Top level domain: </b>
          {country.tld.map((domain) => (
            <span key={domain}>{domain}</span>
          ))}
        </p>
        <p className={styles.currencies}>
          <b>Currencies: </b>
          {Object.values(country.currencies).map((currency) => (
            <span key={currency.name}>{currency.name}</span>
          ))}
        </p>
        <p className={styles.languages}>
          <b>Languages: </b>
          {Object.values(country.languages).map((language, index) => (
            <span key={language}>{language}</span>
          ))}
        </p>
        <div className={styles.borderCountries}>
          <p>
            <b>Border Countries: </b>
          </p>
          {country.borders.map((border) => (
            <button key={border}>
              <Link to={`/${border}`}>{border}</Link>
            </button>
          ))}
        </div>
      </section>
    </div>
  )
}
