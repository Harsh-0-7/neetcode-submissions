class Solution {
public:
    int ls(const vector<int> &A, int index, int prevIndex, vector<vector<int>> &dp){
        if(index == A.size()) return 0;

        if(dp[index][prevIndex+1] != -1) return dp[index][prevIndex+1];

        int ans = 0;

        if(prevIndex == -1 || A[prevIndex] < A[index]){
            ans = 1 + ls(A, index+1, index, dp);
        }
        ans = max(ans, ls(A, index+1, prevIndex, dp));

        dp[index][prevIndex+1] = ans;
        return ans;
    }
    int lengthOfLIS(vector<int>& nums) {
            int n = nums.size();
    vector<vector<int>> dp(n, vector<int>(n+1, -1));
    return ls(nums, 0, -1, dp);

    }
};
