// Using the frequency counter, we have to check if there is the same frequency of letters in every array

// Handle cases:
// -- The words are the same already
// -- The values length doesnt match
// -- Empty values

// 1. Loop over the words
// 2. Check if the character is an alphanumeric and add it to the object (or increase its value if already there)
// 3. Loop again to compare all the characters count and see if they match

export const isAnagram = (word1: string, word2: string): boolean => {
  if (!word1 || !word2 || word1.length !== word2.length) return false

  if (word1 === word2) return true

  const freq1 = {}
  const freq2 = {}

  for (let i = 0; i < word1.length; i++) {
    const char1 = word1[i]
    const char2 = word2[i]

    if (/^[a-z0-9]+$/i.test(char1)) {
      freq1[char1] = ++freq1[char1] || 1
    }

    if (/^[a-z0-9]+$/i.test(char2)) {
      freq2[char2] = ++freq2[char2] || 1
    }
  }

  for (let j = 0; j < word1.length; j++) {
    const char1 = word1[j]
    const char2 = word2[j]

    if (freq1[char1] !== freq2[char1] || freq2[char2] !== freq1[char2]) {
      return false
    }
  }

  return true
}
