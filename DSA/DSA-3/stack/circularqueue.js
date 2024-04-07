class Circle{
    constructor()
    {
        this.data=new Array(5)
        this.front=-1;
        this.rear=-1
        this.size=this.data.length
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
    isFull()
    {
        if((this.rear+1)%this.size==this.front)
        {
            return true
        }
        else{
            return false
        }
    }
    enqueueR(x)
    {
        if(!this.isFull())
        {
        if(this.isEmpty())
        {
            this.front++
        }
        this.rear=(this.rear+1)%this.size;
        console.log(this.rear)
        this.data[this.rear]=x
    }
    else{
        console.log("full")
    }
    }
    dequeueF()
    {
        if(!this.isEmpty())
        {
        let ele=this.data[this.front]
        if(this.front==this.rear)
        {
         this.front=-1;
         this.rear=-1   
        }
        else{
            this.front=(this.front+1)%this.size;
        }
        return ele;
    }
    }
    enqueueF()
    {
     if(this.front>0)
     {
    
     }   
    }
}
let c=new Circle()
c.enqueueR(10)
c.dequeueF()
console.log(c)
c.enqueueR(10)
c.enqueueR(20)
c.enqueueR(30)
c.enqueueR(40)
c.enqueueR(50)
c.enqueueR(60)
console.log(c)
c.dequeueF()
c.dequeueF()
c.enqueueR(70)
c.enqueueR(80)
c.enqueueR(90)
console.log(c)