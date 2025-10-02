class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
      return;
    }
  }

  prepend(value) {
    this.head = new Node(value, this.head);
  }

  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      current = current.next;
      count++;
    }
    return count;
  }

  top() {
    return this.head ? this.head.value : null;
  }

  tail() {
    let current = this.head;
    if (!current) return null;
    while (current.next) {
      current = current.next;
    }
    return current.value;
  }

  atIndex(count, obj = this.head, index = 1) {
    if (count < 0 || !obj) return null;
    if (count === 0)
      return `Value at index '${count}' is '${this.head.value}'.`;
    if (count === index) return `Value at index '${count}' is '${obj.value}'.`;
    return this.atIndex(count, obj.next, index + 1);
  }

  pop(obj = this.head) {
    if (!obj) return "Empty list";
    if (!obj.next) {
      this.head = null;
      return "Popped last element";
    }
    while (obj.next.next) {
      obj = obj.next;
    }
    obj.next = null;
    return "Popped one element";
  }

  contains(value, obj = this.head, index = 1) {
    if (!obj || !Object.values(obj).length) return false;
    if (obj.value === value) {
      return true;
    }
    return this.contains(value, obj.next, index + 1);
  }

  find(value, obj = this.head, index = 1) {
    if (!obj) return "Empty tree.";
    if (obj.value === value) {
      return `Found ${value} at index ${index - 1}`;
    }
    return this.find(value, obj.next, index + 1);
  }

  removeAt(count, obj = this.head, index = 0) {
    if (!obj || count < 0) {
      return "Invalid index or empty list";
    }
    if (count === 0 && Object.values(obj).length === 1) {
      this.head = null;
      return "Removed element at index " + count;
    }
    if (count === index) {
      obj.value = obj.next.value;
      obj.next = obj.next.next;
      return;
    }
    if (!Object.values(obj).length || Object.values(obj).length < count)
      return "Empty tree.";
    return this.removeAt(count, obj.next, index + 1);
  }

  toString(obj = this.head) {
    let array = [];
    while (obj) {
      array.push(`(${obj.value})`);
      obj = obj.next;
    }
    array.push("(null)");
    return array.join(" -> ");
  }

  clear() {
    this.head = null;
  }

  //TODO: Work on the insertAt class method like so: insertAt(index, value=)
}
