class Solution {
public:
    int trap(vector<int>& height) {
        /*
        Store left height (lh), it should be non zero elevation index.
        Store right height (rh), it should be non zero elevation index.

        */
        int lh=0,rh=0,ans=0,n=height.size();
        while(height[lh]==0){
            lh++;
        }
        rh=lh;
        
        while(rh<n){
            // 1. iterate to find rh which rh>=lh
            // 2. add trapped water in ans
            // 3. set new value as lh=rh and rh=lh
            for(int i=lh+1;i<n;i++){
                if(height[i]>=height[lh] && height[i]>height[rh]){
                    rh=i;
                    break;
                }
            }
            if(rh==lh){
                rh++;
                for(int i=rh+1;i<n;i++){
                    if(height[i]>=height[rh]){
                        rh=i;
                    }
                }
            }
            ans+=getTrappedWaterCount(height,lh,rh);
            // cout<< getTrappedWaterCount(height,lh,rh)<<lh<<rh<<endl;
            lh=rh;

        }
        return ans;
    }

    int getTrappedWaterCount(vector<int>& height,int l,int r){
        int elevationHeight=min(height[l],height[r]);
        int ans=elevationHeight * (r-l-1);
        for(int i=l+1;i<r;i++){
            ans-= min(elevationHeight,height[i]);
        }
        return ans;
    }
};
