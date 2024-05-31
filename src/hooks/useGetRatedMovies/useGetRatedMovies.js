import { debounce } from 'lodash'
import { useCallback, useEffect, useState } from 'react'

const fetchRatedMovies = async (guestSessionId) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/guest_session/${guestSessionId}/rated/movies?api_key=371e5852e6234e2bfee5622b68493a43`
    )
    const data = await response.json()
    return data
  } catch (error) {
    return { results: [], error: error.message }
  }
}

function useGetRatedMovies(guestSessionId) {
  const [ratedMovies, setRatedMovies] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)

  const debouncedFetchMovies = useCallback(
    debounce(async (sessionId) => {
      const res = await fetchRatedMovies(sessionId)
      if (res?.success === false) {
        setErrorMessage(res.status_message)
        return
      }
      setErrorMessage(null)
      setRatedMovies(res.results)
      // setTotalPages(res.total_pages)
    }, 200),
    []
  )

  useEffect(() => {
    if (guestSessionId) {
      debouncedFetchMovies(guestSessionId)
    }
  }, [guestSessionId, debouncedFetchMovies])

  return { ratedMovies, errorMessage, fetchRatedMovies: debouncedFetchMovies }
}

export default useGetRatedMovies
