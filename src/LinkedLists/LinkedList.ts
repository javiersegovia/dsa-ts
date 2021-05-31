export class ListNode {
  next: ListNode | null

  constructor(public value: string | number) {
    this.next = null
  }
}

export abstract class LinkedList {
  head: ListNode | null
  tail: ListNode | null
  length: number

  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  // abstract get(index: number): ListNode | undefined
  // abstract set(value: ListNode['value'], index: number): boolean
  // abstract push(node: ListNode): LinkedList
  // abstract pop(): ListNode | undefined
  // abstract insert(node: ListNode, index: number): ListNode | boolean
  // abstract remove(index: number): ListNode | undefined
  // abstract shift(): ListNode | undefined
  // abstract unshift(node: ListNode): ListNode
  // abstract reverse(): LinkedList
  // abstract values(): ListNode['value'][]
}
