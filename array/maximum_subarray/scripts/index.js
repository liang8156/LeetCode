/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
    if (nums.length === 0) return 0;
    let result = nums[0];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        result = Math.max(sum, result);
        sum = sum < 0 ? 0 : sum;
    }
    return result;
};

let input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.warn('input', input);
console.warn('output', maxSubArray(input))