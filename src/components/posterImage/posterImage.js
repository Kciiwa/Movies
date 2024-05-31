import React, { useState } from 'react'
import { Spin } from 'antd'

import { POSTER_URL } from '../../constants/constants'

function PosterImage({ posterPath }) {
  const [isImageLoading, setIsImageLoading] = useState(true)

  const handleImageLoaded = () => {
    setIsImageLoading(false)
  }

  return (
    <div className="poster-container">
      {isImageLoading && (
        <div className="spin-wrapper">
          <Spin className="poster-spin" />
        </div>
      )}

      {posterPath ? (
        <img
          className="poster-image"
          src={`${POSTER_URL}${posterPath}`}
          alt="poster"
          onLoad={handleImageLoaded}
        />
      ) : (
        <img
          style={{ height: '279px' }}
          src="https://multfilms.online/uploads/poster_none.png"
          alt="poster is not defined"
          onLoad={handleImageLoaded}
        />
      )}
    </div>
  )
}

export default PosterImage
