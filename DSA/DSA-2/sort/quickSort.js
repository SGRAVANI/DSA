let a=[4,6,1,2,8,9,0]
function quick(a,low,high)
{
    if(low<high)
    {
        let j=partition(a,low,high)
        quick(a,low,j-1)
        quick(a,j+1,high)
    }
}
function partition(a,low,high)
{
    let pivot=a[low]
    let i=low
    let j=high
    while(i<=j)
    {
        while(a[i]<=pivot)
        {
            i++;
        }
        while(a[j]>pivot)
        {
            j--
        }
        if(i<j)
        {
            [a[i],a[j]]=[a[j],a[i]]
        }
    }
    [a[low],a[j]]=[a[j],a[low]];
    return j;
}
quick(a,0,a.length-1)
console.log(a)