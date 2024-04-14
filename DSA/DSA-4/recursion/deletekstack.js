//delete kth ele from top
let k=3
let stack=[1,2,3,4,5,6,7]
function del(stack,k)
{
    if(k==1)
    {
        stack.pop()
        return
    }
    let ele=stack.pop()
    del(stack,k-1)
    stack.push(ele)
}
del(stack,k)
console.log(stack)