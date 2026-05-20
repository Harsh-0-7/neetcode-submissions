class Solution {
public:
    int rob(vector<int>& nums) {
        int n=nums.size();
        if (n==1)return nums[0];
        vector<int> dp(n+2,0);
        vector<int> dp2(n+2,0);
        
        for(int i=n-1;i>0;i--){
            dp[i]=max(nums[i]+dp[i+2],dp[i+1]);
        }
        for(int i=n-2;i>=0;i--){
            dp2[i]=max(nums[i]+dp2[i+2],dp2[i+1]);
        }
        if (n>1){
        return max(max(dp[0],dp[1]),dp2[0]);

        }
        return max(dp[0],dp2[0]);
    }
};
