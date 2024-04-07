class Stack{
    constructor()
    {
        this.top=-1
        this.data=[]
    }
    push(ele)
    {
        this.top++;
        this.data[this.top]=ele
    }
    pop()
    {
        if(!this.isEmpty())
        {
            let ele=this.data[this.top]
            this.top--;
            return ele
        }
    }
    peep()
    {
        if(!this.isEmpty())
        {
            let ele=this.data[this.top]
         //   this.top--;
            return ele
        }
    }
    isEmpty()
    {
        if(this.top==-1)
        {
            return true
        }
        else{
            return false
        }
    }
}
let s1=new Stack()
let a=[9,10,1,6,7,2]
for(let i=0;i<a.length;i++)
{
    s1.push(a[i])
}
console.log(s1)
let s2=new Stack()
let first=s1.pop()
s2.push(first)
do{
let ele=s1.pop()
if(ele>s2.peep())
{
    s2.push(ele)
}
else{
    let c=0
while(ele<s2.peep() && !s2.isEmpty())
{
s1.push(s2.pop())
c++;
}
s2.push(ele)
while(c!=0)
{
    s2.push(s1.pop())
    c--;
}

}
}while(!s1.isEmpty());
console.log(s2)
