function solve(a,n,k,i)
{
    if(n==1)
    {  console.log(a[0])
        return ;
    }
    i=(i+k-1)%a.length;
    a.splice(i,1);
    solve(a,n-1,k,i)
}
let n=40
k=7
let a=[]
for(let i=0;i<n;i++)
{
    a.push(i+1)
}
solve(a,n,k,0)
