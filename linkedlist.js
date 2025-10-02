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

  head() {
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
    if (!Object.values(obj).length || !obj.next) return false;
    if (obj.value === value) {
      return true;
    }
    return this.contains(value, obj.next, index + 1);
  }

  find(value, obj = this.head, index = 1) {
    if (obj.value === value) {
      return value;
    }
    if (!Object.values(obj).length) return "Empty tree.";
    if (!obj.next) {
      return null;
    }
    return this.find(value, obj.next, index + 1);
  }

  removeAt(count, obj = this.head, index = 1) {
    if (count === index) {
      obj.value = obj.next.value;
      obj.next = obj.next.next;
      return;
    }
    if (!Object.values(obj).length) return "Empty tree.";
    if (!obj.next) {
      return "(404) Not such value.";
    }
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

const list = new LinkedList();
list.append("starfish");
list.append("cat");
list.append("rabbit");
list.append("parrot");

list.append("hamster");
list.append("turtle");
list.append("goldfish");
list.append("lizard");
list.append("dog");
list.append("snake");
list.append("horse");
list.append("cow");
list.append("goat");
list.append("sheep");
list.append("duck");
list.append("goose");

// console.log(list.size());
// console.log(list.head());
// console.log(list.tail());
// console.log(list.pop());
// console.log(list.contains("cat"));
// console.log(list.contains("farm"));
// console.log(list.find("rabbit"));
//
// console.log(list.removeAt(2));
// ;
//
console.log(list.size());
list.pop();
list.pop();
console.log(list.removeAt(3))
console.log(list.find("goldfish"))
console.log(list.atIndex(2));
console.log(list);
console.log(list.toString());
console.log(list.size());
