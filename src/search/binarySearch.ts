export const binarySearch = (arr: number[], val: number): number => {
  if (!val || !arr || !arr.length) return -1

  let min = 0
  let max = arr.length - 1
  let middle = Math.floor((max + min) / 2)

  if (val < arr[min] || val > arr[max]) return -1

  while (arr[middle] !== val && min <= max) {
    if (val > arr[middle]) min = middle + 1
    else max = middle - 1
    middle = Math.floor((max + min) / 2)
  }

  return arr[middle] === val ? middle : -1
}
