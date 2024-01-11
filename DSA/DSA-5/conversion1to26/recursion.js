let s="2024"
function NoOfcomb(s,i)
{
    if(i==s.length)
    {
        return 1;
    }
    if(s[i]==0)
    {
        return 0
    }
    let onedigit=s[i]
    let twodigit=s[i]+s[i+1]
    console.log(onedigit,twodigit,twodigit<=26)
    //ans=NoOfcomb(s,i+1)
    if(twodigit<=26)
    {
        //ans+=NoOfcomb(s,i+2)
        return NoOfcomb(s,i+1)+NoOfcomb(s,i+2)
    }
    else{
        return NoOfcomb(s,i+1)
    }
   return ans;
}
console.log(NoOfcomb(s,0))