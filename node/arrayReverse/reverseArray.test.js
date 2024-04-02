
const reverseArray = require('./reverseArray');

describe('Testing reverseArray function', () => {
  test('It should reverse the array in place', () => {
    const originalArray = [1, 2, 3, 4, 5];
    reverseArray(originalArray);
    expect(originalArray).toEqual([5, 4, 3, 2, 1]);
  });

});
