import { BinarySearchTree } from '../../src/trees/BinarySearchTree'

describe('BinarySearchTree', () => {
  it('should be able to create a BinarySearchTree', () => {
    const BST = new BinarySearchTree()

    expect(BST.root).toEqual(null)
  })

  describe('insert', () => {
    it('should be able to insert a node to the BST in the correct position', () => {
      const BST = new BinarySearchTree()
      BST.insert(20)
      BST.insert(22)
      BST.insert(30)
      BST.insert(15)
      BST.insert(18)
      BST.insert(19)
      BST.insert(16)

      expect(BST.root.value).toEqual(20)
      expect(BST.root.left.value).toEqual(15)
      expect(BST.root.left.right.value).toEqual(18)
      expect(BST.root.left.right.left.value).toEqual(16)
      expect(BST.root.left.right.right.value).toEqual(19)

      expect(BST.root.right.value).toEqual(22)
      expect(BST.root.right.right.value).toEqual(30)
    })

    it('should return an error when you try to insert a duplicate value', () => {
      const BST = new BinarySearchTree()

      expect(BST.insert(20)).toBeInstanceOf(BinarySearchTree)
      expect(BST.root.value).toEqual(20)

      expect(() => BST.insert(20)).toThrow(Error)

      expect(BST.root.value).toEqual(20)
      expect(BST.root.left).toEqual(null)
      expect(BST.root.right).toEqual(null)
    })
  })

  describe('find', () => {
    it('should return the TreeNode when the value is found', () => {
      const BST = new BinarySearchTree()
      BST.insert(20)

      expect(BST.find(20).value).toEqual(20)

      BST.insert(22)
      BST.insert(30)
      BST.insert(15)
      BST.insert(46)
      BST.insert(19)
      BST.insert(16)

      expect(BST.find(16).value).toEqual(16)
      expect(BST.find(19).value).toEqual(19)
      expect(BST.find(46).value).toEqual(46)
    })

    it('should return undefined when the value is not found', () => {
      const BST = new BinarySearchTree()
      BST.insert(20)
      BST.insert(10)
      BST.insert(30)

      expect(BST.find(15)).toEqual(undefined)
      expect(BST.find(25)).toEqual(undefined)
    })
  })

  describe('bfs (Breadth-First Search)', () => {
    it('should return the values of the tree using the BFS approach', () => {
      const tree = new BinarySearchTree()
      tree.insert(1)
      tree.insert(3)
      tree.insert(4)
      tree.insert(2)
      tree.insert(5)
      tree.insert(10)
      tree.insert(6)
      tree.insert(9)

      expect(tree.bfs()).toEqual([1, 3, 2, 4, 5, 10, 6, 9])
    })
  })

  describe('dfs (Deep-First Search)', () => {
    it('should return the values of the trees using the DFS Pre-Order approach', () => {
      const tree = new BinarySearchTree()
      
      tree.insert(8)
      tree.insert(6)
      tree.insert(4)
      tree.insert(5)
      tree.insert(2)
      tree.insert(12)
      tree.insert(7)
      tree.insert(15)
      tree.insert(10)
      tree.insert(21)
      tree.insert(9)

      /**           8
       *       6         12
       *    4    7     10  15     
       *  2   5      9       21
       */      

      expect(tree.dfsPreOrder()).toEqual([8, 6, 4, 2, 5, 7, 12, 10, 9, 15, 21])
    })
    it('should return the values of the trees using the DFS Post-Order approach', () => {
      const tree = new BinarySearchTree()
      
      tree.insert(8)
      tree.insert(6)
      tree.insert(4)
      tree.insert(5)
      tree.insert(2)
      tree.insert(12)
      tree.insert(7)
      tree.insert(15)
      tree.insert(10)
      tree.insert(21)
      tree.insert(9)

      /**           8
       *       6         12
       *    4    7     10  15     
       *  2   5      9       21
       */      

      expect(tree.dfsPostOrder()).toEqual([2, 5, 4, 7, 6, 9, 10, 21, 15,  12, 8])
    })
    it('should return the values of the trees using the DFS In-Order approach', () => {
      const tree = new BinarySearchTree()
      
      tree.insert(8)
      tree.insert(6)
      tree.insert(4)
      tree.insert(5)
      tree.insert(2)
      tree.insert(12)
      tree.insert(7)
      tree.insert(15)
      tree.insert(10)
      tree.insert(21)
      tree.insert(9)

      /**           8
       *       6         12
       *    4    7     10  15     
       *  2   5      9       21
       */      

      expect(tree.dfsInOrder()).toEqual([2, 4, 5, 6, 7, 8, 9, 10, 12, 15, 21])
    })
  })
})
