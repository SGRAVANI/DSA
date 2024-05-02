// class Vertex{
//     constructor(i)
//     {   this.val=i
//         this.parent=null;
//         this.neighbours=[]
//     }
// }
// class Graph{
//     constructor()
//     {
//          v=[]
//     }
// }
let edges=[[1,2],[2,3],[3,1]]
let v=4
//let graph=[]
let graph=new Array(v)
//let g=new Graph();
for(let i=0;i<v;i++)
{
     graph[i]=new Array();
    //g.push(ver)
}
console.log(graph)
console.log(edges)


for(let i=0;i<edges.length;i++)
{
  //    g.v.push()

    let start=edges[i][0]
    let end=edges[i][1]
   console.log(start,end)
    graph[start].push(end)
      graph[end].push(start)

}
console.log(graph)
let visited=new Array(v).fill(false)

//console.log(dfs(graph,visited,0,-1))
// let val=dfs(graph,visited,0,-1)
// console.log(val)
let f=false
for(let i=0;i<v;i++)
{
   if(!visited[i])
   {
    let ans=dfs(graph,visited,i,-1)
    if(ans==true)
    {
        console.log("reached in cycle")
        f=true
        break
    }
}
}

console.log(f)



function dfs(graph,visited,i,parent)
{
 //   console.log(parent)
visited[i]=true;
for(let j=0;j<graph[i].length;j++)
{
    let neighbour=graph[i][j]
    //console.log(neighbour)
    if(neighbour!=parent &&visited[neighbour]==true )
    {
        return true
    }
    else{
        if(!visited[neighbour])
        {
     let ans=dfs(graph,visited,neighbour,i)
     if(ans==true)
     {
        return true
     }
        }
    }
   
}
return false
}
