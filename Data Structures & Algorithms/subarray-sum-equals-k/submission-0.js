class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let freq = new Map(), prefixSum = 0, ans = 0, target;

        for (let i = nums.length - 1; i > -1; i--) {
            prefixSum += nums[i];
            target = prefixSum - k;
            if (freq.has(target))
                ans += freq.get(target).length;
            if (target == 0) ans++;

            if (freq.has(prefixSum)) {
                freq.get(prefixSum).push(i);
            } else {
                freq.set(prefixSum, [i]);
            }
        }
        return ans;

    }
}
