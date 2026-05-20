class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        let l=0,r=people.length-1,ans=0,sorted=people.sort((a, b) => a - b);
        while(l<r){
            if(sorted[l]+sorted[r]<=limit){
                l++;
            }
            r--;
            ans++;
        }
        if(l==r)ans++;
        return ans;
    }

}
