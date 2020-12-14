import useWindowEventHandler from './useWindowEventHandler'

const useWindowResizeHandler = (onResize) =>
  useWindowEventHandler('resize', onResize)

export default useWindowResizeHandler
