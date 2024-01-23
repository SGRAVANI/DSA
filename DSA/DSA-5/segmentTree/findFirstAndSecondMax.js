//brute force approach to find first and second max
let arr=[1,2,3,19,5,6,10,0,7]
let first=arr[0]
let second=0
for(let i=1;i<arr.length;i++)
{
if(arr[i]>first)
{
    second=first;
    first=arr[i]
}
else{
    if(arr[i]>second)
    {
        second=arr[i];
    }
}
}
console.log(first,second)
