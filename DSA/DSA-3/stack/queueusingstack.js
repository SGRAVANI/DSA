class Stack{
    constructor()
    {
        this.data=[]
    }
    pushHeavy(x,s2)
    {
        if(!s2.isEmpty())
        {
            while(!s2.isEmpty())
            {
                s1.data.push(s2.pop());
            }
            s2.push(x)
            while(!s1.isEmpty())
            {
                s2.push(s1.pop())
            }
        }
    }
    poplight()
    {
        s2.pop()
    }
    enqueue(x)
    {
     this.data.push(x)
    }
    isEmpty()
    {
        if(this.data.length==0)
        {
            return true
        }
        else{
            return false
        }
    }
    deque(s2)
    {
     if(!this.isEmpty())
     {
        while(!this.isEmpty())
        {
            s2.enqueue(s1.data.pop())

        }
        s2.data.pop()
        while(!s2.isEmpty())
        {
            s1.enqueue(s2.data.pop())

        }
     }
    }
}
let s1=new Stack()

let s2=new Stack()
s1.enqueue(10)
s1.enqueue(20)
s1.enqueue(30)
s1.enqueue(40)
console.log(s1)
s1.deque(s2)
console.log(s1)