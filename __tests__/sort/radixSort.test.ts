import {
  radixSort,
  longestDigit,
  getDigitFromLastIndex,
  digitCount,
} from '../../src/sort/radixSort'

describe('digitCount', () => {
  it('should return 4 as the number of digits', () => {
    expect(digitCount(1025)).toEqual(4)
  })

  it('should return 1 when zero is passed', () => {
    expect(digitCount(0)).toEqual(1)
  })

  it('should work with negative values', () => {
    expect(digitCount(-200)).toEqual(3)
  })
})

describe('longestDigit', () => {
  it('should return 5 as the longestDigit in the array', () => {
    expect(longestDigit([-1, 2, -34, 200, 50003, 3004])).toEqual(5)
  })
})

describe('getDigitFromLastIndex', () => {
  it('should return the value of the index starting from the last', () => {
    expect(getDigitFromLastIndex(112345, 0)).toEqual(5)
  })
})

describe('radixSort', () => {
  it('should return the sorted array', () => {
    const array = [1000, 250, 500, 205, 1]
    const expected = [1, 205, 250, 500, 1000]

    expect(radixSort(array)).toEqual(expected)
  })
})
