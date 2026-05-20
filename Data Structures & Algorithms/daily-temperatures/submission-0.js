class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack=[],ans=[];
        for(let i=temperatures.length-1;i>=0;i--){
            while(stack.length && stack.at(-1).t <=temperatures[i])stack.pop();
            ans.push(stack.length?stack.at(-1).i-i:0);
            stack.push({t:temperatures[i],i});
        }
        ans.reverse()
        return ans;
    }
}
