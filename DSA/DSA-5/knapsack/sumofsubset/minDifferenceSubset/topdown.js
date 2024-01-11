//arr=[1,2,7]
//need to find subset with min diiference
//ex s1={},s2={1,2,7} diff=10
//s1={1} s2={2,7} diff=9
//s1={1,2} s2={7} diff=7-3=4
//min is 4
//ans =4
//steps
//1. find sum of all elements and range will be (0,sum)
//2. find subset for(arr,arr.length,sum)
//3. generate vector from last row of subset table entries who have value true 
//4 from table consider only comlumns which are 0 to sum/2
//only in this case we will get positive difference for s2-s1
//5. iterate vector array and apply formala of diff=sum-vector[i] and find min difference by finding difference of every partion
// let arr=[1,2,7]
// let sum=arr.reduce((sum,ele)=>sum+ele,0)

// let dp=new Array(arr.length+1)
// for(let i=0;i<dp.length;i++)
// {
//     dp[i]=new Array(sum+1)
// }
// for(let i=0;i<dp.length;i++)
// {
//     for(let j=0;j<dp[i].length;j++)
//     {
//         dp[i][j]=-1;
//     }
// }

// function subsetSum(arr,n,sum)
// {
//     if(n==0&&sum==0)
//     {
//         return true
//     }
//     if(n==0&&sum>0)
//     {
//         return false
//     }
//     if(n>0 && sum==0)
//     {
//         return true
//     }
//     if(dp[n][sum]!=-1)
//     {
//         return dp[n][sum]
//     }
//     else{
//         if(arr[n-1]<=sum)
//         {
//             return dp[n][sum]= subsetSum(arr,n-1,sum-arr[n-1])||subsetSum(arr,n-1,sum)
//         }
//         else{
//             return dp[n][sum]=subsetSum(arr,n-1,sum)
//         }
//     }
// }
// subsetSum(arr,arr.length,sum)
// console.log(dp[arr.length])

let arr = [1, 2, 7];
let sum = arr.reduce((sum, ele) => sum + ele, 0);

let dp = new Array(arr.length + 1);
for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(sum + 1).fill(-1);
}

function subsetSum(arr, n, sum) {
    if (n === 0 && sum === 0) {
        return true;
    }
    if (n === 0 && sum > 0) {
        return false;
    }
    if (n > 0 && sum === 0) {
        return true;
    }
    if (dp[n][sum] !== -1) {
        return dp[n][sum];
    } else {
        if (arr[n - 1] <= sum) {
            return (dp[n][sum] = subsetSum(arr, n - 1, sum - arr[n - 1]) || subsetSum(arr, n - 1, sum));
        } else {
            return (dp[n][sum] = subsetSum(arr, n - 1, sum));
        }
    }
}

console.log(dp)
console.log(subsetSum(arr, arr.length, sum));