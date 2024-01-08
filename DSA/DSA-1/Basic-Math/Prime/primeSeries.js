//sieve of eratosthenes
// print all prime numbers between 2 to n-1
//naive solution
function prime(n)
{
    for(let i=2;i<Math.sqrt(n);i++)
    {
        if(n%i==0)
        {
            return false;
        }
    }
    return true
}
let reader=require("readline-sync")
let n=reader.questionInt("enter number :")
for(let i=2;i<n;i++)
{
    if(prime(i))
    {
        console.log(i)
    }
}

//complexity O(nsqrt(n))
//using sieve of eratosthenes
//steps
// 1. generate array from 1 to n and store true for every Number
// once task completed at end for all primenumbers it remains True and  for composite numbers it will becom false
// 2. begin with 2 and marks it's multile as false

// 2: false, 4:false, 6:false,8:false,10:false
//2: will marks following false
//{2,4,6,8,10,12,14,16,18,20,22,24,26,...}
// then marks all multiple of 3 as false
// 3:false, 6:false, 9:false,15:false,
//3:{3,6,9,12,15,18,21,24,27,30}
//5: because multiple of 2 has already marked 4:false
//5:{5,25,35,...}
//5:false,

function sieveOfEratosthenes(n)
{
    let res=[]
    for(let i=2;i<n;i++)
    {
        res[i]=true
    }

  
    for(let i=2;i<Math.sqrt(n);i++)
    {
        for(j=i*i;j<n;j+=i)
        {
            res[j]=false;
        }
    }
    for(let i=2;i<n;i++)
    {
        if(res[i])
        {
            console.log(i)
        }
    }
}
//complexity O(sqrt(n)*sqrt(n))
sieveOfEratosthenes(n)

// Time Complexity: O(n*log(log(n)))
// Auxiliary Space: O(n)

 