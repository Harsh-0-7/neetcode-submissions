class Solution {
        getHash(s){
        let count=new Map();
        for(let i=0;i<s.length;i++){
            if(count.has(s[i])){
                count.set(s[i],count.get(s[i])+1);
            }else
                count.set(s[i],1);
        }
        return count;

    }
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let n=s.length;
        if(n!=t.length)return false;
        let sC=this.getHash(s);
        let tC=this.getHash(t);
        for(let [k,v] of sC.entries()){
            if(tC.get(k)!=v)return false;
        }
        return true;
    }


}
