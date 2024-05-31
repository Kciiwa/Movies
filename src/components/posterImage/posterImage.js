import React, { useState } from 'react'
import { Spin } from 'antd'

import { POSTER_URL } from '../../constants/constants'
import './posterImage.css'

function PosterImage({ posterPath }) {
  const [isImageLoading, setIsImageLoading] = useState(true)

  const handleImageLoaded = () => {
    setIsImageLoading(false)
  }

  return (
    <div className="poster-container">
      {isImageLoading && posterPath && (
        <div className="spin-wrapper">
          <Spin className="poster-spin" />
        </div>
      )}
      {posterPath && (
        <img
          className="poster-image"
          src={`${POSTER_URL}${posterPath}`}
          alt="poster"
          onLoad={handleImageLoaded}
        />
      )}
      {!posterPath && <p className="no-poster">Image is not defined</p>}{' '}
    </div>
  )
}

export default PosterImage
