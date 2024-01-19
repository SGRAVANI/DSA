//console.log()
let str="mam"
let temp=[]
let ans=[]
console.log(isPali(str))
paliPartition(str,temp)
console.log(ans)

function isPali(s)
{
    let start=0;
    let end=s.length-1
    while(start<=end)
    {
        if(s[start]!=s[end])
        {
            return false
        }
        start+=1;
        end-=1;
    }
    return true

}

function paliPartition(s,temp)
{
    if(s.length==0)
    {
        ans.push([...temp])
        return
    }
    for(let i=0;i<s.length;i++)
    {
        let left=s.substring(0,i+1)
        let right=s.substring(i+1)
        if(isPali(left))
        {

            temp.push(left)  
            paliPartition(right,temp)
            temp.pop()

        }
        // else{
        //     paliPartition(right,temp)
        // }
     
    }
}