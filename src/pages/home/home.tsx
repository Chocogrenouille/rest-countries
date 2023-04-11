import CountriesWrapper from '../../components/countries-wrapper/countries-wrapper'
import Header from '../../components/header/header'
import styles from './home.module.scss'

export default function Home({
  theme,
  setTheme,
}: {
  theme: string
  setTheme: any
}) {
  return (
    <div className={`${styles.wrapper} ${styles[theme]}`}>
      <Header theme={theme} setTheme={setTheme} />
      <CountriesWrapper theme={theme} />
    </div>
  )
}
