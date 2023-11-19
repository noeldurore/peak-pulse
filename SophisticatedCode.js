/*
Filename: SophisticatedCode.js
Content: 

This code is an implementation of a linked list data structure. It includes various operations such as insertion, deletion, searching, and traversal. The code also demonstrates the use of classes, constructor functions, and prototype methods.

*/

// Linked List Node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Linked List
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Insertion at the end of the list
  insert(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Deletion at the given position
  deleteAt(position) {
    if (this.head === null) return;

    let current = this.head;
    let previous = null;
    let count = 0;

    if (position === 0) {
      this.head = current.next;
    } else {
      while (count < position) {
        previous = current;
        current = current.next;
        count++;
      }

      if (current === null) {
        return;
      }

      previous.next = current.next;
    }
  }

  // Search for a given value in the list
  search(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  // Traversal: Print the list
  printList() {
    let current = this.head;
    let str = "";
    while (current !== null) {
      str += current.value + " -> ";
      current = current.next;
    }
    str += "null";
    console.log(str);
  }
}

// Usage Example
const linkedList = new LinkedList();
linkedList.insert(5);
linkedList.insert(10);
linkedList.insert(15);
linkedList.insert(20);

console.log("Initial list:");
linkedList.printList();

linkedList.deleteAt(2);
console.log("List after deletion at position 2:");
linkedList.printList();

console.log(`Is 10 present in the list? ${linkedList.search(10)}`);
console.log(`Is 25 present in the list? ${linkedList.search(25)}`);
