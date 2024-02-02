// roblem Description
// Given a string, find the length of the longest substring which has no repeating characters.

// Input format
// Input is a string.

// Output format
// Output is an integer representing the longest substring with no repeating characters.

// Sample Input 1
// aabcccbcb

// Sample Output 1
// 3

// Explanation 1
// "abc" is the longest substring with no repeating characters.

// Sample Input 2
// cdddddd

// Sample Output 2
// 2

// Explanation 2
// "cd" is the longest substring with no repeating characters.


// Checklist
//bbrute force
function isUnique(str)
{
    let s=new Set(str);
    if(str.length==s.size)
    {
        return true
    }
    else{
        return false
    }
}
let str="aabcccbcb"
//complexity : O(n^3)
function bruteForceApproach(str)
{
let sub=""
let maxL=0
for(let i=0;i<str.length;i++)
{ sub=""
    for(let j=i;j<str.length;j++)
    {
    if(isUnique(str.slice(i,j+1)))
    {
      sub+=str[j]
      maxL=Math.max(maxL,j-i+1)
    }
    else{
        break;
    }
}
}
console.log(maxL)
}
//bruteForceApproach(str)
function usingMap(str)
{
    let m={}
    let left=0;
    let right=0;
    let maxL=0
    let s=''
    while(right<str.length)
    {
    if(!m.hasOwnProperty(str[right]))
    {
        m[str[right]]=1;
       // maxL=Math.max(maxL,right-left+1)
       if(maxL<right-left+1)
       {
        maxL=right-left+1;
        s=str.slice(left,right+1)
       }
        right++;
          
    //maxL=Math.max(maxL,)
    
  
    }
    else{
    while(m.hasOwnProperty(str[right]))
    {
        delete m[str[left]];
        left++;
    }
    }
   
    }
    console.log(s)
return maxL
}
function usingMap2(str)
{
    let m={}
    let left=0
    let right=0
    let s=''
    let maxL=0
    while(right<str.length)
    {
        if(!m.hasOwnProperty(str[right]))
        {
            if(maxL<right-left+1)
            {
                maxL=right-left+1
                s=str.slice(left,right+1)
                
            }
            m[str[right]]=1
            right++;
        }
        else{
            while(m[str[right]]==1)
            {
                delete m[str[left]];
                left++;
            }
        }
    }
    console.log(s)
    return maxL;
}
console.log(usingMap2(str))