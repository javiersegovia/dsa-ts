import { insertSort } from '../../src/sort/insertSort'

describe('insertSort', () => {
  it('should return the sorted array', () => {
    expect(insertSort([5, -2, 4, 3, 10, 1])).toEqual([-2, 1, 3, 4, 5, 10])
  })
  it('should work with strings', () => {
    expect(insertSort(['baby', 'airplane', 'car'])).toEqual([
      'airplane',
      'baby',
      'car',
    ])
  })
})
