import { useRef, useEffect } from 'react'

const usePrevious = (value) => {
  const previousValue = useRef()
  const currentValue = useRef()
  const valueChanged = currentValue.current !== value

  useEffect(() => {
    if (valueChanged) {
      previousValue.current = currentValue.current
      currentValue.current = value
    }
  }, [value, valueChanged])

  return valueChanged ? currentValue.current : previousValue.current
}

export default usePrevious
