
let s="abccba"
function pali(start,end)
{
if(start==end)
{
return true
}
if(start>end)
{
    return true
}
if(s[start]!=s[end])
{
    return false
}
return pali(start+1,end-1)
}
console.log(pali(0,s.length-1))