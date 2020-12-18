import throttle from 'lodash/throttle'
import { useMemo } from 'react'

import useAutoUpdateRef from './useAutoUpdateRef'

const useThrottledCallback = (callback, wait, options = {}) => {
  const { leading, trailing } = options
  const callbackRef = useAutoUpdateRef(callback)

  const throttledCallback = useMemo(() => {
    if (!wait || wait <= 0) return callbackRef.current

    return throttle(callbackRef.current, wait, { leading, trailing })
  }, [wait, callbackRef, leading, trailing])

  return throttledCallback
}

export default useThrottledCallback
