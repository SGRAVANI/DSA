// Longest Common Subsequence Problem solution using recursion Given two sequences, find the length of longest subsequence present in both of them. A subsequence is a sequence that appears in the same relative order, but not necessarily contiguous. For example, “abc”, “abg”, “bdf”, “aeg”, ‘”acefg”, .. etc are subsequences of “abcdefg”
let x="abcdgh"
let y="abedfhr"
function lcsLength(x,y,n,m)
{
if(n==0 || m==0)
{
    return 0
}
if(x[n]==y[m])
{
    return 1+lcsLength(x,y,n-1,m-1)
}
else{
    return Math.max(lcsLength(x,y,n,m-1),lcsLength(x,y,n-1,m))
}

}
console.log(lcsLength(x,y,x.length,y.length))