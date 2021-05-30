import { mergeSort } from '../../src/sort/mergeSort'

describe('Merge Sort', () => {
  it('should sort an array', () => {
    const arr = [1, 0, 20, 2, 5, 4, 10, 12, 15]
    const expected = [0, 1, 2, 4, 5, 10, 12, 15, 20]

    expect(mergeSort(arr)).toEqual(expect.arrayContaining(expected))
  })

  it('should work with negative values', () => {
    const arr = [-1, 0, -20, 2, 5, -4, -10, 12, 15]
    const expected = [-20, -10, -4, -1, 0, 2, 5, 12, 15]

    expect(mergeSort(arr)).toEqual(expect.arrayContaining(expected))
  })

  it('should work with strings', () => {
    expect(mergeSort(['baby', 'airplane', 'car'])).toEqual(
      expect.arrayContaining(['airplane', 'baby', 'car']),
    )
  })
})
