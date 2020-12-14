import { useEffect, useState } from 'react'

const useIsClient = () => {
  const [isClient, setIsClient] = useState(false)
  const key = isClient ? 'client' : 'server'

  useEffect(() => {
    setIsClient(true)
  }, [])

  return { isClient, key }
}

export default useIsClient
