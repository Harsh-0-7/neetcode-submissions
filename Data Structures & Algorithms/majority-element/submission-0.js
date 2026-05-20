class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let count=0,candidate;
        for(let num of nums){
            if(count==0){
                candidate=num;
            }
            count+=candidate===num ?1:-1;
        }
        return candidate;
    }

}
