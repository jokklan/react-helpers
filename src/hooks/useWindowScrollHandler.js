import useWindowEventHandler from './useWindowEventHandler'

const useWindowScrollHandler = (onResize) =>
  useWindowEventHandler('scroll', onResize)

export default useWindowScrollHandler
