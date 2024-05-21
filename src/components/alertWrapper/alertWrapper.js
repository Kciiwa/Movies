import React from 'react'
import { Alert } from 'antd'

import useTrackOnlineStatus from '../../hooks/useTrackOnlineStatus/useTrackOnlineStatus'

function AlertWrapper() {
  const { status } = useTrackOnlineStatus()
  console.log(status)

  const props = {
    online: { message: 'Success!', type: 'success' },
    offline: { message: 'Error!', type: 'error' },
  }

  if (status !== null) return <Alert closable {...props[status]} />
  return null
}

export default AlertWrapper
