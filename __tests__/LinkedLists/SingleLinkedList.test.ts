import {
  SingleLinkedList,
  ListNode,
} from '../../src/LinkedLists/SingleLinkedList'

describe('SingleLinkedList', () => {
  it('should create a single list with the default values', () => {
    const list = new SingleLinkedList()

    expect(list.length).toEqual(0)
    expect(list.head).toEqual(null)
    expect(list.tail).toEqual(null)
  })

  it('should be able to push new values', () => {
    const list = new SingleLinkedList()
    const node1 = new ListNode(0)
    const node2 = new ListNode(2)
    const node3 = new ListNode(4)

    list.push(node1)
    list.push(node2)
    list.push(node3)

    expect(list.length).toEqual(3)
    expect(list.head.value).toEqual(node1.value)
    expect(list.tail.value).toEqual(node3.value)
  })

  describe('pop', () => {
    it('should be able to pop (delete the last item)', () => {
      const list = new SingleLinkedList()
      const node1 = new ListNode(0)
      const node2 = new ListNode(2)
      const node3 = new ListNode(4)

      list.push(node1)
      list.push(node2)
      list.push(node3)

      expect(list.pop().value).toEqual(node3.value)
      expect(list.length).toEqual(2)
      expect(list.tail.value).toEqual(node2.value)
    })

    it('should return the correct tail and head when there is only one value', () => {
      const list = new SingleLinkedList()
      const node1 = new ListNode(0)

      list.push(node1)
      list.pop()

      expect(list.pop()).toEqual(undefined)
      expect(list.head).toEqual(null)
      expect(list.tail).toEqual(null)
    })
  })

  describe('remove', () => {
    it('should be able to remove an item by the index', () => {
      const list = new SingleLinkedList()
      const node0 = new ListNode(0)
      const node1 = new ListNode(1)
      const node2 = new ListNode(2)
      const node3 = new ListNode(3)
      const node4 = new ListNode(4)

      list.push(node0)
      list.push(node1)
      list.push(node2)
      list.push(node3)
      list.push(node4)

      list.remove(0)

      expect(list.length).toEqual(4)
      expect(list.head.value).toEqual(node1.value)
      expect(list.tail.value).toEqual(node4.value)

      list.remove(1)

      expect(list.length).toEqual(3)
      expect(list.tail.value).toEqual(node4.value)
    })

    it('should return the correct head and tail if we remove them', () => {
      const list = new SingleLinkedList()
      const node1 = new ListNode(0)
      const node2 = new ListNode(2)
      const node3 = new ListNode(4)

      list.push(node1)
      list.push(node2)
      list.push(node3)

      list.remove(0)

      expect(list.head.value).toEqual(node2.value)
      expect(list.tail.value).toEqual(node3.value)

      list.remove(1)

      expect(list.head.value).toEqual(node2.value)
      expect(list.tail.value).toEqual(node2.value)

      list.remove(0)

      expect(list.head).toEqual(null)
      expect(list.tail).toEqual(null)
    })
  })

  describe('shift', () => {
    it('should remove the head and assign the new head', () => {
      const list = new SingleLinkedList()

      const node1 = new ListNode(0)
      const node2 = new ListNode(2)

      list.push(node1)
      list.push(node2)

      list.shift()

      expect(list.head.value).toEqual(node2.value)
    })

    it('should return the value of the removed node', () => {
      const list = new SingleLinkedList()
      const node1 = new ListNode(0)
      list.push(node1)

      expect(list.shift()).toBeInstanceOf(ListNode)
    })

    it('should return undefined if there was no removed node', () => {
      const list = new SingleLinkedList()

      expect(list.shift()).toBe(undefined)
    })

    it('should handle the short-length cases for the new tail and head', () => {
      const list = new SingleLinkedList()
      const node1 = new ListNode(0)
      const node2 = new ListNode(2)
      const node3 = new ListNode(4)

      list.push(node1)
      list.push(node2)
      list.push(node3)

      list.shift()

      expect(list.head.value).toEqual(node2.value)
      expect(list.tail.value).toEqual(node3.value)

      list.shift()

      expect(list.head.value).toEqual(node3.value)
      expect(list.tail.value).toEqual(node3.value)

      list.shift()

      expect(list.head).toEqual(null)
      expect(list.tail).toEqual(null)
    })
  })

  describe('insert', () => {
    it('should add a new ListNode at the specified index', () => {
      const list = new SingleLinkedList()
      const node1 = new ListNode(0)
      const node2 = new ListNode(2)
      const node3 = new ListNode(4)
      const node4 = new ListNode(6)

      list.push(node1)
      list.push(node2)
      list.push(node3)

      list.insert(node4, 1)

      expect(list.head.next.value).toEqual(node4.value)
    })

    it('should return false if the index is bigger than the list length', () => {
      const list = new SingleLinkedList()
      const node0 = new ListNode(0)
      const node1 = new ListNode(1)
      const node2 = new ListNode(2)

      list.push(node0)
      list.push(node1)

      expect(list.insert(node2, 10)).toBeFalsy()
      expect(list.tail.value).toEqual(node1.value)
    })

    it('should return false if the index is less than zero', () => {
      const list = new SingleLinkedList()
      const node0 = new ListNode(0)

      expect(list.insert(node0, -1)).toBeFalsy()
      expect(list.head).toEqual(null)
    })
  })

  describe('unshift', () => {
    it('should add a new head', () => {
      const list = new SingleLinkedList()
      const node0 = new ListNode(0)
      const node1 = new ListNode(1)

      list.push(node0)
      list.unshift(node1)

      expect(list.head.value).toEqual(1)
      expect(list.tail.value).toEqual(node0.value)
    })
    it('should add a new tail if the item is the only one in the list', () => {
      const list = new SingleLinkedList()
      const node2 = new ListNode(2)

      list.unshift(node2)

      expect(list.head.value).toEqual(2)
      expect(list.tail.value).toEqual(2)
    })
  })

  describe('get', () => {
    it('should return the ListNode by the index', () => {
      const list = new SingleLinkedList()
      const node0 = new ListNode(0)
      const node1 = new ListNode(1)
      const node2 = new ListNode(2)
      const node3 = new ListNode(3)

      list.push(node0)
      list.push(node1)
      list.push(node2)
      list.push(node3)

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
      const node0 = new ListNode(0)

      list.push(node0)

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
      const node0 = new ListNode(0)
      const node1 = new ListNode(1)
      const node2 = new ListNode(2)
      const node3 = new ListNode(3)

      list.push(node0)
      list.push(node1)
      list.push(node2)
      list.push(node3)

      expect(list.values()).toEqual([0, 1, 2, 3])
      expect(list.reverse()).toBeInstanceOf(SingleLinkedList)
      expect(list.values()).toEqual([3, 2, 1, 0])
    })
  })

  describe('values', () => {
    it('should return all the values in the list', () => {
      const list = new SingleLinkedList()
      const node0 = new ListNode(0)
      const node1 = new ListNode(1)
      const node2 = new ListNode(2)
      const node3 = new ListNode(3)

      list.push(node0)
      list.push(node1)
      list.push(node2)
      list.push(node3)

      expect(list.values()).toEqual([0, 1, 2, 3])
    })
  })
})
