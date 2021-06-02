import { HashTable } from '../../src/lists/HashTable'

describe('HashTable', () => {
  it('should be able to set and get values', () => {
    const ht = new HashTable(10)

    ht.set('hello', 123)
    ht.set('world', 456)
    ht.set('blue', 789)
    ht.set('red', 999)

    expect(ht.get('hello')).toEqual(123)
    expect(ht.get('world')).toEqual(456)
    expect(ht.get('blue')).toEqual(789)
    expect(ht.get('red')).toEqual(999)
  })

  it('should be able to get keys and values', () => {
    const ht = new HashTable(10)

    ht.set('hello', 123)
    ht.set('world', 456)
    ht.set('blue', 789)
    ht.set('red', 999)

    expect(ht.keys()).toEqual(expect.arrayContaining(['hello', 'world', 'blue', 'red']))
    expect(ht.values()).toEqual(expect.arrayContaining([123, 456, 789, 999]))
  })
})
