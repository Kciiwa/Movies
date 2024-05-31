import React, { useState } from 'react'
import { Tabs, Spin } from 'antd'
import './App.css'

import AlertWrapper from './components/alertWrapper/alertWrapper'
import SearchInput from './components/searchInput/searchInput'
import useGetGuestSession from './hooks/useGetGuestSession/useGetGuestSession'
import SearchTab from './components/searchTab/searchTab'
import RatingTab from './components/ratingTab/ratingTab'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState('search')

  const handleTabChange = (key) => {
    setActiveTab(key)
  }

  const guestSessionId = useGetGuestSession()

  if (guestSessionId === null) {
    return <Spin fullscreen />
  }

  return (
    <div className="app-wrapper">
      <Tabs
        defaultActiveKey="1"
        centered
        onChange={handleTabChange}
        items={[
          {
            label: 'Search',
            key: 'search',
            children: (
              <>
                <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                <SearchTab searchQuery={searchQuery} guestSessionId={guestSessionId} />
              </>
            ),
          },
          {
            label: 'Rated',
            key: 'rated',
            children: <RatingTab guestSessionId={guestSessionId} activeTab={activeTab} />,
          },
        ]}
      />
      <AlertWrapper />
    </div>
  )
}

export default App
