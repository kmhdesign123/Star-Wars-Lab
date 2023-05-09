import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { getDetails } from "../../../services/sw-api"

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})

  const {starshipId} = useParams()

  console.log(starshipId)

  useEffect(() => {
    const fetchStarshipDetails = async () => {
      const shipDetails = await getDetails(starshipId)
      setStarshipDetails(shipDetails)
    }
    fetchStarshipDetails()
  }, [starshipId])

  if(!starshipDetails.name) return <h1>Starship Loading...</h1>
  
  return ( 
    <>
    <h1> Starship Details</h1>
    <ul className='card-details'>
      <li>{starshipDetails.name}</li>
      <li>{starshipDetails.model}</li>
    </ul>
    <button><Link to='/'>Return to Starship List</Link></button>
    </>
  );
}

export default StarshipDetails;