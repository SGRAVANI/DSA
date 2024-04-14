// /**
//  * @param {string} s
//  * @return {string[]}
//  */
 
// function solve(s,op,r)
// {
//       if(s.length==0)
//     {
//     r.push(op)
//     return
//     }
//     let op1=op
//     let op2=op
//      op1=op1+s[0]
//     if(s[0]>='a'&&s[0]<='z')
//     {
        
//          op2=op2+s[0].toUpperCase()
//         s=s.slice(1)
//         solve(s,op1,r)
//         solve(s,op2,r)
//     }
//     else if(s[0]>='A'&&s[0]<='Z')
//     { op2=op2+s[0].toLowerCase()
//         s=s.slice(1)
//         solve(s,op1,r)
//         solve(s,op2,r)

//         //op2=op2+s[0].toLowerCase()
//     }
//     else{
//      s=s.slice(1)
//         solve(s,op1,r)

//     }
// //    if(s.length===0)
// //    {
// //    r.push(op)
// //    return
// //    }
   
// //    if(s[0]>='a'&&s[0]<='z')
// //    {

// //     let op1=op
// //    let op2=op
// //     op1=op1+s[0]
// //     op2=op2+s[0].toUpperCase()
// //     s=s.slice(1) 
// //     solve(s,op1,r)
// //     solve(s,op2,r)  
// //         }
// //    else if(s[0]>='A'&&s[0]<='Z')
// //    {
// //     let op1=op
// //     let op2=op
// //      op1=op1+s[0]
// //      op2=op1+s[0].toLowerCase()
// //      s=s.slice(1) 
// //      solve(s,op1,r)
// //      solve(s,op2,r)  
// //     }
// //    else{
// //     let op1=op+s[0]
// //     s=s.slice(1)
// //       solve(s,op1,r)
// //    }
  
// }
// var letterCasePermutation = function(s) {
//    let r=[]
//    solve(s,"",r)
//    return r;
// };
// let s="c"

// console.log(letterCasePermutation(s))

//method 2

function solve(s,i,subs,r)
{
if(i==s.length)
{
    r.push(subs)
    return
}
if(s[i]>='a'&&s[i]<='z')
{
solve(s,i+1,subs+s[i],r)
solve(s,i+1,subs+s[i].toUpperCase(),r)
}
else if(s[i]>='A'&&s[i]<='Z')
{
    solve(s,i+1,subs+s[i],r)
    solve(s,i+1,subs+s[i].toLowerCase(),r)
}
else{
solve(s,i+1,subs+s[i],r)
}
}
let r=[]
let s="a1b2"
solve(s,0,"",r)
console.log(r)