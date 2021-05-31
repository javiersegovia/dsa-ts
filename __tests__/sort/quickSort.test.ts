import { quickSort } from '../../src/sort/quickSort'

describe('quickSort', () => {
  it('should return the sorted array', () => {
    const array = [18, 7, 3, 2, -2, -1, -50, 31, 7.5, 10, 9, 8, 2, 1, 12, 5, 4]
    const expected = [
      -50, -2, -1, 1, 2, 2, 3, 4, 5, 7, 7.5, 8, 9, 10, 12, 18, 31,
    ]
    expect(quickSort(array)).toEqual(expected)
  })

  it('should work with strings', () => {
    expect(quickSort(['tin', 'copper', 'gold', 'bronze'])).toEqual([
      'bronze',
      'copper',
      'gold',
      'tin',
    ])
  })

  it('should work with a two-digits array', () => {
    expect(quickSort([2, 1])).toEqual([1, 2])
  })
})
