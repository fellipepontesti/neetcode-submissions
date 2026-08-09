class Solution {
    twoSum(nums: number[], target: number): number[] {
        const result: number[] = []
        for (let i = 0; i < nums.length; i++) {
            for (let j = 0; j < nums.length; j++) {
                const cond1 = nums[i] + nums[j]
                const cond2 = i !== j
                if (cond1 === target && cond2) {
                    if (!result.includes(i)) {
                        result.push(i)
                    }
                    if (!result.includes(j)) {
                        result.push(j)
                    }
                }
            }
        }

        return result
    }
}
