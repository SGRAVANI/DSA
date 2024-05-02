let e=[[0,1],[0,2],[1,3],[2,4]]
let v=5
function createGraph(e,v)
{
    let graph=new Array(v)
    
    for(let i=0;i<v;i++)
    {
        graph[i]=new Array()
    }
    console.log(graph)
    let indegree=new Array(v).fill(0)
    for(let i=0;i<e.length;i++)
    {
        let s=e[i][0]
        let end=e[i][1]
        graph[s].push(end)
        indegree[end]++
    }
    return [graph,indegree]
}
let [g,indegree]=createGraph(e,v)
console.log(g,indegree)
function indegreeFromAdj(adj)
{
    let ind=new Array(adj.length).fill(0)
    for(let i=0;i<adj.length;i++)
    {
        for(let j=0;j<adj[i].length;j++)
        {
           let v=adj[i][j];
           ind[v]++
        }
    }
    return ind;
}
console.log(indegreeFromAdj(g))
