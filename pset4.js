// Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an string or use string methods to solve this problem. The algorithm should return a boolean.
function uniqueStringChar(string) {
  let sSet = new Set(string);
  console.log(sSet);
  console.log(sSet.size);
  return (sSet.size == string.length);
}

console.log(uniqueStringChar("copyright"));