import { Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav/Nav'
import Starships from './components/Starships/Starships'
import StarshipDetails from './components/StarshipDetails/StarshipDetails'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route  path='/' element={<Starships/>}/>
        <Route path='/starships/:starshipId' element={<StarshipDetails/>}/>
      </Routes>
    </>
  )
}

export default App
