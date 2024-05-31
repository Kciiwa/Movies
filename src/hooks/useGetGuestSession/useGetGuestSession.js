import { useEffect, useState } from 'react'

import { API_KEY, API_URL } from '../../constants/constants'

function useGetGuestSession() {
  const [guestSessionId, setGuestSessionId] = useState(null)

  useEffect(() => {
    const createGuestSession = async () => {
      try {
        const responce = await fetch(
          `${API_URL}/3/authentication/guest_session/new?api_key=${API_KEY}`
        )
        const data = await responce.json()
        setGuestSessionId(data.guest_session_id)
        return data
      } catch (error) {
        console.error('Failed to login')
      }
      return null
    }
    createGuestSession()
  }, [])
  return guestSessionId
}

export default useGetGuestSession
