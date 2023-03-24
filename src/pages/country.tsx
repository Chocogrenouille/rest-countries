import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Country() {
  const { id } = useParams()
  const [data, setData] = useState<countryDetailsType[]>([])

  type countryDetailsType = {
    region: string
    subregion: string
    flags: {
      png: string
    }
    capital: string
    tld: string[]
    languages: {
      [key: string]: string
    }
    population: number
    currencies: {
      name: string
    }[]
    borders: string[]
    name: {
      common: string
      nativeName: {
        [key: string]: {
          common: string
        }
      }
    }
  }

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${id}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.log(error)
      })
  }, [id])

  return (
    <>
      <Link to="/">
        <button>back</button>
      </Link>
      {data.length > 0 && (
        <>
          <figure>
            <img src={data[0].flags.png} alt="country flag" />
          </figure>
          <section>
            <h4>{data[0].name.common}</h4>
            <p>
              <b>Native name: </b>
              {Object.values(data[0].name.nativeName).map((nativeName) => (
                <span key={nativeName.common}>{nativeName.common}</span>
              ))}
            </p>
            <p>
              <b>Population: </b>
              {data[0].population}
            </p>
            <p>
              <b>Region: </b>
              {data[0].region}
            </p>
            <p>
              <b>Sub Region: </b>
              {data[0].subregion}
            </p>
            <p>
              <b>Capital: </b>
              {data[0].capital}
            </p>
            <p>
              <b>Top level domain: </b>
              {data[0].tld.map((domain) => (
                <span key={domain}>{domain}</span>
              ))}
            </p>
            <p>
              <b>Currencies: </b>
              {Object.values(data[0].currencies).map((currency) => (
                <span key={currency.name}>{currency.name}</span>
              ))}
            </p>
            <p>
              <b>Languages: </b>
              {Object.values(data[0].languages).map((language) => (
                <span key={language}>{language}</span>
              ))}
            </p>
          </section>
          <div>
            {data[0].borders.map((border) => (
              <button key={border}>
                <Link to={`/${border}`}>{border}</Link>
              </button>
            ))}
          </div>
        </>
      )}
    </>
  )
}
