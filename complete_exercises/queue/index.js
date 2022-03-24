//#region description

/*
  --- Description
  Create a queue data structure.  The queue
  should be a class with methods 'add' and 'remove'.
  Adding to the queue should store an element until
  it is removed
  --- Examples
    const q = new Queue();
    q.add(1);
    q.remove(); // returns 1;
 */

//#endregion

//#region solutions

// @desc: solution one

// @desc: Array.prototype.unshift()
// @desc: URL[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift]

// @desc: Array.prototype.pop()
// @desc: URL[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop]

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop()
  }
}

//#endregion

module.exports = Queue;