import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { getAllStarships } from "../../../services/sw-api"

const Starships = () => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchStarships = async () => {
      const shipData = await getAllStarships()
      console.log(shipData)
      setStarships(shipData.results)
    }
    fetchStarships()
  }, [])
  
  if(!starships.length) return <h1>Starships Loading...</h1>

  return (
    <main>
      <div className='card-container'>
        {starships.map((starship, idx) => {
          const starshipId = starship.url.slice(21)
          return (
            <button className='ship-card' key={idx}>
              <Link to={`${starshipId}`}>{starship.name}</Link>
            </button>
          )
        })}
      </div>
    </main>
  )
} 

export default Starships