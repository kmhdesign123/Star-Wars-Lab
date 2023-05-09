const BASE_URL= 'https://swapi.dev/api'

export async function getAllStarships() {
  try {
    const res = await fetch(`${BASE_URL}/starships`)
    return res.json()
  } catch (err) {
    console.log(err)
  }
}

export async function getDetails(param) {
  try {
    const res = await fetch(`${BASE_URL}/starships/${param}`)
    return res.json()
  } catch (err) {
    console.log(err)
  }
}