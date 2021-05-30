import { swapIndex } from '../utils/swapIndex'

export const partition = (
  arr: (string | number)[],
  start = 0,
  end = arr.length - 1,
): number => {
  const pivot = arr[start]
  let pivotIndex = start

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      pivotIndex++
      swapIndex(arr, pivotIndex, i)
    }
  }

  swapIndex(arr, start, pivotIndex)

  return pivotIndex
}

// partition([18, 7, 3, 2, 10, 9, 8, 2, 1, 12, 5, 4])

export const quickSort = (
  arr: (string | number)[],
  start = 0,
  end = arr.length - 1,
): (string | number)[] => {
  // order one item in the array and return the index
  // this pivot index will be higher than all the items at his left, and lower than all the items at his right
  const pivot = partition(arr, start, end)

  // as the startIndex is less than the pivot, we can loop to order the left half
  if (start < pivot - 1) {
    // this quickSort recursive call will be waiting to get all left being ordered correctly
    quickSort(arr, start, pivot - 1)
  }

  // as the endIndex is bigger than the pivot, we can loop to order the right half of the array
  if (end > pivot + 1) {
    quickSort(arr, pivot + 1, end)
  }

  return arr
}
