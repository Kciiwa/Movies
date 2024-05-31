import { format } from 'date-fns'
import { enGB } from 'date-fns/locale'
import { useEffect, useState } from 'react'

import './movieCard.css'
import PosterImage from '../posterImage/posterImage'
import useTruncatedText from '../../hooks/useTruncatedText/useTruncatedText'
import Rating from '../rating/rating'
import useMovieRating from '../../hooks/useMovieRating/useMovieRating'

function MovieCard({
  id,
  title,
  posterPath,
  releaseDate = '',
  overview,
  guestSessionId,
  onNewRating,
  rating: initialRating,
  activeTab,
  genres,
}) {
  const [rating, setRating] = useState(0)
  const rateMovie = useMovieRating(guestSessionId)

  console.log(genres)

  const genresNames = genres.map((genre) => (
    <p className="info-genre" key={genre.id}>
      {genre.name}
    </p>
  ))

  useEffect(() => {
    setRating(initialRating)
  }, [initialRating])

  const isValidDate = releaseDate instanceof Date && !Number.isNaN(releaseDate)
  const formatReleaseDate = isValidDate ? format(releaseDate, 'MMMM d, yyyy', { locale: enGB }) : ''
  const truncatedOverview = useTruncatedText(overview, 150)
  const truncatedTitle = useTruncatedText(title, 35)

  let ratingStyle = {}

  if (rating >= 0 && rating <= 3) {
    ratingStyle = { borderColor: '#E90000' }
  } else if (rating > 3 && rating <= 5) {
    ratingStyle = { borderColor: '#E97E00' }
  } else if (rating > 5 && rating <= 7) {
    ratingStyle = { borderColor: '#E9D100' }
  } else if (rating > 7) {
    ratingStyle = { borderColor: '#66E900' }
  }

  const onRatingChange = async (ratingValue) => {
    setRating(ratingValue)
    await rateMovie(id, ratingValue)
    if (onNewRating) {
      onNewRating()
    }
    // console.log(`id ${id}, value ${ratingValue}, guestSessionId ${guestSessionId}`)
  }

  return (
    <div className="movie-card">
      <PosterImage posterPath={posterPath} />
      <div className="info">
        <h5 className="info-title">{truncatedTitle}</h5>
        <div className="info-rating" style={ratingStyle}>
          {rating}
        </div>
        <p className="info-release-date">{formatReleaseDate}</p>
        <div className="info-genres-list">{genresNames}</div>
        <p className="info-overview" style={{ wordBreak: 'break-word' }}>
          {truncatedOverview}
        </p>
        <Rating id={id} rating={rating} onRatingChange={onRatingChange} activeTab={activeTab} />
      </div>
    </div>
  )
}

export default MovieCard
