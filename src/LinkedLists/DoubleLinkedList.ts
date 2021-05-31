import { LinkedList, ListNode } from './LinkedList'

export class DoubleListNode extends ListNode {
  prev: DoubleListNode | null
  next: DoubleListNode | null

  constructor(public value: ListNode['value']) {
    super(value)
    this.prev = null
  }
}

export class DoubleLinkedList extends LinkedList<
  DoubleLinkedList,
  DoubleListNode
> {
  head: DoubleListNode | null
  tail: DoubleListNode | null

  get(index: number): DoubleListNode | undefined {
    if (index < 0 || index >= this.length) return undefined

    const middle = Math.floor(this.length / 2)

    /** If the index is closer to the start,
     * we traverse the list starting from the head.
     * If not, we traverse the list starting from the tail */

    if (index <= middle) {
      let current = this.head
      let count = 0

      while (current && index >= count) {
        if (index === count) return current
        count++
        current = current.next
      }
    } else {
      let current = this.tail
      let count = this.length - 1

      while (current && index <= count) {
        if (index === count) return current
        count--
        current = current.prev
      }
    }

    return undefined
  }

  set(
    value: DoubleListNode['value'],
    index: number,
  ): DoubleListNode | undefined {
    /** We dont check the index here because we already
     * do that validation inside this.get */

    const node = this.get(index)
    if (node) node.value = value

    return node
  }

  push(item: DoubleListNode['value'] | DoubleListNode): DoubleLinkedList {
    const newNode =
      item instanceof DoubleListNode ? item : new DoubleListNode(item)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }

  unshift(item: DoubleListNode['value'] | DoubleListNode): DoubleListNode {
    const newNode =
      item instanceof DoubleListNode ? item : new DoubleListNode(item)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head.prev = newNode
      this.head = newNode
    }

    this.length++

    return newNode
  }

  pop(): DoubleListNode | undefined {
    if (!this.head) return undefined

    const removed = this.tail

    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = removed.prev
      this.tail.next = null
      removed.prev = null
    }

    this.length--

    return removed
  }

  shift(): DoubleListNode | undefined {
    if (!this.head) return undefined

    const removed = this.head

    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = removed.next
      this.head.prev = null
      removed.next = null
    }

    this.length--

    return removed
  }

  insert(
    item: DoubleListNode['value'] | DoubleListNode,
    index: number,
  ): DoubleListNode | undefined {
    const newNode =
      item instanceof DoubleListNode ? item : new DoubleListNode(item)

    if (index === 0) {
      this.unshift(newNode)
      return newNode
    } else if (index === this.length) {
      this.push(newNode)
      return newNode
    }

    const previousItem = this.get(index - 1)
    if (!previousItem) return undefined

    const nextItem = previousItem.next
    previousItem.next = newNode
    newNode.prev = previousItem
    newNode.next = nextItem
    nextItem.prev = newNode

    this.length++

    return newNode
  }

  remove(index: number): DoubleListNode | undefined {
    if (index === 0) {
      return this.shift()
    } else if (index === this.length - 1) {
      return this.pop()
    }

    const itemToRemove = this.get(index)
    if (!itemToRemove) return undefined

    itemToRemove.prev.next = itemToRemove.next
    itemToRemove.next.prev = itemToRemove.prev

    itemToRemove.next = null
    itemToRemove.prev = null

    this.length--

    return itemToRemove
  }

  reverse(): DoubleLinkedList {
    if (!this.head || this.length === 1) return this

    let current = this.head
    let count = 0

    while (current) {
      const tempNext = current.next

      current.next = current.prev
      current.prev = tempNext

      if (count === 0) {
        this.tail = current
      }
      if (count === this.length - 1) {
        this.head = current
      }

      current = tempNext
      count++
    }

    return this
  }
}
