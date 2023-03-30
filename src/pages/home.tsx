import CountriesWrapper from '../components/countries-wrapper/countries-wrapper'
import Header from '../components/header/header'

export default function Home({
  theme,
  setTheme,
}: {
  theme: string
  setTheme: any
}) {
  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <CountriesWrapper theme={theme} />
    </>
  )
}
