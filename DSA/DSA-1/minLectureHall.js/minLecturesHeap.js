let lectures=[[0, 5], [1, 2], [1, 10]] 
let heap=[]
function insert(ele)
{
    heap.push(ele);
    let childI=heap.length-1;
    while(childI>0)
    {
        let parentI=Math.floor((childI-1)/2)
        if(heap[parentI]>heap[childI])
        {
            [heap[parentI],heap[childI]]=[heap[childI],heap[parentI]];

        }
        else{
            break
        }
        childI=parentI
        
    }
    
}

//console.log(heap)
function poll()
{
    let ele=heap[0]
    let t=heap[0]
    heap[0]=heap[heap.length-1]
    heap[heap.length-1]=t
    heap.length--;
    heapify(0)
    return ele
}
function heapify(index)
{
    let smallest=index  
    let leftC=smallest*2+1
    let rightC=leftC+1
    if(leftC<heap.length && heap[leftC]<heap[smallest])
    {
        smallest=leftC
    }
    if(rightC<heap.length && heap[rightC]<heap[smallest])
    {
        smallest=rightC
    }
    if(smallest!=index)
    {
        [heap[smallest],heap[index]]=[heap[index],heap[smallest]]
        heapify(smallest)
    }
}
//poll()

lectures.sort((a,b)=>a[0]-b[0])
insert(lectures[0][1])
for(let i=1;i<lectures.length;i++)
{
    let start=lectures[i][0]
    let end=lectures[i][1]
    if(start>=heap[0])
    {
        poll()
        insert(end)
    }
    else{
        insert(end)
    }
}
console.log(heap)
console.log(heap.length)