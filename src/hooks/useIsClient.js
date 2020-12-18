import { useEffect, useState } from 'react'

// TODO: test if typeof window !== undefined would work and also update the component
const useIsClient = () => {
  const [isClient, setIsClient] = useState(false)
  const key = isClient ? 'client' : 'server'

  useEffect(() => {
    setIsClient(true)
  }, [])

  return { isClient, key }
}

export default useIsClient
