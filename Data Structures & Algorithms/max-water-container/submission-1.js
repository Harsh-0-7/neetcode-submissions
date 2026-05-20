class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i=0,j=heights.length-1,ans=0,temp;
        while(i<j){
            temp=Math.min(heights[j],heights[i])*(j-i);
            ans=Math.max(ans,temp);
            if(heights[j]<heights[i])j--;else i++;
        }
        return ans;
    }
}
