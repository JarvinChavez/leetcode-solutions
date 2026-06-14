/**
 * LeetCode 2130. Maximum Twin Sum of a Linked List
 * https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/
 *
 * Difficulty: Medium
 * Topic: Linked List
 *
 * Approach:
 * - Treat node values as an ordered sequence (index 0 pairs with n-1, 1 with n-2, etc.).
 * - Walk the first half and compute each twin sum.
 * - Return the maximum twin sum across all pairs.
 *
 * Step-by-step notes:
 * 1. Normalize input into a value sequence (ListNode on LeetCode, number[] for local runs).
 * 2. Confirm even length — twins exist for indices 0 .. n/2 - 1.
 * 3. For short lists (length <= 2), the only twin pair is the first and last value.
 * 4. For longer lists, loop i from 0 to n/2 - 1 and add values[i] + values[n - 1 - i].
 * 5. Return the maximum value from all twin sums.
 *
 * Complexity:
 * - Time: O(n)
 * - Space: O(n) for the value sequence
 *
 * Edge cases:
 * - Minimum even length (2 nodes): single twin pair
 * - All twin sums equal (e.g. [5,4,2,1] → every pair sums to 6)
 */

/**
 * @param {ListNode|number[]} head
 * @return {number}
 */
var pairSum = function (head) {
  // Step 1: build a value sequence from either a linked list or a local test array.
  if (!Array.isArray(head)) {
    const values = [];
    let curr = head;
    while (curr) {
      values.push(curr.val);
      curr = curr.next;
    }
    head = values;
  }

  const list_len = head.length;
  const valid = [];

  if (head && list_len % 2 === 0) {
    // Step 3: two-node list has one twin pair.
    if (list_len <= 2) {
      return head[0] + head[1];
    }

    // Step 4: pair index i with its mirror index (n - 1 - i).
    for (let i = 0; i < list_len / 2; i++) {
      valid.push(head[i] + head[list_len - 1 - i]);
    }

    // Step 5: maximum twin sum across all pairs.
    return Math.max.apply(null, valid);
  }

  return 0;
};

// --- Local testing only (not submitted to LeetCode) ---

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function arrayToList(arr) {
  const dummy = new ListNode(0);
  let curr = dummy;
  for (const val of arr) {
    curr.next = new ListNode(val);
    curr = curr.next;
  }
  return dummy.next;
}

if (typeof require !== "undefined" && require.main === module) {
  console.log(pairSum(arrayToList([5, 4, 2, 1]))); // 6
  console.log(pairSum(arrayToList([4, 2, 2, 3]))); // 7
  console.log(pairSum(arrayToList([1, 100000]))); // 100001
  console.log(pairSum([5, 4, 2, 1])); // 6 — array input for quick local checks
}
