import { useLayoutEffect } from 'react'

const useToggleBodyClass = (className, addClass = false) => {
  useLayoutEffect(() => {
    if (addClass !== true) return undefined
    document.body.classList.add(className)

    return () => document.body.classList.remove(className)
  }, [className, addClass])
}

export default useToggleBodyClass
