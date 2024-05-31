import { useContext, useEffect } from 'react'

import GenreContext from '../../context/genreContext/genreContext'
import { API_KEY, API_URL } from '../../constants/constants'

function useGetGenres() {
  const { setGenres } = useContext(GenreContext)

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch(`${API_URL}/3/genre/movie/list?api_key=${API_KEY}`)
        const data = await response.json()
        setGenres(data.genres)
      } catch (error) {
        console.error('Failed to load genres: ', error.message)
      }
    }
    fetchGenres()
  }, [setGenres])

  return null
}

export default useGetGenres
