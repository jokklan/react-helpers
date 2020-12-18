import { useEffect } from 'react'

import useAutoUpdateRef from './useAutoUpdateRef'

const useWindowEventHandler = (event, eventHandler) => {
  const eventHandlerRef = useAutoUpdateRef(eventHandler)

  useEffect(() => {
    const currentEventHandler = eventHandlerRef.current
    if (typeof window === 'undefined') return undefined

    window.addEventListener(event, currentEventHandler)

    return () => window.removeEventListener(event, currentEventHandler)
  }, [event, eventHandler, eventHandlerRef])
}

export default useWindowEventHandler
