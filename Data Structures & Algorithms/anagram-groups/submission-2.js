class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let seen=new Map();
        for(let s of strs){
            const k=this.getKey(s);
            if(!seen[k])
                seen[k]=[];
            seen[k].push(s);            
        }
        return Object.values(seen);

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
