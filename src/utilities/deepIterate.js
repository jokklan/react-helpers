import isArray from 'lodash-es/isArray'
import isObject from 'lodash-es/isObject'
import isPlainObject from 'lodash-es/isPlainObject'
import transform from 'lodash-es/transform'

export const deepMapValues = (object, mapFunction) => {
  const mapValue = (value, key) => {
    if (isPlainObject(value)) return deepMapValues(value, mapFunction)

    if (isArray(value)) return value.map((item) => mapValue(item))

    return mapFunction(value, key)
  }

  return transform(
    object,
    (result, value, key) => {
      result[key] = mapValue(value, key)
    },
    {}
  )
}

export const deepMapKeys = (object, mapKey) => {
  const mapValue = (value) => {
    if (isPlainObject(value)) return deepMapKeys(value, mapKey)

    if (isArray(value)) return value.map((item) => mapValue(item))

    return value
  }

  return transform(
    object,
    (result, value, key) => {
      const newKey = mapKey(key, value)
      const newValue = mapValue(value)

      result[newKey] = newValue
    },
    {}
  )
}
