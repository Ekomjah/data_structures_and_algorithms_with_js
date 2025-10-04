import Test from "./linkedlist.js";
const LinkedList = Test;

// ---------------- Test Runner -----------------
function runTest(description, actual, expected) {
  const pass = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(
    pass
      ? `✅ PASS: ${description}`
      : `❌ FAIL: ${description}\n   Expected: ${expected}\n   Got: ${actual}`
  );
}

// Run all tests
(function () {
  const list = new LinkedList();

  // Test 1: Empty List
  runTest("Size (empty)", list.size(), 0);
  runTest("Head (empty)", list.top(), null);
  runTest("Tail (empty)", list.tail(), null);
  runTest("At Index 0 (empty)", list.atIndex(0), null);
  runTest("Contains 'test' (empty)", list.contains("test"), false);
  runTest("Find 'test' (empty)", list.find("test"), null);
  runTest(
    "Remove At 0 (empty)",
    list.removeAt(0),
    "Invalid index or empty list"
  );
  runTest("Pop (empty)", list.pop(), "Empty list");
  runTest("ToString (empty)", list.toString(), "(null)");

  // Test 2: Single-node
  list.append("single");
  runTest("Size (single)", list.size(), 1);
  runTest("Head (single)", list.top(), "single");
  runTest("Tail (single)", list.tail(), "single");
  runTest("Contains 'single'", list.contains("single"), true);
  runTest("Contains 'missing'", list.contains("missing"), false);
  runTest("Find 'single'", list.find("single"), 0);
  runTest("At Index 0 (single)", list.atIndex(0), "single");
  runTest(
    "Remove At 0 (single)",
    list.removeAt(0),
    "Removed element at index 0"
  );
  runTest("Size after remove", list.size(), 0);
  list.append("single2");
  runTest("Pop (single)", list.pop(), "Popped last element");
  runTest("Size after pop (single)", list.size(), 0);

  // Test 3: Multi-node
  list.append("a");
  list.append("b");
  list.append("c");
  runTest("At Index -1", list.atIndex(-1), null);
  runTest("At Index 3", list.atIndex(3), null);
  runTest("Remove At -1", list.removeAt(-1), "Invalid index or empty list");
  runTest("Remove At 3", list.removeAt(3), "Index out of bounds");
  runTest("Size after removes", list.size(), 3);
  runTest(
    "ToString after invalid removes",
    list.toString(),
    "(a) -> (b) -> (c) -> (null)"
  );

  // Test 4: RemoveAt valid
  runTest("Before remove", list.toString(), "(a) -> (b) -> (c) -> (null)");
  list.removeAt(1);
  runTest("After removeAt(1)", list.toString(), "(a) -> (c) -> (null)");
  list.removeAt(0);
  runTest("After removeAt(0)", list.toString(), "(c) -> (null)");

  // Test 5: Contains + Find on last node
  list.clear();
  list.append("first");
  list.append("last");
  runTest("Contains 'last'", list.contains("last"), true);
  runTest("Find 'last'", list.find("last"), 1);
  runTest(
    "ToString last node test",
    list.toString(),
    "(first) -> (last) -> (null)"
  );

  // Test 6: Clear
  list.clear();
  runTest("Size after clear", list.size(), 0);
  runTest("ToString after clear", list.toString(), "(null)");
})();
