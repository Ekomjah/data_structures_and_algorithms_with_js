import LinkedList from "./linkedlist.js";
const list = new LinkedList();

describe("test1", () => {
  beforeEach(() => {
    list.clear();
  });
  it("should have a size of 0", () => {
    expect(list.size()).toBe(0);
  });
  it("should have an empty head when initialized", () => {
    expect(list.top()).toBeNull();
  });
  it("should have a null tail when initialized", () => {
    expect(list.tail()).toBeNull();
  });
  it("should have an index of 0", () => {
    expect(list.atIndex(0)).toBeNull();
  });
  it("'contains' should return false if the element isn't present in the linked tree", () => {
    expect(list.contains("test")).toBeFalsy();
  });
  it("should return null if an element isnt found", () => {
    expect(list.find(test)).toBeNull();
  });

  it("should return 'invalid index' an element to be removed doesnt exist", () => {
    expect(list.removeAt(0)).toMatch("Invalid index or empty list");
  });

  it("should not pop an empty list", () => {
    expect(list.pop()).toMatch("Empty list");
  });

  it('should return null when the "toString()" method is called on an empty list', () => {
    expect(list.toString()).toMatch("(null)");
  });
});

describe("test2", () => {
  beforeAll(() => {
    list.append("single");
  });
  it("Test 2.1 - Size (single):", () => {
    list.size();
    expect(list.size()).toBe(1);
  });

  it("Test 2.2 - Head (single):", () => {
    expect(list.top()).toMatch("single");
  });

  it("Test 2.3 - Tail (single):", () => {
    expect(list.tail()).toMatch("single");
  });

  it("Test 2.4 - Contains 'single' (single):", () => {
    expect(list.contains("single")).toBeTruthy();
  });

  it("Test 2.5 - Contains 'missing' (single):", () => {
    expect(list.contains("missing")).toBeFalsy();
  });

  it("Test 2.6 - Find 'single' (single):", () => {
    expect(list.find("single")).toBe(0);
  });

  it("Test 2.7 - At Index 0 (single):", () => {
    expect(list.atIndex(0)).toMatch("single");
  });

  it("Test 2.8 - Remove) At 0 (single):", () => {
    expect(list.removeAt(0)).toMatch("Removed element at index 0");
  });

  it("Test 2.9 - Size after remove (single):", () => {
    expect(list.size()).toBe(0);
  });
  describe("further tests", () => {
    beforeAll(() => {
      list.append("single2");
    });
    it("Test 2.10 - Pop (single):", () => {
      expect(list.pop()).toMatch("Popped last element");
    });
    it("Test 2.11 - Size after pop (single):", () => {
      expect(list.size()).toBe(0);
    });
  });
});

describe("#test3", () => {
  beforeAll(() => {
    list.append("a");
    list.append("b");
    list.append("c");
  });

  it("Test 3.1 - At Index -1:", () => {
    expect(list.atIndex(-1)).toBeNull();
  });

  it("Test 3.2 - At Index 3:", () => {
    expect(list.atIndex(3)).toBeNull();
  });

  it("Test 3.3 - Remove At -1:", () => {
    expect(list.removeAt(-1)).toMatch("Invalid index or empty list");
  });

  it("Test 3.4 - Remove At 3:", () => {
    expect(list.removeAt(3)).toMatch("Index out of bounds");
  });

  it("Test 3.5 - Size after removes:", () => {
    expect(list.size()).toBe(3);
  });

  it("Test 3.6 - ToString after invalid removes:", () => {
    expect(list.toString()).toMatch("(a) -> (b) -> (c) -> (null)");
  });

  describe("further tests", () => {
    beforeAll(() => {
      list.removeAt(1);
    });
    it("Test 3.7", () => {
      expect(list.toString()).toMatch("(a) -> (c) -> (null)");
    });

    it("Test 3.8", () => {
      expect(list.toString()).toMatch("(c) -> (null)");
    });
  });
});

describe("#test5", () => {
  beforeAll(() => {
    list.clear();
    list.append("first");
    list.append("last");
  });
  it("Test 5.1", () => {
    expect(list.contains("last")).toBeTruthy();
  });

  it("Test 5.2", () => {
    expect(list.find("last")).toBe(1);
  });

  it("Test 5.3", () => {
    expect(list.toString()).toMatch("(first) -> (last) -> (null)");
  });
  describe("further tests #3", () => {
    beforeAll(() => {
      list.clear();
    });
    it("Test 5.4", () => {
      expect(list.size()).toBe(0);
    });
    it("test 5.5", () => {
      expect(list.toString()).toMatch("(null)");
    });
  });
});
