class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let ans="",cnt=strs[0].length;
        for(let i=1;i<strs.length;i++){
            for(let j=0;j<cnt;j++){
                if(strs[0][j]!=strs[i][j]){
                    cnt=j;
                }
            }
        }
        if(cnt==0)return ans;
        ans=strs[0].slice(0,cnt);
        return ans;
    }
}
