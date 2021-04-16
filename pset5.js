// Write an algorithm that sorts an array without using the sort() method. 
function bubbleSortArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

function selectionSortArray(array) {
  let min = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[min] > array[i]) {
      temp = array[min];
      array[min] = array[i];
      array[i] = temp;
    }
    min++;
  }
  return array;
}



console.log(bubbleSortArray([9, 2, 7, 12]));
console.log(selectionSortArray([9, 2, 7, 12]));