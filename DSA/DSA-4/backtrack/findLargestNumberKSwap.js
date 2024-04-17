
function solve(n,start,k)
{

    if(k==0)
    {   console.log("stopped due to k")
        return
    }
    if(start==n.length-1)
    {
        console.log("number is : ",n.join(''))
    let num=Number(n.join(''))
    console.log(num)
  //  m=Math.max(m,num)
    return
    }
   
    let maxChar=Number(n[start])
        let maxInd=start
        console.log("start is ",start,n[start])
    for( i=start+1;i<n.length;i++)
    { 
        if(maxChar<Number(n[i]) )
        {
            maxChar=n[i]
            maxInd=i
        }
    }
    console.log(maxChar)
    console.log(maxInd,start)
    if(maxInd!=start)
    {

   [n[maxInd],n[start]]=[n[start],n[maxInd]]
//    if(start+1<n.length)
//    {
    solve(n,start+1,k-1)
    // [n[maxInd],n[start]]=[n[start],n[maxInd]]
   //}
    }
    else{
        console.log("reachyed here for  start:",start,n[start])
        solve(n,start+1,k)
    }
       // console.log(i,start,n[i],n[start])
        
    //     [n[i],n[start]]=[n[start],n[i]]
    //      if((start+1)<n.length)
    //      {
       
    //         solve(n,start+1)
            
    //     }
    //     [n[i],n[start]]=[n[start],n[i]]
    //  //   }
    //}

}
let k=10
let n=["1","2","4","4"]
let m=-Infinity;
solve(n,0,k)
//console.log(m)