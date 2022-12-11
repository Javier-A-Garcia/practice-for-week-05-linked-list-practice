class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // Your code here
    // Initializes head property to null
    this.head = null;
    // Initializes length property to 0
    this.length = 0;
  }

  addToHead(val) {
    // Your code here
    // Creates new LinkedListNode
    const newNode = new LinkedListNode(val);
    // Sets 'next' property of newNode to the current 'head' node
    newNode.next = this.head;
    // Sets 'head' of LinkedList to newNode
    this.head = newNode;
    // Increases length of LinkedList by 1
    this.length++;
  }

  addToTail(val) {
    // Your code here
    // Creates new LinkedListNode
    const newNode = new LinkedListNode(val);

    let current = this.head;

    if (current === null) {
      this.head = newNode;
      this.length++;
      return;
    }

    while (current.next !== null){
      current = current.next;
    }

    current.next = newNode;
    this.length++;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;