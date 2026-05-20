class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        map<int,vector<int>> s;
        vector<int> ans;
        for(int i=0;i<nums.size();i++){
            if(s.count(nums[i])){
                s[nums[i]].push_back(i);
            }else{
                vector<int> n;
                n.push_back(i);
                s[nums[i]]=n;
            }
        }
        for(int i=0;i<nums.size();i++){
            if(s.count(target-nums[i])){
                if(nums[i]+nums[i]==target ){
                    if(s[nums[i]].size()>1){
                    ans.push_back(i);
                    ans.push_back(s[nums[i]][1]);                return ans;
}
                }else{
                    ans.push_back(i);
                    ans.push_back(s[target-nums[i]][0]);
                return ans;
                }
            }
        }
        return ans;
    }
};
