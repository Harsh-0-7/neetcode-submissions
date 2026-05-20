class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let freq=new Map();
        for(let i=0;i<nums.length;i++){
            if(freq.has(nums[i]))
            freq.get(nums[i]).push(i);
            else freq.set(nums[i],[i]);
        }
        for(let v of freq.values()){
            for(let i=1;i<v.length;i++){
                if(Math.abs(v[i]-v[i-1])<=k)return true;
            }
        }
        return false;
    }
}
