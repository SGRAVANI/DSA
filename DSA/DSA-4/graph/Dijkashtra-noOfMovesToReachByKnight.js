let n=8
let start=[2,1]
let end=[8,5]
let d=new Array(9)
for( let i=1;i<d.length;i++)
    {
        d[i]=new Array(8).fill(Infinity)
    }
//console.log(d,start,end)
class Pair{
    constructor(row,col,val){
        this.row=row;
        this.col=col;
        this.val=val;
    }
}
class Heap{
    constructor()
    {
        this.data=[]
    }
    insert(e)
    {
        this.data.push(e)
       let i=this.data.length-1;
       let parent=Math.floor((i-1)/2)

       while(parent>=0 && this.data[i].val<this.data[parent].val)
        {
            [this.data[i],this.data[parent]]=[this.data[parent],this.data[i]]
            i=parent
            parent=Math.floor((parent-1)/2)
            
        }

    }
    poll()
    {
        let ele=this.data[0]
        this.data[0]=this.data[this.data.length-1]
        this.data.length--
        this.heapify(0)
        return ele;
    }
    heapify(i)
    {
        let smallest=i
        let left=(smallest*2)+1
        let right=left+1
        if(left<this.data.length && this.data[left].val<this.data[smallest].val)
            {
                smallest=left
            }
            if(right<this.data.length && this.data[right].val<this.data[smallest].val)
                {
                    smallest=right
                }
        if(smallest!=i)
            {
                [this.data[i],this.data[smallest]]=[this.data[smallest],this.data[i]]
                this.heapify(smallest)
            }
    }
}
function dijkashta(d,start,end)
{
    d[start[0]][start[1]]=0
    
    let moves = [[1, 2], [1, -2], [-1, 2], [-1, -2], [2, 1], [2, -1], [-2, 1], [-2, -1]];
    let pair=new Pair(start[0],start[1],0)
    let q=new Heap()
    q.insert(pair)
    while(q.data.length!=0)
        {
        console.log(q.length)
            let ele=q.poll()
            console.log(ele)
            // let r=row
            // let c=col
            // let val=ele.val            
            for(let i=0;i<moves.length;i++)
                {
                    let newr=ele.row+moves[i][0]
                    let newc=ele.col+moves[i][1]
                    if(newr>=1 && newr<=n && newc>=1 &&newc<=n)
                        {
                            let newd=ele.val+1;
                            if(newd<=d[newr][newc])
                                {
                                    d[newr][newc]=newd
                                    q.insert(new Pair(newr,newc,newd))
                                }
                        }
                }
        }
        console.log(d)
    // h.insert(new Pair(1,2,9))
    // h.insert(new Pair(1,2,-1))
    // h.insert(new Pair(1,2,-2))
    // h.insert(new Pair(1,2,11))
    // console.log(h)
    // h.poll()
    // console.log(h)
    return d[end[0]][end[1]]
}
console.log(dijkashta(d,start,end))