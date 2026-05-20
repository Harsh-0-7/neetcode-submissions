class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        let stack = [];
        for (let ast of asteroids) {
            if (!stack.length || ast > 0 || (stack.length && stack.at(-1) < 0)) stack.push(ast);
            else {
                let wereEqual = false;
                while (stack.length && stack.at(-1) > 0 && stack.at(-1) <= -ast) {
                    let k = stack.pop();
                    if (k == -ast) { wereEqual = true; break; }
                }
                if (wereEqual) continue;
                if (stack.at(-1) < 0 || !stack.length) stack.push(ast);
            }

        }
        return stack;
    }
}
