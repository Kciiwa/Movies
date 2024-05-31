import React, { createContext, useState, useEffect } from 'react'

import { API_KEY } from '../../constants/constants'

const GenreContext = createContext([])

export function GenreProvider({ children }) {
  const [genres, setGenres] = useState([])

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
        )
        const data = await response.json()
        // console.log(`fetched genres: ${JSON.stringify(data.genres)}`)
        setGenres(data.genres)
      } catch (error) {
        console.error('Failed to load genres: ', error.message)
      }
    }
    fetchGenres()
  }, [])

  return <GenreContext.Provider value={genres}>{children}</GenreContext.Provider>
}

export default GenreContext
