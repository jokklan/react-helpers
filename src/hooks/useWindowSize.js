import throttle from 'lodash/throttle'
import { useState, useCallback, useRef, useEffect } from 'react'

import useWindowResizeHandler from './useWindowResizeHandler'

const getSize = (isClient = true) => {
  if (typeof window === `undefined`) return {}

  return {
    width: isClient ? window.innerWidth : undefined,
    height: isClient ? window.innerHeight : undefined
  }
}

const useWindowSize = (options = {}) => {
  const { throttle: throttleTime } = options
  const [windowSize, setWindowSize] = useState(getSize())
  const throttledFunction = useRef()

  useEffect(() => {
    throttledFunction.current = throttle(() => {
      setWindowSize(getSize())
    }, throttleTime)
  }, [throttleTime])

  const handleResize = useCallback(() => {
    throttledFunction.current()
  }, [])

  useWindowResizeHandler(handleResize)

  return windowSize
}

export default useWindowSize
