/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        intervals.sort((a,b)=>{
            if(a.start==b.start){
                return a.end-b.end;
            }
            return a.start-b.start;
        });
        if(intervals.length==0)return 0;
        let stack=[intervals[0]];
        for(let i=1;i<intervals.length;i++){
            let allocated=false;
            for(let j=0;j<stack.length;j++){
                if(intervals[i].start>=stack[j].end){
                    allocated=true;
                    stack[j]=intervals[i];
                    break;
                }
            }
            if(!allocated)stack.push(intervals[i]);
        }
        return stack.length;
    }
}
