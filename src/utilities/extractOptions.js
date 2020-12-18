import isPlainObject from 'lodash/isPlainObject'
import last from 'lodash/last'

/**
 * Extracts options from a set of arguments.
 * Removes and returns the last element in the array if it's a plain object, otherwise returns a empty object.
 *
 * arguments: (args).
 *
 * @since 1.0.3
 * @category Utilities
 * @param {Array} args The arguments array.
 * @returns {Object} The options object.
 * @example
 *
 * const extractedOptions = (*args) => {
 *   const options = extractOptions(args)
 *   const [a, b] = args
 *
 *   return { a, b, options }
 * }
 *
 * extractedOptions(1, { b: 2 })
 * // => { a: 1, options: { b: 2 } }
 *
 * extractedOptions(1, 2, { c: 3 })
 * // => { a: 1, b: 2, options: { c: 3} }
 */
const extractOptions = (args) => {
  const lastArg = last(args)
  if (isPlainObject(lastArg)) return args.pop()

  return {}
}

export default extractOptions
