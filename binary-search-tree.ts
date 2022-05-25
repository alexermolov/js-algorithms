class TreeNode {
  constructor(
    public left: TreeNode,
    public right: TreeNode,
    public parent: TreeNode
  ) {}
}

class BinarySearchTree {
  root: TreeNode;
  constructor() {
    this.root = null;
  }
}
