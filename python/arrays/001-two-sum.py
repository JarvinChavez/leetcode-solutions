"""
LeetCode 1. Two Sum
https://leetcode.com/problems/two-sum/

Difficulty: Easy
Topic: Arrays & Hashing

Approach:
- Store each value and its index in a hash map as we iterate.
- For each number, check if (target - num) is already in the map.
- Return indices when complement is found.

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
            complement = target - num
            if complement in seen:
                return [seen[complement], i]
            seen[num] = i
        return []


if __name__ == "__main__":
    s = Solution()
    assert s.twoSum([2, 7, 11, 15], 9) == [0, 1]
    assert s.twoSum([3, 2, 4], 6) == [1, 2]
