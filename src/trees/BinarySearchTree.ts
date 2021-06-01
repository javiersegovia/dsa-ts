import { TreeNode, getTreeNode, BinaryTree } from './BinaryTree'

export class BinarySearchTree extends BinaryTree {
  insert(
    item: TreeNode | TreeNode['value'],
    currentNode?: TreeNode,
  ): BinarySearchTree | Error {
    const newNode = getTreeNode(item)

    if (!this.root) {
      this.root = newNode
      return this
    }

    if (!currentNode) currentNode = this.root

    if (newNode.value > currentNode.value) {
      if (currentNode.right) this.insert(newNode, currentNode.right)
      else currentNode.right = newNode

      return this
    } else if (newNode.value < currentNode.value) {
      if (currentNode.left) this.insert(newNode, currentNode.left)
      else currentNode.left = newNode

      return this
    }

    throw new Error('No duplicated values allowed!')
  }

  find(value: TreeNode['value'], currentNode?: TreeNode): TreeNode | undefined {
    if (!this.root) return undefined
    if (!currentNode) currentNode = this.root
    if (currentNode.value === value) return currentNode

    if (value > currentNode.value && currentNode.right) {
      return this.find(value, currentNode.right)
    } else if (value < currentNode.value && currentNode.left) {
      return this.find(value, currentNode.left)
    }

    return undefined
  }

  bfs(): TreeNode['value'][] | undefined {
    if (!this.root) return undefined

    const queue = [this.root]
    const visited = []
    let node: TreeNode

    while (queue.length) {
      node = queue.pop()
      visited.push(node.value)

      if (node.left) queue.unshift(node.left)
      if (node.right) queue.unshift(node.right)
    }

    return visited
  }

  /** Deep First Search */
  dfsPreOrder(): TreeNode['value'][] | undefined {
    if (!this.root) return undefined

    const traverse = (node: TreeNode, values: TreeNode['value'][]): void => {
      values.push(node.value)
      if (node.left) traverse(node.left, values)
      if (node.right) traverse(node.right, values)
    }

    const values = []
    traverse(this.root, values)
    return values
  }

  dfsPostOrder(): TreeNode['value'][] | undefined {
    if (!this.root) return undefined

    const traverse = (node: TreeNode, values: TreeNode['value'][]): void => {
      if (node.left) traverse(node.left, values)
      if (node.right) traverse(node.right, values)
      values.push(node.value)
    }

    const values = []
    traverse(this.root, values)
    return values
  }

  dfsInOrder(): TreeNode['value'][] | undefined {
    if (!this.root) return undefined

    const traverse = (node: TreeNode, values: TreeNode['value'][]): void => {
      if (node.left) traverse(node.left, values)
      values.push(node.value)
      if (node.right) traverse(node.right, values)
    }

    const values = []
    traverse(this.root, values)
    return values
  }
}
