"use strict";

const insertShiftArray = require('../insertShift.js');

describe('Testing insertShiftArray', () => {
  test('It should insert the given element into the middle of the array.', () => {
    expect(insertShiftArray([42,8,15,23,42], 16)).toEqual([42,8,15,16,23,42]);
  });
});
