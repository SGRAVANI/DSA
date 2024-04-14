let stack=[1,2,3,4,5];
function del(stack,low,high)
{
    if(low==high||low+1==high)
    {
        console.log(low,high)
     stack.splice(low,1)
     return stack
    }
    del(stack,low+1,high-1)

}
del(stack,0,stack.length-1)
console.log(stack)