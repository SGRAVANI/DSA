let arr=[10,20,30,40,50,55]
function gcd(m,n)
{
    if(m==0)
    {
        return n;
    }
    if(n==0)
    {
        return m;
    }
    return gcd(n,m%n);
}
let r=arr[0]
for(let i=1;i<arr.length;i++)
{
     r=gcd(r,arr[i])
    
}
console.log("gcd of array is :",r)
