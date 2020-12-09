import fromPairs from 'lodash/fromPairs'
import partition from 'lodash/partition'

const extractProps = (props, childPropKeys) => {
  const [extractedProps, remainingProps] = partition(
    Object.entries(props),
    ([key, _value]) => childPropKeys.includes(key)
  )

  return [fromPairs(extractedProps), fromPairs(remainingProps)]
}

export default extractProps
