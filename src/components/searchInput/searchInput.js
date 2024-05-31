import React, { useCallback } from 'react'
import { Input } from 'antd'

import './searchInput.css'

function SearchInput({ searchQuery, setSearchQuery }) {
  const onHandleChange = useCallback(
    (event) => {
      setSearchQuery(event.target.value)
    },
    [setSearchQuery]
  )

  return (
    <Input
      className="search-input"
      size="large"
      placeholder="Type to search..."
      value={searchQuery}
      onChange={onHandleChange}
      autoFocus
    />
  )
}

export default SearchInput
