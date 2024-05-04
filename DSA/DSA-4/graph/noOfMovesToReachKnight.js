// // let n=8
// // let start=[2,1]
// // let end=[8,5]
// // let ans=Infinity
// // function solve(r,c,m,n,end,visited,i)
// // {
// //     if(r==end[0] && c==end[1])
// //         {
// //             console.log("reached")
// //             ans=Math.min(ans,i)
// //             return
// //         }
// //     if(r>m || r<1 ||c>n ||c<1  )
// //         {
// //           //  console.log("reached here")
// //             return 
// //         }
// //         //
// //      let moves=[[1,2],[1,-2],[-1,2],[-1,-2],[2,1],[2,-1],[-2,1],[-2,-1]]
// //      for(let i=0;i<moves.length;i++)
// //         {
// //             //console.log(moves[i][0],moves[i][1])
// //             let x=r+moves[i][0]
// //             let y=c+moves[i][1]
            
           
// //             if(x>0 && x<=n && y>0 && y<=n )
// //                 {
                   
// //                    // console.log(x,y,visited[x][y])
// //                     if(visited[x][y]==false)
// //                         {
// //                             console.log(visited[x][y],x,y)
// //                     visited[x][y]=true
// //                     solve(x,y,m,n,end,visited,i+1)
// //                     //console.log(temp,x,y)
// //                     //ans=Math.min(ans,temp)
// //                     visited[x][y]=false
// //                         }
// //                 }
            
// //         }       
// // }
// // let visited=new Array(n+1)
// // for(let i=1;i<=n;i++)
// //     {  visited[i]=new Array(n+1)
// //         for(let j=1;j<=n;j++)
// //             {
// //                 visited[i][j]=false
// //             }
// //     }
// //     visited[start[0]][start[1]]=true
// //     console.log(visited[4][2])
// // solve(2,1,n,n,end,visited,0)
// // console.log(ans)

// let n = 8;
// let start = [2, 1];
// let end = [8, 5];
// let ans = Infinity;

// function solve(r, c, m, n, end, visited, i) {
//     if (r == end[0] && c == end[1] ) {
//         ans = Math.min(ans, i);
//         console.log(ans)
//         return;
//     }
//     // if (r > n || r < 1 || c > n || c < 1 ) {
//     //     return;
//     // }
//     //let moves = [[1, 2], [1, -2], [-1, 2], [-1, -2], [2, 1], [2, -1], [-2, 1], [-2, -1]];
//     let moves=[[1,0],[-1,0],[0,1],[0,-1]]
//     for (let j = 0; j < moves.length; j++) {
//         let x = r + moves[j][0];
//         let y = c + moves[j][1];
//         if (x >= 1 && x <= n && y >= 1 && y <= n && !visited[x][y]) {
//             visited[x][y] = true;
//             solve(x, y, m, n, end, visited, i + 1);
//             visited[x][y] = false;
//         }
//     }
// }

// let visited = new Array(n + 1).fill(false).map(() => new Array(n + 1).fill(false));
// visited[start[0]][start[1]] = true;
// solve(start[0], start[1], n, n, end, visited, 0);
// console.log(ans === Infinity ? -1 : ans);


let n = 4;
let start = [2, 1];
let end = [4, 4];
let ans = Infinity;

function solve(r, c, m, n, end, visited, i) {
    if (r == end[0] && c == end[1]) {
        ans = Math.min(ans, i);
        return;
    }
    let moves = [[1, 2], [1, -2], [-1, 2], [-1, -2], [2, 1], [2, -1], [-2, 1], [-2, -1]];
    for (let j = 0; j < moves.length; j++) {
        let x = r + moves[j][0];
        let y = c + moves[j][1];
        if (x >= 1 && x <= n && y >= 1 && y <= n && !visited[x][y]) {
            visited[x][y] = true;
            solve(x, y, m, n, end, visited, i + 1);
            visited[x][y] = false;
        }
    }
}
let visited = new Array(n + 1).fill(false).map(() => new Array(n + 1).fill(false));
visited[start[0]][start[1]] = true;
solve(start[0], start[1], n, n, end, visited, 0);
console.log(ans === Infinity ? -1 : ans);
