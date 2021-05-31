import { bubbleSort } from '../../src/sort/bubbleSort'

describe('bubbleSort', () => {
  it('should return the sorted array', () => {
    expect(bubbleSort([-1, -5, 2, 4, 3])).toEqual([-5, -1, 2, 3, 4])
  })
})
