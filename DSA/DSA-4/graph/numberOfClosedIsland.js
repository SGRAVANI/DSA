/**
 * @param {number[][]} grid
 * @return {number}
 */
let m=[[1,0],[0,1],[-1,0],[0,-1]]
 function bfs(grid,i,j)
 {
    let q=[[i,j]]
    grid[i][j]=1
    while(q.length!=0)
    {
        let [r,c]=q.shift()
        for(let k=0;k<m.length;k++)
        {
            let newr=r+m[k][0]
            let newc=c+m[k][1]
           if(newr>=0 && newr<grid.length && newc>=0 && newc<grid[0].length && grid[newr][newc]==0)
           {
            grid[newr][newc]=1
            q.push([newr,newc])
           }
        }
    }
 }
var closedIsland = function(grid) {
    let cnt=0
    for(let i=1;i<grid.length-1;i++)
    {
        for(let j=1;j<grid[0].length-1;j++)
        {
         let left=j-1
         let right=j+1
         let top=i-1;
         let bottom=i+1
         let cond1 =grid[i][left]==1 && grid[top][j]==1
         let cond2=grid[i][left]==1 && grid[bottom][j]==1
         let cond3=grid[i][right]==1 &&grid[top][j]==1
         let cond4=grid[i][right]==1 && grid[bottom][j]==1
         let cond5=grid[i][left]==1 && grid[top][j]==1 && grid[bottom][j]==1&&grid[i][right]==1 
          if(cond1 ||cond2||cond3||cond4||cond5)
          {
            if(grid[i][j]==0)
            {
               cnt++
               bfs(grid,i,j)
            }
          }
        }
    }
    console.log(cnt)
};
let grid=[[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]
console.log(closedIsland(grid))