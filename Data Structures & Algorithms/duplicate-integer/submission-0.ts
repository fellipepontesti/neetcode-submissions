class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const unique = Array.from(new Set(nums))
        return unique.length !== nums.length
    }
}
