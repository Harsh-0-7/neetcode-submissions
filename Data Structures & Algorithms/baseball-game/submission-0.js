class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack = [];
        for (let op of operations) {
            if (op == 'C') {
                stack.pop();
            } else if (op == 'D') {
                stack.push(stack.at(-1) * 2);
            } else if (op == '+') {
                stack.push(stack.at(-1) + stack.at(-2));
            } else {
                stack.push(parseInt(op));
            }
        }
        return stack.reduce((a, c) => a + c, 0);
    }
}
