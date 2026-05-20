
class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let l=0,r=s.length-1,isDeleted=false;
        const isPalindrome=(S)=>{
        let L=0,R=S.length-1;
        while(L<R){
            if(S[L]!=S[R]){
                return false;
            }
            L++;
            R--;
        }
        return true;
    };
        while(l<r){
            if(s[l]!=s[r]){
                if(isDeleted)return false;
                isDeleted=true;
                if(s[l+1]==s[r]){
                    return isPalindrome(s.substring(l+1,r+1)) || isPalindrome(s.substring(l,r));
                }else if(s[l]==s[r-1]){
                    return isPalindrome(s.substring(l+1,r+1)) || isPalindrome(s.substring(l,r));
                } else return false;
            }else{
                l++;
                r--;
            }
        }
        return true;
    }
}

