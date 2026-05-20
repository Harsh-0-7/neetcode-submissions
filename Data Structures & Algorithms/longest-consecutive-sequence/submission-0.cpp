class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        int n=nums.size();
        unordered_set<int> visited;
        unordered_set<int> s;
        for(int i=0;i<n;i++){
            s.insert(nums[i]);
        }
        int ans=0;
        for(int i=0;i<n;i++){
            if(!visited.count(nums[i]) && !s.count(nums[i]-1)){
                visited.insert(nums[i]);
                int c=1;
                for(int j=nums[i]+1;s.count(j);j++){
                    c++;
                    visited.insert(j);
                }
                ans=max(ans,c);
            }
        }
        return ans;
    }
};
