class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let l = 0, r = 0;
        let tMap = new Map();
        for (const c of t) {
            tMap.set(c, (tMap.get(c) || 0) + 1);
        }
        let sMap = new Map();
        sMap.set(s[l], 1);
        if (this.checkFreq(sMap, tMap)) return s[l];
        let ans = "";
        while (r < s.length) {
            if (this.checkFreq(sMap, tMap)) {
                if (ans.length > r - l + 1 || ans.length == 0)
                    ans = s.substring(l, r + 1);

                sMap.set(s[l], sMap.get(s[l]) - 1);
                l++;
            } else {
                r++;
                sMap.set(s[r], (sMap.get(s[r]) || 0) + 1);
            }
        }
        return ans;
    }
    checkFreq(sMap, tMap) {
        for (const [k, v] of tMap) {
            if ((sMap.get(k) || 0) < v) return false;
        }
        return true;
    };
}
