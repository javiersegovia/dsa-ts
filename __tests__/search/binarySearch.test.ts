import { binarySearch } from '../../src/search/binarySearch'

describe('binarySearch', () => {

  it('should return 3 as the value is found', () => {
    expect(binarySearch([1, 2, 3, 4], 4)).toEqual(3)
  })

  it('should return -1 as the value is not found', () => {
    expect(binarySearch([1, 2, 3, 4], 5)).toEqual(-1)
  })
  
  it('should work with negative values', () => {
    expect(binarySearch([-5, -1, 2, 3, 4], -1)).toEqual(1)
  })

})