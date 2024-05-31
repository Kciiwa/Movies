import { useEffect, useState, useCallback } from 'react'
import { debounce } from 'lodash'

import { API_URL, API_KEY, INCLUDE_ADULT, LANGUAGE } from '../../constants/constants'

const fetchMovies = async (searchQuery, currentPage) => {
  try {
    const response = await fetch(
      `${API_URL}/3/search/movie?api_key=${API_KEY}&include_adult=${INCLUDE_ADULT}&language=${LANGUAGE}&page=${currentPage}&query=${searchQuery}`
    )
    const data = await response.json()
    return data
  } catch (error) {
    return { results: [], error: error.message }
  }
}

function useGetMovies(searchQuery, currentPage, setTotalPages, setTotalResults) {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  const debouncedFetchMovies = useCallback(
    debounce(async (query, page) => {
      setIsLoading(true)
      const res = await fetchMovies(query, page)
      if (res?.success === false) {
        setErrorMessage(res.status_message)
        setIsLoading(false)
        return
      }
      setErrorMessage(null)
      setMovies(res.results)
      setIsLoading(false)
      setTotalPages(res.total_pages)
      setTotalResults(res.total_results)
    }, 600),
    []
  )

  useEffect(() => {
    if (searchQuery) {
      debouncedFetchMovies(searchQuery, currentPage)
    }
  }, [searchQuery, currentPage, debouncedFetchMovies])

  return { movies, isLoading, errorMessage }
}

export default useGetMovies
