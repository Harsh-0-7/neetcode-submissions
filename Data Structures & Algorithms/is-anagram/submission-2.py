from collections import Counter

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s)!=len(t):
            return False
        sD=Counter(s)
        tD=Counter(t)
        for i in sD:
            if sD[i]!=tD[i]:
                return False
        return True