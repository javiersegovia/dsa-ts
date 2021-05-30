import { isAnagram } from '../../src/others/isAnagram'

describe('isAnagram', () => {
  it('should return true', () => {
    expect(isAnagram('wozz', 'zowz')).toBe(true)
  })

  it('should return false', () => {
    expect(isAnagram('wozz1', 'zowz')).toBe(false)
  })
})