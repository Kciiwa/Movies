import { useEffect, useState } from 'react'

function useTrackOnlineStatus() {
  const [status, setStatus] = useState(null)

  const handleOnline = () => {
    setStatus('online')
  }

  const handleOffline = () => {
    setStatus('offline')
  }

  useEffect(() => {
    window.addEventListener('online', handleOnline, false)
    window.addEventListener('offline', handleOffline, false)
  }, [])

  return { status }
}

export default useTrackOnlineStatus
