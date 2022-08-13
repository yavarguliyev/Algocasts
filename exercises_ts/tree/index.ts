// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  data: any;
  children: any;

  constructor(data: any) {
    this.data = data;
    this.children = [];
  }

  add(data: any) {
    this.children.push(new Node(data));
  }

  remove(data: any) {
    this.children = this.children.filter((node: any) => node.data !== data);
  }
}

class Tree {
  root: any;

  constructor() {
    this.root = null;
  }

  // Breadth-First Traversal
  traverseBF(fn: Function) {
    const arr = [this.root];

    while (arr.length) {
      const node = arr.shift();

      arr.push(...node.children);
      fn(node);
    }
  }

  // Depth-First Traversal
  traverseDF(fn: Function) {
    const arr = [this.root];

    while (arr.length) {
      const node = arr.shift();

      arr.unshift(...node.children);
      fn(node);
    }
  }
}

export { Tree, Node };
