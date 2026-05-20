class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let p1=0,p2=0,n=nums.length,windowSum=0;
        while(p2<n && windowSum<target){
            windowSum+=nums[p2];
            p2++;
        }
        if(windowSum<target)return 0;
        let ans=p2-p1;
        for(let i=p2;i<n;i++){
            while(p1<i && windowSum-nums[p1]>=target){
                windowSum-=nums[p1];
                p1++;
            }
            ans=Math.min(ans,i-p1);
            windowSum+=nums[i];
        }
        while(p1<n && windowSum-nums[p1]>=target){
                windowSum-=nums[p1];
                p1++;
            }
        ans=Math.min(ans,n-p1);
        return ans;
    }
}
