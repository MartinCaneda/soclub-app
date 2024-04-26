import React, { useState } from "react"
import axios from "axios"

const LocationSearchBar = ({ onSelectLocation }) => {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])

  const handleChange = async (event) => {
    const newQuery = event.target.value
    setQuery(newQuery)

    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(
          newQuery,
        )}&types=(cities)&key=AIzaSyC2DwVkEfy_S0qFkxKMwicAfUZPwfSt05o`,
      )

      setResults(response.data.predictions)
    } catch (error) {
      console.error("Error fetching places:", error)
    }
  }

  const handleSelectLocation = (location) => {
    setQuery(location.description)
    setResults([])
    onSelectLocation(location)
  }

  return (
    <div>
      <input type="text" value={query} onChange={handleChange} placeholder="Search for a location..." />
      <ul>
        {results.map((location) => (
          <li key={location.place_id} onClick={() => handleSelectLocation(location)}>
            {location.description}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LocationSearchBar
