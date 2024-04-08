// Remove all occurences of duplicates in a linked list
// MediumAccuracy: 49.82%Submissions: 13K+Points: 4
// Given a sorted linked list, delete all nodes that have duplicate numbers (all occurrences), leaving only numbers that appear once in the original list. 

// Example 1:

// Input: 
// N = 8
// Linked List = 23->28->28->35->49->49->53->53
// Output: 
// 23 35
// Explanation:
// The duplicate numbers are 28, 49 and 53 which 
// are removed from the list.
// Example 2:


class Node{
    constructor(val)
    {
        this.data=val;
        this.next=null
    }
}
class List{
    constructor()
    {
        this.head=null
    }
    insertEnd(val)
    {
        let node=new Node(val)
        if(this.head==null)
        {
            this.head=node
        }
      else  if(this.head.next==null)
        {
            this.head.next=node;
        }
        else{
            let cur=this.head
            
            while(cur.next && cur.next!=null)
            {
            cur=cur.next;
            }
            cur.next=node;
        }
    }
    print()
    {
        let cur=this.head;
        while(cur!=null)
        {
            console.log(cur.data)
            cur=cur.next
        }
    }
}
let list=new List()
list.insertEnd(1)
list.insertEnd(1)
list.insertEnd(1)
list.insertEnd(2)
list.insertEnd(3)
list.insertEnd(3)
//list.print()
//let l1=new List()
let node=new Node(-1)
node.next=list.head
list.head=node;
//list.print()

if(list.head.next==null||list.head.next.next==null)
{
//    list.next.print()
}
else{
    //if(l)
    let cur=list.head;
    if (list.head && list.head.next && list.head.next.next) {
        let cur = list.head;
        while (cur.next != null && cur.next.next != null) {
            console.log(cur.data);
            if (cur.next.data == cur.next.next.data) {
                let val = cur.next.data;
                while (cur.next && cur.next.data == val) {
                    cur.next = cur.next.next;
                }
            } else {
                cur = cur.next;
            }
        }
    }
//     while(cur.next!=null && cur.next.next!=null)
//     {
//   //-1 1 1 1 2 2 2 3 
//   console.log(cur.data)
//     if( cur.next.data==cur.next.next.data)
//     {
//         let val=cur.next.data
//         while( cur.next !=null  &&cur.next.data==val)
//         {
            
//             cur.next=cur.next.next
            
//         }
//        // console.log("from loop",cur.next.data)
//     }
//     else{
//         cur=cur.next;
//     }
}


list.print()