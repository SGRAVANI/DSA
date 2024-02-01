let arr=[2, 3, 1, -4, 0, 6]
let prefix=[]
prefix.push(arr[0])
for(let i=1;i<arr.length;i++)
{
    prefix[i]=prefix[i-1]+arr[i]
}
console.log(prefix)
let m={}
let maxStart=-Infinity
let maxEnd=-1
for(let i=0;i<prefix.length;i++)
{
    if(m.hasOwnProperty(prefix[i]))
    {
    
      maxStart=m[prefix[i]];
      maxEnd=i;
    }
    else{
       m[prefix[i]]=i;
    }
}
console.log(maxStart,maxEnd)
console.log(arr.slice(maxStart+1,maxEnd+1))