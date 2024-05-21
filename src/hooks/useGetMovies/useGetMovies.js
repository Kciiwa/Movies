import { useEffect, useState } from 'react'

import { API_URL, API_KEY, INCLUDE_ADULT, LANGUAGE, PAGE } from '../../constants/constants'

const fetchMovies = async (query = 'return') => {
  try {
    const response = await fetch(
      `${API_URL}?api_key=${API_KEY}&include_adult=${INCLUDE_ADULT}&language=${LANGUAGE}&page=${PAGE}&query=${query}`
    )
    const data = await response.json()
    return data
  } catch (err) {
    return []
  }
}

function useGetMovies() {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  const handleResponse = () => {
    fetchMovies().then((res) => {
      if (res?.success === false) {
        setErrorMessage(res.status_message)
        return
      }
      setErrorMessage(null)
      setMovies(res.results)
    })
  }

  useEffect(() => {
    setIsLoading(true)
    handleResponse()
    setIsLoading(false)
  }, [])

  return { movies, isLoading, errorMessage }
}

export default useGetMovies
