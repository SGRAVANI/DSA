//find longest common substring between s1 & s2
let s1="abcjklp"
let s2="acjkp"
let ans=0;
let ansString=""
for(let i=0;i<s1.length;i++)
{
   
    let subAnsStr=""

    for(let j=0;j<s2.length;j++)
    {
    if(s1[i]==s2[j])
    {
        let tempAns=1;
        subAnsStr+=s1[i];
        let s1I=i+1;
        let s2J=j+1;
        while(s1I<s1.length && s2J<s2.length && s1[s1I]==s2[s2J])
        {
         subAnsStr+=s1[s1I];
         s1I++;
         s2J++;
         tempAns++
        }
        console.log(tempAns,subAnsStr)
        if(ans<tempAns)
        {
            ans=tempAns
            ansString=subAnsStr
            
        }
    }
    }
  
}
console.log("max length sub string: " ,ansString,"\nlength is : ",ans)