//#region description

/* 
  --- Directions
  1) Create a node class.  The constructor
  should accept an argument that gets assigned
  to the data property and initialize an
  empty array for storing children. The node
  class should have methods 'add' and 'remove'.
  2) Create a tree class. The tree constructor
  should initialize a 'root' property to null.
  3) Implement 'traverseBF' and 'traverseDF'
  on the tree class.  Each method should accept a
 function that gets called with each element in the tree
*/

//#endregion

//#region solutions

// @desc: solution one

// @desc: Spread syntax (...)
// @desc: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax]

// @desc: Array.prototype.filter()
// @desc: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter]

// @desc: Array.prototype.shift()
// @desc: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift]

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter(node => node.data !== data)
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();

      // for (let child of node.children) {
      //   arr.push(child);
      // }

      arr.push(...node.children);
      fn(node);
    }
  }

  traverseDF(fn) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();

      arr.unshift(...node.children);
      fn(node);
    }
  }
}

//#endregion

module.exports = { Tree, Node };
