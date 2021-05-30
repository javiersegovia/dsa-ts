import { mergeSortedArrays } from '../../src/utils/mergeSortedArrays'

describe('merge two sorted arrays', () => {
  it('should return a merged sorted array', () => {
    const arr1 = [1, 2, 2, 4, 8, 10, 15]
    const arr2 = [3, 3, 4, 6, 9, 12, 13]

    const expected = [1, 2, 2, 3, 3, 4, 4, 6, 8, 9, 10, 12, 13, 15]

    expect(mergeSortedArrays(arr1, arr2)).toEqual(
      expect.arrayContaining(expected),
    )
  })

  it('should work with negative values', () => {
    const arr1 = [-10, -5, -2, 2, 5]
    const arr2 = [-2, -1, 0, 1, 2]

    const expected = [-10, -5, -2, -2, -1, 0, 1, 2, 2, 5]

    expect(mergeSortedArrays(arr1, arr2)).toEqual(
      expect.arrayContaining(expected),
    )
  })

  it('should work with arrays of different length', () => {
    const arr1 = [0, 1, 20]
    const arr2 = [-1, 4, 7, 10]

    const expected = [-1, 0, 1, 4, 7, 20]

    expect(mergeSortedArrays(arr1, arr2)).toEqual(
      expect.arrayContaining(expected),
    )
  })
})
