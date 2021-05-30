// 1. Base cases
// 2. Loop over the string to find matches with the pattern
// 3. Loop over the pattern to find matches and increment the matches count

export const patternStringSearch = (str: string, pattern: string): number => {
  if (!str || !pattern) return 0

  let count = 0

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (str[i + j] !== pattern[j]) break
      if (pattern.length - 1 === j) count++
    }
  }

  return count
}
