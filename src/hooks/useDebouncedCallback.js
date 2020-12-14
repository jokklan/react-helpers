import { debounce } from 'lodash'
import { useMemo } from 'react'

import useAutoUpdateRef from './useAutoUpdateRef'

const resolvePromise = (resolve) => resolve()

const useDebouncedCallback = (callback, delay, options) => {
  const callbackRef = useAutoUpdateRef(callback)
  const debouncedResolve = useMemo(
    () => debounce(resolvePromise, delay, options),
    [delay, options]
  )

  const asyncCallback = useMemo(() => {
    const asyncFunc = async (...args) => {
      await new Promise(debouncedResolve)

      return callbackRef.current(...args)
    }

    return asyncFunc
  }, [callbackRef, debouncedResolve])

  return asyncCallback
}

export default useDebouncedCallback
