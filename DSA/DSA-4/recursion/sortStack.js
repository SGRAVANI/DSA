let s=[4,3,2,1]
let stack1=[]
let stack2=[]
for(let i=0;i<s.length;i++)
{
    if(stack1.length==0)
    {
        stack1.push(s[i])
    }
    else if(s[i]<stack1[stack1.length-1])
    {
        
        while(stack1.length>0 &&stack1[stack1.length-1]>s[i] )
        {
            let ele=stack1.pop()
            stack2.push(ele)

        }
        stack1.push(s[i])
        while(stack2.length>0)
        {
            stack1.push(stack2.pop())
        }
    }
    else{
        stack1.push(s[i])
    }
    }
console.log(stack1)