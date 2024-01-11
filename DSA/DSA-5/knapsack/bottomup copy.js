function knapsack(weight,val,cap,n)
{
    let table=new Array(n+1)
    for(let i=0;i<n+1;i++)
    {
        table[i]=new Array(cap+1);
    }
    for(let i=0;i<n+1;i++)
    {
        for(let j=0;j<cap+1;j++)
        {
            table[i][0]=0;
            table[0][j]=0;
        }
    }
    for(let i=1;i<n+1;i++)
    {
        for(let j=1;j<cap+1;j++)
        {
            if(weight[i-1]<=j)
            {
                table[i][j]=Math.max(val[i-1]+table[i-1][j-weight[i-1]],table[i-1][j])
            }
            else{
                table[i][j]=table[i-1][j]
            }
        }
    }
    console.log(table)
    return table[n][cap]
}
let weight=[1,3,2,5]
let val=[1,4,5,7]
let cap=7
let n=4
console.log(knapsack(weight,val,cap,4))