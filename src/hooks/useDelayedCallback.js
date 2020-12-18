import delay from 'lodash-es/delay'
import { useRef, useMemo, useEffect, useCallback } from 'react'

import useAutoUpdateRef from './useAutoUpdateRef'

const useDelayedCallback = (callback, wait) => {
  const callbackRef = useAutoUpdateRef(callback)
  const timeoutIdRef = useRef()

  const delayedResolve = useCallback(
    (resolve) => {
      timeoutIdRef.current = delay(resolve, wait)
    },
    [wait]
  )
  const delayedPromise = useMemo(
    () => new Promise((resolve) => delayedResolve(resolve)),
    [delayedResolve]
  )

  const cancel = useCallback(() => clearTimeout(timeoutIdRef.current), [])

  const asyncCallback = useMemo(() => {
    const asyncFunc = async (...args) => {
      await delayedPromise

      console.log('calling delayed function')

      return callbackRef.current(...args)
    }

    return asyncFunc
  }, [callbackRef, delayedPromise])

  useEffect(() => {
    console.log('starting delayed function')
    asyncCallback()
  }, [asyncCallback])

  return { cancel }
}

export default useDelayedCallback
