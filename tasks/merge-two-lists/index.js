const task = (a, b) => {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] < b[i]) {
      result.push(a[i]);
      i++;
    } else {
      result.push(b[j]);
      j++;
    }
  }

  while (i < a.length) {
    result.push(a[i]);
    i++;
  }

  while (j < b.length) {
    result.push(b[j]);
    j++;
  }

  return result;
};

module.exports = task;

// console.log(task([1, 2, 4], [1, 3, 4])); /// [1,1,2,3,4,4]
// console.log(task([5, 8, 9], [2, 4, 5])); /// [2,4,5,5,8,9]
// console.log(task([], [0])); /// [0]
// console.log(task([], [])); /// []

/**
 * 5 > 2 -> true [2] or 5 memory
 * 8 > 4 -> false [2,4] 8 xz and 4 > 5, [2,4,5] 8 memory
 * 9 > 5 -> false [2,4,5] 5 > 8 [2,4,5,5,8] + 9
 *
 *
 *
 * 2 > 5 -> false []
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeTwoLists = function (list1, list2) {
  const dummy = new ListNode();
  // последний связанный элемент
  let prev = dummy;

  let current1 = list1;
  let current2 = list2;

  while (current1 && current2) {
    // Step 4: Compare values and link nodes
    if (current1.val <= current2.val) {
      prev.next = current1;
      prev = current1;
      current1 = current1.next;
    } else {
      prev.next = current2;
      prev = current2;
      current2 = current2.next;
    }
  }

  // Step 5: Complete the merging process
  if (current1) prev.next = current1;
  if (current2) prev.next = current2;

  // Step 6: Finalize the merged list

  // Step 7: Return the merged list
  return dummy.next;
};

const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

console.log(mergeTwoLists(list1, list2)); /// [1,1,2,3,4,4]
