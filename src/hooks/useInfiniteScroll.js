import useThrottledCallback from './useThrottledCallback'
import useWindowResizeHandler from './useWindowResizeHandler'
import useWindowScrollHandler from './useWindowScrollHandler'

const useInfiniteScroll = (callback, wait, options = {}) => {
  const { offsetRatio, offset } = options

  const handleScroll = () => {
    let target = document.body.offsetHeight
    if (offset) target -= offset
    else if (offsetRatio) target -= window.innerHeight * offsetRatio

    if (window.innerHeight + window.pageYOffset >= target) callback()
  }

  const throttledHandleScroll = useThrottledCallback(handleScroll, wait, {
    leading: true,
    trailing: true
  })

  useWindowResizeHandler(throttledHandleScroll)
  useWindowScrollHandler(throttledHandleScroll)
}

export default useInfiniteScroll
