
class StockSpanner {
constructor() {
this.stack=[];
this.day=0;
}
/**
* @param {number} price
* @return {number}
*/
next(price) {
// Nearest Bigger to Left
this.day++;
while(this.stack.length&&this.stack.at(-1).price<=price)
this.stack.pop();
let ans=this.day-(this.stack.length? this.stack.at(-1).day:0);
this.stack.push({ price,day: this.day });

return ans;
}
}


/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */