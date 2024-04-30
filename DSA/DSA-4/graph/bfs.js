function createGraph(v,e)
{let graph=new Array(v).fill([])
    // for(let i=0;i<v;i++)
    // {
    // graph[i]=new Array()
    // }
    for(let i=0;i<e.length;i++)
    {
        let start=e[i][0]
        let end=e[i][1]
        graph[start].push(end)
        graph[end].push(start)
    }
    return graph
}
let v=5

let edges=[[0,1],[1,2],[2,3],[3,1]]
let visited=new Array(v).fill(false)
let visitSeq=[]
graph=createGraph(v,edges)
let cnt=0
//bfs(graph,0,visitSeq,visited)
for(let i=0;i<v;i++)
{
    if(!visited[i])
    {cnt++;
        bfs(graph,i,visitSeq,visited)
    }
}
console.log(visitSeq,cnt)
function bfs(graph,vertex,visitSeq,visited)
{
let q=[vertex]
visited[vertex]=true
visitSeq.push(vertex)
while(q.length!=0)
{
    let size=q.length
    // for(let i=1;i<=size;i++)
    // {
    let ele=q.shift()

    for(let i=0;i<graph[ele].length;i++)
    {
        let neighbour=graph[ele][i]
        if(!visited[neighbour])
        {
            visitSeq.push(neighbour)
            visited[neighbour]=true
            q.push(neighbour)
        }
    //}
    }
    
}

}
//let visitedSeq=[]
