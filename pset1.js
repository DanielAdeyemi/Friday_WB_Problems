// URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

// You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

function urlChanger(str) {
  let returnString = '';
  for (let i = 0; i < str.length; i++) {
    returnString += (str.charAt(i) === ' ') ? '%20' : str.charAt(i);
  }
  return returnString;
}

console.log(urlChanger("Jasmine Ann Jones"));