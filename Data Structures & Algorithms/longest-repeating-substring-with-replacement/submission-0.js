class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */

    isValid(mp,k,l){
        let max=0,maxkey=null;
        for(const [key, value] of mp){
            if(max<value){
                maxkey=key;
                max=value;
            }
        }
        return l-mp.get(maxkey)<=k;
    }
    characterReplacement(s, k) {

        // Iterate over all substring
        let l=0;
        let mp=new Map();
        let ans=0;
        // while adding r+1
        for(let r=0;r<s.length;r++){
            mp.set(s[r], (mp.get(s[r]) || 0)+1);
            while(!this.isValid(mp,k,r-l+1) && r-l>=0){
                mp.set(s[l],mp.get(s[l])-1);
                l++;
            }
            ans=Math.max(ans,r-l+1);

        }
        // only add if it is valid

        // valid = L- maxF <=k 
        return ans;


    }


}
