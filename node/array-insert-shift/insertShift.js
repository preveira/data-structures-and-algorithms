'use strict';

function insertShiftArray(array, element) {
  const middle = array.length /2;
  let newArray = [];

  for (let i= 0;  i< middle; i++)  {
    newArray[newArray.length] = array[i];
  }
  newArray[newArray.length] = element;

  for (let i= middle; i< array.length; i++) {
    newArray[newArray.length] = array[i];
  }
  return newArray;
}
