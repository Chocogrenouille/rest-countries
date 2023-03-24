export type countryType = {
  name: {
    common: string
  }
  flags: {
    png: string
  }
  region: string
  population: number
  capital: string
  cca3: string
}

export type countryDetailsType = {
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
