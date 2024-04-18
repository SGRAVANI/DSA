let r=[]
function solve(n,subr,start)
{
    if(n==0)
    {
        console.log(subr)
        let num=subr.join('')
     r.push(Number(num))
     return
    }
    for(let i=start;i<=9;i++ )
    {   
        subr.push(String(i))
        solve(n-1,subr,i+1)
        subr.pop()
    }
}
let n=2;
solve(3,[],1)
console.log(r)