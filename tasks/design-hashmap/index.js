// https://leetcode.com/problems/design-hashmap/
var MyHashMap = function () {
  this.indexes = {};
  this.array = [];
};

MyHashMap.prototype.put = function (key, value) {
  const keyInIndexes = this.indexes[key];
  const isFound = keyInIndexes !== undefined;

  if (isFound) {
    this.array[keyInIndexes][1] = value;
  } else {
    const item = [key, value];

    this.array.push(item);
    this.indexes[key] = this.array.length - 1;
  }
};

MyHashMap.prototype.get = function (key) {
  const keyInIndexes = this.indexes[key];
  const isFound = keyInIndexes !== undefined;

  if (!isFound) return -1;

  return this.array[keyInIndexes][1];
};

MyHashMap.prototype.remove = function (key) {
  const keyInIndexes = this.indexes[key];

  this.array[keyInIndexes] = undefined;
  this.indexes[key] = undefined;
};

MyHashMap.prototype.getAll = function () {
  console.log(this.array);
  console.log(this.indexes);
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

const start = performance.now();
const map = new MyHashMap();
// map.put('name', 'vlad');
// map.put('age', 12);
// map.put('surname', 'manakov');
//
// console.log(map.get('age'), 'age'); // 12
// console.log(map.get('test'), 'test'); // -1
//
// map.put('surname', 'petrov');
// console.log(map.get('surname'), 'surname'); // petrov
//
// map.remove('name');
// console.log(map.get('name'), 'name'); // -1
// map.put('city', 'sevsk');
// console.log(map.get('city'), 'city'); // sevsk
//
// map.put('name', 'Anna');
// console.log(map.get('name'), 'Anna'); // anna

console.log(map.put(1, 1));
console.log(map.put(2, 2));
console.log(map.get(1));
console.log(map.get(3));
console.log(map.put(2, 1));
console.log(map.get(2));
console.log(map.remove(2));
console.log(map.get(2));

// map.getAll();

const end = performance.now();

// 3.00 / 3.15 / 3.33 / 3.06 / 3.12
console.log(`Время выполнения: ${end - start} миллисекунд`);

module.exports = MyHashMap;
