class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let cand1=null,cand2=null,cnt1=0,cnt2=0;
        for(let n of nums){
            if(cand1===n)cnt1++;
            else if(cand2===n)cnt2++;
            else if(cnt1===0){
                cnt1=1;
                cand1=n;
            }else if(cnt2===0){
                cnt2=1;
                cand2=n;
            }else {
                cnt1--;
                cnt2--;
            }
        }
        cnt1 = 0;
        cnt2 = 0;
        for (let num of nums) {
            if (num === cand1) cnt1++;
            else if (num === cand2) cnt2++;
        }

        const threshold=Math.trunc(nums.length/3),ans=[];
        if(cnt1>threshold)ans.push(cand1);
        if(cnt2>threshold)ans.push(cand2);
        
        return ans;
    }
}
