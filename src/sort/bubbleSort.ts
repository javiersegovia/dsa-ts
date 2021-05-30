import { swapIndex } from '../utils/swapIndex'

export const bubbleSort = (arr: number[]): number[] => {
  if (!arr || !arr.length) return arr

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) swapIndex(arr, j, j + 1)
    }
  }

  return arr
}
