import { useCallback, useRef, useState } from 'react'

const useUncontrollableProp = (
  propValue,
  defaultValue = undefined,
  handler = undefined
) => {
  const wasPropRef = useRef(propValue !== undefined)
  const [stateValue, setStateValue] = useState(defaultValue)

  const isProp = propValue !== undefined
  const wasProp = wasPropRef.current

  wasPropRef.current = isProp

  /**
   * If a prop switches from controlled to Uncontrolled
   * reset its value to the defaultValue
   */
  if (!isProp && wasProp && stateValue !== defaultValue) {
    setStateValue(defaultValue)
  }

  const currentValue = isProp ? propValue : stateValue
  const handleChangeValue = useCallback(
    (value, ...args) => {
      if (handler) handler(value, ...args)
      setStateValue(value)
    },
    [handler]
  )

  return [currentValue, handleChangeValue]
}

export default useUncontrollableProp
