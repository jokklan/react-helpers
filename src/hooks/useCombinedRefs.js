import { useCallback } from 'react'

const useCombinedRefs = (...refs) =>
  useCallback((element) => {
    refs.forEach((ref) => {
      if (!ref) return

      if (typeof ref === 'function') {
        ref(element)
      } else {
        // eslint-disable-next-line no-param-reassign
        ref.current = element
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs)

export default useCombinedRefs
