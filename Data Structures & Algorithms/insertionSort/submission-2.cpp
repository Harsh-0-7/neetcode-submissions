// Definition for a Pair
// class Pair {
// public:
//     int key;
//     string value;
//
//     Pair(int key, string value) : key(key), value(value) {}
// };
class Solution {
public:
    vector<vector<Pair>> insertionSort(vector<Pair>& pairs) {
        int n=pairs.size();
        vector<vector<Pair>> ans;
        // vector<Pair> pairs_copy=pairs;
        if(n==0)return ans;
        ans.push_back(pairs);
        for(int i=1;i<n;++i){
            Pair key=pairs[i];
            int j=i-1;
            while(j>=0 && pairs[j].key > key.key){
                pairs[j+1]=pairs[j];
                j--;
            }
            pairs[j+1]=key;
            // vector<Pair> pairs_copy=pairs;
            ans.push_back(pairs);
        }
        return ans;
    }

    // void insertionSort(int arr[], int n){
    //     for (int i = 1; i < n; ++i) {
    //         int key = arr[i];
    //         int j = i - 1;

    //         /* Move elements of arr[0..i-1], that are
    //         greater than key, to one position ahead
    //         of their current position */
    //         while (j >= 0 && arr[j] > key) {
    //             arr[j + 1] = arr[j];
    //             j = j - 1;
    //         }
    //         arr[j + 1] = key;
    //     }
    // }
};
