import fromPairs from 'lodash/fromPairs'
import partition from 'lodash/partition'

/**
 * Partition a props object into two objects, by extracting all props passed
 * as `extractKeys`.
 *
 * arguments: (props, extractKeys).
 *
 * @since 1.0.1
 * @category Utilities
 * @param {Object} props The props to partition.
 * @param {Array} extractKeys The prop names to extract.
 * @returns {Array<Object>} Returns a pair of two objects, first the extracted props object, second the remaining props object.
 * @example
 *
 * const props = {
 *   value: 'someone@example.com',
 *   type: 'email',
 *   className: 'large',
 *   label: 'Email'
 * }
 * const inputPropKeys = ['value', 'type', 'onChange']
 *
 * const [inputProps, otherProps] => extractProps(props, inputPropKeys)
 * // => [
 * //   { value: 'someone@example.com', type: 'email' }
 * //   { className: 'large', label: 'Email' }
 * // ]
 */
const extractProps = (props, extractKeys) => {
  const [extractedProps, remainingProps] = partition(
    Object.entries(props),
    ([key, _value]) => extractKeys.includes(key)
  )

  return [fromPairs(extractedProps), fromPairs(remainingProps)]
}

export default extractProps
