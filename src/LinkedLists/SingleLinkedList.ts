export class ListNode {
  next: ListNode | null

  constructor(public value: string | number) {
    this.next = null
  }
}

export class SingleLinkedList {
  head: ListNode | null
  tail: ListNode | null
  length: number

  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(node: ListNode): SingleLinkedList {
    if (!this.head) {
      this.head = node
      this.tail = node
      this.length++
    } else {
      this.tail.next = node
      this.tail = node

      this.length++
    }

    return this
  }

  pop(): SingleLinkedList {
    if (!this.head || this.length === 1) {
      this.head = null
      this.tail = null
      return this
    }

    let current = this.head
    let prev: ListNode

    while (current.next !== null) {
      prev = current
      current = current.next
    }

    prev.next = null

    this.tail = prev
    this.length--

    return this
  }

  addAt(node: ListNode, index: number): ListNode {
    if (!this.head) {
      this.head = node
      this.length++

      return node
    }

    let count = 0
    let current = this.head
    let prev = null

    while (current && count <= index) {
      if (count === index) {
        if (prev) prev.next = node

        node.next = current
      }

      count++
      prev = current
      current = current.next
    }

    this.length++

    return prev
  }

  removeAt(index: number): SingleLinkedList {
    if (!this.head) return this

    let prev = null
    let current = this.head
    let count = 0

    while (current != null) {
      if (count === index) {
        if (prev) prev.next = current.next

        this.length--

        if (!current.next) {
          this.tail = prev
        }

        if (index === 0) {
          this.head = current.next
        }

        break
      }

      count++
      prev = current
      current = current.next
    }

    return this
  }

  shift(): ListNode | undefined {
    if (!this.head) return undefined

    const removed = this.head

    this.head = removed.next
    this.length--

    if (this.length === 0) {
      this.tail = null
    }

    return removed
  }
}
