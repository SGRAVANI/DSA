// You are given two strings, a main string S, and a pattern P. You have to find the starting indices of the anagrams of P in S.


// Anagrams are permutations of a string. For P="abc”, its anagrams are abc,acb,bca,bac,cba,cab.


// Note that indexing starts at 0.

// Input format
// There is one line of input, containing two space-separated strings S and P.

// Output format
// First-line should contain the number of such starting indices.

// Next line should contain the indices in increasing order separated by a space.

// Sample Input 1
// aaba ab

// Sample Output 1
// 2

// 1 2

// Explanation 1
// The anagrams of pattern "ab" are “ab” and “ba”. These are present at indices 1 and 2 of the input string “aaba”.

// Sample Input 2
// bacdgabcda abcd

// Sample Output 2
// 3

// 0 5 6

// Explanation 2
// The anagrams of "abcd" can be seen as “bacd” at index 0, “abcd” at index 5 and “bcda” at index 6.

let s="bacdgabcda"
let subs= "abcd"
let subm=new Map()
let smap=new Map()
for(let char of subs)
{
    subm.set(char,subm.get(char)?subm.get(char)+1:1)

}
let k=subs.length;
let c=0
for(let i=0;i<k;i++)
{
    smap.set(s[i],smap.get(s[i])?smap.get(s[i])+1:1)
}
if(compareMap(smap,subm))
{
    c++
}
let left=0
let right=k
while(right<s.length)
{
    let lval=smap.get(s[left])
    if(lval>1)
    {
   smap.set(s[left],lval-1)
    }
    else{
        smap.delete(s[left])
    }

    smap.set(s[right],smap.get(s[right])?smap.get(s[right])+1:1)

    if(compareMap(smap,subm)==true)
    {
        c++;
    }

left++;
right++;
}
console.log(c)
function compareMap(m1,m2)
{
    //console.log(m1,m2)
    if(m1.size!=m2.size)
    {
        return false
    }
    for(let [key,value] of m2)
    {
        if(m1.has(key)==false)
        {
            return false
        }
        if(value!=m1.get(key))
        {
            return false
        }

    }
    console.log(m1,m2)
    return true
}
