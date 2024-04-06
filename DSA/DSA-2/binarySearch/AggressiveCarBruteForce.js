//n=5 
// k=3
// stalls = [10 1 2 7 5]
//min distance=1
//max distance=9
// Output:
// 4

function isValid(stalls,distance,k)
{
let cow=1;
let prevResult=stalls[0]
for(let i=1;i<stalls.length;i++)
{
if(stalls[i]-prevResult>=distance)
{
    cow++;
    if(cow==k)
    {
        return true
    }
    prevResult=stalls[i]
}
}
if(cow>=k)
{
    return true
}
else{
    return false
}
}
let stalls=[10,1,2,7,5]
stalls.sort((a,b)=>a-b)
let k=3
let minDustance=Math.min(...stalls)
let maxDistance=stalls[stalls.length-1]-stalls[0]
let res=-Infinity
for(let d=minDustance; d<=maxDistance;d++)
{
    if(isValid(stalls,d,k))
    {
    res=Math.max(res,d);
    }
}
console.log(res)