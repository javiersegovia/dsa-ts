import { quickSort } from '../../src/sort/quickSort'

describe('quickSort', () => {
  it('should return the sorted array', () => {
    expect(
      quickSort([18, 7, 3, 2, -2, -1, -50, 31, 7.5, 10, 9, 8, 2, 1, 12, 5, 4]),
    ).toEqual(
      expect.arrayContaining([
        -50, -2, -1, 1, 2, 2, 3, 4, 5, 7, 7.5, 8, 9, 10, 12, 18, 31,
      ]),
    )
  })

  it('should work with strings', () => {
    expect(quickSort(['tin', 'copper', 'gold', 'bronze'])).toEqual(
      expect.arrayContaining(['bronze', 'copper', 'gold', 'tin']),
    )
  })

  it('should work with a two-digits array', () => {
    expect(quickSort([2, 1])).toEqual(expect.arrayContaining([1, 2]))
  })
})
