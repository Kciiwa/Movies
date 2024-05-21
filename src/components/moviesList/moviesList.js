import React from 'react'
import { Spin } from 'antd'

import MovieCard from '../movieCard/movieCard'
import './moviesList.css'
import useGetMovies from '../../hooks/useGetMovies/useGetMovies'

function MoviesList() {
  const { movies, isLoading } = useGetMovies()
  const renderMovie = ({
    title,
    id,
    poster_path: posterPath,
    release_date: releaseDate,
    overview,
  }) => {
    const releaseDateObj = releaseDate && new Date(releaseDate)

    return (
      <MovieCard
        title={title}
        key={id}
        posterPath={posterPath}
        releaseDate={releaseDateObj}
        overview={overview}
      />
    )
  }

  if (isLoading) return <Spin fullscreen size="large" delay={3000} />

  return (
    <div className="movies-list-wrapper">
      <ul className="movies-list">{movies.map(renderMovie)}</ul>
    </div>
  )
}

export default MoviesList
