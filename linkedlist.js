class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

export default class LinkedList {
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

  atIndex(count, obj = this.head, index = 0) {
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
    if (!obj) return null;
    if (obj.value === value) {
      return index - 1;
    }
    return this.find(value, obj.next, index + 1);
  }

  replaceWith(value, newValue, obj = this.head, index = 1) {
    if (!obj) return "Empty tree or null value";
    if (obj.value === value) {
      obj.value = newValue;
      return;
    }
    return this.replaceWith(value, newValue, obj.next);
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

  //TODO: Work on the insertAt class method like so: insertAt(index, value=)
}

const list = new LinkedList();
list.append("me")
list.append("you")
console.log(list.find("me"));
