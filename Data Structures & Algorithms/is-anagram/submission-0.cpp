class Solution {
public:
    bool isAnagram(string s, string t) {
        map<char,int> mp;
        for(auto &c:s){
            if(mp.count(c)){
                mp[c]++;
            }else mp[c]= 1;
        }
        for(auto &c:t){
            if(mp.count(c)){
                if(mp[c]==1)mp.erase(c);
                else mp[c]--;
            }else return false;
        }
        return mp.size()?false:true;
    }
};
