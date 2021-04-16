// Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.

function duplicatesRemoval(arr) {
  let retArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (retArray.includes(arr[i])) {
      continue;
    } else {
      retArray.push(arr[i]);
    }
  }
  return retArray;
}

console.log(duplicatesRemoval([7, 9, "hi", 12, "hi", 7, 53]));