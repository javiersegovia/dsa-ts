export class TreeNode {
  constructor(
    public value: string | number,
    public left: TreeNode | null = null,
    public right: TreeNode | null = null,
  ) {}
}

export const getTreeNode = (item: TreeNode | TreeNode['value']): TreeNode =>
  item instanceof TreeNode ? item : new TreeNode(item)

export class BinaryTree {
  root: TreeNode | null
  constructor(item?: TreeNode | TreeNode['value']) {
    this.root = item ? getTreeNode(item) : null
  }
}
