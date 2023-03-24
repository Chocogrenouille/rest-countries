import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import CountryCard from '../components/country-card/country-card'

export default function Country() {
  const { id } = useParams()
  const [data, setData] = useState([])

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
      {data.length > 0 && <CountryCard country={data[0]} />}
    </>
  )
}
