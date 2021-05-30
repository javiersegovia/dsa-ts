import { mergeSortedArrays } from '../utils/mergeSortedArrays'

export const mergeSort = (arr?: (string | number)[]): (string | number)[] => {
  if (!arr || arr.length <= 1) return arr

  const middle = Math.floor(arr.length / 2)

  const left = mergeSort(arr.slice(0, middle))
  const right = mergeSort(arr.slice(middle))

  return mergeSortedArrays(left, right)
}
