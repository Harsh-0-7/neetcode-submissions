class Solution {
public:
    vector<int> twoSum(vector<int>& numbers, int target) {
        int n = numbers.size(), j;
        for (int i = 0; i < n; i++) {
            j = bs(numbers, target - numbers[i], n, i + 1);
            if (j != -1) {
                cout << i << " " << j;
                return {i + 1, j + 1};
            }
        }
        return {-1, -1};
    }

    int bs(vector<int>& numbers, int target, int n, int start) {
        int mid, i = start, j = n - 1;
        while (i < j) {
            mid = (i + j) / 2;
            if (target == numbers[mid])
                return mid;
            if (target > numbers[mid]) {
                i = mid + 1;
            } else {
                j = mid - 1;
            }
        }
        if (i == j && numbers[i]==target)
            return i;
        return -1;
    }
};
