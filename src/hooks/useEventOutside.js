import { useRef, useEffect } from 'react'

import useAutoUpdateRef from './useAutoUpdateRef'

const useEventOutside = (eventType, onOutsideEvent) => {
  const elementRef = useRef(null)
  const eventHandlerRef = useAutoUpdateRef(onOutsideEvent)

  useEffect(() => {
    const handleOutsideEvent = (event) => {
      const element = elementRef.current
      if (element === null) return

      if (!element.contains(event.target)) eventHandlerRef.current(event)
    }

    document.addEventListener(eventType, handleOutsideEvent, true)

    return () =>
      document.removeEventListener(eventType, handleOutsideEvent, true)
  })

  return elementRef
}

export default useEventOutside
