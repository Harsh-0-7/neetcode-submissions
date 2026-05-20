class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {nums.sort((a, b) => a - b);
    // console.log(nums);
    let n = nums.length;
    let ans = [], temp;
    for (let i = 0; i < n - 3; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        for (let j = i + 1; j < n - 2; j++) {
            if (j != i + 1 && nums[j] == nums[j - 1]) continue;

            let l = j + 1, r = n - 1, req = target - (nums[i] + nums[j]);
            while (l < r) {
                if (nums[l] + nums[r] == req) {
                    console.log(i, j, l, r, nums[i], nums[j], nums[l], nums[r]);
                    ans.push([nums[i], nums[j], nums[l], nums[r]]);
                    while ((l + 1 < n && nums[l] == nums[l + 1])) { l++; }
                    while ((r > 0 && nums[r] == nums[r - 1])) { r--; }
                    l++;
                    r--;
                    // while ((l + 1 < n && nums[l] == nums[l + 1])) { l++; }
                    // while ((r > 0 && nums[r] == nums[r - 1])) { r--; }
                }
                else if (nums[l] + nums[r] > req) {
                    r--;

                    while ((nums[r] == nums[r + 1] && r > 0)) { r--; }
                } else {
                    l++;

                    while ((nums[l] == nums[l - 1] && l < n)) { l++; }
                }
            }
        }
    }
    console.log(ans);
    return ans;}
}