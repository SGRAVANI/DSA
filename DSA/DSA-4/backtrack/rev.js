// let o={a:{b:{c:"d",e:"f",g:{h:"i",j:"k",l:'xyz'}}}}
// //let r={}
// function deepCopy(obj)
// {

//     if(typeof(obj)!="object"||obj==null)
//     {
//         return obj
//     }
//     if(Array.isArray(obj))
//     {
//         let copy=[]
//         for(let key in obj)
//         {
//             copy[key]=deepCopy(obj[key])
//         }
//         console.log(copy)
//         return copy
//     }
    
//     if(typeof(obj)=='object')
//     {
//         let copy={}
//         for(let key in obj)
//         {
//             copy[key]=deepCopy(obj[key])
//         }
//         return copy
//     }
   
// //     console.log(obj)
// //     if(typeof(obj)!='object' && (Array.isArray(obj)==false))
// //     {
// //         return obj;
// //     }
// //    let ans=[]
// //    if(Array.isArray(obj))
// //    {
// //     for(let key in obj)
// //     {
// //         ans[key]=deepCopy(obj[key])
// //     }
// //    }
// //    let r={}
// //     for(let key in obj)
// //     {
// //         r[key]=deepCopy(obj[key])
// //     //   if(typeof(obj[key])=="object") 
// //     //   {
// //     //     r[key]=deepCopy(obj[key])
// //     //   }
// //     //   else{
// //     //     r[key]=obj;
// //     //   }
// //     }
// //     return r;
// }
// let r=deepCopy(o)
// console.log(r)
// console.log(r.a.b.g)
// //o.a.b.g.j=12
// //console.log(r.a.b.g)

//minimum number of flips required to convert a||b to c;
let a=8
let b=3
let c=5
let or=a|b
let flips=0
for(let i=0;i<=31;i++)
{
    let imask=1<<i
    let ithBitOr=(or&imask)==0?0:1;
    let ithBitc=(c&imask)==0?0:1
   // console.log(ithBitOr,ithBitc)
    if(ithBitOr!=ithBitc)
    {
    if(ithBitOr==0)
    {
    
    flips++
    }
    else{
        let ithbita=(a&(1<<i))==0?0:1
        let ithbitb=(b&(1<<i))==0?0:1
        if(ithbita==1)
        {
            flips++
        }
        if(ithbitb==1)
        {
            flips++
        }

    }
   console.log("flips at i,",i,ithBitOr,ithBitc)
    }
}

console.log(flips)