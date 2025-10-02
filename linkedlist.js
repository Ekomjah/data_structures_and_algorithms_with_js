class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  static array = [];
  constructor() {}
  append(value, obj = this) {
    if (Object.values(obj).length) {
      if (!obj.next) {
        obj.next = new Node(value);
        return obj.next;
      }
      return this.append(value, obj.next);
    } else {
      this.value = value;
      this.next = null;
      return;
    }
  }

  prepend(value, obj = this) {
    this.value = value;
    this.next = null;
  }

  size(obj = this, index = 0) {
    if (!Object.values(obj).length) return 0;
    if (!obj.next) return index + 1;
    return this.size(obj.next, index + 1);
  }

  head() {
    if (!Object.values(this).length) return "Empty tree";
    return this.value;
  }

  tail(obj = this) {
    if (!Object.values(obj).length) return "Empty tree";
    if (!obj.next) return obj.value;
    return this.tail(obj.next);
  }

  atIndex(count, obj = this, index = 1) {
    if (count === index) {
      return `Value at index '${count}' is '${obj.value}'.`;
    }
    if (!Object.values(obj).length) return "Empty tree.";
    if (!obj.next) {
      return "(404) Not such index.";
    }
    return this.atIndex(count, obj.next, index + 1);
  }

  pop(obj = this, index = 0) {
    try {
      if (!Object.values(obj).length) return;
      if (!obj.next.next) {
        obj.next = null;
        return "Popped one element successfully!";
      }
      return this.pop(obj.next, index + 1);
    } catch (err) {
      Object.keys(obj).forEach((key) => delete this[key]);
      return "Popped all elements";
    }
  }

  contains(value, obj = this, index = 1) {
    if (obj.value === value) {
      return true;
    }
    if (!Object.values(obj).length) return "Empty tree.";
    if (!obj.next) {
      return false;
    }
    return this.contains(value, obj.next, index + 1);
  }

  find(value, obj = this, index = 1) {
    if (obj.value === value) {
      return value;
    }
    if (!Object.values(obj).length) return "Empty tree.";
    if (!obj.next) {
      return null;
    }
    return this.find(value, obj.next, index + 1);
  }

  removeAt(count, obj = this, index = 1) {
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

  toString(obj = this) {
    if (!obj) {
      LinkedList.array.push("(null)");
      return;
    }
    for (const key of Object.values(obj)) {
      LinkedList.array.push(`(${key})`);
      this.toString(obj.next);
      return LinkedList.array.join(" -> ");
    }
  }

  //TODO: Work on the insertAt class method like so: insertAt(index, value=)
}

const list = new LinkedList();
list.append("starfish");
list.append("cat");
list.append("rabbit");
list.append("parrot");

 list.append("hamster");
// list.append("turtle");
// list.append("goldfish");
// list.append("lizard");
// list.append("dog")
// list.append("snake");
// list.append("horse");
// list.append("cow");
// list.append("goat");
// list.append("sheep");
// list.append("duck");
// list.append("goose");
console.log(list.size());
console.log(list.head());
console.log(list.tail());
console.log(list.pop());
console.log(list.contains("cat"));
console.log(list.contains("farm"));
console.log(list.find("rabbit"));
console.log(list.atIndex(5));
console.log(list.removeAt(2));
console.log(list.size());
console.log(list.toString());
console.log(list);
