class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    // Your code here
    this.head = null;
    this.tail = null;
    this.length = 0;

  }

  addToHead(val) {
    // Your code here
    // Create a new node with the given value
    const newNode = new DoublyLinkedListNode(val);

    // If list is empty, sets new node as both head and tail
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Otherwise
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    // Increase length of LinkedList
    this.length++;
  }

  addToTail(val) {
    // Your code here
    // Create a new node with the given value
    const newNode = new DoublyLinkedListNode(val);

    // If list is empty, sets new node as both head and tail
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Otherwise
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    // Increase length of LinkedList
    this.length++;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;