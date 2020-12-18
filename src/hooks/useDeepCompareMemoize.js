import isEqual from 'lodash-es/isEqual'
import { useRef } from 'react'

const useDeepCompareMemoize = (value) => {
  const ref = useRef()

  if (!isEqual(value, ref.current)) ref.current = value

  return ref.current
}

export default useDeepCompareMemoize
