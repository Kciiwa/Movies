import { useState, useEffect, useCallback } from 'react'

import MoviesList from '../moviesList/moviesList'
import useGetRatedMovies from '../../hooks/useGetRatedMovies/useGetRatedMovies'

function RatingTab({ guestSessionId, activeTab }) {
  const [ratedMovies, setRatedMovies] = useState([])
  const { ratedMovies: fetchedRatedMovies, fetchRatedMovies } = useGetRatedMovies(guestSessionId)

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
