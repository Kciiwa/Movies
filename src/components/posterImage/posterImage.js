import React from 'react'

import { POSTER_URL } from '../../constants/constants'

function PosterImage({ posterPath }) {
  if (posterPath)
    return (
      <img
        src={`${POSTER_URL}${posterPath}`}
        alt="poster"
        style={{ marginLeft: '-24px', marginTop: '-24px' }}
      />
    )
  return (
    <img
      style={{ marginLeft: '-24px', marginTop: '-24px' }}
      className="poster"
      src="https://multfilms.online/uploads/poster_none.png"
      alt="poster is not defined"
    />
  )
}

export default PosterImage
