let a=[5,4,3,2,1]
for(let i=0;i<a.length-1;i++)
{
    for(let j=0;j<a.length-i;j++)
    {
        if(a[j]>a[j+1])
        {
            [a[j],a[j+1]]=[a[j+1],a[j]]
            // let t=a[i]
            // a[i]=a[j]
            // a[j]=t
        }
    }
}
console.log(a)