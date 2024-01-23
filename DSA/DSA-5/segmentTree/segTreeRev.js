class SegmentTree{
    constructor(arr)
    {
        this.arr= arr;
        this.tree=new Array(arr.length*4);
        this.build(0,0,this.arr.length-1)

    }
    build(treeIndex,start,end)
    {
        if(start==end)
        {
            //tree leaf node
            this.tree[treeIndex]=arr[start]
            return
        }
        else{
            //intermediate range node
            let mid=Math.floor((start+end)/2)
            let leftChildIndex=2*treeIndex+1;
            let rightChildIndex=2*treeIndex+2;
            this.build(leftChildIndex,start,mid)
            this.build(rightChildIndex,mid+1,end)
            this.tree[treeIndex]=Math.max(this.tree[leftChildIndex],this.tree[rightChildIndex])
        }
    }
    query(treeIndex,start,end,l,r)
    {
        if(end<l || r<start)
        {
            return -Infinity
        }
        else if(start==end)
        {
            return this.tree[treeIndex];
        }
        else if(l<=start && end<=r)
        {
         return this.tree[treeIndex]
        }
        
        else{
            let mid=Math.floor((start+end)/2)
            let leftChildIndex=treeIndex*2+1
            let rightChildIndex=treeIndex*2+2
           let lmax=this.query(leftChildIndex,start,mid,l,r)
           let rmax=this.query(rightChildIndex,mid+1,end,l,r)
           return Math.max(lmax,rmax)
        }

    }
  update(treeIndex,start,end,pos,val)
  {
    if(start==end)
    {
        this.arr[pos]=val;
        this.tree[start]=val
    }
    else{
        let mid=Math.floor((start+end)/2)
        let leftChildIndex=2*treeIndex+1
        let rightChildIndex=2*treeIndex+2
        if(start<=pos && pos<=mid)
        {
            this.update(leftChildIndex,start,mid,pos,val)
        }
        else{
            this.update(rightChildIndex,mid+1,end,pos,val)
        }
        this.tree[treeIndex]=Math.max(this.tree[leftChildIndex],this.tree[rightChildIndex])
    }
  }
}
let arr=[8,9,4,5,10,12,15]
let st=new SegmentTree(arr);

console.log(st.tree)
console.log(st.query(0,0,arr.length-1,1,1))
st.update(0,0,arr.length-1,2,100)
console.log("after updation",st.tree, st.arr)