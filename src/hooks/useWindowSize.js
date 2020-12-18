import { useState, useCallback } from 'react'

import useIsClient from './useIsClient'
import useThrottledCallback from './useThrottledCallback'
import useWindowResizeHandler from './useWindowResizeHandler'

const getSize = (isClient = true) => {
  if (typeof window === `undefined`) return {}

  return {
    width: isClient ? window.innerWidth : undefined,
    height: isClient ? window.innerHeight : undefined
  }
}

const defaultThrottleTime = 100

const useWindowSize = (options = {}) => {
  const isClient = useIsClient
  const { throttle: throttleTime } = {
    throttle: defaultThrottleTime,
    ...options
  }

  const [windowSize, setWindowSize] = useState(getSize(isClient))

  const handleResize = useCallback(() => {
    setWindowSize(getSize(isClient))
  }, [isClient])

  const throttledHandleResize = useThrottledCallback(handleResize, throttleTime)

  useWindowResizeHandler(throttledHandleResize)

  return windowSize
}

export default useWindowSize
