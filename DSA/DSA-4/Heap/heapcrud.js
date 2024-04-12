function insert(ele,a)
{
    a.push(ele)
    console.log("reached here")
    let lastI=a.length-1;
    let parent=Math.floor((lastI-1)/2)
    while(parent>=0)
    {
        if(a[lastI]<a[parent])
        {
            [a[parent],a[lastI]]=[a[lastI],a[parent]]
            lastI=parent
            parent=Math.floor((parent-1)/2)
        }
        else{
            break;
        }
    }
}
function arrayToHeap(inp)
{
    let lastParent=Math.floor((inp.length-1-1)/2)
   for(let i=lastParent;i>=0;i--)
   {
    heapify(i,inp)
   }
   console.log(inp)

}
function poll(a)
{
    let ele=a[0]
    let temp=a[0]
     a[0]=a[a.length-1]
     a.length=a.length-1;
     heapify(0,a)
return ele


}
function heapify(index,a)
{
let leftIndex=(2*index)+1
let rightIndex=leftIndex+1
let smallIndex=index
if(leftIndex<a.length && a[smallIndex]>a[leftIndex])
{
    smallIndex=leftIndex
}
if(rightIndex<a.length && a[smallIndex]>a[rightIndex])
{
    smallIndex=rightIndex
}
if(smallIndex!=index)
{
    [a[smallIndex],a[index]]=[a[index],a[smallIndex]]
    heapify(smallIndex,a)
}

}
let inp=[5,4,3,2,1]
let heap=[]
for(let i=0;i<inp.length;i++)
{
insert(inp[i],heap)
}
console.log(heap)
console.log(poll(heap))
let test=[5,4,3,2,1]
arrayToHeap(test)
