class SegmentTree{
    constructor(arr)
    {
    this.arr=arr;
    this.tree=new Array(arr.length*4)
    this.build(0,0,this.arr.length-1)
    }
    build(node,start,end)
    {
    if(start==end)
    {
        this.tree[node]=this.arr[start]
        return
    }
    let mid=Math.floor((start+end)/2)
    let left=node*2+1;
    let right=node*2+2
    this.build(left,start,mid)
    this.build(right,mid+1,end)
    this.tree[node]=Math.max(this.tree[left],this.tree[right])
    }
    query(node,start,end,l,r)
    {
        if(end<l ||r<start)
        {
            return -Infinity
        }
        else if(start==end)
        {
            return this.tree[node]
        }
        else if(l<=start && end<=r)
        {
            //start and end inside query completely then consoder answer of node instead of traverse further toward childs
            return this.tree[node]
        }
       else {
        let mid=Math.floor((start+end)/2);
        let left=2*node+1;
        let right=2*node+2;
        let lmax=this.query(left,start,mid,l,r)
        let rmax=this.query(right,mid+1,end,l,r)
        return Math.max(lmax,rmax)
    }
}
update(node,start,end,pos,val)
{
    if(start==end)
    {   
        this.tree[node]=val
        this.arr[pos]=val

        return
    }
    else{
        let mid=Math.floor((start+end)/2)
        let rightChildIndex=(node*2)+2
        let leftChildIndex=(node*2)+1
        if(start<=pos && pos<=mid )
        {
            
            this.update(leftChildIndex,start,mid,pos,val)
        }
        else{
            
            this.update(rightChildIndex,mid+1,end,pos,val)
        }
     //   console.log(node,leftChildIndex,rightChildIndex)
        this.tree[node]=Math.max(this.tree[leftChildIndex],this.tree[rightChildIndex])
    }
}
}
let arr=[8,7,4,2,5,3]
let stOb=new SegmentTree(arr)
console.log(stOb.tree)
console.log("largest  value of query(1,5) is ",stOb.query(0,0,arr.length-1,1,5))
stOb.update(0,0,arr.length-1,2,10)
//console.log(stOb.tree,stOb.arr)