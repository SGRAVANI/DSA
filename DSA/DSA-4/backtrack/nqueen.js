let n=4
let board=new Array(n);
for(let i=0;i<board.length;i++)
{
    board[i]=new Array(n);
    for(let j=0;j<board[i].length;j++)
    {
        board[i][j]=0
    }
}
let ans=[]
function solve(board,n,x,op)
{
    if(x>=n)
    {
        console.log(board)
        let a=new Array(n)
        for(let i=0;i<n;i++)
        { a[i]=new Array(n)
            for(let j=0;j<n;j++)
            {
                a[i][j]=board[i][j]
            }
        }
        ans.push(a)
        console.log(op);
        return
    }
 for(let y=0;y<n;y++)
 {
    if(isSafe(board,x,y,n)==true)
    {
        board[x][y]=1
        solve(board,n,x+1,op+String(x)+" "+String(y)+", ");
        board[x][y]=0

    }
 }   
}
function isSafe(board,x,y,n)
{
    let row=x
    let col=y
    for(let i=0;i<=row;i++)
    {
     if(board[i][y]==1)
     {
        return false
     }
    }
    row=x
    col=y
    while(row>=0 && col>=0)
    {
        if(board[row][col]==1)
        {
            return false
        }
        row--
        col--
    }
    row=x
    col=y
    while(row>=0 && col<n)
    {
        if(board[row][col]==1)
        {
            return false
        }
        row--
        col++
    }
    return true
}
solve(board,4,0,"")
console.log(ans)