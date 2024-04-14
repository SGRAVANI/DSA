let a=[1,2,3]
let r=[]
function solve(a,start)
{
    if(start==a.length)
    {
        r.push([...a])
    }
    for(let i=start;i<a.length;i++)
    {
    // [a[start],a[i]]=[a[i],a[start]]
    let t=a[i]
    a[i]=a[start]
    a[start]=t
    console.log("Reached here",a)
    solve(a,start+1)
    t=a[i]
    a[i]=a[start]
    a[start]=t
    // [a[start],a[i]]=[a[i],a[start]]
    }
    

}
solve(a,0)
console.log(r)