import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BackButton from '../components/back-button/back-button'
import CountryCard from '../components/country-card/country-card'
import Header from '../components/header/header'

export default function Country({
  theme,
  setTheme,
}: {
  theme: string
  setTheme: any
}) {
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
      <Header theme={theme} setTheme={setTheme} />
      <BackButton />
      {data.length > 0 && <CountryCard country={data[0]} />}
    </>
  )
}
