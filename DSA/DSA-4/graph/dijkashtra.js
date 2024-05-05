class Pair{
    constructor(vertex,val)
    {
        this.val=val  
        this.vertex=vertex
    }
}
class Heap{
    constructor()
    {
    this.data=new Array()
    }
    insert(ele)
    {
        let pair=new Pair(ele[0],ele[1])
        this.data.push(pair)
        let ind=this.data.length-1
        let parentI=Math.floor(ind/2)
        while(parentI>=0 && this.data[ind].val<this.data[parentI.val])
            {
                [this.data[parentI],this.data[ind]]=[this.data[ind],this.data[parentI]]
                ind=parentI
                parentI=Math.floor(parentI/2)
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
        let left=(i*2)+1;
        let right=left+1
        if(left<this.data.length && this.data[smallest].val>this.data[left].val)
            {
                smallest=left
            }
            if(right<this.data.length && this.data[smallest].val>this.data[right].val)
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


// let e=[[0,1,1],[1,2,3],[0,2,6]]
let e=[[0,1,4],[0,7,8],[1,2,8],[1,7,11],[2,3,7],[2,8,2],[2,5,4],[3,4,9],[3,5,14],[4,5,10],[5,6,2],[6,8,6],[6,7,1],[7,8,7]]
let v=9
function generateGraph(v,e)
{
    let vector=new Array(v)
    for(let i=0;i<vector.length;i++)
        {
            vector[i]=new Array()
        }
    for(let i=0;i<e.length;i++)
        {
        let start=e[i][0]
        let end=e[i][1]  
        let val=e[i][2]
        vector[start].push([end,val])
        vector[end].push([start,val])                    
        }
        return vector
}
let h=new Heap()
let g=generateGraph(v,e)
console.log(g)
// for(let i=0;i<g.length;i++)
//     {
//         for(let j=0;j<g[i].length;j++)
//             {
//              //   console.log(g[i][j],g[i][j][0])
//                 h.insert(g[i][j])
//             }
        
//     }
// console.log(h.data)
// h.poll()
// console.log(h.data)
// h.poll()
// console.log(h.data)
let source=0
let d=new Array(v).fill(Infinity);
let path=[]
for(let i=0;i<v;i++)
    {
  path[i]=i
    }
d[source]=0
h.insert([0,0])
while(h.data.length!=0)
    {
        let {vertex,val}=h.poll();
        for(let i=0;i<g[vertex].length;i++)
            { 
                let [n,v]=g[vertex][i]
                console.log(n,v)
                let newD=val+v;
                let ver=n;
                if(newD<d[ver])
                    {
                        d[ver]=newD;
                        let pair=[ver,newD]
                        h.insert(pair)
                        path[n]=vertex
                    }
            }

    }
    console.log(d)
    console.log(path)