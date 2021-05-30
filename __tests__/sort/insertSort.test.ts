import { insertSort } from '../../src/sort/insertSort'

describe('insertSort', () => {
  it('should return the sorted array', () => {
    expect(insertSort([5, -2, 4, 3, 10, 1])).toEqual(
      expect.arrayContaining([-2, 1, 3, 5, 4, 10]),
    )
  })
  it('should work with strings', () => {
    expect(insertSort(['baby', 'airplane', 'car'])).toEqual(
      expect.arrayContaining(['airplane', 'baby', 'car']),
    )
  })
})
