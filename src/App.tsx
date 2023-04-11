import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ThemeContext } from './contexts/theme-context'
import Country from './pages/country/country'
import Home from './pages/home/home'

function App() {
  const isBrowserDefaultDark = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches

  const getDefaultTheme = (): string => {
    const localStorageTheme = localStorage.getItem('theme')
    const browserDefault = isBrowserDefaultDark() ? 'dark' : 'light'
    return localStorageTheme || browserDefault
  }

  const [theme, setTheme] = useState(getDefaultTheme)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Routes>
        <Route
          path="/"
          element={<Home theme={theme} setTheme={setTheme} />}
        ></Route>
        <Route
          path="/:id"
          element={<Country theme={theme} setTheme={setTheme} />}
        ></Route>
      </Routes>
    </ThemeContext.Provider>
  )
}

export default App
