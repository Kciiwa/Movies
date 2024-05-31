import React, { useContext } from 'react'

import MovieCard from '../movieCard/movieCard'
import './moviesList.css'
import GenreContext from '../../context/genreContext/genreContext'

function MoviesList({ movies, guestSessionId, onNewRating, activeTab }) {
  const genres = useContext(GenreContext)

  const renderMovie = ({
    title,
    id,
    poster_path: posterPath,
    release_date: releaseDate,
    overview,
    rating = 0,
    genre_ids: genreIds,
  }) => {
    const releaseDateObj = releaseDate && new Date(releaseDate)

    const movieGenres = genreIds.map((genreId) => genres.find((genre) => genre.id === genreId))

    return (
      <MovieCard
        title={title}
        key={id}
        posterPath={posterPath}
        releaseDate={releaseDateObj}
        overview={overview}
        id={id}
        guestSessionId={guestSessionId}
        rating={rating}
        onNewRating={onNewRating}
        activeTab={activeTab}
        genres={movieGenres}
      />
    )
  }

  return (
    <div className="movies-list-wrapper">
      <ul className="movies-list">{movies.map(renderMovie)}</ul>
    </div>
  )
}

export default MoviesList
