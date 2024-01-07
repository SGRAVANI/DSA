function factorial(n)
{
    if(n<=1)
    {
        return 1;
    }
    else{
        return n*factorial(n-1)
    }
}

let reader=require("readline-sync");
let n=reader.questionFloat("enter value of n:");
console.log(n,"'s factorial is  :",factorial(n));