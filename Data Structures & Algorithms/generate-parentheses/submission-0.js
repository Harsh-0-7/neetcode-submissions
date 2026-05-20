class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let ans=[];
        this.giveList(n,0,0,ans,"")
        return ans;
    }

    giveList(n,currentOpen,closedPairs,ans,combination){
        if(n==closedPairs){ans.push(combination);
        return;
        }
        if(currentOpen>0)this.giveList(n,currentOpen-1,closedPairs+1,ans,combination+')');
        if(closedPairs+currentOpen<n){this.giveList(n,currentOpen+1,closedPairs,ans,combination+'(');}
    }
}
