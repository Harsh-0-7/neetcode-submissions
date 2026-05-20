class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let seen=new Map();
        for(let s of strs){
            const k=this.getKey(s);
            if(seen.has(k)){
                let a=seen.get(k);
                a.push(s);
                seen.set(k,a);
            }else{
                seen.set(k,[s]);
            }
        }
        let ans=[];
        for(let s of seen.values()){
            ans.push(s);
        }
        return ans;

    }
    getKey(s){
        const freq = Array(26).fill(0);
    
        for(let c of s){
           freq[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        
        let key="";
        for(let i=0;i<26;i++){
            if(freq[i]){
                key+=String.fromCharCode('a'.charCodeAt(0) + i)+freq[i];
            }
        }
        return key;
    }
}
