import { useEffect } from 'react'

const useWindowEventHandler = (event, eventHandler) => {
  useEffect(() => {
    if (typeof window === 'undefined') return undefined

    window.addEventListener(event, eventHandler)

    return () => window.removeEventListener(event, eventHandler)
  }, [event, eventHandler])
}

export default useWindowEventHandler
