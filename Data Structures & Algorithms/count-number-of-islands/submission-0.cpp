class Solution {
public:
    int numIslands(vector<vector<char>>& grid) {
        int n=grid.size(),m=grid[0].size(),ans=0;
        vector<vector<bool>> isVisited(n, vector<bool>(m, false));
        for(int i=0;i<n;i++){
            for(int j=0;j<m;j++){
                if(!isVisited[i][j] && grid[i][j]=='1'){
                    ans++;
                    dfs(grid,n,m,i,j,isVisited);
                }
            }
        }
        return ans;
    }
private:
    void dfs(vector<vector<char>>& grid,int n,int m, int i,int j,vector<vector<bool>>& isVisited){
        isVisited[i][j]=true;
        int options[4][2] = {{-1,0}, {1,0}, {0,-1}, {0,1}};
        for(int a=0;a<4;a++){
            int x=i+options[a][0];
            int y=j+options[a][1];
            if(x>=0 && x<n && y>=0 && y<m && grid[x][y]=='1' && !isVisited[x][y]){
                dfs(grid,n,m,x,y,isVisited);
            }
        }        
    }
};
