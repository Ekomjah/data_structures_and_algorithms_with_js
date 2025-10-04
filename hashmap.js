import LinkedList from "./linkedListForHash.js";

// if (index < 0 || index >= buckets.length) {
//   throw new Error("Trying to access index out of bounds");
// }

class HashMap {
  static loadFactor = 0.75;
  static _caps = 16;
  static get capacity() {
    return HashMap._caps;
  }
  static set capacity(newVal) {
    HashMap._caps = newVal;
  }
  static get multiple() {
    return HashMap.loadFactor * HashMap.capacity;
  }
  constructor() {
    this.array = new Array(HashMap.capacity).fill(null);
  }
  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode =
        (primeNumber * hashCode + key.charCodeAt(i)) % HashMap.capacity;
    }

    return hashCode;
  }
  set(key, value) {
    if (this.length() > HashMap.multiple) {
      HashMap.capacity *= 2;
      console.log(HashMap.capacity);
      [...this.array].forEach((item, i) => {
        if (item === undefined) this.array[i] = null;
      });
    }
    let index = this.hash(key);
    if (!this.array[index]) {
      this.array[index] = new LinkedList();
      this.array[index].append(key, value);
      return;
    }
    if (this.array[index].contains(key)) {
      let i = this.array[index].find(key);
      this.array[index].replaceWith(i, value);
    }
    this.array[index].append(key, value);
    return;
  }

  get(key) {
    let findInt = this.hash(key);
    if (findInt >= this.array.length) return null;
    let obj = this.array[findInt];
    if (!obj) return null;
    let listToGet = obj.head;
    if (!listToGet) return null;
    while (listToGet.key !== key) {
      listToGet = listToGet.next;
    }
    return listToGet.key;
  }

  has(key) {
    let mappedArr = this.array.map((el, i) => {
      if (this.array[i] !== null && this.array[i].contains(key)) {
        return true;
      }
      return false;
    });
    return mappedArr.every((item) => item === false)
      ? false
      : mappedArr.filter((item) => item !== false).join("");
  }
  remove(key) {
    return this.array.map((el, i) => {
      if (this.array[i] !== null && this.array[i].contains(key)) {
        let findInt = this.array[i].find(key);
        this.array[i].removeAt(findInt);
        return;
      }
      return null;
    });
  }
  length() {
    let i = 0;
    let lengthOfList = 0;
    while (i < this.array.length) {
      if (this.array[i] !== null && this.array[i] !== undefined) {
        lengthOfList += 1;
        i += 1;
      } else {
        i += 1;
      }
    }
    return lengthOfList;
  }
}

//
const test = new HashMap();
// //
// //
// console.log(test.hash("Rama"));
// //
//
test.set("Rama", "yellow")
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white")
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden")
test.set("Sita", "orange");
test.set("apple", "red");
test.set("banana", "yellow");
test.set("sad", "ma")
console.log(test.array.filter(item => item!==null).length);
