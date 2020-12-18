import { useEffect } from 'react'

import useAutoUpdateRef from './useAutoUpdateRef'

const useAsyncEffect = (asyncFunc, dependencies) => {
  const asyncFuncRef = useAutoUpdateRef(asyncFunc)

  useEffect(() => {
    asyncFuncRef.current()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies)
}

export default useAsyncEffect
