//let set =new Set()
function solve(s,start)
{
//   console.log(start)
if(start==s.length-1)
{
  //  console.log("reached hete")
   // s=s.join('')
  // if(set.has(s.join(''))==false)
   ///{
    //set.add(s.join(''))
    console.log(s.join(''))

    return
  //}
}
if(start>s.length)
{
    return
}
//let set=new Set()
for(let i=start;i<s.length;i++)
{
    // if(set.has(s[i]))
    // {
    //     continue
    // }
    // else {
    //    set.add(s[i])
    
    [s[i],s[start]]=[s[start],s[i]]
    
    //    console.log(s)
// if(set.has(s.join(''))==false)
// {
//    set.add(s.join(''))
    if(start+1<s.length)
     {
    solve(s,start+1)
   }

    [s[i],s[start]]=[s[start],s[i]]
    
}

}
//}
let s="abc"
s=s.split('')
solve(s,0)
//console.log(set)