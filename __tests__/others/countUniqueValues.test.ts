import { countUniqueValues } from '../../src/others/countUniqueValues';

describe('countUniqueValues', () => {
  it('should return 5', () => {
    expect(countUniqueValues([1, 2, 3, 3, 4, 5])).toBe(5)
  })

  it('should return 0 if there are no unique values', () => {
    expect(countUniqueValues([1, 1, 1, 1, 1, 1])).toBe(0)
  })
})

