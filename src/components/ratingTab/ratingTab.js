import { useState, useEffect, useCallback } from 'react'

import MoviesList from '../moviesList/moviesList'
// import MoviePagination from '../moviePagination/moviePagination'
import useGetRatedMovies from '../../hooks/useGetRatedMovies/useGetRatedMovies'

function RatingTab({ guestSessionId, activeTab }) {
  const [ratedMovies, setRatedMovies] = useState([])
  // const [totalPages, setTotalPages] = useState(1)
  const { ratedMovies: fetchedRatedMovies, fetchRatedMovies } = useGetRatedMovies(
    guestSessionId
    // setTotalPages
  )

  useEffect(() => {
    setRatedMovies(fetchedRatedMovies)
  }, [fetchedRatedMovies])

  const updateRatedMovies = useCallback(() => {
    fetchRatedMovies(guestSessionId)
  }, [guestSessionId, fetchRatedMovies])

  useEffect(() => {
    if (activeTab === 'rated') {
      updateRatedMovies()
    }
  }, [activeTab, updateRatedMovies])

  console.log(`from ratingTab ${guestSessionId}`)
  console.log(ratedMovies)

  if (!ratedMovies || ratedMovies.length === 0) {
    return <div className="no-movies-message">Rated movies not found</div>
  }

  return (
    <MoviesList
      movies={ratedMovies}
      guestSessionId={guestSessionId}
      onNewRating={updateRatedMovies}
      activeTab={activeTab}
    />
  )
}

export default RatingTab
