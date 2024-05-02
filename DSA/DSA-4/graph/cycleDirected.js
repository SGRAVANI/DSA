let e=[[0,1],[1,2],[3,2]]
let v=4
function generateGraph(edges,v)
{
    console.log(edges)
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
     //   vector[end].push(start)
    }
    return vector
}
let graph=generateGraph(e,v)
console.log(graph)

function dfs(cur,visited,i,parent,graph)
{
    visited[i]=true
    cur[i]=true
    for(let j=0;j<graph[i].length;j++)
    {
        let neighbour=graph[i][j]
        if(!visited[neighbour])
        {
           let ans= dfs(cur,visited,neighbour,i,graph)
           if(ans==true)
           {
            return ans;
           }
        }
        else{
            if(cur[neighbour]==true && visited[neighbour] )
            {
                return true
            }
        }
    }
    return false
}
let visited=new Array(v).fill(false)
let f=false
for(let i=0;i<v;i++)
{
    let cur=new Array(v).fill(false)
    if(!visited[i])
    {
        let ans=dfs(cur,visited,i,-1,graph)
        if(ans==true)
        {
            f=true
            break
        }
    }
}
console.log(f)