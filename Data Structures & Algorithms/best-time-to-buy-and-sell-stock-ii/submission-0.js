class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let ans = 0, n = prices.length, temp;
        if (n == 1) return ans;
        temp = prices[0];
        for (let i = 1; i < n; i++) {
            if (prices[i] > temp) {
                ans += prices[i] - temp;
                temp = prices[i];
            } else if (prices[i] < temp) {
                temp = prices[i];
            }
        }
        return ans;
    }
}
