// Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an string or use string methods to solve this problem. The algorithm should return a boolean.
function uniqueStringChar(string) {
  let sSet = new Set(string);
  return (sSet.size == string.length);
}

function uniqueStringCharTwo(string) {
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (string.charAt(i) == string.charAt(j)) {
        return false;
      }
    }
  }
  return true;
}

console.log(uniqueStringChar("hello"));
console.log(uniqueStringCharTwo("hello"));