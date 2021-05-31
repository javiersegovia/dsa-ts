export const getDigitFromLastIndex = (number: number, index: number): number =>
  parseInt(number.toString()[number.toString().length - index - 1], 10) || 0

// StackOverflow alternative
// I like mine because I think it is more readable
// export const getDigitFromLastIndex = (number, index) => Math.floor(Math.abs(number) / Math.pow(10, index)) % 10

export const digitCount = (number: number): number =>
  number !== 0 ? Math.abs(number).toString().length : 1

export const longestDigit = (numbers: number[]): number => {
  if (!numbers) return 0

  let longest = 0

  numbers.forEach((number) => {
    longest = Math.max(longest, digitCount(number))
  })

  return longest
}

export const radixSort = (nums: number[]): number[] => {
  const longest = longestDigit(nums)

  for (let i = 0; i < longest; i++) {
    const buckets = []

    for (let j = 0; j < nums.length; j++) {
      const digitValue = getDigitFromLastIndex(nums[j], i)

      if (buckets[digitValue]) buckets[digitValue].push(nums[j])
      else buckets[digitValue] = [nums[j]]
    }

    nums = buckets.flat()
  }

  return nums
}
