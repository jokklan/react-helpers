import { useRef } from 'react'

const useInitial = (value) => {
  const initialValue = useRef(value)

  return initialValue.current
}

export default useInitial
