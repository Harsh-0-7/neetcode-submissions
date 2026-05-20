class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        map<int, int> freqmap;
        int maxc = 0;
        for (auto& i : nums) {
            freqmap[i]++;
            maxc = max(freqmap[i], maxc);
        }
        vector<vector<int>> mp(maxc + 1);
        for (auto i : freqmap) {
            mp[i.second].push_back(i.first);
        }
        vector<int> ans;
        for (int i = maxc; i > 0 && ans.size() < k; --i) {
            for (int num : mp[i]) {
                ans.push_back(num);
                if (ans.size() == k)
                    break;
            }
        }

        return ans;
    }
};
