// Problem Description
// Given an array of integers, we have to find the maximum possible XOR value using any two integers in the array.

// Input format
// First line will have an integer N denoting the size of the array.

// Next line will have N space separated integers.

// Output format
// Maximum xor value

// Constraints
// 1 < = N <=100000

// |A[i]| <= 2^30 - 1

// Sample Input 1
// 3

// 1 3 9

// Sample Output 1
// 10

// Explanation 1
// Xor between 1 and 3 gives 2

// Xor between 3 and 9 gives 10

// Xor between 1 and 9 gives 8

// We pick the maximum of these, which is 10
class TrieNode{
    constructor()
    {
        this.left=null
        this.right=null
    }
    insert(n)
    {
        let temp=this;
        for(let i=31;i>=0;i--)
        {
            let bit=(n>>i)&1;
          //  console.log(bit)
            if(bit==1)
            {
                if(temp.right==null)
                {
                    temp.right=new TrieNode()
                }
                temp=temp.right
            }
            else{
                if(temp.left==null)
                {
                    temp.left=new TrieNode()

                }
                temp=temp.left;
            }
        }
    }

}
function xorPairWise(root,n)
{let temp=root
    let contribution=0;
    for(let i=31;i>=0;i--)
    {
        let bit=(n>>i)&1;
        if(bit==1)
        {
            if(temp.left!=null)
            {
                temp=temp.left;
                contribution+=2**i;
            }
            else{
                temp=temp.right;
            }
        }
        else{
           if(temp.right!=null)
           {
            contribution+=2**i;
            temp=temp.right
           }
           else{
            temp=temp.left
           }
        }
    }
    return contribution;
}
let root=new TrieNode();
let arr=[1,3,9]
for(let ele of arr)
{
    root.insert(ele)
}
let ans=0
for(let ele of arr)
{
    ans=Math.max(xorPairWise(root,ele),ans)
}
console.log(ans)