// Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.

function stringCompress(string) {
  let returnString = "";
  index = 0;
  while (index < string.length) {
    let counter = 1;
    if (string.charAt(index) == string.charAt(index + 1)) {
      let index2 = index + 1;
      while (string.charAt(index2) == string.charAt(index) && index2 < string.length) {
        counter++;
        index = index2;
        index2++;
      }
    }
    if (counter == 1) {
      returnString += string.charAt(index);
    } else {
      returnString += (counter + string.charAt(index));
    }
    index++;
  }
  return returnString;
}

function stringCompressTwo(string) {

}

console.log(stringCompress("aaabccdddda"));