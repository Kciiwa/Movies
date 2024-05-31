import React, { createContext, useContext } from 'react'

import useGetGuestSession from '../../hooks/useGetGuestSession/useGetGuestSession'

const GuestSessionIdContext = createContext()

export const useGuestSessionId = () => useContext(GuestSessionIdContext)

export function GuestSessionIdProvider({ children }) {
  const guestSessionId = useGetGuestSession()

  return (
    <GuestSessionIdContext.Provider value={guestSessionId}>
      {children}
    </GuestSessionIdContext.Provider>
  )
}
