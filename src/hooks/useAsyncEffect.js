import { useEffect } from 'react'

const useAsyncEffect = (asyncFunc, dependencies) => {
  useEffect(() => {
    asyncFunc()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asyncFunc, ...dependencies])
}

export default useAsyncEffect
