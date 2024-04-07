class Queue{
    constructor()
    {
        this.data=[]
        this.front=-1
        this.rear=-1
    }
    frontInsert(ele)
    {
        if(this.isEmpty())
        {
            this.front++;
           // this.rear++
        }
     this.data.unshift(ele)
     this.rear++
    }
     rearInsert(ele)
     {
        if(this.isEmpty())
        {
            this.front++;
        }
        this.rear++
        this.data.push(ele)
     }
     dequeueFront()
     {
        this.front++
        let ele=this.data[0]
        this.data.shift()
        return ele
     }
     dequeueR()
     {this.rear--;
        let ele=this.data[this.data.length-1]
        this.data.pop()
        return ele;
     }
     isEmpty()
     {
        if(this.front==-1 && this.rear==-1)
        {
            return true
        }
        if(this.front>this.rear)
        {
            return true
        }
     }


}
let q=new Queue()
q.frontInsert(10)
q.rearInsert(20)
q.frontInsert(30)
console.log(q)
q.dequeueFront()
q.dequeueR()
console.log(q)