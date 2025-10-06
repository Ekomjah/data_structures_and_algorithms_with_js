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

  getScore(index) {
    if (index >= 0 && index < this.array.length) {
      return this.array[index];
    } else {
      return "Index out of bounds";
    }
  }

  rehash() {
    let newArr = new Array(HashMap.capacity).fill(null);
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i]) {
        let curr = this.array[i].head;
        while (curr) {
          let index = this.hash(curr.key);
          if (!newArr[index]) {
            newArr[index] = new LinkedList();
            newArr[index].append(curr.key, curr.value);
          } else {
            newArr[index].append(curr.key, curr.value);
          }

          curr = curr.next;
        }
      }
    }
    this.array = newArr;
    return newArr;
  }

  set(key, value) {
    let index = this.hash(key);
    if (this.length() >= HashMap.multiple) {
      HashMap.capacity *= 2;
      this.array.length = HashMap.capacity;
      this.rehash();
    }
    if (!this.array[index]) {
      this.array[index] = new LinkedList();
      this.array[index].append(key, value);
      return;
    }
    if (this.array[index].contains(key)) {
      let i = this.array[index].find(key);
      if (this.array[index].atIndex(i) === value) return;
      this.array[index].replaceWith(i, value);
      return;
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
    return listToGet.value;
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
        lengthOfList += this.array[i].size();
        i += 1;
      } else {
        i += 1;
      }
    }
    return lengthOfList;
  }

  clear() {
    HashMap.capacity = 16;
    this.array = new Array(HashMap.capacity).fill(null);
    return this.array;
  }

  keys() {
    let keys = [];
    let index = 0;
    let obj = this.array;
    while (index < obj.length) {
      if (obj[index] !== null) {
        let indexedArray = obj[index].arrayOfKeys();
        keys.push(...indexedArray);
        index++;
      } else {
        index++;
      }
    }
    return keys;
  }

  values() {
    let values = [];
    let index = 0;
    let obj = this.array;
    while (index < obj.length) {
      if (obj[index] !== null) {
        let indexedArray = obj[index].arrayOfValues();
        values.push(...indexedArray);
        index++;
      } else {
        index++;
      }
    }
    return values;
  }

  entries() {
    let entries = [];
    let index = 0;
    let obj = this.array;
    while (index < obj.length) {
      if (obj[index] !== null) {
        let indexedArray = obj[index].arrayOfEntries();
        entries.push(...indexedArray);
        index++;
      } else {
        index++;
      }
    }
    return entries;
  }
}

const test = new HashMap();
test.set("one", 1);
test.set("two", 2);
test.set("three", 3); 
console.log(test.getScore(9))