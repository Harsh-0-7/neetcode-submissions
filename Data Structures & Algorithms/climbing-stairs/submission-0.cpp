class Solution {
public:
    int countWays(int* dp, int n){
        if (n<0) return 0;
        if(dp[n]!=-1)return dp[n];
        dp[n]=countWays(dp,n-1)+countWays(dp,n-2);
        return dp[n];
    }
    int climbStairs(int n) {
        int* dp = new int[n+1];
        for (int i = 0; i <= n; ++i)
            dp[i] = -1;
        dp[0]=1;
        return countWays(dp,n);
    }
};
