let arr=[4,5,3,1,2,9,10,6]
let heap=[]
function insert(ele)
{
heap.push(ele);
let child=heap.length-1;
let parent=Math.floor((child-1)/2)
while(child>0)
{
    if(heap[parent]>heap[child])
    {
    [heap[parent],heap[child]]=[heap[child],heap[parent]];
    child=parent
    parent=Math.floor((parent-1)/2)
    }
    else{
        break;
    }
}
}
function poll()
{
    let ele=heap[0];
    let lastIndex=heap.length-1;
    let t=heap[0]
    heap[0]=heap[lastIndex]
    heap[lastIndex]=t;
    heap.length--;
    heapify(0)
    return ele
}
function heapify(index)
{
    let smallest=index
    let leftChild=smallest*2+1;
    let rightChild=smallest*2+2;
    if(leftChild<heap.length && heap[smallest]>heap[leftChild])
    {
        smallest=leftChild
    }
    if(rightChild<heap.length && heap[smallest]>heap[rightChild] )
    {
        smallest=rightChild
    }
    if(smallest!=index)
    {
        [heap[smallest],heap[index]]=[heap[index],heap[smallest]]
        heapify(smallest)
    }
}
for(let i in arr)
{
    insert(arr[i])
}

console.log(heap)
console.log(poll(),"is deleted")
console.log(heap)
