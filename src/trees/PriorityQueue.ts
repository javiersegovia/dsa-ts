import { swapIndex } from '../utils/swapIndex'

export class PriorityNode {
  constructor(public value: string | number, public priority: number) {}
}

/** Example implementation of MixBinaryHeap */

export class PriorityQueue {
  queue: PriorityNode[] = []

  enqueue(value: PriorityNode['value'], priority: number): void {
    const node = new PriorityNode(value, priority)

    this.queue.push(node)
    this.bubbleUp()
  }

  bubbleUp(index: number = this.queue.length - 1): void {
    if (!this.queue.length || this.queue.length === 1 || index === 0) return

    const element = this.queue[index]
    const parentIndex = Math.floor((index - 1) / 2)
    const parentElement = this.queue[parentIndex]

    if (element.priority < parentElement.priority) {
      swapIndex(this.queue, index, parentIndex)
      this.bubbleUp(parentIndex)
    }
  }

  dequeue(): PriorityNode {
    if (!this.queue.length) return undefined
    if (this.queue.length === 1) {
      return this.queue.pop()
    }
    const removed = this.queue[0]

    this.queue[0] = this.queue[this.queue.length - 1]
    this.queue.pop()

    this.bubbleDown(0)

    return removed
  }

  bubbleDown(index: number): PriorityQueue['queue'] {
    if (this.queue.length === 1 || index === this.queue.length - 1)
      return this.queue

    const element = this.queue[index]

    const leftChildIndex = index * 2 + 1
    const rightChildIndex = index * 2 + 2

    const leftChild = this.queue[leftChildIndex]
    const rightChild = this.queue[rightChildIndex]

    if (
      rightChild?.priority < leftChild?.priority &&
      element.priority > rightChild.priority
    ) {
      swapIndex(this.queue, index, rightChildIndex)
      this.bubbleDown(rightChildIndex)
    } else if (element.priority > leftChild?.priority) {
      swapIndex(this.queue, index, leftChildIndex)
      this.bubbleDown(leftChildIndex)
    }

    return this.queue
  }

  values(): PriorityNode['value'][] {
    if (!this.queue.length) return []

    return this.queue.map((queueNode) => queueNode.value)
  }
}
