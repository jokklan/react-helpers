import { useRef } from 'react'

const useAutoUpdateRef = (value) => {
  const storedValue = useRef(value)

  storedValue.current = value

  return storedValue
}

export default useAutoUpdateRef
