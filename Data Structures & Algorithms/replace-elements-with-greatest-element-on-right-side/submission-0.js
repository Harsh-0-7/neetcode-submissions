class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let ans=[];
        ans[arr.length-1]=-1;
        for(let i=arr.length-2;i>=0;i--){
            ans[i] = Math.max(arr[i+1], ans[i+1]);
        }
        return ans;
    }
}
