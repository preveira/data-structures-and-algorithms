const assert = require('assert');
const HashTable = require('./HashTable');


describe('HashTable', function() {
  it('should set a key/value pair in the hashtable', function() {
    let table = new HashTable(1024);
    table.set('name', 'Kawika');
    assert.strictEqual(table.get('name'), 'Kawika');
  });

  it('should retrieve the value stored for a given key', function() {
    let table = new HashTable(1024);
    table.set('age', 34);
    assert.strictEqual(table.get('age'), 34);
  });

  it('should return null for a key that does not exist in the hashtable', function() {
    let table = new HashTable(1024);
    assert.strictEqual(table.get('gender'), null);
  });

  it('should return a list of all unique keys in the hashtable', function() {
    let table = new HashTable(1024);
    table.set('name', 'Jacob');
    table.set('age', 34);
    table.set('age', 54);
    assert.deepStrictEqual(table.keys(), ['age', 'name']);
  });

  it('should handle a collision within the hashtable', function() {
    let table = new HashTable(1024);
    table.set('age', 34);
    table.set('age', 54);
    assert.strictEqual(table.get('age'), 54);
  });

  it('should hash a key to an in-range value', function() {
    let table = new HashTable(1024);
    let hashedIndex = table.has('age');
    assert.ok(hashedIndex >= 0 && hashedIndex < 1024);
  });
});
