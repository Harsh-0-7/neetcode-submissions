class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let cnt=strs[0].length;
        for(let i=1;i<strs.length;i++){
            for(let j=0;j<cnt;j++){
                if(strs[0][j]!=strs[i][j]){
                    cnt=j;
                    break;
                }
            }
        }
        return strs[0].slice(0,cnt);
    }
}
