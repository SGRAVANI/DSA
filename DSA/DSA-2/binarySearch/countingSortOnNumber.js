let a=[1,2,3,1,2,5,4,3,2,2]
let rangeMin=Math.min(...a)
let rangeMax=Math.max(...a)
let rangeArr=new Array(rangeMax+1).fill(0);

for(let i=0;i<a.length;i++)
{
rangeArr[a[i]]+=1;
}
console.log(rangeArr)
let sortedArr=[]
for(let i=0;i<rangeArr.length;i++)
{
    
    for(let j=0;j<rangeArr[i];j++)
    {
        sortedArr.push(i)
    }
}
console.log(sortedArr)