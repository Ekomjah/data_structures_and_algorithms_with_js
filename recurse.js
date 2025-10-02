const arr = [];
const set = new Set([]);

function permutes(n) {
  let numberOfPermutes = 1;
  for (let i = n; i > 0; i--) {
    numberOfPermutes *= i;
  }
  return numberOfPermutes;
}

function permuteArr(str, maxStack = 1000) {
  let copyArr = str.split("");

  if (maxStack <= 0 || set.size >= permutes(copyArr.length)) {
    return set;
  }
  for (i = copyArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copyArr[i], copyArr[j]] = [copyArr[j], copyArr[i]];

    // a new line is waht i am by myself typing and this recursion is what i am adding so if you havae some
    //  pe
  }
  set.add(copyArr.join(""));
  return permuteArr(str, maxStack - 1);
}

console.log(permuteArr("cdd"));

for (const perm of set) {
  arr.push(perm);
}
console.log(arr);
