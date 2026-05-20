class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let n=prices.length,ans=0;
        let maxValue=[];
        maxValue[n-1]=prices[n-1];
        for(let i=n-2;i>=0;i--){
            maxValue[i]=Math.max(prices[i],maxValue[i+1])
        }
        for(let i=0;i<n-1;i++){
            if(maxValue[i+1]-prices[i] > ans){
                ans=maxValue[i+1]-prices[i];
            }
        }
        return ans;
    }
}
