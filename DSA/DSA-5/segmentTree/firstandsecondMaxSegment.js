// stmt: from given arry find first and second max for all input range as well as also update value of array as per input value and position
class Node{
    constructor()
    {
        this.first=null
        this.second=null;
    }
}
class SegmentTree{
    constructor(arr)
    {
        this.arr=arr;
        this.tree=new Array(arr.length*4);
        this.build(0,0,arr.length-1)
    }
    //complexity O(4n)=O(n)
    build(treeIndex,start,end)
    {
        if(start==end)
        {
            let temp=new Node()
            if(this.arr[start]>=this.arr[end])
            temp.first=arr[start]
            temp.second=-Infinity
            this.tree[treeIndex]=temp
            return
        }
        
        else{
            let mid=Math.floor((start+end)/2)
            let leftChildIndex=2*treeIndex+1
            let rightChildIndex=leftChildIndex+1;
            this.build(leftChildIndex,start,mid)
            this.build(rightChildIndex,mid+1,end)
            let temp=new Node()
            temp.first=Math.max(this.tree[leftChildIndex].first,this.tree[rightChildIndex].first)
            temp.second=Math.max(Math.min(this.tree[leftChildIndex].first,this.tree[rightChildIndex].first),this.tree[leftChildIndex].second,this.tree[rightChildIndex].second);
            this.tree[treeIndex]=temp;
        }
    }
    //complexity O(logn)
    query(treeIndex,start,end,l,r)
    {
        if(r<start || end<l)
        {
            let temp=new Node()
            temp.first=-Infinity;
            temp.second=-Infinity
            return temp
        }
        else if(start==end)
        {
            return this.tree[treeIndex]
        }
        else if(l<=start && end<=r)
        {
            return this.tree[treeIndex]
        }
        else{
            let mid=Math.floor((start+end)/2)
            let leftChildIndex=treeIndex*2+1
            let rightChildIndex=leftChildIndex+1
            let left=this.query(leftChildIndex,start,mid,l,r)
            let right=this.query(rightChildIndex,mid+1,end,l,r)
            let temp=new Node();
            temp.first=Math.max(left.first,right.first)
            temp.second=Math.max(Math.min(left.first,right.first),left.second,right.second);
            return temp;
        }


    }
    //complexity: O(logn)
    update(treeIndex,start,end,pos,val)
    {
        if(start==end)
        {
            this.arr[pos]=val;
            let temp=new Node
            temp.first=30
            temp.second=-Infinity
            this.tree[treeIndex]=temp
        }
        else{
            let leftChildIndex=2*treeIndex+1;
            let rightChildIndex=2*treeIndex+2
            let mid=Math.floor((start+end)/2)
            if(start<=pos && pos<=mid)
            {
                this.update(leftChildIndex,start,mid,pos,val)
                
            }
            else{
                this.update(rightChildIndex,mid+1,end,pos,val)
            }
            let temp=new Node()
            temp.first=Math.max(this.tree[leftChildIndex].first,this.tree[rightChildIndex].first)
            temp.second=Math.max(this.tree[leftChildIndex].second,this.tree[rightChildIndex].second,Math.min(this.tree[leftChildIndex].first,this.tree[rightChildIndex].first))
            this.tree[treeIndex]=temp
        }
    }
}

let arr=[12,3,4,5,6,9,0,11,25]
let s=new SegmentTree(arr)
//console.log(s.tree)
console.log("answer of query (1,4) is:  :" ,s.query(0,0,arr.length-1,1,4))
//update query
s.update(0,0,arr.length-1,3,30)
console.log(s.tree,arr)