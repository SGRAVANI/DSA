let a=[5,6,3,4,1,9]
for(let i=1;i<a.length;i++)
{let key=a[i]
    let j=i-1;
    while(j>=0 && key<a[j])
    {
        a[j+1]=a[j]
        j--;
    }
    j++;
    a[j]=key
}
console.log(a)