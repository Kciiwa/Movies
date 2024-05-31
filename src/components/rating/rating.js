import { Rate } from 'antd'
import React from 'react'

function Rating({ rating, onRatingChange, activeTab }) {
  const handleRatingChange = (value) => {
    onRatingChange(value)
  }

  return (
    <Rate
      allowHalf
      count={10}
      value={rating}
      onChange={handleRatingChange}
      disabled={activeTab === 'rated'}
    />
  )
}

export default Rating
