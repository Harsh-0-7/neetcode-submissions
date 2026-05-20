class Solution {
    public boolean isAnagram(String s, String t) {
        int n=s.length();
        if(n!=t.length())return false;

        HashMap<Character,Integer> freq=new HashMap<Character,Integer>();
        for(int i=0;i<n;i++){
            freq.put(s.charAt(i),freq.getOrDefault(s.charAt(i),0)+1);
        }
        for(int i=0;i<n;i++){
            freq.put(t.charAt(i),freq.getOrDefault(t.charAt(i),0)-1);
        }
        for(char c: freq.keySet()){
            if(freq.get(c)!=0)return false;
        }
        return true;

    }
}
