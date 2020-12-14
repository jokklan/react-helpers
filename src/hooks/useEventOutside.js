import { useRef, useEffect } from 'react'

const useEventOutside = (eventType, onOutsideEvent) => {
  const elementRef = useRef(null)

  useEffect(() => {
    const handleOutsideEvent = (event) => {
      const element = elementRef.current
      if (element === null) return

      if (
        !element.contains(event.target) &&
        typeof onOutsideEvent === 'function'
      ) {
        onOutsideEvent(event)
      }
    }

    document.addEventListener(eventType, handleOutsideEvent, true)

    return () =>
      document.removeEventListener(eventType, handleOutsideEvent, true)
  })

  return elementRef
}

export default useEventOutside
