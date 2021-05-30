import { swapIndex } from '../utils/swapIndex'

export const selectSort = (arr: (string | number)[]): (string | number)[] => {
  if (!arr || !arr.length) return arr

  let min = 0

  for (let i = 0; i < arr.length; i++) {
    min = i

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j
    }

    if (i !== min) swapIndex(arr, i, min)
  }

  return arr
}
