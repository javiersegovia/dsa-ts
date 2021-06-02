export class MaxBinaryHeap {
  values: (string | number)[] = []

  insert(element: MaxBinaryHeap['values'][number]): void {
    this.values.push(element)
    this.bubbleUp()
  }

  bubbleUp(index: number = this.values.length - 1): void {
    if (!this.values.length || this.values.length === 1 || index === 0) return

    const element = this.values[index]
    const parentIndex = Math.floor((index - 1) / 2)
    const parentElement = this.values[parentIndex]

    if (element > parentElement) {
      this.values[parentIndex] = element
      this.values[index] = parentElement

      this.bubbleUp(parentIndex)
    }
  }

  extractMax(): MaxBinaryHeap['values'] {
    if (!this.values.length) return this.values
    if (this.values.length === 1) {
      this.values.pop()
      return this.values
    }

    this.values[0] = this.values[this.values.length - 1]
    this.values.pop()

    return this.bubbleDown(0)
  }

  bubbleDown(index: number): MaxBinaryHeap['values'] {
    if (this.values.length === 1 || index === this.values.length - 1)
      return this.values

    const element = this.values[index]

    const leftChildIndex = index * 2 + 1
    const rightChildIndex = index * 2 + 2

    const leftChild = this.values[leftChildIndex]
    const rightChild = this.values[rightChildIndex]

    if (rightChild > leftChild && element < rightChild) {
      this.values[rightChildIndex] = element
      this.values[index] = rightChild

      this.bubbleDown(rightChildIndex)
    } else if (element < leftChild) {
      this.values[leftChildIndex] = element
      this.values[index] = leftChild

      this.bubbleDown(leftChildIndex)
    }

    return this.values
  }
}
