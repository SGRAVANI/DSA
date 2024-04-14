function sort(a)
{
    if(a.length==1)
    {
        return ;
    }
    let temp=a[a.length-1]
    a.pop()
    sort(a)
    insert(a,temp)   
}
function insert(a,temp)
{
    if(a.length==0 || temp>a[a.length-1])
    {
        a.push(temp)
        return
    }
    let t=a.pop()
    insert(a,temp)
    a.push(t)

}
let a=[7,6,5,4,3,2,1]
sort(a)
console.log(a)