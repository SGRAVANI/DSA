let c=0
let r=[]
function ugly2(n,subr)
{
// if(n==0)
// {
//    // console.log( r[r.length-1])
//     return subr
// }
if(r.length==n)
{
return r;
}

let one=ugly2(n-1,subr*2)
let two=ugly2(n-1,subr*3)
let three=ugly2(n-1,subr*5)
r.push(Math.min(one,two,three))
}
//c=0;
r=[1]
ugly2(12,1)
console.log(r)