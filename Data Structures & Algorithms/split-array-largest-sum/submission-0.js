class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    splitArray(nums, k) {
        const dp = Array.from({ length: nums.length + 1 }, () => Array(k + 1).fill(-1));
    console.log(dp);
    return this.split(nums, 0, k, dp);
    }
    split(nums, i, k, dp) {
    if (k === 0 && i === nums.length) return 0;       // all groups formed
    if (k === 0 || i === nums.length) return Infinity; // invalid case

    if (dp[i][k] != -1) return dp[i][k];
    let sum = 0, ans = Infinity;
    for (let j = i; j <= nums.length - k; j++) {
        sum += nums[j];
        if (k - 1 >= 0)
            ans = Math.min(ans, Math.max(sum, this.split(nums, j + 1, k - 1, dp)));
    }
    dp[i][k] = ans;
    return ans;
};
}
