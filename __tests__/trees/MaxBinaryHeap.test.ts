import { MaxBinaryHeap } from '../../src/trees/MaxBinaryHeap'

describe('MaxBinaryHeap', () => {
  describe('insert', () => {
    it('should create a Heap with the proper order', () => {
      const heap = new MaxBinaryHeap()

      heap.insert(50)
      heap.insert(40)
      heap.insert(35)
      heap.insert(60)
      heap.insert(20)
      heap.insert(70)
      heap.insert(55)

      expect(heap.values).toEqual([70, 50, 60, 40, 20, 35, 55])
    })
  })

  describe('extractMax', () => {
    it('should delete the first item in the heap and rearrange the order', () => {
      const heap = new MaxBinaryHeap()

      heap.insert(50)
      heap.insert(40)
      heap.insert(35)
      heap.insert(60)
      heap.insert(20)
      heap.insert(70)
      heap.insert(55)

      expect(heap.extractMax()).toEqual([60, 50, 55, 40, 20, 35])
      expect(heap.extractMax()).toEqual([55, 50, 35, 40, 20])
      expect(heap.extractMax()).toEqual([50, 40, 35, 20])
    })

    it('should return an empty array if the length of the Heap was 0 or 1 before removal', () => {
      const heap = new MaxBinaryHeap()

      expect(heap.extractMax()).toEqual([])
      heap.insert(55)
      expect(heap.extractMax()).toEqual([])
    })
  })
})
