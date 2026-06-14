# 2130 — Maximum Twin Sum of a Linked List

**Difficulty:** Medium · **Topic:** Linked List  
**LeetCode:** https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/

---

## My approach

In an even-length list, each index `i` in the first half has a **twin** at mirror index `n - 1 - i`. The twin sum for that pair is the sum of both node values.

My solution:

1. Read the list into an ordered sequence of values.
2. Iterate only the **first half** of indices (`0` through `n/2 - 1`).
3. For each `i`, compute `values[i] + values[n - 1 - i]`.
4. Track every twin sum, then return the **maximum**.

For a list of length 2, there is a single twin pair — the first and last value — so the answer is their sum directly.

---

## Why this works

Twin pairing is symmetric: node 0 pairs with node `n-1`, node 1 with `n-2`, and so on. Scanning the first half covers every unique pair exactly once without duplication.

Example `[4, 2, 2, 3]`:

| i | Twin index | Twin sum |
|---|------------|----------|
| 0 | 3 | 4 + 3 = **7** |
| 1 | 2 | 2 + 2 = 4 |

Maximum twin sum → **7**

---

## Complexity

| | |
|---|---|
| Time | O(n) — one pass to read values, one pass over half the list |
| Space | O(n) — value sequence |

---

## Files

| File | Purpose |
|------|---------|
| [solution.js](solution.js) | LeetCode submission + local test harness |

---

## Run locally

```bash
node javascript/linked-list/2130-maximum-twin-sum/solution.js
```

The script accepts either a `ListNode` chain (LeetCode format) or a plain number array for quick local checks.
