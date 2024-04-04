// A Bitonic Sequence is a sequence of numbers that is first strictly increasing then after a point decreasing.

// Examples: 

// Input :  arr[] = {-3, 9, 18, 20, 17, 5, 1}, key = 20
// Output : Found at index 3

function findPeak(a)
{
let low=0;
let high=a.length-1;
while(low<=high)
{
    let m=low+Math.floor((high-low)/2)
    if( (a[m]>a[m+1]&&m==0)||(a[m]>a[m-1]&&m==a.length-1)||(a[m]>a[m-1]&&a[m]>a[m+1]))
    {
    return m;
    }
    else if(a[m]<a[m+1]){
    low=m+1
    }
    else if(a[m]<a[m-1])
    {
     high=m-1;
    }
}
return -1;
}
function binarySearch(a,low,high,target)
{
    while(low<=high)
    {
        let m=low+Math.floor((high-low)/2)
        if( a[m]==target)
        {
        return m;
        }
        else if(target<a[m]){
        high=m-1;
        }
        else if(target>a[m])
        {
         low=m+1;
        }
    }
    return -1;
}
let a=[-3, 9, 18, 20, 17, 5, 1]
let target=20;
let peakEleIndex=findPeak(a)
console.log(peakEleIndex)
let leftR=binarySearch(a,0,peakEleIndex,target)
let rightR=binarySearch(a,peakEleIndex+1,a.length-1,target)
if(leftR!=-1)
{
console.log(target, "found at index",leftR)
}
else if(rightR!=-1)
{
console.log(target, "found at index",rightR)
}
else{
console.log(target,"not found")
}