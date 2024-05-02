
class DSU{
    constructor(n)
    {   this.parent=new Array(n+1)
        this.size=new Array(n+1).fill(1)
        for(let i=1;i<=n;i++)
        {
            this.parent[i]=i
        }
        

    }
    findParent(u)
    {
        if(this.parent[u]==u)
        {
            return u
        }
        else{
            return this.parent[u]=this.findParent(this.parent[u])
        }
    }
    disjointUnion(u,v)
    {
        let pu=this.findParent(u)
        let pv=this.findParent(v)
        console.log(u,pu,v,pv)
        if(pu==pv)
        {
            return true
        }
        else{
        if(this.size[pu]>=this.size[v])
        {
            this.parent[pv]=pu
            this.size[pu]+=this.size[pv]
        }
        else{
            this.parent[pu]=pv;
            this.size[pv]+=this.size[pu]
        }
    }
    }
}
// function dsu()
// {

// }
// func
let e=[[1,2],[2,3],[3,1]]
let d=new DSU(3)
console.log(d.parent,d.size)
for(let i=0;i<e.length;i++)
{
   let r= d.disjointUnion(e[i][0],e[i][1])
   if(r==true)
   {
    console.log("cycle found")
    break
   }
}
console.log(d.parent,d.size)