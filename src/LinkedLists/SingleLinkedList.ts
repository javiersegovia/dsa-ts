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

  get(index: number): ListNode | undefined {
    if (index < 0 || this.length <= index) return undefined

    let count = 0
    let current = this.head

    while (current && index >= count) {
      if (index === count) return current

      count++
      current = current.next
    }

    return undefined
  }

  set(value: ListNode['value'], index: number): boolean {
    const node = this.get(index)

    if (node) {
      node.value = value
      return true
    }

    return false
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

  pop(): ListNode | undefined {
    let deleted: ListNode

    if (!this.head || this.length === 1) {
      deleted = this.head || this.tail

      this.head = null
      this.tail = null

      return deleted || undefined
    }

    let current = this.head
    let prev: ListNode

    while (current.next !== null) {
      prev = current
      current = current.next
    }

    deleted = prev.next
    prev.next = null

    this.tail = prev
    this.length--

    return deleted
  }

  insert(node: ListNode, index: number): ListNode | boolean {
    if (index < 0 || index > this.length) return false
    if (this.length === index) {
      this.push(node)
      return node
    }

    const prev = this.get(index - 1)
    const temp = prev.next

    prev.next = node
    node.next = temp

    this.length++

    return prev
  }

  remove(index: number): ListNode | undefined {
    if (index < 0 || index >= this.length || !this.head) return undefined
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()

    const prev = this.get(index - 1)
    const current = prev.next

    prev.next = current.next
    this.length--

    return current
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

  unshift(node: ListNode): ListNode {
    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      node.next = this.head
      this.head = node
    }

    this.length++

    return node
  }

  reverse(): SingleLinkedList {
    if (this.length <= 1) return this

    let prev = null
    let current = this.head

    while (current) {
      if (prev === null) this.tail = current

      // Save the next item in the list
      const temp = current.next

      // Link the current item with the previous one (Reverse!)
      current.next = prev

      // Set the previous item to the current one (Moves 1, important for next iteration)
      prev = current

      // Set the current item to the next one (Moves 1, important for next iteration)
      current = temp

      if (!current) this.head = prev
    }

    return this
  }

  values(): ListNode['value'][] {
    if (!this.head) return []
    if (this.length === 1) return [this.head.value]

    const listValues = []
    let current = this.head

    while (current) {
      listValues.push(current.value)
      current = current.next
    }

    return listValues
  }
}
