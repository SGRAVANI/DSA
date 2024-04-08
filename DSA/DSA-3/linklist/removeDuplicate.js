class Node{
    constructor()
    {
    this.val=null;
    this.next=null;
    }
}
class List{
 constructor()
 {
   
    this.head=null
    this.tail=null;
    this.size=0
 }
 insertBeg(val)
 {
    let node=new Node()
    node.val=val;
    if(this.size==0)
    {
        this.head=node;
        this.tail=node;
    }
    else{
      node.next=this.head;
      this.head=node;
    }
    this.size++;
 }

insertEnd(val)
{
    let node=new Node()
    node.val=val;
    if(this.size==0)
    {
        this.head=node;
        this.tail=node;
    }
    else{
      this.tail.next=node;
      this.tail=node;
    }
    this.size++;
 
}
deleteBegin()
{
    
    if(this.size==0)
    {
        console.log("empty")
    }
    else{
        let ele=this.head.val;
        this.head=this.head.next;
        this.size--
        return ele
    }
    
}
deleteEnd()
{
    if(this.size==0)
    {
        console.log("empty")
    }
    else{
        // let ele=this.tail.val;
        // this.head=this.head.next;
        // return ele
        let c=this.head
        let ele=this.tail.val;
        // this.tail=null;
        while(c.next.next!=null)
        {
            c=c.next;
        }
        c.next=null;
        this.size--;
        return ele;
    }
}
print()
{
    let c=this.head;
    while(c!=null)
    {
        console.log(c.val)
        c=c.next;
    }
}
inserLOC(pos,val)
{    let node=new Node();
    node.val=val;
    if(this.size==0)
    {
    this.head=node;
    }
    if(pos==1)
    {
        node.next=this.head;
        this.head=node;
    }
    else if(pos<this.size){
        let cur=this.head;
        for(let i=1;i<pos-1;i++)
        {
          cur=cur.next;
        }
        node.next=cur.next;
        cur.next=node;
    }
    else{
        let cur=this.head;
        while(cur.next!=null)
        {
            cur=cur.next;
        }
        cur.next=node;
    }
    this.size++;
}
deleteLoc(pos)
{
    if(this.size>=1)
    {
    if( this.size==1)
    {
       this.head=null; 
    }
    else if(pos>this.size){
        let cur=this.head;
        while(cur.next.next!=null)
        {
            cur=cur.next;
        }
        this.tail=cur;
        cur.next=null;

    }

    else{
     let cur=this.head;
     for(let i=1;i<=pos-2;i++)
     {
        cur=cur.next
     }
     cur.next=cur.next.next;

    }
    this.size--;
}
}
}
let l=new List()
{
 l.insertBeg(10)
 l.insertBeg(11)
 l.print()
 l.insertEnd(12)
 l.insertEnd(13)
 l.print()
 l.deleteBegin()
 l.print()
 console.log("delete from end")
 l.deleteEnd()
 l.print()
 l.inserLOC(2,5)

 console.log("after insert at loc 2, 5")
 l.print() 
 l.inserLOC(3,15)
 console.log("after adding 15 at 3")
 l.print()
console.log("delete from pos 3")
l.deleteLoc(5)
l.print() 
l.inserLOC(2,12);
l.inserLOC(3,10)
l.insertBeg(4)
l.insertBeg(20)
console.log("after insertions")
l.print()
let s=new Set()
let cur=l.head;
let prev=null;
while(cur!=null)
{
    if(s.has(cur.val)==false)
    {
        s.add(cur.val)
        prev=cur;
        cur=cur.next;
    }
    else{
        prev.next=cur.next;
        cur=cur.next;
    }
}

console.log("after removing duplicates")
console.log(l.print())
console.log(l)
}