let edgeList=[[0,1],[1,2],[2,3],[3,0]]
let vertex=5
function createGraph(edgeList,vertex)
{let vector=new Array(vertex);

    for(let i=0;i<vector.length;i++)
    {
        vector[i]=new Array()
    }
 for(let i=0;i<edgeList.length;i++)
 {
let start=edgeList[i][0]
let end=edgeList[i][1]
vector[start].push(end)
vector[end].push(start)
 }
 return vector;    
}
let graph=createGraph(edgeList,vertex)
console.log(graph)
let visited=[]
for(let i=0;i<vertex;i++)
{
    visited[i]=false
}
let ans=[]
// dfs(graph,visited,ans,0)
let cnt=0
for(let i=0;i<vertex;i++)
{
    if(!visited[i])
    {
       // console.log(i)
        cnt++;
        dfs(graph,visited,ans,i)
    }
}
console.log(ans,cnt)
function dfs(graph,visited,ans,vertex)
{
visited[vertex]=true;
ans.push(vertex)
for(let i=0;i<graph[vertex].length;i++)
{
    let neighbour=graph[vertex][i];

    if(!visited[neighbour])
    {
        dfs(graph,visited,ans,neighbour)
    }
}
}
