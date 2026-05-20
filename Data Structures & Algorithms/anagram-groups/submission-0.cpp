class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        map<string, vector<string>> mp;
        string key;
        for (auto& s : strs) {
            key = getKey(s);
            mp[key].push_back(s);
        }
        vector<vector<string>> ans;
        for (auto& it : mp) {
            ans.push_back(it.second);
        }
        return ans;
    }
    string getKey(string s) {
        vector<int> v(26, 0);
        for (auto& i : s) {
            v[i - 'a']++;
        }
        string key = to_string(v[0]) + ",";
        for (int i = 1; i < 26; i++) {
            key += to_string(v[i]) + ",";
        }
        return key;
    }
};
