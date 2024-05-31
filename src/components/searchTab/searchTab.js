import React, { useState } from 'react'
import { Spin } from 'antd'

import MoviesList from '../moviesList/moviesList'
import MoviePagination from '../moviePagination/moviePagination'
import useGetMovies from '../../hooks/useGetMovies/useGetMovies'

function SearchTab({ searchQuery, guestSessionId }) {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [totalResults, setTotalResults] = useState(1)

  const { movies, isLoading } = useGetMovies(
    searchQuery,
    currentPage,
    setTotalPages,
    setTotalResults
  )

  if (isLoading) return <Spin fullscreen size="large" />

  if (!isLoading && !totalResults) {
    return <div className="no-movies-message">Movies not found</div>
  }
  return (
    <>
      <MoviesList movies={movies} guestSessionId={guestSessionId} />{' '}
      <MoviePagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </>
  )
}

export default SearchTab
