import { LinkedList, ListNode } from '../../src/lists/LinkedList'
import { SingleLinkedList } from '../../src/lists/SingleLinkedList'

describe('SingleLinkedList', () => {
  it('should create a single list with the default values', () => {
    const list = new SingleLinkedList()

    expect(list).toBeInstanceOf(LinkedList)
    expect(list.length).toEqual(0)
    expect(list.head).toEqual(null)
    expect(list.tail).toEqual(null)
  })

  it('should be able to push new values', () => {
    const list = new SingleLinkedList()

    list.push(0)
    list.push(1)
    list.push(2)

    expect(list.length).toEqual(3)
    expect(list.head.value).toEqual(0)
    expect(list.tail.value).toEqual(2)
  })

  describe('pop', () => {
    it('should be able to pop (delete the last item)', () => {
      const list = new SingleLinkedList()

      list.push(0)
      list.push(1)
      list.push(2)

      expect(list.pop().value).toEqual(2)
      expect(list.length).toEqual(2)
      expect(list.tail.value).toEqual(1)
    })

    it('should return the correct tail and head when there is only one value', () => {
      const list = new SingleLinkedList()

      list.push(0)
      list.pop()

      expect(list.head).toEqual(null)
      expect(list.tail).toEqual(null)

      expect(list.pop()).toEqual(undefined)
    })
  })

  describe('remove', () => {
    it('should be able to remove an item by the index', () => {
      const list = new SingleLinkedList()

      list.push(0)
      list.push(1)
      list.push(2)
      list.push(3)
      list.push(4)

      list.remove(0)

      expect(list.length).toEqual(4)
      expect(list.head.value).toEqual(1)
      expect(list.tail.value).toEqual(4)

      list.remove(1)

      expect(list.length).toEqual(3)
      expect(list.tail.value).toEqual(4)
    })

    it('should return the correct head and tail if we remove them', () => {
      const list = new SingleLinkedList()

      list.push(0)
      list.push(2)
      list.push(4)

      list.remove(0)

      expect(list.head.value).toEqual(2)
      expect(list.tail.value).toEqual(4)

      list.remove(1)

      expect(list.head.value).toEqual(2)
      expect(list.tail.value).toEqual(2)

      list.remove(0)

      expect(list.head).toEqual(null)
      expect(list.tail).toEqual(null)
    })
  })

  describe('shift', () => {
    it('should remove the head and assign the new head', () => {
      const list = new SingleLinkedList()

      list.push(0)
      list.push(2)
      list.shift()

      expect(list.head.value).toEqual(2)
    })

    it('should return the removed node', () => {
      const list = new SingleLinkedList()
      list.push(0)

      expect(list.shift()).toBeInstanceOf(ListNode)
    })

    it('should return undefined if there was no removed node', () => {
      const list = new SingleLinkedList()

      expect(list.shift()).toBe(undefined)
    })

    it('should handle the short-length cases for the new tail and head', () => {
      const list = new SingleLinkedList()
      list.push(0)
      list.push(2)
      list.push(4)

      list.shift()

      expect(list.head.value).toEqual(2)
      expect(list.tail.value).toEqual(4)

      list.shift()

      expect(list.head.value).toEqual(4)
      expect(list.tail.value).toEqual(4)

      list.shift()

      expect(list.head).toEqual(null)
      expect(list.tail).toEqual(null)
    })
  })

  describe('insert', () => {
    it('should add a new ListNode at the specified index', () => {
      const list = new SingleLinkedList()
      list.push(0)
      list.push(2)
      list.push(4)

      list.insert(6, 1)

      expect(list.head.next.value).toEqual(6)
    })

    it('should return false if the index is bigger than the list length', () => {
      const list = new SingleLinkedList()

      list.push(0)
      list.push(1)

      expect(list.insert(2, 10)).toBeFalsy()
      expect(list.tail.value).toEqual(1)
    })

    it('should return false if the index is less than zero', () => {
      const list = new SingleLinkedList()

      expect(list.insert(0, -1)).toBeFalsy()
      expect(list.head).toEqual(null)
    })
  })

  describe('unshift', () => {
    it('should add a new head', () => {
      const list = new SingleLinkedList()

      list.push(0)
      list.unshift(1)

      expect(list.head.value).toEqual(1)
      expect(list.tail.value).toEqual(0)
    })
    it('should add a new tail if the item is the only one in the list', () => {
      const list = new SingleLinkedList()
      list.unshift(2)

      expect(list.head.value).toEqual(2)
      expect(list.tail.value).toEqual(2)
    })
  })

  describe('get', () => {
    it('should return the ListNode by the index', () => {
      const list = new SingleLinkedList()

      list.push(0)
      list.push(1)
      list.push(2)
      list.push(3)

      expect(list.get(3)?.value).toEqual(3)
    })

    it('should return undefined if no index is found', () => {
      const list = new SingleLinkedList()

      expect(list.get(0)).toEqual(undefined)
    })
  })

  describe('set', () => {
    it('should update the node if the index is found', () => {
      const list = new SingleLinkedList()

      list.push(0)

      expect(list.set(10, 0)).toBeTruthy()
      expect(list.head.value).toEqual(10)
      expect(list.tail.value).toEqual(10)
    })

    it('should return false if no item is found', () => {
      const list = new SingleLinkedList()
      expect(list.set(10, 2)).toBeFalsy()
    })
  })

  describe('reverse', () => {
    it('should reverse the linked list', () => {
      const list = new SingleLinkedList()

      list.push(0)
      list.push(1)
      list.push(2)
      list.push(3)

      expect(list.values()).toEqual([0, 1, 2, 3])
      expect(list.reverse()).toBeInstanceOf(SingleLinkedList)
      expect(list.values()).toEqual([3, 2, 1, 0])
    })
  })

  describe('values', () => {
    it('should return all the values in the list', () => {
      const list = new SingleLinkedList()

      list.push(0)
      list.push(1)
      list.push(2)
      list.push(3)

      expect(list.values()).toEqual([0, 1, 2, 3])
    })
  })
})
