// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
  data: any;

  constructor() {
    this.data = [];
  }

  add(record: any) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }
}

export default Queue;
