'use strict';

function insertShiftArray(array, element) {
  let middle = array.length / 2;
  if (middle % 1 !== 0) {
    middle += 0.5;
  }
  let newArray = [];

  for (let i = 0; i< middle; i++) {
    newArray[newArray.length] = array[i];

  }
  newArray[newArray.length] = element;

  for (let i = middle; i < array.length; i++) {
    newArray[newArray.length] = array[i];
  }
  console.log(newArray);
  return newArray;
}

module.exports = insertShiftArray;
