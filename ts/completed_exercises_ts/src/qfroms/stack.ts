class Stack {
  data: any;

  constructor() {
    this.data = [];
  }

  push(record: any) {
    this.data.push(record);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

module.exports = Stack;
