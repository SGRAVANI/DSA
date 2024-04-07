class Queue{
    constructor()
    {
        this.data=[]
        this.front=0
        this.rear=-1;

    }
    enqueue(ele)
    {
        this.rear++;
        this.data[this.rear]=ele
    }
    dequeue()
    {
        if(!this.isEmpty())
        {
            let ele=this.data[this.front];
            this.front++
            
            return ele
        }
    }
    isEmpty()
    {
        if(this.rear==-1)
        {
            return true
        }
        else{
            return false
        }
    }

}
let a=[1,2,3,4,5]
let q=new Queue()
console.log(q.isEmpty())
for(let i=0;i<a.length;i++)
{
q.enqueue(a[i])
}
console.log(q)