function solve(s,i,subs)
{
    if(i==s.length)
    {
        console.log("string is:",subs);
        return;
    }
   
    solve(s,i+1,subs)
    solve(s,i+1,subs+s[i])
}
let s="ab"
solve(s,0,"")
