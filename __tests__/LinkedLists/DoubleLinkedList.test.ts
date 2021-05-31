import { LinkedList } from '../../src/LinkedLists/LinkedList'
import {
  DoubleLinkedList,
  DoubleListNode,
} from '../../src/LinkedLists/DoubleLinkedList'

describe('DoubleLinkedList', () => {
  it('should create a double linked list with the default values', () => {
    const list = new DoubleLinkedList()

    expect(list).toBeInstanceOf(LinkedList)
    expect(list).toBeInstanceOf(DoubleLinkedList)
    expect(list.length).toEqual(0)
    expect(list.head).toEqual(null)
    expect(list.tail).toEqual(null)
  })

  describe('push', () => {
    it('should add a new node to the list as the new tail', () => {
      const list = new DoubleLinkedList()

      list.push(0)

      expect(list.head.value).toEqual(0)
      expect(list.tail.value).toEqual(0)
      expect(list.length).toEqual(1)

      list.push(1)

      expect(list.head.value).toEqual(0)
      expect(list.tail.value).toEqual(1)

      list.push(2)

      expect(list.head.value).toEqual(0)
      expect(list.tail.value).toEqual(2)
    })

    it('should set the correct next/prev values for the nodes', () => {
      const list = new DoubleLinkedList()

      list.push(0)
      list.push(1)

      expect(list.head.next.value).toEqual(1)
      expect(list.tail.prev.value).toEqual(0)

      list.push(2)

      expect(list.tail.prev.value).toEqual(1)
      expect(list.tail.value).toEqual(2)
    })

    it('should return the list', () => {
      const list = new DoubleLinkedList()

      expect(list.push(0)).toBeInstanceOf(DoubleLinkedList)
    })
  })

  describe('pop', () => {
    it('should remove the last item in the list', () => {
      const list = new DoubleLinkedList()
      list.push(0)
      list.push(1)

      expect(list.tail.value).toEqual(1)
      expect(list.tail.prev.value).toEqual(0)

      list.pop()

      expect(list.head.value).toEqual(0)
      expect(list.tail.value).toEqual(0)
      expect(list.tail.prev).toEqual(null)
    })

    it('should return the removed node', () => {
      const list = new DoubleLinkedList()
      list.push(123)
      list.push(456)

      const removed = list.pop()

      expect(removed).toBeInstanceOf(DoubleListNode)
      expect(removed.prev).toEqual(null)
      expect(removed.next).toEqual(null)
      expect(removed.value).toEqual(456)
    })
  })

  describe('shift', () => {
    it('should remove the first item in the list', () => {
      const list = new DoubleLinkedList()
      list.push(0)
      list.push(1)

      expect(list.tail.value).toEqual(1)
      expect(list.tail.prev.value).toEqual(0)

      list.shift()

      expect(list.head.value).toEqual(1)
      expect(list.tail.value).toEqual(1)
      expect(list.tail.prev).toEqual(null)
    })

    it('should return the removed node', () => {
      const list = new DoubleLinkedList()
      list.push(123)
      list.push(456)

      const removed = list.shift()

      expect(removed).toBeInstanceOf(DoubleListNode)
      expect(removed.prev).toEqual(null)
      expect(removed.next).toEqual(null)
      expect(removed.value).toEqual(123)
    })
  })

  describe('unshift', () => {
    it('should add a new head to the list', () => {
      const list = new DoubleLinkedList()
      list.push(123)
      list.push(456)

      list.unshift(789)

      expect(list.head.value).toEqual(789)
      expect(list.tail.value).toEqual(456)
      expect(list.head.next.value).toEqual(123)
      expect(list.head.next.prev.value).toEqual(789)
    })
  })

  describe('get', () => {
    it('should return the node as the index is found', () => {
      const list = new DoubleLinkedList()
      list.push(123)
      list.push(456)
      list.push(789)
      list.push(111)
      list.push(222)

      expect(list.get(1).value).toEqual(456)
      expect(list.get(4).value).toEqual(222)
      expect(list.get(2).value).toEqual(789)
    })

    it('should return undefined if the index is not found', () => {
      const list = new DoubleLinkedList()

      expect(list.get(1)).toEqual(undefined)
      list.push(123)
      expect(list.get(2)).toEqual(undefined)
    })
  })

  describe('set', () => {
    it('should return the updated value', () => {
      const list = new DoubleLinkedList()
      list.push(123)
      list.push(456)

      expect(list.set(789, 0).value).toEqual(789)
      expect(list.set(999, 1).value).toEqual(999)

      expect(list.head.value).toEqual(789)
      expect(list.tail.value).toEqual(999)
    })

    it('should return undefined when no index is found', () => {
      const list = new DoubleLinkedList()

      expect(list.set(1, 1)).toEqual(undefined)
    })
  })

  describe('insert', () => {
    it('should return the new node at the proper index', () => {
      const list = new DoubleLinkedList()
      list.push(123)
      list.push(456)

      expect(list.insert(700, 1).value).toEqual(700)
      expect(list.get(1).value).toEqual(700)

      expect(list.tail.value).toEqual(456)
      expect(list.tail.value).toEqual(456)
    })

    it('should replace the head and tail properly', () => {
      const list = new DoubleLinkedList()
      list.push(123)
      list.push(456)

      expect(list.insert(431, 0).value).toEqual(431)
      expect(list.insert(999, 3).value).toEqual(999)
      expect(list.head.value).toEqual(431)
      expect(list.head.next.value).toEqual(123)
    })

    it('should return undefined if index is not found', () => {
      const list = new DoubleLinkedList()
      list.push(123)
      list.push(456)

      expect(list.insert(123, -1)).toEqual(undefined)
      expect(list.insert(1234, 3)).toEqual(undefined)
      expect(list.length).toEqual(2)
    })
  })

  describe('remove', () => {
    it('should return the removed item when the item is found', () => {
      const list = new DoubleLinkedList()
      list.push(123)
      list.push(456)
      list.push(222)
      list.push(333)

      const removed1 = list.remove(1)
      const removed2 = list.remove(0)

      expect(list.length).toEqual(2)

      expect(removed1.value).toEqual(456)
      expect(removed1.next).toEqual(null)
      expect(removed1.prev).toEqual(null)

      expect(removed2.value).toEqual(123)
      expect(removed2.next).toEqual(null)
      expect(removed2.prev).toEqual(null)

      expect(list.length).toEqual(2)

      list.remove(1)
      list.remove(0)

      expect(list.tail).toEqual(null)
      expect(list.head).toEqual(null)
    })
  })

  it('should return undefined when the item is not found', () => {
    const list = new DoubleLinkedList()

    expect(list.remove(2)).toEqual(undefined)
  })

  describe('reverse', () => {
    it('should reverse the list', () => {
      const list = new DoubleLinkedList()
      list.push(0)
      list.push(1)
      list.push(2)
      list.push(3)
      list.push(4)
      list.push(5)

      expect(list.values()).toEqual([0, 1, 2, 3, 4, 5])

      list.reverse()

      expect(list.values()).toEqual([5, 4, 3, 2, 1, 0])
    })
  })
})
