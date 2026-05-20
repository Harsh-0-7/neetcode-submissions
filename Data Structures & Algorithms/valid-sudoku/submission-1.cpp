    class Solution {
    public:
        bool isValidSudoku(vector<vector<char>>& board) {
            unordered_set<char> s, d;
            for (int i = 0; i < 9; i++) {
                for (int j = 0; j < 9; j++) {
                    if (board[i][j] != '.') {
                        if (s.count(board[i][j]))
                            return false;
                        else
                            s.insert(board[i][j]);
                    }
                    if (board[j][i] != '.') {

                        if (d.count(board[j][i]))
                            return false;
                        else
                            d.insert(board[j][i]);
                    }
                }
                s.clear();
                d.clear();
            }
            pair<int, int> a[9] = {{0, 0}, {0, 3}, {0, 6}, {3, 0}, {6, 0},
                                {3, 3}, {6, 6}, {6, 3}, {3, 6}};
            for (auto& p : a) {
                int a = p.first, b = p.second;
                for (int i = 0; i < 3; i++) {
                    for (int j = 0; j < 3; j++) {
                        if (board[a + i][b + j] != '.') {
                            if (s.count(board[a + i][b + j]))
                                return false;
                            else
                                s.insert(board[a + i][b + j]);
                        }
                    }
                }
                s.clear();
            }
            return true;
        }
    };
