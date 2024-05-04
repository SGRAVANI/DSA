let start=[0,0]
let n=4
let ans=Infinity
let visited=new Array(n)
for(let i=0;i<n;i++)
    {
        visited[i]=new Array(n)
        for(let j=0;j<n;j++)
            {
                visited[i][j]=false
            }
    }
    function solve(x,y,visited,end,i){
        if(x==3&& y==3 && visited[x][y]==false )
            {
                //console.log(i)
                ans=Math.min(ans,i)
                return
                //return i;
            }
        if(x<0 ||y<0||x>=n||y>=n||visited[x][y]==true)
            {

             return
            }
        // if(visited[x][y]==true)
        //     {
        //         return
        //     }
            visited[x][y]=true
        solve(x+1,y,visited,end,i+1)
        solve(x-1,y,visited,end,i+1)
        solve(x,y+1,visited,end,i+1)
        solve(x,y-1,visited,end,i+1)
        visited[x][y]=false
    }
    solve(0,0,visited,[3,3],0)
    console.log(ans)