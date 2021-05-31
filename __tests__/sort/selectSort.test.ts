import { selectSort } from '../../src/sort/selectSort'

describe('selectSort', () => {
  it('should return the sorted array', () => {
    expect(selectSort([10, -5, 4, 1, 2])).toEqual([-5, 1, 2, 4, 10])
  })
  it('should work with strings', () => {
    expect(selectSort(['baby', 'airplane', 'car'])).toEqual([
      'airplane',
      'baby',
      'car',
    ])
  })
})
