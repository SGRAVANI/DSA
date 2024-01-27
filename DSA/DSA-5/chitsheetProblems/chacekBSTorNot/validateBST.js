// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// Examples:-

// Input: root = [2,1,3]
// Output: true

// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

// Constraints:

// The number of nodes in the tree is in the range [1, 10^4].
// -2^31 <= Node.val <= 2^31 - 1

let root=[5,1,4,null,null,3,6]
function checkBST(root,maxi,mini)
{
    let temp=root
    if(root==null)
    {
        return true
    }
    if(root.val<mini || root.val>maxi)
    {
        return false
    }
    let ans1=checkBST(root.left,mini,root.val)
    let ans2=checkBST(root.right,root.val,maxi)
    return ans1&&ans2;
    // if(root.right && root.right.val<root.val)
    // {
    //     return false
    // }
    // let ans1=checkBST(root.left)
    // let ans2=checkBST(root.right)
    // return ans1 && ans2
}
console.log(checkBST(root,-Infinity,Infinity))
//TC O(n)