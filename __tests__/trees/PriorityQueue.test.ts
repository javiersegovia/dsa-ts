import { PriorityQueue } from '../../src/trees/PriorityQueue'

describe('PriorityQueue', () => {
  describe('enqueue', () => {
    it('should create a Heap with the highest priority on top', () => {
      const heap = new PriorityQueue()

      heap.enqueue('common cold', 9)
      heap.enqueue('high fever', 5)

      expect(heap.values()).toEqual(['high fever', 'common cold'])

      heap.enqueue('shot', 1)
      heap.enqueue('covid', 2)

      expect(heap.values()).toEqual([
        'shot',
        'covid',
        'high fever',
        'common cold',
      ])

      heap.enqueue('broken arm', 3)
      heap.enqueue('knife in hand', 4)
      heap.enqueue('simple wound', 10)

      expect(heap.values()).toEqual([
        'shot',
        'covid',
        'knife in hand',
        'common cold',
        'broken arm',
        'high fever',
        'simple wound',
      ])
    })
  })

  describe('dequeue', () => {
    it('should delete and return the item with the highest priority', () => {
      const heap = new PriorityQueue()

      heap.enqueue('common cold', 9)
      heap.enqueue('high fever', 5)
      heap.enqueue('shot', 1)
      heap.enqueue('covid', 2)
      heap.enqueue('broken arm', 4)
      heap.enqueue('knife in hand', 5)
      heap.enqueue('simple wound', 8)

      expect(heap.dequeue().value).toEqual('shot')
      expect(heap.dequeue().value).toEqual('covid')
      expect(heap.dequeue().value).toEqual('broken arm')
      expect(heap.dequeue().value).toEqual('knife in hand')
      expect(heap.dequeue().value).toEqual('high fever')
    })

    it('should return undefined if the length of the Heap was 0 removal', () => {
      const heap = new PriorityQueue()

      expect(heap.dequeue()).toEqual(undefined)
      heap.enqueue(55, 1)
      expect(heap.dequeue().value).toEqual(55)
    })
  })
})
