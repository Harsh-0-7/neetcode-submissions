class Solution {
public:
    int countWays(vector<int>& cost,vector<int>& dp, int i){
        if(i>=cost.size())return 0;
        if(dp[i]!=-1)return dp[i];
        return dp[i]=cost[i]+min(countWays(cost,dp,i+1),countWays(cost,dp,i+2));
    }
    int minCostClimbingStairs(vector<int>& cost) {
        vector<int> dp(cost.size(),-1);
        return min(countWays(cost,dp,0),countWays(cost,dp,1));
    }
};
