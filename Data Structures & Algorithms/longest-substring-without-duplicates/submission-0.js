class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let freq=new Set();
        let n=s.length,l=0,r=-1,maxLength=0;
        while(r+1<n){
            if(freq.has(s[r+1])){
                while(freq.has(s[r+1])){
                    freq.delete(s[l]);
                    l++;
                }
            }

            freq.add(s[r+1]);
            r++;
            maxLength=Math.max(maxLength,r-l+1);
            // add r+1 in hashmap if non-repeating
            // increment l till becomes non-repeating
            // increment r

        }
        return maxLength;

    }
}
