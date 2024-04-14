let stack1=[7,8,5,1,2]
function sort(stack1)
{
    if(stack1.length==1)
    {
        return stack1
    }
    let ele=stack1.pop()
    sort(stack1)
    insert(stack1,ele)
}
function insert(stack,ele)
{
    if(stack.length==0||stack[stack.length-1]<ele)
    {
        stack.push(ele)
        return stack
    }
    let last=stack.pop()
    insert(stack,ele)
    stack.push(last)

}
sort(stack1)
console.log(stack1)