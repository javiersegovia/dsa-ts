// The array will always be sorted.
// There can be positive numbers in the array.

// 1. Create two pointers and loop over the array, one will be fixed and the other one wont
// 2. We compare the values of the pointers. If they are the same, the fixed pointer will advance and replace the next value with the actual unique number.
// 3. If the values are not the same, the second pointer should move one
// 4. When the second pointer reach the end, the number of unique values will be equal to the index of the first pointer

export const countUniqueValues = (array: (string | number)[]): number => {
  if (!array || !array.length) return 0

  let slow = 0

  for (let fast = 1; fast < array.length; fast++) {
    if (array[slow] !== array[fast]) {
      array[slow + 1] = array[fast]
      slow++
    }
  }

  return slow ? slow + 1 : slow
}
