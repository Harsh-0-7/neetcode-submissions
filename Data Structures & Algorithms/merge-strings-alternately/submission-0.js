class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let mergedStr="",p1=0,p2=0,l1=word1.length,l2=word2.length,isFirstStrAdded=false;
        while(p1<l1 && p2<l2){
            if(isFirstStrAdded){
                mergedStr+=word2[p2];
                p2++;
            }else{
                mergedStr+=word1[p1];
                p1++;
            }
            isFirstStrAdded=!isFirstStrAdded;
        }

        if(p1<l1)mergedStr+=word1.slice(p1);
        if(p2<l2)mergedStr+=word2.slice(p2);
        return mergedStr;
    }
}
