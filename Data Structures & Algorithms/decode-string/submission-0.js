class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        let stack=[];
        for(let c of s){
            if((c>='0' && c<='9') || c!=']')stack.push(c);
            else {
                let decoded='',repeat='';
                while(stack.at(-1)!='[')decoded=stack.pop()+decoded;
                stack.pop();
                while(stack.at(-1)>='0' && stack.at(-1)<='9'){
                    repeat=stack.pop()+repeat;
                }
                repeat=parseInt(repeat);
                stack.push(decoded.repeat(repeat));
            }
        }
        let ans='';
        while(stack.length){
            ans=stack.pop()+ans;
        }
        return ans;
    }
}
