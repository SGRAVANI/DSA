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
if(prime(n))
{
    console.log(n ," is prime")
}
else{
    console.log(n,"is composite")
}