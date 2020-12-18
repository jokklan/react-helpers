import debounce from 'lodash-es/debounce'
import { useMemo } from 'react'

import useAutoUpdateRef from './useAutoUpdateRef'

const resolvePromise = (resolve) => resolve()

const useDebouncedCallback = (callback, wait, options = {}) => {
  const callbackRef = useAutoUpdateRef(callback)

  const { leading, trailing, maxWait } = options
  const debouncedResolve = useMemo(
    () => debounce(resolvePromise, wait, { leading, trailing, maxWait }),
    [wait, leading, trailing, maxWait]
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
