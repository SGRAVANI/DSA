function reverse(n)
{
    let rev=0;
    while(n!=0)
    {
        let lastd=n%10;
        rev=rev*10+lastd;
        n=Math.floor(n/10);
    }
    console.log("reverse number is :",rev)
}
let reader=require("readline-sync")
let n=reader.questionInt("enter number to reverse");
reverse(n)