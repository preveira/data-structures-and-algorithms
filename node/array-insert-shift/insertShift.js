'use strict';

function insertShiftArray(array, element) {
  const middle = array.length /2;
  let newArray = [];

  for (let i= 0;  i< middle; i++)  {
    newArray.push(array[i]);
  }
  newArray.push(element);

  for (let i= middle; i< array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
