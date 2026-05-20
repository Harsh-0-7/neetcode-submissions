class Solution {
public:
    bool isPalindrome(string s) {
        for (char& c : s)
            c = tolower(c);
        string sf = clean(s);
        int i = 0, j = sf.size()-1;
        while(i<j && j>=0){
            if(sf[i]!=sf[j]){
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
    string clean(string s) {
        string ans = "";
        for (auto c : s) {
            if (isalnum(c)) {
                ans += c;
            }
        }
        return ans;
    }
};
