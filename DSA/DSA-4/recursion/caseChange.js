function solve(s,out)
{
    if(s.length==0)
    {
        console.log(out)
        return
    }
let op1=out
let op2=out
op1+=s[0]
op2+=s.charAt(0).toUpperCase()
s=s.slice(1)
solve(s,op1)
solve(s,op2)
}
//input ab
//output:
//ab
//aB
//Ab
//AB
let s="abc"
solve(s,"")