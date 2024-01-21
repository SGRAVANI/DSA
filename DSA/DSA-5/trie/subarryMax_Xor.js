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
function findMaxXORSubarray(arr) {
    let root = new TrieNode();
    let maxXOR = 0;
    let xorPrefix = 0;

    for (let i = 0; i < arr.length; i++) {
        xorPrefix ^= arr[i];
        root.insert(xorPrefix);
        maxXOR = Math.max(maxXOR, xorPairWise(root, xorPrefix));
    }

    return maxXOR;
}

let arr = [1, 3, 9];
let result = findMaxXORSubarray(arr);
console.log(result);

// let root=new TrieNode();
// let arr=[1,3,9]
// for(let ele of arr)
// {
//     root.insert(ele)
// }
// let ans=0
// for(let ele of arr)
// {
//     ans=Math.max(xorPairWise(root,ele),ans)
// }
//console.log(ans)