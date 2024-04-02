
function reverseArray(array) {
  let leftPointer = 0;
  let rightPointer = array.length - 1;


  while (leftPointer <= rightPointer) {

    let temp = array[leftPointer];
    array[leftPointer] = array[rightPointer];
    array[rightPointer] = temp;


    leftPointer++;
    rightPointer--;
  }

  return array;
}

module.exports = reverseArray;
