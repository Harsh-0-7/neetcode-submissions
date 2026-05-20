class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] < 1 || nums[i] > nums.length) { nums[i] = -1; continue; }
            if (nums[i] == i + 1) continue;
            let temp=nums[i];
            nums[i]=nums[temp-1];
            nums[temp-1]=temp;
            if(temp!=nums[i])
            i--;
        }

        let ans = 1;
        for (let n of nums) {
            if (ans === n) {
                ans++;
            }
        }
        return ans;
    }
}
