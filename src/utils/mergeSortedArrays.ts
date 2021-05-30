// 1. Base cases: empty arrays or falsy values
// 2. Create a new array variable that we will return later
// 3. Create two pointers to loop over the two arrays
// 4. Compare the values of array[pointer1] andd array[pointer2]. Add the smallest to the array and increase the pointer of that item
// 5. If one of the array[pointer] finish first, just push the remaining values of the other array into the merged array

export const mergeSortedArrays = (
  arr1?: (string | number)[],
  arr2?: (string | number)[],
): (string | number)[] => {
  if (!arr1 || !arr1.length) return arr2
  if (!arr2 || !arr2.length) return arr1

  const merged = []
  let left = 0
  let right = 0

  while (left < arr1.length && right < arr2.length) {
    if (arr1[left] < arr2[right]) {
      merged.push(arr1[left])
      left++
    } else {
      merged.push(arr2[right])
      right++
    }
  }

  while (left < arr1.length) {
    merged.push(arr1[left])
    left++
  }
  while (right < arr2.length) {
    merged.push(arr2[right])
    right++
  }

  return merged
}
