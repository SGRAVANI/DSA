let s="abcbaccd"
function isPali(s,i,j)
{
    let l=i
    let r=j
    while(l<=r)
    {
        if(s[l]!==s[r])
        {
         return false
        }
        l++
        r--
    }
    return true
}
function solve(s,i,j,sel)
{
    if(i>=j)
    {
   return 0;
    }
    let min=Infinity
    let temp=Infinity
    if(isPali(s,i,j))
    {
        console.log(s.slice(i,j+1))
        return 0;
        
    }
for(let k=i;k<j;k++)
{
   
   temp=solve(s,i,k)+solve(s,k+1,j)+1
   if(min>temp)
   {
     console.log(i,j,k)
       min=temp
   }
} 



return min
}
console.log(solve(s,0,s.length-1))