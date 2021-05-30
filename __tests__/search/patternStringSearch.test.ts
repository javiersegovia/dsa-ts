import { patternStringSearch } from '../../src/search/patternStringSearch'

describe('patternStringSearch', () => {
  it('should return 1 as one pattern is found', () => {
    expect(patternStringSearch('hello', 'll')).toBe(1)
  })

  it('should return 4 as multiple patterns found', () => {
    expect(patternStringSearch('Hello, hell, wall, well', 'll')).toBe(4)
  })

  it('should return 0 as no pattern is found', () => {
    expect(patternStringSearch('Fizzbuzz', 'bzz')).toBe(0)
  })
})
