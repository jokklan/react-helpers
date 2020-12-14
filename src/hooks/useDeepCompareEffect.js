import { useEffect } from 'react'

import useDeepCompareMemoize from './useDeepCompareMemoize'

const useDeepCompareEffect = (effectFunction, dependencies) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(effectFunction, useDeepCompareMemoize(dependencies))
}

export default useDeepCompareEffect
