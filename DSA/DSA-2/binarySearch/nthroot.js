function pow(val,pow)
{
    let ans=1;
    for(let i=1;i<=pow;i++)
    {
        ans=ans*val;
    }
    return ans;
}
//let x =40  and we want to find it's cube root means dhanmul
function bs(val,root)
{
let low=1;
let high=val;
let res=-1
while(low<=high)
{
    let mid=low+Math.floor((high-low)/2)
    let powerodMid=pow(mid,root)
    if(powerodMid<=val)
    {
     res=mid;
     low=mid+1;
    }
    else{
        high=mid-1;
    }
}
return res;
}
console.log(bs(40,2))
console.log(bs(40,3))