export class ListNode {
  next: ListNode | null

  constructor(public value: string | number) {
    this.next = null
  }
}

export abstract class LinkedList<TList, TNode extends ListNode> {
  head: ListNode | null
  tail: ListNode | null
  length: number

  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  abstract get(index: number): TNode | undefined
  abstract set(value: TNode['value'], index: number): TNode | undefined
  abstract push(item: TNode['value'] | TNode): TList
  abstract pop(): TNode | undefined
  abstract insert(item: TNode['value'] | TNode, index: number): TNode | boolean
  abstract remove(index: number): TNode | undefined
  abstract shift(): TNode | undefined
  abstract unshift(item: TNode['value'] | TNode): TNode
  abstract reverse(): TList

  /**
   * This is just for testing purposes!
   * Using an array kind of negates the benefits of using a Linked List.
   */

  values(): ListNode['value'][] {
    if (!this.head) return []

    const list = []
    let current = this.head

    while (current) {
      list.push(current.value)
      current = current.next
    }

    return list
  }
}
