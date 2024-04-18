function solve(n,p)
{
    if(p==0)
    {
        return 1
    }
    if(p%2==0)
    {
        return solve(n*n,Math.floor(p/2))
    }
    else{
        return solve(n*n,Math.floor(p/2))*n
    }
}
console.log(solve(2,5))