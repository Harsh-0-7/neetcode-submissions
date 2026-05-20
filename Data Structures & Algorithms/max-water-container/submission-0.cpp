class Solution {
public:
    int maxArea(vector<int>& nums) {
        int i1=0,i2=nums.size()-1;
        int t,ans=0;
        while(i1<i2){
            t=min(nums[i1],nums[i2]) * (i2-i1);
            ans=max(ans,t);
            if(nums[i1]<nums[i2])
                i1++;
            else i2--;
        }
        return ans;

    }
};
