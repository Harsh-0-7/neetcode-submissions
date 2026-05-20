class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        n=len(grid)
        m=len(grid[0])
        ans=0
        is_visited =  [[False] * m for _ in range(n)]
        for i in range(n):
            for j in range(m):
                if(not is_visited[i][j] and grid[i][j] == '1'):
                    ans+=1
                    self.dfs(grid,n,m,i,j,is_visited)
        return ans
    def dfs(self,grid,n,m,i,j,is_visited):
        is_visited[i][j]=True
        options = [(-1, 0), (1, 0), (0, -1), (0, 1)]
        for dx,dy in options:
            x=i+dx
            y=j+dy
            if x>=0 and y>=0 and x<n and y<m and not is_visited[x][y] and grid[x][y] == '1':
                self.dfs(grid,n,m,x,y,is_visited) 

