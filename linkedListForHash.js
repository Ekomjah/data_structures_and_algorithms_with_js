class Node {
  constructor(key, value, next = null) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

export default class LinkedList {
  constructor() {
    this.head = null;
  }
  append(key, value) {
    let newNode = new Node(key, value);
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

  prepend(key, value) {
    this.head = new Node(key, value, this.head);
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

  removeAt(index) {
    if (index < 0 || !this.head) return "Invalid index or empty list";
    if (index === 0) {
      this.head = this.head.next;
      return `Removed element at index ${index}`;
    }
    let cur = this.head;
    let i = 0;
    while (cur && cur.next) {
      if (i + 1 === index) {
        cur.next = cur.next.next;
        return `Removed element at index ${index}`;
      }
      cur = cur.next;
      i++;
    }
    return "Index out of bounds";
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

  atIndex(count, obj = this.head, index = 0) {
    if (count < 0 || !obj) return null;
    if (count === 0) return this.head.value;
    if (count === index) return obj.value;
    return this.atIndex(count, obj.next, index + 1);
  }

  replaceWith(index, newValue, obj = this.head, count = 0) {
    if (index < 0 || !obj) return null;
    if (index === 0) {
      this.head.value = newValue;
      return;
    }
    if (index === count) {
      obj.value = newValue;
      return;
    }
    return this.replaceWith(index, newValue, obj.next, count + 1);
  }

  contains(value, obj = this.head, index = 1) {
    if (!obj || !Object.values(obj).length) return false;
    if (obj.key === value) {
      return true;
    }
    return this.contains(value, obj.next, index + 1);
  }

  find(value, obj = this.head, index = 1) {
    if (!obj) return null;
    if (obj.key === value) {
      return index - 1;
    }
    return this.find(value, obj.next, index + 1);
  }
}
