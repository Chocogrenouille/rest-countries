import { useEffect, useState } from 'react'

export default function UseCountryAPI(region: string) {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return data
}
