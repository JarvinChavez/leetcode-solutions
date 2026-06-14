"""
LeetCode 1. Two Sum
https://leetcode.com/problems/two-sum/

Difficulty: Easy
Topic: Arrays & Hashing

Approach:
- Store each value and its index in a hash map as we iterate.
- For each number, check if (target - num) is already in the map.
- Return indices when complement is found.

Step-by-step notes:
1. Initialize an empty hash map: value -> index.
2. Scan left to right through nums.
3. For each num, compute complement = target - num.
4. If complement is in the map, return [stored_index, current_index].
5. Otherwise store the current num/index and continue.

Complexity:
- Time: O(n)
- Space: O(n)

Edge cases:
- Exactly one valid pair exists (per problem constraints)
"""

from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        seen = {}
        for i, num in enumerate(nums):
            # Step 1-3: compute needed complement for current number.
            complement = target - num
            # Step 4: if seen earlier, we found the answer pair.
            if complement in seen:
                return [seen[complement], i]
            # Step 5: otherwise store and keep scanning.
            seen[num] = i
        return []


if __name__ == "__main__":
    s = Solution()
    assert s.twoSum([2, 7, 11, 15], 9) == [0, 1]
    assert s.twoSum([3, 2, 4], 6) == [1, 2]
