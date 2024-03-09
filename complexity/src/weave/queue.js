// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
  constructor() {
    this.data = [];
  }

  /*
    Big O(1) => Complexity
  */

  add (record) {
    this.data.unshift(record);
  }

  
  /*
    Big O(1) => Complexity
  */

  remove () {
    return this.data.pop();
  }

  /*
    Big O(1) => Complexity
  */

  peek () {
    return this.data[this.data.length - 1];
  }
}

module.exports = Queue;
