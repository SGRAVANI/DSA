class Heap{
    constructor()
    {
        this.data=[]
    }
    insert(ele)
    {
        this.data.push(ele)
        let i=this.data.length-1
        let parent=Math.floor((i-1)/2)
        while(parent>=0)
        {
            // let childDiff=this.data[i].gas-this.data[i].burn
            // let parentDiff=this.data[parent].gas-this.data[parent].burn
           // if(parentDiff<childDiff)
            if(this.data[parent].index>this.data[i].index)
            {
                [this.data[parent],this.data[i]]=[this.data[i],this.data[parent]]
                i=parent
                parent=Math.floor((parent-1)/2)
            }
            else{
                break;
            }
        }
    }
    heapify(i)
    {
        let min=i
        let left=(i*2)+1
        let right=left+1
       if(left <this.data.length && this.data[left].index<this.data[min].index) 
       {
        min=left
       }
       if(right<this.data.length && this.data[right].index<this.data[min].index) 
       {
        min=right
       }
        // if(left<this.data.length)
        // {
        //     let leftDiff=this.data[left].gas-this.data[left].burn
        //     let iDiff=this.data[max].gas-this.data[max].burn
        //     if(iDiff<leftDiff)
        //     {
        //         max=left
        //     }
        // }
        // if(right<this.data.length)
        // {
        //     let rightDiff=this.data[right].gas-this.data[right].burn
        //     let iDiff=this.data[max].gas-this.data[max].burn
        //     if(iDiff<rightDiff)
        //     {
        //         max=right
        //     }
        // }
        if(min!=i)
        {
            [this.data[min],this.data[i]]=[this.data[i],this.data[min]]
            this.heapify(min)
        }
    }
    poll()
    {
        let ele=this.data[0]
        this.data[0]=this.data[this.data.length-1]
        this.data.length--
        this.heapify(0)
        return ele
    }
}
class Pair{
    constructor(gas,burn,index)
    {
        this.gas=gas
        this.burn=burn;
        this.index=index;
    
    }
}
let gas=[5,1,2,3,4,8]
//gas=[2,3,4]
let burn=[4,2,3,1,5,5]
//burn=[3,4,3]
let pair=[]
for(let i=0;i<gas.length;i++)
{
    pair.push(new Pair(gas[i],burn[i],i))
}
console.log(pair)
let h=new Heap()
for(let i=0;i<pair.length;i++)
{
    let diff=pair[i].gas-pair[i].burn
    if(diff>=0)
    {
    h.insert(pair[i])   
    }
}
console.log(h.data)
let res=-1;
for(let i=0;i<h.data.length;i++)
{
    let start=h.poll()
    let j=start.index
    let bal=0
    //let i=start.index
    console.log("inside loop:",start)
    do{
    let rem=gas[j]-burn[j]+bal;
    
    if(rem>=0)
    {
    j=(j+1)%gas.length;
    bal=rem;
    console.log(j,bal)
n    if(j==start.index)
    {
    if(res==-1)
    {
        res=start.index
    }
    else{
        res=Math.min(res,start.index)
    }
    }
    }
    else{
        //console.log("reak due to ",j,bal)
        break;
    }
    }while(j!=start.index);

}
console.log(res)