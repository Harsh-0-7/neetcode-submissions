class Solution {
public:
    int countWays(vector<int>& nums, vector<int>& dp, int i){
        if(i>=nums.size())return 0;
        if (dp[i]!=-1) return dp[i];
        return dp[i]=max(nums[i]+countWays(nums,dp,i+2),countWays(nums,dp,i+1));
    }
    int rob(vector<int>& nums) {
        vector<int> dp(nums.size(),-1);
        return countWays(nums,dp,0);
    }
};
