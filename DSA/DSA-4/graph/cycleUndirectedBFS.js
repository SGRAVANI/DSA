let edges=[[1,2],[2,3],[3,0]]
let v=4
function generateGraph(edges,v)
{
    let vector=[]
    for(let i=0;i<v;i++)
    {
        vector[i]=new Array()
    }
    for(let i=0;i<edges.length;i++)
    {
        let start=edges[i][0]
        let end=edges[i][1]
        vector[start].push(end)
        vector[end].push(start)
    }
    return vector
}
let graph=generateGraph(edges,v)
console.log(graph)
let visited=new Array(v).fill(false)
class Pair{
    constructor(vertex,parent)
    {
        this.vertex=vertex
        this.parent=parent
    }
}
function bfs(graph,visited,i,parent)
{
let pair=new Pair(i,parent)
let q=[pair]
visited[i]=true
while(q.length!=0)
{
let ele=q.shift()
let  vertex=ele.vertex
let parent=ele.parent
for(let j=0;j<graph[vertex].length;j++)
{
    let neighbour=graph[vertex][j]
    if(!visited[neighbour] )
    {
        let p=new Pair(neighbour,vertex)
        q.push(p)
        visited[neighbour]=true
    }
    else{
        if(visited[neighbour]==true && parent!=neighbour)
        {
            return true;
        }
    }
}
}
return false
}
let f=false
for(let i=0;i<v;i++)
{
    if(!visited[i])
    {
        console.log(visited)
        let ans=bfs(graph,visited,i,-1)
        if(ans==true)
        {
          //  console.log(true)
           f=true
            break;
        }
    }
}

console.log(f)