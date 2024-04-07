let s=")()())"
let stack=[-1]
let l=0;
for(let i=0;i<s.length;i++)
{
    if(s[i]=="(")
    {
        stack.push(i)
    }
    else {
      stack.pop()
      if(stack.length==0)
      {
        stack.push(i) //invalid index
      }
    }  

l=Math.max(l,i-stack[stack.length-1])
}
    console.log(stack)

console.log(stack)
//let maxL=s.length-1-stack[stack.length-1]
console.log(l)