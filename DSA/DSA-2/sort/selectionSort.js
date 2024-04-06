let a=[5,4,3,2,1]
for(let i=0;i<a.length;i++)
{let min=i
    for(let j=i+1;j<a.length;j++)
    {
    if(a[j]<a[min])
    {
        min=j;
    }
    }
    [a[i],a[min]]=[a[min],a[i]]
}
console.log(a)