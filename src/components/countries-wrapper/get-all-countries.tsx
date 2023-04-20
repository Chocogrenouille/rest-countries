import { useEffect, useState } from 'react'

export default function GetAllCountries() {
  const [data, setData] = useState([])

  useEffect(() => {
    const controller = new AbortController()
    fetch('https://restcountries.com/v3.1/all', {
      signal: controller.signal,
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.log(error)
      })

    return () => controller.abort()
  }, [])
  return data
}
