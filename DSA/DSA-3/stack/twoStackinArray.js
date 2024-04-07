class Stack{
    constructor()
    {
        this.top1=-1
        this.top2=101
        this.data=new Array(101)
    }
    push1(ele)
    {
        this.top1++;
        this.data[this.top1]=ele
    }
    push2(ele)
    {
        this.top2--;
        this.data[this.top2]=ele
    }
    pop1()
    {
        if(!this.isEmpty1())
        {
        let ele=this.data[this.top1]
        this.top1--;
        return ele
        }
    }

    pop2()
    {
        if(!this.isEmpty2())
        {
        let ele=this.data[this.top2]
        this.top2++;
        return ele
        }
    }
    isEmpty1()
    {
        if(this.top1==-1)
        {
            return true
        }
        else{
            return false
        }
    }
    isEmpty2()
    {
        if(this.top2==101)
        {
            return true
        }
        else{
            return false
        }
    }

}
let s1=new Stack()
let a=[10,1,2,3,4,6,5,7,8,9]
let b=new Array(101)
for(let i=0;i<a.length;i+=2)
{
s1.push1(a[i])
s1.push2(a[i+1])
}
console.log(s1)
while(s1.isEmpty2()!=true)
{
    console.log(s1.pop2())
}