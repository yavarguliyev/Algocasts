// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

/*
  The given implementation of a queue has a time complexity of O(1) for both the add (enqueue) and remove (dequeue) operations. This is because adding an element to the front of an array (unshift) and removing an element from the end of an array (pop) both have constant time complexity.

  Big O(1) => Complexity
*/

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
}

module.exports = Queue;
