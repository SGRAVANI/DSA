let s="aac"
function solve(s,op)
{
    if(s.length==0)
    {
        console.log("op is :",op)
        return
    }
    if(s.length<0)
    {
        return
    }
    let set=new Set()
    for(let i=0;i<s.length;i++)
    {
        let s1=s.substring(0,i)
        let s2=s.slice(i+1)
        let news=s1+s2
        if(set.has(news)==false)
        {
            solve(news,op+s[i])
            set.add(news)
        }
      
        
    }
}
solve(s,"")