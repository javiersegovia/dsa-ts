import { swapIndex } from '../../src/utils/swapIndex'

describe('swapIndex', () => {
  it('should swap the index in the array', () => {
    const arr = [5, 2, 1, 4]
    swapIndex(arr, 0, 3)

    expect(arr).toEqual([4, 2, 1, 5])
  })
})
