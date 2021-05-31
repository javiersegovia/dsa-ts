import {
  SingleLinkedList,
  ListNode,
} from '../../src/LinkedLists/SingleLinkedList'

describe('SingleLinkedList', () => {
  it('should create a single list with the default values', () => {
    const linkedList = new SingleLinkedList()

    expect(linkedList.length).toEqual(0)
    expect(linkedList.head).toEqual(null)
    expect(linkedList.tail).toEqual(null)
  })

  it('should be able to push new values', () => {
    const linkedList = new SingleLinkedList()
    const node1 = new ListNode(0)
    const node2 = new ListNode(2)
    const node3 = new ListNode(4)

    linkedList.push(node1)
    linkedList.push(node2)
    linkedList.push(node3)

    expect(linkedList.length).toEqual(3)
    expect(linkedList.head.value).toEqual(node1.value)
    expect(linkedList.tail.value).toEqual(node3.value)
  })

  describe('pop', () => {
    it('should be able to pop (delete the last item)', () => {
      const linkedList = new SingleLinkedList()
      const node1 = new ListNode(0)
      const node2 = new ListNode(2)
      const node3 = new ListNode(4)

      linkedList.push(node1)
      linkedList.push(node2)
      linkedList.push(node3)

      linkedList.pop()

      expect(linkedList.length).toEqual(2)
      expect(linkedList.tail.value).toEqual(node2.value)
    })

    it('should return the correct tail and head when there is only one value', () => {
      const linkedList = new SingleLinkedList()
      const node1 = new ListNode(0)

      linkedList.push(node1)
      linkedList.pop()

      expect(linkedList.head).toEqual(null)
      expect(linkedList.tail).toEqual(null)
    })
  })

  describe('remove', () => {
    it('should be able to remove an item by the index', () => {
      const linkedList = new SingleLinkedList()
      const node1 = new ListNode(0)
      const node2 = new ListNode(2)
      const node3 = new ListNode(4)
      const node4 = new ListNode(6)

      linkedList.push(node1)
      linkedList.push(node2)
      linkedList.push(node3)
      linkedList.push(node4)

      linkedList.removeAt(0)

      expect(linkedList.length).toEqual(3)
      expect(linkedList.head.value).toEqual(node2.value)
      expect(linkedList.tail.value).toEqual(node4.value)

      linkedList.removeAt(2)

      expect(linkedList.length).toEqual(2)
      expect(linkedList.tail.value).toEqual(node3.value)
    })

    it('should return the correct head and tail if we remove them', () => {
      const linkedList = new SingleLinkedList()
      const node1 = new ListNode(0)
      const node2 = new ListNode(2)
      const node3 = new ListNode(4)

      linkedList.push(node1)
      linkedList.push(node2)
      linkedList.push(node3)

      linkedList.removeAt(0)

      expect(linkedList.head.value).toEqual(node2.value)
      expect(linkedList.tail.value).toEqual(node3.value)

      linkedList.removeAt(1)

      expect(linkedList.head.value).toEqual(node2.value)
      expect(linkedList.tail.value).toEqual(node2.value)

      linkedList.removeAt(0)

      expect(linkedList.head).toEqual(null)
      expect(linkedList.tail).toEqual(null)
    })
  })

  describe('shift', () => {
    it('should remove the head and assign the new head', () => {
      const linkedList = new SingleLinkedList()

      const node1 = new ListNode(0)
      const node2 = new ListNode(2)

      linkedList.push(node1)
      linkedList.push(node2)

      linkedList.shift()

      expect(linkedList.head.value).toEqual(node2.value)
    })

    it('should return the value of the removed node', () => {
      const linkedList = new SingleLinkedList()
      const node1 = new ListNode(0)
      linkedList.push(node1)

      expect(linkedList.shift()).toBeInstanceOf(ListNode)
    })

    it('should return undefined if there was no removed node', () => {
      const linkedList = new SingleLinkedList()

      expect(linkedList.shift()).toBe(undefined)
    })

    it('should handle the short-length cases for the new tail and head', () => {
      const linkedList = new SingleLinkedList()
      const node1 = new ListNode(0)
      const node2 = new ListNode(2)
      const node3 = new ListNode(4)

      linkedList.push(node1)
      linkedList.push(node2)
      linkedList.push(node3)

      linkedList.shift()

      expect(linkedList.head.value).toEqual(node2.value)
      expect(linkedList.tail.value).toEqual(node3.value)

      linkedList.shift()

      expect(linkedList.head.value).toEqual(node3.value)
      expect(linkedList.tail.value).toEqual(node3.value)

      linkedList.shift()

      expect(linkedList.head).toEqual(null)
      expect(linkedList.tail).toEqual(null)
    })
  })

  describe('addAt', () => {
    it('should add a new ListNode at the specified index', () => {
      const linkedList = new SingleLinkedList()
      const node1 = new ListNode(0)
      const node2 = new ListNode(2)
      const node3 = new ListNode(4)
      const node4 = new ListNode(6)

      linkedList.push(node1)
      linkedList.push(node2)
      linkedList.push(node3)

      linkedList.addAt(node4, 1)

      expect(linkedList.head.next.value).toEqual(node4.value)
    })
  })
})
