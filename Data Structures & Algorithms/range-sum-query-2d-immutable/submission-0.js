let computed;

class NumMatrix {

    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        computed = Array.from({ length: matrix.length }, () => []);
        for (let i = matrix.length - 1; i >= 0; i--) {
            for (let j = matrix[0].length - 1; j >= 0; j--) {
                if (i != matrix.length - 1 && j != matrix[0].length - 1) {
                    computed[i][j] = matrix[i][j] + computed[i + 1][j] + computed[i][j + 1] - computed[i + 1][j + 1];
                }
                else if (i == matrix.length - 1 && j == matrix[0].length - 1) {
                    computed[i][j] = matrix[i][j];
                }
                else if (i == matrix.length - 1) {
                    computed[i][j] = matrix[i][j] + computed[i][j + 1];
                }
                else {
                    computed[i][j] = matrix[i][j] + computed[i + 1][j];

                }
            }
        }
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        let ans = computed[row1][col1];
        if (row2 + 1 < computed.length)
            ans -= computed[row2 + 1][col1];
        if (col2 + 1 < computed[0].length)
            ans -= computed[row1][col2 + 1];
        if (row2 + 1 < computed.length && col2 + 1 < computed[0].length)
            ans += computed[row2 + 1][col2 + 1];
        return ans;
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
