// Given N lecture timings, with their start time and end time (both inclusive), the task is to find the minimum number of halls required to hold all the classes such that a single hall can be used for only one lecture at a given time. Note that the maximum end time can be 105.
// Examples: 
 

// Input: lectures[][] = {{0, 5}, {1, 2}, {1, 10}} 
let lectures=[[0, 5], [1, 2], [6, 10]] 
lectures.sort((a,b)=>a[0]-b[0]);
//console.log(lectures)
let queue=[lectures[0][1]]
for(let i=1;i<lectures.length;i++)
{
    let start=lectures[i][0]
    let end=lectures[i][1]
    let minEle=Math.min(...queue)
    if(start>=minEle)
    {
    let index=queue.indexOf(minEle);
    queue.splice(index,1);
    queue.push(end);
    }
    else{
        queue.push(end)
    }
}

console.log(queue,queue.length)