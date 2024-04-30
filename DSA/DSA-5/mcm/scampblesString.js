
function solve(a,b)
{
    if(a==b)
    {
        return true;
    }
    if(a.length<=1 || b.length<=1)
    {
        return false
    }
    let flag=false;
for(let k=1;k<a.length;k++)
{
    let a1=a.substring(0,k)
    let a2=a.substring(k,a.length)
    let b1=b.substring(b.length-k,b.length)
    let b2=b.substring(0,b.length-k)
let condition1=solve(a1,b1)&&solve(a2,b2)
let condition2=solve(a.substring(0,k),b.substring(0,k))&&solve(a.substring(k,a.length),b.substring(k,b.length))
if((condition1||condition2)==true)
{
flag=true;
break;
}
}
return flag
}
let s1="great"
let s2="taerg"
if(s1==s2)
{
    console.log(true)
}

if(s1.length!=s2.length)
{
    console.log( false)
}
else
{
console.log(solve(s1,s2))
}