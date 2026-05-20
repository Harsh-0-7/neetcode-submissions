class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        map<int, int> count;
        sort(nums.begin(), nums.end());
        int n = nums.size(), target;
        for (int i = 0; i < n; i++) {
            count[nums[i]]++;
        }
        vector<vector<int>> res;
        for (int i = 0; i < n; i++) {
            count[nums[i]]--;
            if (i > 0 && nums[i] == nums[i - 1])
                continue;
            for (int j = i + 1; j < n; j++) {
                count[nums[j]]--;
                if (j > i+1 && nums[j] == nums[j - 1])
                    continue;
                target = -(nums[i] + nums[j]);
                if (count[target]>0) {
                    res.push_back({nums[i], nums[j], target});
                }
            }
            for (int j = i + 1; j < n; j++)
                count[nums[j]]++;
        }
        return res;
    }
};
