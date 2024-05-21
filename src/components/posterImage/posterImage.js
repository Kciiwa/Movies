import React from 'react'

import { POSTER_URL } from '../../constants/constants'

function PosterImage({ posterPath }) {
  if (posterPath)
    return (
      <img
        className="poster-image"
        src={`${POSTER_URL}${posterPath}`}
        alt="poster"
        // style={{ marginLeft: '-24px', marginTop: '-24px' }}
        // style={{ height: '279px' }}
      />
    )
  return (
    <img
      style={{ height: '279px' }}
      src="https://multfilms.online/uploads/poster_none.png"
      alt="poster is not defined"
    />
  )
}

export default PosterImage
