//A-B-C
//AB-C
//ABC
//A_BC
function solve(inp,out)
{
if(inp.length==0)
{
    console.log(out)
   return
}
let op1=out;
let op2=out;
op1+=inp[0]
op2+=` ${inp[0]}`
inp=inp.slice(1)
solve(inp,op1)
solve(inp,op2)

}
let s="ABC"
solve(s.slice(1),"A")