// import React, { useState } from 'react'
import { Card, Space } from 'antd'
import { format } from 'date-fns'
import { enGB } from 'date-fns/locale'
import './movieCard.css'
import Paragraph from 'antd/es/typography/Paragraph'

import PosterImage from '../posterImage/posterImage'

function MovieCard({ title, posterPath, releaseDate = '', overview }) {
  const isValidDate = releaseDate instanceof Date && !Number.isNaN(releaseDate)

  const formatReleaseDate = isValidDate ? format(releaseDate, 'MMMM d, yyyy', { locale: enGB }) : ''

  const ellipsis = true
  // console.log(overview)

  return (
    <Space className="wrapper">
      <Card
        style={{
          height: '279px',
          borderRadius: 0,
          boxShadow: '4px 4px 12px -3px rgba(34, 60, 80, 0.2)',
          maxWidth: '451px',
          padding: '0 !important',
          overflow: 'hidden',
        }}
      >
        <div className="movie-card">
          <PosterImage posterPath={posterPath} />
          <div className="info">
            <h2>{title}</h2>
            <Paragraph>{formatReleaseDate}</Paragraph>
            <Paragraph
              ellipsis={
                ellipsis
                  ? {
                      rows: 5,
                    }
                  : false
              }
              style={{ wordBreak: 'break-word' }}
            >
              {overview}
            </Paragraph>
          </div>
        </div>
      </Card>
    </Space>
  )
}

export default MovieCard
