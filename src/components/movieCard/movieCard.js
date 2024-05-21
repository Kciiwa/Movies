import { format } from 'date-fns'
import { enGB } from 'date-fns/locale'
import './movieCard.css'

import PosterImage from '../posterImage/posterImage'
import useTruncatedText from '../../hooks/useTruncatedText/useTruncatedText'

function MovieCard({ title, posterPath, releaseDate = '', overview }) {
  const isValidDate = releaseDate instanceof Date && !Number.isNaN(releaseDate)

  const formatReleaseDate = isValidDate ? format(releaseDate, 'MMMM d, yyyy', { locale: enGB }) : ''

  const truncatedOverview = useTruncatedText(overview, 200)

  return (
    <div className="movie-card">
      <PosterImage posterPath={posterPath} />
      <div className="info">
        <h5 className="info-title">{title}</h5>
        <p className="info-release-date">{formatReleaseDate}</p>
        <p className="info-overview" style={{ wordBreak: 'break-word' }}>
          {truncatedOverview}
        </p>
      </div>
    </div>
  )
}

export default MovieCard
