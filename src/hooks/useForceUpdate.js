import { useState, useCallback } from 'react'

const useForceUpdate = () => {
  const [, setState] = useState()

  const forceUpdate = useCallback(() => setState(Math.random), [])

  return forceUpdate
}

export default useForceUpdate
