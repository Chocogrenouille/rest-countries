import { Route, Routes } from 'react-router-dom'
import Country from './pages/country'
import Home from './pages/home'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/:id" element={<Country />}></Route>
    </Routes>
  )
}

export default App
