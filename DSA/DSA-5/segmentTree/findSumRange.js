class SegmentTree{
    constructor(arr)
    {
        this.arr=arr;
        this.tree=new Array(arr.length*4)
        this.build(0,0,arr.length-1)
    }
    build(treeIndex,start,end)
    {
        if(start==end)
        {
            this.tree[treeIndex]=this.arr[start]
            return
        }
        else{
            let mid=Math.floor((start+end)/2)
            let leftChildIndex=2*treeIndex+1
            let rightChildIndex=2*treeIndex+2
            this.build(leftChildIndex,start,mid)
            this.build(rightChildIndex,mid+1,end)
            this.tree[treeIndex]=this.tree[leftChildIndex]+this.tree[rightChildIndex]
        }

    }
    query(treeIndex,start,end,l,r)
    {
        
         if(r<start ||end<l)
        {
            return 0
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
            let leftChildIndex=2*treeIndex+1
            let rightChildIndex=2*treeIndex+2
            let leftSum=this.query(leftChildIndex,start,mid,l,r)
            let rightSum=this.query(rightChildIndex,mid+1,end,l,r)
            return leftSum+rightSum
        }
    }
    update(treeIndex,start,end,pos,val)
    {
        if(start==end)
        {
            this.tree[treeIndex]=val;
            this.arr[start]=val
            return
        }
        else {
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
            this.tree[treeIndex]=this.tree[leftChildIndex]+this.tree[rightChildIndex]
        }
    }

}
let arr=[10,20,30,40,50]
let st=new SegmentTree(arr)
console.log(st.tree,arr)
console.log(st.query(0,0,arr.length-1,1,3))
st.update(0,0,arr.length-1,2,80)
console.log(st.tree,arr)
console.log(st.query(0,0,arr.length-1,1,3))